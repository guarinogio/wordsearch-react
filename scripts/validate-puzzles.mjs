import { readdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { join } from "node:path";

const dataDir = join(process.cwd(), "src/data");
const files = readdirSync(dataDir).filter((file) =>
  /^daily-puzzles-\d{4}-\d{2}-\d{2}\.ts$/.test(file)
);

const chars = (text) => Array.from(String(text).normalize("NFC"));

let failed = false;

for (const file of files) {
  const mod = await import(pathToFileURL(join(dataDir, file)).href);
  const data = mod.dailyPuzzles;

  for (const puzzle of data.puzzles) {
    const rows = puzzle.rows ?? puzzle.size;
    const cols = puzzle.cols ?? puzzle.size;

    if (puzzle.grid.length !== rows) {
      console.error(`${file} puzzle ${puzzle.id}: grid rows != rows (${puzzle.grid.length} !== ${rows})`);
      failed = true;
    }

    puzzle.grid.forEach((row, rowIndex) => {
      if (row.length !== cols) {
        console.error(`${file} puzzle ${puzzle.id}: row ${rowIndex} length != cols (${row.length} !== ${cols})`);
        failed = true;
      }

      row.forEach((cell, colIndex) => {
        if (chars(cell).length !== 1) {
          console.error(`${file} puzzle ${puzzle.id}: cell ${rowIndex}:${colIndex} is not one Unicode character: ${cell}`);
          failed = true;
        }
      });
    });

    for (const placement of puzzle.placements) {
      for (const cell of placement.path) {
        if (
          cell.row < 0 ||
          cell.row >= rows ||
          cell.col < 0 ||
          cell.col >= cols
        ) {
          console.error(`${file} puzzle ${puzzle.id}: placement ${placement.value} cell out of bounds: ${cell.row}:${cell.col}`);
          failed = true;
        }
      }

      const placed = placement.path
        .map((cell) => puzzle.grid[cell.row]?.[cell.col])
        .join("")
        .normalize("NFC");

      const expected = placement.value.normalize("NFC");
      const reversed = chars(placed).reverse().join("").normalize("NFC");

      if (placed !== expected && reversed !== expected) {
        console.error(`${file} puzzle ${puzzle.id}: placement mismatch for ${placement.value}, got ${placed}`);
        failed = true;
      }
    }
  }
}

if (failed) process.exit(1);

console.log(`Validated ${files.length} puzzle file(s).`);
