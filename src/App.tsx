import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, Route, Routes, useParams } from "react-router-dom";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { WordSearchGrid } from "./WordSearchGrid";
import { InstallPrompt } from "./InstallPrompt";
import type { DailyPuzzle, DailyPuzzlesData } from "./types";

const puzzleModules = import.meta.glob("./data/daily-puzzles-*.ts");

const availableDates = Object.keys(puzzleModules)
  .map((path) => path.match(/daily-puzzles-(\d{4}-\d{2}-\d{2})\.ts$/)?.[1])
  .filter((date): date is string => Boolean(date))
  .sort((a, b) => b.localeCompare(a));

const getNearestDate = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return availableDates.reduce((nearest, date) => {
    const currentDistance = Math.abs(new Date(date).getTime() - today.getTime());
    const nearestDistance = Math.abs(new Date(nearest).getTime() - today.getTime());
    return currentDistance < nearestDistance ? date : nearest;
  }, availableDates[0]);
};

const loadPuzzleData = async (date: string) => {
  const entry = Object.entries(puzzleModules).find(([path]) =>
    path.endsWith(`daily-puzzles-${date}.ts`)
  );

  if (!entry) return null;

  const mod = (await entry[1]()) as { dailyPuzzles: DailyPuzzlesData };
  return mod.dailyPuzzles;
};

const getProgressKey = (date: string, hash: string, puzzleId: number) =>
  `daily-word-soup:${date}:${hash}:puzzle:${puzzleId}:found`;

const getActivePuzzleKey = (date: string, hash: string) =>
  `daily-word-soup:${date}:${hash}:active-puzzle`;

const getWordsOpenedKey = (date: string, hash: string, puzzleId: number) =>
  `daily-word-soup:${date}:${hash}:puzzle:${puzzleId}:words-opened`;

const getPuzzleAchievementKey = (date: string, hash: string, puzzleId: number) =>
  `daily-word-soup:${date}:${hash}:puzzle:${puzzleId}:blind-complete`;

const getDayCompleteKey = (date: string) =>
  `daily-word-soup:${date}:day-complete`;

const getDayAchievementKey = (date: string) =>
  `daily-word-soup:${date}:day-blind-complete`;

const SETTINGS_KEY = "daily-word-soup:settings";

type ThemeName = "light" | "dark" | "pastel" | "glinda" | "neyo";

type AppSettings = {
  theme: ThemeName;
  vibration: boolean;
  animations: boolean;
};

const defaultSettings: AppSettings = {
  theme: "light",
  vibration: true,
  animations: true,
};

const loadSettings = (): AppSettings => {
  try {
    const saved = localStorage.getItem(SETTINGS_KEY);
    if (!saved) return defaultSettings;

    return {
      ...defaultSettings,
      ...JSON.parse(saved),
    };
  } catch {
    return defaultSettings;
  }
};

const saveSettings = (settings: AppSettings) => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};

const hasProgressForDate = (date: string) =>
  Object.keys(localStorage).some((key) => key.startsWith(`daily-word-soup:${date}:`));

type UpdateReadyEvent = CustomEvent<{ update: () => Promise<void> }>;

type DayStatus = {
  complete: boolean;
  achievement: boolean;
};

function PuzzleBoard({
  puzzle,
  foundValues,
  onFound,
  isComplete,
  isAchievement,
  onWordsOpenRequest,
  vibrationEnabled,
}: {
  puzzle: DailyPuzzle;
  foundValues: Set<string>;
  onFound: (value: string) => void;
  isComplete: boolean;
  isAchievement: boolean;
  onWordsOpenRequest: (openWords: () => void) => void;
  vibrationEnabled: boolean;
}) {
  const [moveEnabled, setMoveEnabled] = useState(false);
  const [clearSignal, setClearSignal] = useState(0);
  const [wordsOpen, setWordsOpen] = useState(false);
  const foundPercent = Math.round((foundValues.size / puzzle.words.length) * 100);

  return (
    <section
      className={[
        "puzzleSection",
        isComplete ? "puzzleComplete" : "",
        isAchievement ? "puzzleAchievement" : "",
      ].join(" ")}
    >
      <div className="puzzleHeader">
        <div>
          <p className="eyebrow">
            {isComplete ? "✓ " : ""}Puzzle {puzzle.id}
            {isAchievement ? " · Achievement" : ""}
          </p>
          <h2>{puzzle.topic}</h2>
        </div>
        <strong>{foundValues.size}/{puzzle.words.length}</strong>
      </div>

      <TransformWrapper
        minScale={0.25}
        maxScale={8}
        initialScale={1}
        centerOnInit
        doubleClick={{ disabled: true }}
        panning={{ disabled: !moveEnabled }}
        pinch={{ disabled: false }}
        wheel={{ disabled: false }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <div className="boardControls">
              <div className="zoomControls">
                <button type="button" onClick={() => zoomOut()}>−</button>
                <button type="button" onClick={() => resetTransform()}>Reset</button>
                <button type="button" onClick={() => zoomIn()}>+</button>
              </div>

              <div className="boardModeControls">
                <button
                  type="button"
                  className="clearSelection"
                  onClick={() => setClearSignal((value) => value + 1)}
                  disabled={moveEnabled}
                >
                  Clear
                </button>

                <button
                  type="button"
                  className={["moveToggle", moveEnabled ? "active" : ""].join(" ")}
                  onClick={() => setMoveEnabled((value) => !value)}
                >
                  {moveEnabled ? "Move ON" : "Move OFF"}
                </button>
              </div>
            </div>

            <p className={["boardHint", moveEnabled ? "active" : ""].join(" ")}>
              {moveEnabled
                ? "Move mode active · drag to pan · pinch to zoom"
                : "Tap letters or drag across a word · diagonals snap automatically"}
            </p>

            <div className="boardCard">
              <TransformComponent wrapperClass="transformWrapper" contentClass="transformContent">
                <WordSearchGrid
                  puzzle={puzzle}
                  foundValues={foundValues}
                  onFound={onFound}
                  selectionDisabled={moveEnabled}
                  clearSignal={clearSignal}
                  vibrationEnabled={vibrationEnabled}
                />
              </TransformComponent>
            </div>
          </>
        )}
      </TransformWrapper>

      <div className="words">
        <button
          type="button"
          className="wordsToggle" disabled={wordsOpen}
          onClick={() => {
            if (wordsOpen) return;
            onWordsOpenRequest(() => setWordsOpen(true));
          }}
          aria-expanded={wordsOpen}
        >
          <span>Words</span>
          <strong>{foundPercent}%</strong>
          <span>{wordsOpen ? "Shown" : "Show"}</span>
        </button>

        {wordsOpen && (
          <div className="wordList">
            {puzzle.words.map((word) => (
              <span
                key={word.value}
                className={["word", foundValues.has(word.value) ? "foundWord" : ""].join(" ")}
              >
                {word.label}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function DailyPage() {
  const { date } = useParams();
  const selectedDate = date ?? getNearestDate();
  const isValidDateRoute = /^\d{4}-\d{2}-\d{2}$/.test(selectedDate);

  const [data, setData] = useState<DailyPuzzlesData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [foundByPuzzle, setFoundByPuzzle] = useState<Record<number, Set<string>>>({});
  const [wordsOpenedByPuzzle, setWordsOpenedByPuzzle] = useState<Record<number, boolean>>({});
  const [achievementByPuzzle, setAchievementByPuzzle] = useState<Record<number, boolean>>({});
  const [dayStatusByDate, setDayStatusByDate] = useState<Record<string, DayStatus>>(() =>
    Object.fromEntries(
      availableDates.map((availableDate) => [
        availableDate,
        {
          complete: localStorage.getItem(getDayCompleteKey(availableDate)) === "true",
          achievement: localStorage.getItem(getDayAchievementKey(availableDate)) === "true",
        },
      ])
    )
  );
  const [activePuzzleId, setActivePuzzleId] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; tone?: "default" | "achievement" } | null>(null);
  const [confirmAction, setConfirmAction] = useState<{
    title: string;
    message: string;
    eyebrow?: string;
    cancelLabel?: string;
    confirmLabel?: string;
    tone?: "default" | "danger" | "achievement";
    onConfirm: () => void;
  } | null>(null);
  const [updateApp, setUpdateApp] = useState<(() => Promise<void>) | null>(null);
  const [settings, setSettings] = useState<AppSettings>(loadSettings);

  useEffect(() => {
    if (!isValidDateRoute) {
      setData(null);
      setNotFound(true);
      return;
    }

    let cancelled = false;

    loadPuzzleData(selectedDate).then((loaded) => {
      if (cancelled) return;

      setData(loaded);
      setNotFound(!loaded);
      setMenuOpen(false);
      setToast(null);

      if (!loaded) {
        setFoundByPuzzle({});
        setWordsOpenedByPuzzle({});
        setAchievementByPuzzle({});
        setActivePuzzleId(null);
        return;
      }

      const restored: Record<number, Set<string>> = {};
      const restoredWordsOpened: Record<number, boolean> = {};
      const restoredAchievements: Record<number, boolean> = {};

      loaded.puzzles.forEach((puzzle) => {
        const key = getProgressKey(selectedDate, loaded.hash, puzzle.id);
        const saved = localStorage.getItem(key);

        restoredWordsOpened[puzzle.id] =
          localStorage.getItem(getWordsOpenedKey(selectedDate, loaded.hash, puzzle.id)) === "true";

        restoredAchievements[puzzle.id] =
          localStorage.getItem(getPuzzleAchievementKey(selectedDate, loaded.hash, puzzle.id)) === "true";

        if (!saved) return;

        try {
          const values = JSON.parse(saved);
          if (Array.isArray(values)) {
            restored[puzzle.id] = new Set(
              values.filter((value) =>
                puzzle.words.some((word) => word.value === value)
              )
            );
          }
        } catch {
          localStorage.removeItem(key);
        }
      });

      const activeKey = getActivePuzzleKey(selectedDate, loaded.hash);
      const savedActivePuzzleId = Number(localStorage.getItem(activeKey));
      const hasSavedActivePuzzle = loaded.puzzles.some((puzzle) => puzzle.id === savedActivePuzzleId);

      setFoundByPuzzle(restored);
      setWordsOpenedByPuzzle(restoredWordsOpened);
      setAchievementByPuzzle(restoredAchievements);
      setActivePuzzleId(hasSavedActivePuzzle ? savedActivePuzzleId : loaded.puzzles[0]?.id ?? null);
    });

    return () => {
      cancelled = true;
    };
  }, [selectedDate, isValidDateRoute]);

  useEffect(() => {
    if (!data) return;

    data.puzzles.forEach((puzzle) => {
      const key = getProgressKey(selectedDate, data.hash, puzzle.id);
      const values = [...(foundByPuzzle[puzzle.id] ?? new Set<string>())];

      if (values.length === 0) {
        localStorage.removeItem(key);
      } else {
        localStorage.setItem(key, JSON.stringify(values));
      }

      const wordsOpenedKey = getWordsOpenedKey(selectedDate, data.hash, puzzle.id);
      if (wordsOpenedByPuzzle[puzzle.id]) {
        localStorage.setItem(wordsOpenedKey, "true");
      } else {
        localStorage.removeItem(wordsOpenedKey);
      }

      const achievementKey = getPuzzleAchievementKey(selectedDate, data.hash, puzzle.id);
      if (achievementByPuzzle[puzzle.id]) {
        localStorage.setItem(achievementKey, "true");
      } else {
        localStorage.removeItem(achievementKey);
      }
    });
  }, [data, foundByPuzzle, wordsOpenedByPuzzle, achievementByPuzzle, selectedDate]);

  useEffect(() => {
    if (!toast) return;

    const timeout = window.setTimeout(() => setToast(null), 1500);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    document.documentElement.dataset.theme = settings.theme;
    document.documentElement.dataset.animations = settings.animations ? "on" : "off";
    saveSettings(settings);
  }, [settings]);

  useEffect(() => {
    if (!data || activePuzzleId === null) return;

    localStorage.setItem(
      getActivePuzzleKey(selectedDate, data.hash),
      String(activePuzzleId)
    );
  }, [activePuzzleId, data, selectedDate]);

  useEffect(() => {
    const onUpdateReady = (event: Event) => {
      setUpdateApp(() => (event as UpdateReadyEvent).detail.update);
    };

    window.addEventListener("daily-word-soup:update-ready", onUpdateReady);
    return () => window.removeEventListener("daily-word-soup:update-ready", onUpdateReady);
  }, []);

  useEffect(() => {
    if (!menuOpen && !confirmAction) return;

    window.history.pushState({ overlay: true }, "");

    const onPopState = () => {
      setMenuOpen(false);
      setConfirmAction(null);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [menuOpen, confirmAction]);

  const totals = useMemo(() => {
    if (!data) return { found: 0, total: 0 };

    return {
      total: data.puzzles.reduce((sum, puzzle) => sum + puzzle.words.length, 0),
      found: data.puzzles.reduce(
        (sum, puzzle) => sum + (foundByPuzzle[puzzle.id]?.size ?? 0),
        0
      ),
    };
  }, [data, foundByPuzzle]);

  const activePuzzle = data?.puzzles.find((puzzle) => puzzle.id === activePuzzleId) ?? data?.puzzles[0];

  const allPuzzlesComplete =
    Boolean(data) &&
    data.puzzles.every((puzzle) => (foundByPuzzle[puzzle.id]?.size ?? 0) === puzzle.words.length);

  const allPuzzlesAchievement =
    Boolean(data) &&
    data.puzzles.length > 0 &&
    data.puzzles.every((puzzle) => achievementByPuzzle[puzzle.id]);

  const resetProgress = () => {
    if (!data) return;

    setConfirmAction({
      title: "Reset progress?",
      message: "This will clear all progress, achievements and word-list state for this day.",
      confirmLabel: "Reset",
      tone: "danger",
      onConfirm: () => {
        data.puzzles.forEach((puzzle) => {
          localStorage.removeItem(getProgressKey(selectedDate, data.hash, puzzle.id));
          localStorage.removeItem(getWordsOpenedKey(selectedDate, data.hash, puzzle.id));
          localStorage.removeItem(getPuzzleAchievementKey(selectedDate, data.hash, puzzle.id));
        });

        localStorage.removeItem(getDayCompleteKey(selectedDate));
        localStorage.removeItem(getDayAchievementKey(selectedDate));

        setFoundByPuzzle({});
        setWordsOpenedByPuzzle({});
        setAchievementByPuzzle({});
        setDayStatusByDate((prev) => ({
          ...prev,
          [selectedDate]: { complete: false, achievement: false },
        }));
        setToast({ message: "Progress reset" });
      },
    });
  };

  useEffect(() => {
    if (!data) return;

    if (allPuzzlesComplete) {
      localStorage.setItem(getDayCompleteKey(selectedDate), "true");
    } else {
      localStorage.removeItem(getDayCompleteKey(selectedDate));
    }

    if (allPuzzlesAchievement) {
      localStorage.setItem(getDayAchievementKey(selectedDate), "true");
    } else {
      localStorage.removeItem(getDayAchievementKey(selectedDate));
    }

    setDayStatusByDate((prev) => ({
      ...prev,
      [selectedDate]: {
        complete: allPuzzlesComplete,
        achievement: allPuzzlesAchievement,
      },
    }));
  }, [allPuzzlesComplete, allPuzzlesAchievement, data, selectedDate]);

  if (notFound) {
    return (
      <main className="app">
        <h1>Puzzle not found</h1>
        <p className="hint">No puzzle data found for {selectedDate}.</p>
      </main>
    );
  }

  if (!data) {
    return (
      <main className="app">
        <h1>Loading…</h1>
      </main>
    );
  }

  return (
    <main className="app">
      <InstallPrompt />

      <header className="header">
        <div>
          <p className="eyebrow">{data.date}</p>
          <h1>{data.topic}</h1>
        </div>

        <div className="headerActions">
          <button
            type="button"
            className="hamburger"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Open dates menu"
          >
            ☰
          </button>

          <div className="progress">{totals.found}/{totals.total}</div>
        </div>
      </header>

      {menuOpen && (
        <div className="sidebarOverlay" onClick={() => setMenuOpen(false)}>
          <aside className="sidebar" onClick={(event) => event.stopPropagation()}>
            <div className="sidebarHeader">
              <strong>Dates</strong>
              <button
                type="button"
                className="sidebarClose"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                ×
              </button>
            </div>
            <nav className="dateMenu">
              {availableDates.map((availableDate) => {
                const status = dayStatusByDate[availableDate];

                return (
                  <Link
                    key={availableDate}
                    to={`/${availableDate}`}
                    onClick={() => setMenuOpen(false)}
                    className={[
                      "dateMenuItem",
                      availableDate === selectedDate ? "active" : "",
                      status?.complete ? "completeDate" : "",
                      status?.achievement ? "achievementDate" : "",
                    ].join(" ")}
                  >
                    <span>{availableDate}</span>
                    {status?.complete && <strong>{status.achievement ? "🏆 ✓" : "✓"}</strong>}
                  </Link>
                );
              })}
            </nav>

            <div className="sidebarFooter">
              <Link to="/history" onClick={() => setMenuOpen(false)}>History</Link>
              <Link to="/options" onClick={() => setMenuOpen(false)}>Options</Link>
            </div>
          </aside>
        </div>
      )}

      <section className="toolbar" aria-label="Controles">
        <span className="hint">Tap or drag to select · enable Move for pan/zoom</span>

        <button type="button" className="resetProgress" onClick={resetProgress}>
          Reset progress
        </button>
      </section>

      <nav className="puzzleTabs" aria-label="Puzzles">
        {data.puzzles.map((puzzle) => {
          const found = foundByPuzzle[puzzle.id]?.size ?? 0;
          const total = puzzle.words.length;

          return (
            <button
              key={puzzle.id}
              type="button"
              className={[
                "puzzleTab",
                puzzle.id === activePuzzle?.id ? "active" : "",
                found === total ? "completeTab" : "",
                achievementByPuzzle[puzzle.id] ? "achievementTab" : "",
              ].join(" ")}
              onClick={() => setActivePuzzleId(puzzle.id)}
            >
              <span>{achievementByPuzzle[puzzle.id] ? "🏆 " : found === total ? "✓ " : ""}Puzzle {puzzle.id}</span>
              <strong>{found}/{total}</strong>
            </button>
          );
        })}
      </nav>

      {activePuzzle && (
        <PuzzleBoard
          key={activePuzzle.id}
          puzzle={activePuzzle}
          foundValues={foundByPuzzle[activePuzzle.id] ?? new Set<string>()}
          onFound={(value) => {
            const wordLabel = activePuzzle.words.find((word) => word.value === value)?.label ?? value;
            const nextFound = new Set(foundByPuzzle[activePuzzle.id] ?? []);
            nextFound.add(value);

            setFoundByPuzzle((prev) => ({
              ...prev,
              [activePuzzle.id]: nextFound,
            }));

            if (nextFound.size === activePuzzle.words.length) {
              const blindComplete = !wordsOpenedByPuzzle[activePuzzle.id];

              if (blindComplete) {
                setAchievementByPuzzle((prev) => ({
                  ...prev,
                  [activePuzzle.id]: true,
                }));
              }

              setToast({
                message: blindComplete
                  ? `Achievement unlocked: Puzzle ${activePuzzle.id} 🏆`
                  : `Puzzle ${activePuzzle.id} complete ✓`,
                tone: blindComplete ? "achievement" : "default",
              });

              const currentIndex = data.puzzles.findIndex((puzzle) => puzzle.id === activePuzzle.id);
              const nextPuzzle = data.puzzles[currentIndex + 1];

              if (nextPuzzle) {
                window.setTimeout(() => setActivePuzzleId(nextPuzzle.id), 700);
              }
            } else {
              setToast({ message: `Found: ${wordLabel}` });
            }
          }}
          isComplete={(foundByPuzzle[activePuzzle.id]?.size ?? 0) === activePuzzle.words.length}
          isAchievement={Boolean(achievementByPuzzle[activePuzzle.id])}
          vibrationEnabled={settings.vibration}
          onWordsOpenRequest={(openWords) => {
            if (achievementByPuzzle[activePuzzle.id]) {
              openWords();
              return;
            }

            setConfirmAction({
              eyebrow: "Achievement warning",
              title: "Reveal word list?",
              message: "Opening the word list disables the no-word-list achievement for this puzzle.",
              cancelLabel: "Keep hidden",
              confirmLabel: "Reveal words",
              tone: "achievement",
              onConfirm: () => {
                setWordsOpenedByPuzzle((prev) => ({
                  ...prev,
                  [activePuzzle.id]: true,
                }));
                openWords();
              },
            });
          }}
        />
      )}

      {toast && (
        <div className={["toast", toast.tone === "achievement" ? "achievementToast" : ""].join(" ")}>
          {toast.message}
        </div>
      )}
      {updateApp && (
        <div className="updatePrompt">
          <span>New version available</span>
          <button type="button" onClick={() => updateApp()}>
            Update
          </button>
        </div>
      )}

      {totals.total > 0 && totals.found === totals.total && (
        <div className={["complete", allPuzzlesAchievement ? "achievementComplete" : ""].join(" ")}>
          {allPuzzlesAchievement
            ? "Perfect day completed 🏆"
            : "You completed all puzzles 🎉"}
        </div>
      )}
      {confirmAction && (
        <div className="modalOverlay" role="presentation" onClick={() => setConfirmAction(null)}>
          <div
            className={["confirmModal", confirmAction.tone ? `modal-${confirmAction.tone}` : ""].join(" ")}
            role="dialog"
            aria-modal="true"
            aria-labelledby="confirm-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="eyebrow">{confirmAction.eyebrow ?? "Confirm action"}</p>
            <h2 id="confirm-modal-title">{confirmAction.title}</h2>
            <p>{confirmAction.message}</p>

            <div className="modalActions">
              <button
                type="button"
                className="modalSecondary"
                onClick={() => setConfirmAction(null)}
              >
                {confirmAction.cancelLabel ?? "Cancel"}
              </button>

              <button
                type="button"
                className={[
                  "modalPrimary",
                  confirmAction.tone === "danger" ? "modalDangerButton" : "",
                  confirmAction.tone === "achievement" ? "modalAchievementButton" : "",
                ].join(" ")}
                onClick={() => {
                  confirmAction.onConfirm();
                  setConfirmAction(null);
                }}
              >
                {confirmAction.confirmLabel ?? "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="appFooter">
        v{__APP_VERSION__} · hash {data.hash.slice(0, 8)}
      </footer>
    </main>
  );
}


function HistoryPage() {
  const [rows, setRows] = useState<
    Array<{
      date: string;
      found: number;
      total: number;
      percent: number;
      status: string;
    }>
  >([]);

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      availableDates.map(async (date) => {
        const loaded = await loadPuzzleData(date);
        const complete = localStorage.getItem(getDayCompleteKey(date)) === "true";
        const achievement = localStorage.getItem(getDayAchievementKey(date)) === "true";

        if (!loaded) {
          return {
            date,
            found: 0,
            total: 0,
            percent: 0,
            status: "Unavailable",
          };
        }

        const total = loaded.puzzles.reduce((sum, puzzle) => sum + puzzle.words.length, 0);
        const found = loaded.puzzles.reduce((sum, puzzle) => {
          const saved = localStorage.getItem(getProgressKey(date, loaded.hash, puzzle.id));

          if (!saved) return sum;

          try {
            const values = JSON.parse(saved);
            return sum + (Array.isArray(values) ? values.length : 0);
          } catch {
            return sum;
          }
        }, 0);

        const percent = total > 0 ? Math.round((found / total) * 100) : 0;

        return {
          date,
          found,
          total,
          percent,
          status: achievement ? "🏆 Perfect" : complete ? "✓ Complete" : found > 0 ? "Started" : "New",
        };
      })
    ).then((nextRows) => {
      if (!cancelled) setRows(nextRows);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="app">
      <header className="header">
        <div>
          <p className="eyebrow">Progress</p>
          <h1>History</h1>
        </div>
        <Link className="pageLink" to="/">Game</Link>
      </header>

      <div className="historyTable">
        {rows.map((row) => (
          <Link key={row.date} to={`/${row.date}`} className="historyRow">
            <span>{row.date}</span>
            <strong>{row.found}/{row.total} · {row.percent}% · {row.status}</strong>
          </Link>
        ))}
      </div>
    </main>
  );
}

function OptionsPage() {
  const [settings, setSettings] = useState<AppSettings>(loadSettings);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string } | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = settings.theme;
    document.documentElement.dataset.animations = settings.animations ? "on" : "off";
    saveSettings(settings);
  }, [settings]);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(null), 1500);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const updateSettings = (next: Partial<AppSettings>) => {
    setSettings((current) => ({ ...current, ...next }));
  };

  const resetWholeApp = async () => {
    localStorage.clear();

    if ("caches" in window) {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
    }

    if ("serviceWorker" in navigator) {
      const registrations = await navigator.serviceWorker.getRegistrations();
      await Promise.all(registrations.map((registration) => registration.unregister()));
    }

    window.location.reload();
  };

  return (
    <main className="app">
      <header className="header">
        <div>
          <p className="eyebrow">Preferences</p>
          <h1>Options</h1>
        </div>
        <Link className="pageLink" to="/">Game</Link>
      </header>

      <section className="settingsPage">
        <div className="settingGroup">
          <strong>Theme</strong>
          <div className="themeOptions">
            {(["light", "dark", "pastel", "glinda", "neyo"] as ThemeName[]).map((theme) => (
              <button
                key={theme}
                type="button"
                className={settings.theme === theme ? "active" : ""}
                onClick={() => updateSettings({ theme })}
              >
                {{
                  light: "Light",
                  dark: "Dark",
                  pastel: "Pastel",
                  glinda: "Glinda",
                  neyo: "Ne-yo",
                }[theme]}{settings.theme === theme ? " ✓" : ""}
              </button>
            ))}
          </div>
        </div>

        <label className="settingSwitch">
          <span>
            <strong>Vibration</strong>
            <small>Haptic feedback when finding words</small>
          </span>
          <input
            type="checkbox"
            checked={settings.vibration}
            onChange={(event) => updateSettings({ vibration: event.target.checked })}
          />
        </label>

        <label className="settingSwitch">
          <span>
            <strong>Animations</strong>
            <small>Disable for older phones</small>
          </span>
          <input
            type="checkbox"
            checked={settings.animations}
            onChange={(event) => updateSettings({ animations: event.target.checked })}
          />
        </label>

        <button type="button" className="dangerButton" onClick={() => setConfirmOpen(true)}>
          Reset whole app
        </button>
      </section>

      {confirmOpen && (
        <div className="modalOverlay" role="presentation" onClick={() => setConfirmOpen(false)}>
          <div
            className="confirmModal modal-danger"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reset-app-title"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="eyebrow">Danger zone</p>
            <h2 id="reset-app-title">Reset whole app?</h2>
            <p>This deletes all progress, achievements, options and local app data. This cannot be undone.</p>

            <div className="modalActions">
              <button type="button" className="modalSecondary" onClick={() => setConfirmOpen(false)}>
                Cancel
              </button>
              <button
                type="button"
                className="modalPrimary modalDangerButton"
                onClick={() => {
                  void resetWholeApp();
                  setConfirmOpen(false);
                }}
              >
                Reset app
              </button>
            </div>
          </div>
        </div>
      )}

      {toast && <div className="toast">{toast.message}</div>}
    </main>
  );
}


export default function App() {
  const nearestDate = getNearestDate();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${nearestDate}`} replace />} />
      <Route path="/history" element={<HistoryPage />} />
      <Route path="/options" element={<OptionsPage />} />
      <Route path="/:date" element={<DailyPage />} />
    </Routes>
  );
}
