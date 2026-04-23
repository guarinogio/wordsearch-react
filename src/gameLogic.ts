import type { Cell, Placement } from "./types";

export const cellKey = (cell: Cell) => `${cell.row}:${cell.col}`;

export const sameCell = (a: Cell, b: Cell) => a.row === b.row && a.col === b.col;

export const samePath = (a: Cell[], b: Cell[]) =>
  a.length === b.length && a.every((cell, i) => sameCell(cell, b[i]));

export const reversePath = (path: Cell[]) => [...path].reverse();

export const getSelectionPath = (start: Cell, end: Cell): Cell[] => {
  const rowDiff = end.row - start.row;
  const colDiff = end.col - start.col;
  const rowStep = Math.sign(rowDiff);
  const colStep = Math.sign(colDiff);
  const isHorizontal = rowDiff === 0;
  const isVertical = colDiff === 0;
  const isDiagonal = Math.abs(rowDiff) === Math.abs(colDiff);

  if (!isHorizontal && !isVertical && !isDiagonal) return [];

  const length = Math.max(Math.abs(rowDiff), Math.abs(colDiff)) + 1;
  return Array.from({ length }, (_, i) => ({
    row: start.row + rowStep * i,
    col: start.col + colStep * i,
  }));
};

export const findPlacementByPath = (path: Cell[], placements: Placement[]) => {
  if (path.length === 0) return undefined;
  return placements.find((placement) =>
    samePath(path, placement.path) || samePath(path, reversePath(placement.path))
  );
};

export const getCellFromPoint = (x: number, y: number): Cell | null => {
  const element = document.elementFromPoint(x, y);
  const cell = element?.closest<HTMLElement>("[data-cell='true']");
  if (!cell) return null;
  const row = Number(cell.dataset.row);
  const col = Number(cell.dataset.col);
  if (Number.isNaN(row) || Number.isNaN(col)) return null;
  return { row, col };
};
