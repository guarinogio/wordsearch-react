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

function PuzzleBoard({
  puzzle,
  foundValues,
  onFound,
}: {
  puzzle: DailyPuzzle;
  foundValues: Set<string>;
  onFound: (value: string) => void;
}) {
  const [moveEnabled, setMoveEnabled] = useState(false);
  const foundPercent = Math.round((foundValues.size / puzzle.words.length) * 100);

  return (
    <section className="puzzleSection">
      <div className="puzzleHeader">
        <div>
          <p className="eyebrow">Puzzle {puzzle.id}</p>
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

              <button
                type="button"
                className={["moveToggle", moveEnabled ? "active" : ""].join(" ")}
                onClick={() => setMoveEnabled((value) => !value)}
              >
                {moveEnabled ? "Move ON" : "Move OFF"}
              </button>
            </div>

            <div className="boardCard">
              <TransformComponent wrapperClass="transformWrapper" contentClass="transformContent">
                <WordSearchGrid puzzle={puzzle} foundValues={foundValues} onFound={onFound} />
              </TransformComponent>
            </div>
          </>
        )}
      </TransformWrapper>

      <div className="words">
        <div className="wordsHeader">
          <h2>Words</h2>
          <span>{foundPercent}%</span>
        </div>

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
      </div>
    </section>
  );
}

function DailyPage() {
  const { date } = useParams();
  const selectedDate = date ?? getNearestDate();

  const [data, setData] = useState<DailyPuzzlesData | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [foundByPuzzle, setFoundByPuzzle] = useState<Record<number, Set<string>>>({});
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    loadPuzzleData(selectedDate).then((loaded) => {
      if (cancelled) return;
      setData(loaded);
      setNotFound(!loaded);
      setFoundByPuzzle({});
      setMenuOpen(false);
    });

    return () => {
      cancelled = true;
    };
  }, [selectedDate]);

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
              {availableDates.map((availableDate) => (
                <Link
                  key={availableDate}
                  to={`/${availableDate}`}
                  onClick={() => setMenuOpen(false)}
                  className={["dateMenuItem", availableDate === selectedDate ? "active" : ""].join(" ")}
                >
                  {availableDate}
                </Link>
              ))}
            </nav>
          </aside>
        </div>
      )}

      <section className="toolbar" aria-label="Controles">
        <span className="hint">
          Tap letters to select · enable Move to pan · pinch to zoom
        </span>
      </section>

      {data.puzzles.map((puzzle) => {
        const foundValues = foundByPuzzle[puzzle.id] ?? new Set<string>();

        return (
          <PuzzleBoard
            key={puzzle.id}
            puzzle={puzzle}
            foundValues={foundValues}
            onFound={(value) => {
              setFoundByPuzzle((prev) => ({
                ...prev,
                [puzzle.id]: new Set(prev[puzzle.id] ?? []).add(value),
              }));
            }}
          />
        );
      })}

      {totals.total > 0 && totals.found === totals.total && (
        <div className="complete">You completed all puzzles 🎉</div>
      )}
    </main>
  );
}

export default function App() {
  const nearestDate = getNearestDate();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${nearestDate}`} replace />} />
      <Route path="/:date" element={<DailyPage />} />
    </Routes>
  );
}
