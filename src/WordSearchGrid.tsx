import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import type { Cell, DailyPuzzle } from "./types";
import { cellKey, findPlacementByPath, getCellFromPoint, getSelectionPath, sameCell } from "./gameLogic";

type Props = {
  puzzle: DailyPuzzle;
  foundValues: Set<string>;
  onFound: (value: string) => void;
  selectionDisabled?: boolean;
  clearSignal?: number;
  vibrationEnabled?: boolean;
};

const getViewportWidth = () =>
  typeof window === "undefined" ? 390 : window.innerWidth;

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

const getSnappedPath = (start: Cell, target: Cell, size: number) => {
  const rowDiff = target.row - start.row;
  const colDiff = target.col - start.col;

  if (rowDiff === 0 && colDiff === 0) return [start];

  const absRow = Math.abs(rowDiff);
  const absCol = Math.abs(colDiff);

  let rowStep = Math.sign(rowDiff);
  let colStep = Math.sign(colDiff);
  let length = Math.max(absRow, absCol);

  if (absRow <= absCol * 0.45) {
    rowStep = 0;
    length = absCol;
  } else if (absCol <= absRow * 0.45) {
    colStep = 0;
    length = absRow;
  }

  const end = {
    row: clamp(start.row + rowStep * length, 0, size - 1),
    col: clamp(start.col + colStep * length, 0, size - 1),
  };

  return getSelectionPath(start, end);
};

const isNextValidCell = (path: Cell[], cell: Cell) => {
  if (path.length === 0) return true;

  const candidate = [...path, cell];
  const expectedPath = getSelectionPath(candidate[0], cell);

  return (
    expectedPath.length === candidate.length &&
    expectedPath.every((expected, index) => sameCell(expected, candidate[index]))
  );
};

export function WordSearchGrid({
  puzzle,
  foundValues,
  onFound,
  selectionDisabled = false,
  clearSignal = 0,
  vibrationEnabled = true,
}: Props) {
  const [manualPath, setManualPath] = useState<Cell[]>([]);
  const [dragStart, setDragStart] = useState<Cell | null>(null);
  const [viewportWidth, setViewportWidth] = useState(getViewportWidth);
  const [pressedCellKey, setPressedCellKey] = useState<string | null>(null);
  const didDragRef = useRef(false);

  useEffect(() => {
    const update = () => setViewportWidth(getViewportWidth());

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  useEffect(() => {
    setManualPath([]);
    setDragStart(null);
    didDragRef.current = false;
  }, [clearSignal]);

  const selectedCells = useMemo(() => new Set(manualPath.map(cellKey)), [manualPath]);

  const foundCells = useMemo(() => {
    const keys = new Set<string>();

    puzzle.placements
      .filter((placement) => foundValues.has(placement.value))
      .forEach((placement) => placement.path.forEach((cell) => keys.add(cellKey(cell))));

    return keys;
  }, [puzzle.placements, foundValues]);

  const validatePath = (path: Cell[]) => {
    const placement = findPlacementByPath(path, puzzle.placements);

    if (placement && !foundValues.has(placement.value)) {
      onFound(placement.value);
      if (vibrationEnabled && "vibrate" in navigator) navigator.vibrate(35);
      return true;
    }

    return false;
  };

  const selectCellByTap = (cell: Cell) => {
    setManualPath((prev) => {
      const existingIndex = prev.findIndex((selected) => sameCell(selected, cell));

      if (existingIndex >= 0) {
        return prev.slice(0, existingIndex + 1);
      }

      if (!isNextValidCell(prev, cell)) {
        return [cell];
      }

      const nextPath = [...prev, cell];

      if (validatePath(nextPath)) {
        return [];
      }

      return nextPath;
    });
  };

  const showPressedCell = (key: string) => {
    setPressedCellKey(key);

    window.setTimeout(() => {
      setPressedCellKey((current) => (current === key ? null : current));
    }, 220);
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (selectionDisabled) return;

    const cell = getCellFromPoint(event.clientX, event.clientY);
    if (!cell) return;

    event.preventDefault();
    event.currentTarget.setPointerCapture(event.pointerId);

    didDragRef.current = false;
    setDragStart(cell);
    showPressedCell(cellKey(cell));
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (selectionDisabled || !dragStart) return;

    const cell = getCellFromPoint(event.clientX, event.clientY);
    if (!cell) return;

    const nextPath = getSnappedPath(dragStart, cell, puzzle.size);

    if (nextPath.length < 2) return;

    event.preventDefault();
    didDragRef.current = true;
    setManualPath(nextPath);
    showPressedCell(cellKey(cell));
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (selectionDisabled || !dragStart) return;

    event.preventDefault();

    const endCell = getCellFromPoint(event.clientX, event.clientY);
    const wasDrag = didDragRef.current;

    if (wasDrag) {
      setManualPath((currentPath) => {
        validatePath(currentPath);
        return [];
      });
    } else if (endCell) {
      selectCellByTap(endCell);
    }

    didDragRef.current = false;
    setDragStart(null);
  };

  const handlePointerCancel = () => {
    didDragRef.current = false;
    setManualPath([]);
    setDragStart(null);
  };

  const availableWidth = Math.min(viewportWidth, 960) - 52;
  const gap = puzzle.size >= 50 ? 1 : puzzle.size >= 25 ? 2 : 3;
  const padding = puzzle.size >= 50 ? 5 : puzzle.size >= 25 ? 7 : 9;
  const rawCellSize = Math.floor(
    (availableWidth - padding * 2 - gap * (puzzle.size - 1)) / puzzle.size
  );
  const cellSize = Math.max(6, Math.min(34, rawCellSize));

  const gridStyle = {
    gridTemplateColumns: `repeat(${puzzle.size}, var(--cell-size))`,
    "--cell-size": `${cellSize}px`,
    "--grid-gap": `${gap}px`,
    "--grid-padding": `${padding}px`,
  } as CSSProperties;

  return (
    <div className="wordSearchGrid">
      <div
        className="gridShell"
        style={gridStyle}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerCancel}
      >
        {puzzle.grid.map((row, rowIndex) =>
          row.map((letter, colIndex) => {
            const key = `${rowIndex}:${colIndex}`;
            const isSelected = selectedCells.has(key);
            const isFound = foundCells.has(key);
            const isPressed = pressedCellKey === key;

            return (
              <button
                key={key}
                type="button"
                data-cell="true"
                data-row={rowIndex}
                data-col={colIndex}
                className={[
                  "cell",
                  isSelected ? "selected" : "",
                  isFound ? "found" : "",
                  isPressed ? "pressed" : "",
                ].join(" ")}
              >
                <span className="cellPop" aria-hidden="true">{letter}</span>
                {letter}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
