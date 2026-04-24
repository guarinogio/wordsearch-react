import { useMemo, useState } from "react";
import type { Cell, DailyPuzzle } from "./types";
import { cellKey, findPlacementByPath, getSelectionPath, sameCell } from "./gameLogic";

type Props = {
  puzzle: DailyPuzzle;
  foundValues: Set<string>;
  onFound: (value: string) => void;
};

const isNextValidCell = (path: Cell[], cell: Cell) => {
  if (path.length === 0) return true;
  if (path.some((selected) => sameCell(selected, cell))) return true;

  const candidate = [...path, cell];
  return getSelectionPath(candidate[0], cell).length === candidate.length;
};

export function WordSearchGrid({ puzzle, foundValues, onFound }: Props) {
  const [manualPath, setManualPath] = useState<Cell[]>([]);

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
        return [];
      }

      return nextPath;
    });
  };

  return (
    <div className="wordSearchGrid">
      <div className="manualActions">
        <button
          type="button"
          onClick={() => setManualPath([])}
          disabled={manualPath.length === 0}
        >
          Limpiar selección
        </button>
      </div>

      <div
        className="gridShell"
        style={{ gridTemplateColumns: `repeat(${puzzle.size}, var(--cell-size))` }}
      >
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
