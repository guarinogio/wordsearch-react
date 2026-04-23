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

Reemplaza el contenido de `src/puzzles.ts` por tu `dailyPuzzles` completo.

El componente espera esta forma:

```ts
const puzzle = dailyPuzzles.puzzles[0];
```

Puedes cambiar esa selección en `src/App.tsx` si quieres elegir entre varios puzzles diarios.

## Nota

No se incluye `node_modules` en el zip. Instala dependencias con `npm install`.
