# Word Search React

Proyecto React + TypeScript + Vite para jugar sopas de letras en web mobile.

Incluye:

- Motor propio de selección de palabras usando `placements.path`.
- Soporte móvil con Pointer Events.
- Pinch zoom, zoom con botones y pan usando `react-zoom-pan-pinch`.
- Modo `Seleccionar` y modo `Mover` para evitar conflicto entre arrastrar letras y mover el tablero.
- Estructura compatible con tus tipos `DailyPuzzle`, `Placement`, `Cell`, etc.

## Instalar

```bash
npm install
```

## Ejecutar

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Dónde pegar tus puzzles

Agrega puzzles diarios en `src/data/daily-puzzles-YYYY-MM-DD.ts` exportando `dailyPuzzles`.

El componente espera esta forma:

```ts
const puzzle = dailyPuzzles.puzzles[0];
```

La app carga automáticamente los archivos diarios desde `src/data` usando `import.meta.glob`.

## Nota

No se incluye `node_modules` en el zip. Instala dependencias con `npm install`.
