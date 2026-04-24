import { useMemo, useState } from "react";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import dailyPuzzles from "./puzzles";
import { WordSearchGrid } from "./WordSearchGrid";
import "./styles.css";

export default function App() {
  const puzzle = dailyPuzzles.puzzles[0];
  const [foundValues, setFoundValues] = useState<Set<string>>(new Set());

  const completed = foundValues.size === puzzle.words.length;
  const progress = useMemo(() => Math.round((foundValues.size / puzzle.words.length) * 100), [foundValues.size, puzzle.words.length]);

  return (
    <main className="app">
      <header className="header">
        <div>
          <p className="eyebrow">{dailyPuzzles.date}</p>
          <h1>{puzzle.topic}</h1>
        </div>
        <div className="progress">{foundValues.size}/{puzzle.words.length}</div>
      </header>

      <section className="toolbar" aria-label="Controles">
        <span className="hint">Toca letras para seleccionar · arrastra para mover · pinch para zoom</span>
      </section>

      <TransformWrapper
        minScale={0.55}
        maxScale={3.5}
        initialScale={1}
        centerOnInit
        doubleClick={{ disabled: true }}
        panning={{ disabled: false }}
        pinch={{ disabled: false }}
        wheel={{ step: 0.12 }}
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <section className="boardCard">
            <div className="zoomControls">
              <button onClick={() => zoomOut()}>−</button>
              <button onClick={() => resetTransform()}>Reset</button>
              <button onClick={() => zoomIn()}>+</button>
            </div>
            <TransformComponent
              wrapperClass="transformWrapper"
              contentClass="transformContent"
            >
              <WordSearchGrid
                puzzle={puzzle}
                foundValues={foundValues}
                onFound={(value) => setFoundValues((prev) => new Set(prev).add(value))}
              />
            </TransformComponent>
          </section>
        )}
      </TransformWrapper>

      <section className="words">
        <div className="wordsHeader">
          <h2>Palabras</h2>
          <span>{progress}%</span>
        </div>
        <div className="wordList">
          {puzzle.words.map((word) => (
            <span key={word.value} className={foundValues.has(word.value) ? "word foundWord" : "word"}>
              {word.label}
            </span>
          ))}
        </div>
      </section>

      {completed && <div className="complete">Puzzle completado 🎉</div>}
    </main>
  );
}
