import type { DailyPuzzlesData } from "./types";

export const dailyPuzzles: DailyPuzzlesData = {
  id: "2026-04-05",
  date: "2026-04-05",
  topic: "Coffee Shop",
  hash: "demo",
  puzzles: [
    {
      id: 1,
      size: 14,
      topic: "Coffee Shop",
      words: [
        { label: "Coffee", value: "COFFEE" },
        { label: "Espresso", value: "ESPRESSO" },
        { label: "Latte", value: "LATTE" },
        { label: "Cappuccino", value: "CAPPUCCINO" },
        { label: "Mocha", value: "MOCHA" },
        { label: "Americano", value: "AMERICANO" },
        { label: "Macchiato", value: "MACCHIATO" },
        { label: "Flat White", value: "FLATWHITE" },
        { label: "Cold Brew", value: "COLDBREW" },
        { label: "Tea", value: "TEA" },
      ],
      grid: [
        ["G","T","L","J","C","O","L","D","B","R","E","W","A","U"],
        ["D","M","V","D","H","C","Z","V","Y","T","M","P","Y","G"],
        ["Y","E","Q","X","K","N","D","X","B","A","T","V","Q","I"],
        ["Z","U","X","Y","P","P","W","U","C","B","W","X","S","D"],
        ["E","J","C","A","P","P","U","C","C","I","N","O","F","E"],
        ["C","S","X","E","T","I","H","W","T","A","L","F","O","E"],
        ["C","Z","P","U","V","I","W","Q","A","N","Z","N","W","F"],
        ["Q","V","X","R","A","X","E","M","B","Y","A","Q","N","F"],
        ["T","F","M","T","E","D","W","Y","K","C","F","P","T","O"],
        ["X","M","O","O","U","S","K","Y","I","W","L","T","J","C"],
        ["A","T","U","C","C","X","S","R","H","A","D","S","G","E"],
        ["G","N","I","W","U","H","E","O","T","P","T","Y","P","D"],
        ["Q","T","N","Q","B","M","A","T","M","M","E","W","J","Y"],
        ["X","X","Q","T","A","X","E","J","Q","M","A","G","Y","Z"]
      ],
      placements: [
        { label:"Americano", value:"AMERICANO", word:"AMERICANO", clean:"AMERICANO", start:{row:13,col:4}, end:{row:5,col:12}, direction:"NE", path:[{row:13,col:4},{row:12,col:5},{row:11,col:6},{row:10,col:7},{row:9,col:8},{row:8,col:9},{row:7,col:10},{row:6,col:11},{row:5,col:12}]},
        { label:"Cappuccino", value:"CAPPUCCINO", word:"CAPPUCCINO", clean:"CAPPUCCINO", start:{row:4,col:2}, end:{row:4,col:11}, direction:"E", path:[{row:4,col:2},{row:4,col:3},{row:4,col:4},{row:4,col:5},{row:4,col:6},{row:4,col:7},{row:4,col:8},{row:4,col:9},{row:4,col:10},{row:4,col:11}]},
        { label:"Coffee", value:"COFFEE", word:"COFFEE", clean:"COFFEE", start:{row:9,col:13}, end:{row:4,col:13}, direction:"N", path:[{row:9,col:13},{row:8,col:13},{row:7,col:13},{row:6,col:13},{row:5,col:13},{row:4,col:13}]},
        { label:"Cold Brew", value:"COLDBREW", word:"COLDBREW", clean:"COLDBREW", start:{row:0,col:4}, end:{row:0,col:11}, direction:"E", path:[{row:0,col:4},{row:0,col:5},{row:0,col:6},{row:0,col:7},{row:0,col:8},{row:0,col:9},{row:0,col:10},{row:0,col:11}]},
        { label:"Espresso", value:"ESPRESSO", word:"ESPRESSO", clean:"ESPRESSO", start:{row:4,col:0}, end:{row:11,col:7}, direction:"SE", path:[{row:4,col:0},{row:5,col:1},{row:6,col:2},{row:7,col:3},{row:8,col:4},{row:9,col:5},{row:10,col:6},{row:11,col:7}]},
        { label:"Flat White", value:"FLATWHITE", word:"FLATWHITE", clean:"FLATWHITE", start:{row:5,col:11}, end:{row:5,col:3}, direction:"W", path:[{row:5,col:11},{row:5,col:10},{row:5,col:9},{row:5,col:8},{row:5,col:7},{row:5,col:6},{row:5,col:5},{row:5,col:4},{row:5,col:3}]},
        { label:"Latte", value:"LATTE", word:"LATTE", clean:"LATTE", start:{row:9,col:10}, end:{row:13,col:6}, direction:"SW", path:[{row:9,col:10},{row:10,col:9},{row:11,col:8},{row:12,col:7},{row:13,col:6}]},
        { label:"Macchiato", value:"MACCHIATO", word:"MACCHIATO", clean:"MACCHIATO", start:{row:1,col:10}, end:{row:9,col:2}, direction:"SW", path:[{row:1,col:10},{row:2,col:9},{row:3,col:8},{row:4,col:7},{row:5,col:6},{row:6,col:5},{row:7,col:4},{row:8,col:3},{row:9,col:2}]},
        { label:"Mocha", value:"MOCHA", word:"MOCHA", clean:"MOCHA", start:{row:8,col:2}, end:{row:12,col:6}, direction:"SE", path:[{row:8,col:2},{row:9,col:3},{row:10,col:4},{row:11,col:5},{row:12,col:6}]},
        { label:"Tea", value:"TEA", word:"TEA", clean:"TEA", start:{row:11,col:10}, end:{row:13,col:10}, direction:"S", path:[{row:11,col:10},{row:12,col:10},{row:13,col:10}]}
      ]
    }
  ]
} as const;

export default dailyPuzzles;
