import { useMemo, useState } from "react";
import type { Cell, DailyPuzzle } from "./types";
import { cellKey, findPlacementByPath, getCellFromPoint, getSelectionPath } from "./gameLogic";

type Props = {
  puzzle: DailyPuzzle;
  mode: "select" | "move";
  foundValues: Set<string>;
  onFound: (value: string) => void;
};

export function WordSearchGrid({ puzzle, mode, foundValues, onFound }: Props) {
  const [startCell, setStartCell] = useState<Cell | null>(null);
  const [hoverCell, setHoverCell] = useState<Cell | null>(null);

  const currentPath = useMemo(() => {
    if (!startCell || !hoverCell) return [];
    return getSelectionPath(startCell, hoverCell);
  }, [startCell, hoverCell]);

  const selectedCells = useMemo(() => new Set(currentPath.map(cellKey)), [currentPath]);

  const foundCells = useMemo(() => {
    const keys = new Set<string>();
    puzzle.placements
      .filter((placement) => foundValues.has(placement.value))
      .forEach((placement) => placement.path.forEach((cell) => keys.add(cellKey(cell))));
    return keys;
  }, [puzzle.placements, foundValues]);

  const finishSelection = () => {
    if (!startCell || !hoverCell) return;
    const path = getSelectionPath(startCell, hoverCell);
    const placement = findPlacementByPath(path, puzzle.placements);
    if (placement && !foundValues.has(placement.value)) onFound(placement.value);
    setStartCell(null);
    setHoverCell(null);
  };

  const startSelection = (cell: Cell) => {
    if (mode !== "select") return;
    setStartCell(cell);
    setHoverCell(cell);
  };

  return (
    <div
      className="gridShell"
      onPointerMove={(event) => {
        if (mode !== "select" || !startCell) return;
        const nextCell = getCellFromPoint(event.clientX, event.clientY);
        if (nextCell) setHoverCell(nextCell);
      }}
      onPointerUp={finishSelection}
      onPointerCancel={() => {
        setStartCell(null);
        setHoverCell(null);
      }}
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
              onPointerDown={(event) => {
                if (mode !== "select") return;
                event.preventDefault();
                event.currentTarget.setPointerCapture(event.pointerId);
                startSelection({ row: rowIndex, col: colIndex });
              }}
            >
              {letter}
            </button>
          );
        })
      )}
    </div>
  );
}
