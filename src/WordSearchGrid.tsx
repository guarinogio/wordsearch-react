import { useEffect, useMemo, useState, type CSSProperties } from "react";
import type { Cell, DailyPuzzle } from "./types";
import { cellKey, findPlacementByPath, getSelectionPath, sameCell } from "./gameLogic";

type Props = {
  puzzle: DailyPuzzle;
  foundValues: Set<string>;
  onFound: (value: string) => void;
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

const getViewportWidth = () =>
  typeof window === "undefined" ? 390 : window.innerWidth;

export function WordSearchGrid({ puzzle, foundValues, onFound }: Props) {
  const [manualPath, setManualPath] = useState<Cell[]>([]);
  const [viewportWidth, setViewportWidth] = useState(getViewportWidth);

  useEffect(() => {
    const update = () => setViewportWidth(getViewportWidth());
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const selectedCells = useMemo(() => new Set(manualPath.map(cellKey)), [manualPath]);

  const foundCells = useMemo(() => {
    const keys = new Set<string>();
    puzzle.placements
      .filter((placement) => foundValues.has(placement.value))
      .forEach((placement) => placement.path.forEach((cell) => keys.add(cellKey(cell))));
    return keys;
  }, [puzzle.placements, foundValues]);

  const selectCell = (cell: Cell) => {
    setManualPath((prev) => {
      const existingIndex = prev.findIndex((selected) => sameCell(selected, cell));

      if (existingIndex >= 0) {
        return prev.slice(0, existingIndex + 1);
      }

      if (!isNextValidCell(prev, cell)) {
        return [cell];
      }

      const nextPath = [...prev, cell];
      const placement = findPlacementByPath(nextPath, puzzle.placements);

      if (placement && !foundValues.has(placement.value)) {
        onFound(placement.value);
        if ("vibrate" in navigator) navigator.vibrate(35);
        return [];
      }

      return nextPath;
    });
  };

  const availableWidth = Math.min(viewportWidth, 960) - 52;
  const gap = puzzle.size >= 50 ? 1 : puzzle.size >= 25 ? 2 : 3;
  const padding = puzzle.size >= 50 ? 5 : puzzle.size >= 25 ? 7 : 9;
  const rawCellSize = Math.floor((availableWidth - padding * 2 - gap * (puzzle.size - 1)) / puzzle.size);
  const cellSize = Math.max(6, Math.min(34, rawCellSize));

  const gridStyle = {
    gridTemplateColumns: `repeat(${puzzle.size}, var(--cell-size))`,
    "--cell-size": `${cellSize}px`,
    "--grid-gap": `${gap}px`,
    "--grid-padding": `${padding}px`,
  } as CSSProperties;

  return (
    <div className="wordSearchGrid">
      <div className="gridShell" style={gridStyle}>
        {puzzle.grid.map((row, rowIndex) =>
          row.map((letter, colIndex) => {
            const key = `${rowIndex}:${colIndex}`;
            const isSelected = selectedCells.has(key);
            const isFound = foundCells.has(key);

            return (
              <button
                key={key}
                type="button"
                data-cell="true"
                data-row={rowIndex}
                data-col={colIndex}
                className={["cell", isSelected ? "selected" : "", isFound ? "found" : ""].join(" ")}
                onClick={() => selectCell({ row: rowIndex, col: colIndex })}
              >
                {letter}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}
