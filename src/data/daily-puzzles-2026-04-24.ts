export type DailyWord = {
  label: string;
  value: string;
};

export type Cell = {
  row: number;
  col: number;
};

export type Direction = "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW";

export type Placement = {
  label: string;
  value: string;
  word: string;
  clean: string;
  start: Cell;
  end: Cell;
  direction: Direction;
  path: Cell[];
};

export type DailyPuzzle = {
  id: number;
  size: number;
  rows: number;
  cols: number;
  topic: string;
  words: DailyWord[];
  grid: string[][];
  placements: Placement[];
};

export type DailyPuzzlesData = {
  id: string;
  date: string;
  topic: string;
  hash: string;
  puzzles: DailyPuzzle[];
};

export const dailyPuzzles: DailyPuzzlesData = {
  "id": "2026-04-24",
  "date": "2026-04-24",
  "topic": "Manual",
  "hash": "855da81f44e17ab512fd736f6eb82e6b3a8fad0060319e09bf123c4e7b1ec4fc",
  "puzzles": [
    {
      "id": 1,
      "size": 16,
      "rows": 16,
      "cols": 10,
      "topic": "Hamilton Musical",
      "words": [
        {
          "label": "Hamilton",
          "value": "HAMILTON"
        },
        {
          "label": "Burr",
          "value": "BURR"
        },
        {
          "label": "Eliza",
          "value": "ELIZA"
        },
        {
          "label": "Angelica",
          "value": "ANGELICA"
        },
        {
          "label": "Duel",
          "value": "DUEL"
        },
        {
          "label": "Legacy",
          "value": "LEGACY"
        },
        {
          "label": "Cabinet",
          "value": "CABINET"
        },
        {
          "label": "Yorktown",
          "value": "YORKTOWN"
        },
        {
          "label": "Schuyler",
          "value": "SCHUYLER"
        },
        {
          "label": "Treasury",
          "value": "TREASURY"
        },
        {
          "label": "Congress",
          "value": "CONGRESS"
        },
        {
          "label": "Federal",
          "value": "FEDERAL"
        }
      ],
      "grid": [
        [
          "S",
          "S",
          "C",
          "H",
          "U",
          "Y",
          "L",
          "E",
          "R",
          "C"
        ],
        [
          "N",
          "C",
          "N",
          "O",
          "T",
          "L",
          "I",
          "M",
          "A",
          "H"
        ],
        [
          "Y",
          "C",
          "A",
          "G",
          "E",
          "L",
          "A",
          "U",
          "Y",
          "Y"
        ],
        [
          "A",
          "N",
          "G",
          "E",
          "L",
          "I",
          "C",
          "A",
          "J",
          "P"
        ],
        [
          "F",
          "S",
          "G",
          "F",
          "V",
          "Z",
          "H",
          "Z",
          "W",
          "T"
        ],
        [
          "K",
          "C",
          "G",
          "W",
          "J",
          "C",
          "L",
          "J",
          "E",
          "N"
        ],
        [
          "T",
          "A",
          "O",
          "U",
          "F",
          "A",
          "U",
          "N",
          "W",
          "K"
        ],
        [
          "B",
          "U",
          "R",
          "R",
          "R",
          "J",
          "I",
          "O",
          "W",
          "Y"
        ],
        [
          "D",
          "L",
          "C",
          "E",
          "O",
          "B",
          "T",
          "S",
          "P",
          "R"
        ],
        [
          "C",
          "V",
          "D",
          "M",
          "A",
          "K",
          "K",
          "S",
          "Q",
          "U"
        ],
        [
          "T",
          "E",
          "U",
          "C",
          "R",
          "T",
          "C",
          "E",
          "E",
          "S"
        ],
        [
          "F",
          "N",
          "X",
          "O",
          "Y",
          "W",
          "P",
          "R",
          "L",
          "A"
        ],
        [
          "O",
          "X",
          "Y",
          "L",
          "L",
          "Y",
          "B",
          "G",
          "I",
          "E"
        ],
        [
          "Z",
          "T",
          "L",
          "L",
          "E",
          "X",
          "A",
          "N",
          "Z",
          "R"
        ],
        [
          "W",
          "L",
          "K",
          "N",
          "U",
          "C",
          "O",
          "O",
          "A",
          "T"
        ],
        [
          "S",
          "E",
          "R",
          "O",
          "D",
          "V",
          "A",
          "C",
          "B",
          "P"
        ]
      ],
      "placements": [
        {
          "label": "Angelica",
          "value": "ANGELICA",
          "word": "ANGELICA",
          "clean": "ANGELICA",
          "start": {
            "row": 3,
            "col": 0
          },
          "end": {
            "row": 3,
            "col": 7
          },
          "direction": "E",
          "path": [
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            }
          ]
        },
        {
          "label": "Burr",
          "value": "BURR",
          "word": "BURR",
          "clean": "BURR",
          "start": {
            "row": 7,
            "col": 0
          },
          "end": {
            "row": 7,
            "col": 3
          },
          "direction": "E",
          "path": [
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 7,
              "col": 3
            }
          ]
        },
        {
          "label": "Cabinet",
          "value": "CABINET",
          "word": "CABINET",
          "clean": "CABINET",
          "start": {
            "row": 10,
            "col": 3
          },
          "end": {
            "row": 4,
            "col": 9
          },
          "direction": "NE",
          "path": [
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 4,
              "col": 9
            }
          ]
        },
        {
          "label": "Congress",
          "value": "CONGRESS",
          "word": "CONGRESS",
          "clean": "CONGRESS",
          "start": {
            "row": 15,
            "col": 7
          },
          "end": {
            "row": 8,
            "col": 7
          },
          "direction": "N",
          "path": [
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 14,
              "col": 7
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 8,
              "col": 7
            }
          ]
        },
        {
          "label": "Duel",
          "value": "DUEL",
          "word": "DUEL",
          "clean": "DUEL",
          "start": {
            "row": 15,
            "col": 4
          },
          "end": {
            "row": 12,
            "col": 4
          },
          "direction": "N",
          "path": [
            {
              "row": 15,
              "col": 4
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 12,
              "col": 4
            }
          ]
        },
        {
          "label": "Eliza",
          "value": "ELIZA",
          "word": "ELIZA",
          "clean": "ELIZA",
          "start": {
            "row": 10,
            "col": 8
          },
          "end": {
            "row": 14,
            "col": 8
          },
          "direction": "S",
          "path": [
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 14,
              "col": 8
            }
          ]
        },
        {
          "label": "Federal",
          "value": "FEDERAL",
          "word": "FEDERAL",
          "clean": "FEDERAL",
          "start": {
            "row": 11,
            "col": 0
          },
          "end": {
            "row": 5,
            "col": 6
          },
          "direction": "NE",
          "path": [
            {
              "row": 11,
              "col": 0
            },
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            }
          ]
        },
        {
          "label": "Hamilton",
          "value": "HAMILTON",
          "word": "HAMILTON",
          "clean": "HAMILTON",
          "start": {
            "row": 1,
            "col": 9
          },
          "end": {
            "row": 1,
            "col": 2
          },
          "direction": "W",
          "path": [
            {
              "row": 1,
              "col": 9
            },
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 1,
              "col": 2
            }
          ]
        },
        {
          "label": "Legacy",
          "value": "LEGACY",
          "word": "LEGACY",
          "clean": "LEGACY",
          "start": {
            "row": 2,
            "col": 5
          },
          "end": {
            "row": 2,
            "col": 0
          },
          "direction": "W",
          "path": [
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 2,
              "col": 0
            }
          ]
        },
        {
          "label": "Schuyler",
          "value": "SCHUYLER",
          "word": "SCHUYLER",
          "clean": "SCHUYLER",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 8
          },
          "direction": "E",
          "path": [
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 8
            }
          ]
        },
        {
          "label": "Treasury",
          "value": "TREASURY",
          "word": "TREASURY",
          "clean": "TREASURY",
          "start": {
            "row": 14,
            "col": 9
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "direction": "N",
          "path": [
            {
              "row": 14,
              "col": 9
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 7,
              "col": 9
            }
          ]
        },
        {
          "label": "Yorktown",
          "value": "YORKTOWN",
          "word": "YORKTOWN",
          "clean": "YORKTOWN",
          "start": {
            "row": 12,
            "col": 2
          },
          "end": {
            "row": 5,
            "col": 9
          },
          "direction": "NE",
          "path": [
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 5,
              "col": 9
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "size": 16,
      "rows": 16,
      "cols": 10,
      "topic": "The Lion King Musical",
      "words": [
        {
          "label": "Simba",
          "value": "SIMBA"
        },
        {
          "label": "Nala",
          "value": "NALA"
        },
        {
          "label": "Mufasa",
          "value": "MUFASA"
        },
        {
          "label": "Scar",
          "value": "SCAR"
        },
        {
          "label": "Timon",
          "value": "TIMON"
        },
        {
          "label": "Pumbaa",
          "value": "PUMBAA"
        },
        {
          "label": "Rafiki",
          "value": "RAFIKI"
        },
        {
          "label": "Pride",
          "value": "PRIDE"
        },
        {
          "label": "Hyena",
          "value": "HYENA"
        },
        {
          "label": "Jungle",
          "value": "JUNGLE"
        },
        {
          "label": "Circle",
          "value": "CIRCLE"
        },
        {
          "label": "King",
          "value": "KING"
        }
      ],
      "grid": [
        [
          "R",
          "R",
          "A",
          "F",
          "I",
          "K",
          "I",
          "N",
          "R",
          "A"
        ],
        [
          "L",
          "A",
          "F",
          "M",
          "H",
          "E",
          "S",
          "Z",
          "L",
          "Q"
        ],
        [
          "Q",
          "X",
          "C",
          "E",
          "R",
          "A",
          "Q",
          "A",
          "B",
          "T"
        ],
        [
          "M",
          "K",
          "Q",
          "S",
          "J",
          "J",
          "N",
          "B",
          "Y",
          "C"
        ],
        [
          "A",
          "E",
          "L",
          "C",
          "R",
          "I",
          "C",
          "A",
          "A",
          "C"
        ],
        [
          "V",
          "S",
          "K",
          "I",
          "N",
          "G",
          "A",
          "X",
          "M",
          "T"
        ],
        [
          "B",
          "H",
          "A",
          "S",
          "U",
          "B",
          "Z",
          "E",
          "M",
          "I"
        ],
        [
          "W",
          "F",
          "D",
          "F",
          "M",
          "G",
          "C",
          "V",
          "U",
          "M"
        ],
        [
          "U",
          "R",
          "Z",
          "U",
          "U",
          "H",
          "U",
          "X",
          "M",
          "O"
        ],
        [
          "S",
          "N",
          "P",
          "K",
          "S",
          "M",
          "Y",
          "L",
          "C",
          "N"
        ],
        [
          "E",
          "O",
          "K",
          "R",
          "I",
          "O",
          "B",
          "E",
          "J",
          "P"
        ],
        [
          "L",
          "L",
          "A",
          "F",
          "M",
          "H",
          "O",
          "C",
          "N",
          "X"
        ],
        [
          "G",
          "D",
          "G",
          "K",
          "B",
          "H",
          "D",
          "A",
          "Y",
          "A"
        ],
        [
          "H",
          "E",
          "P",
          "N",
          "A",
          "P",
          "R",
          "I",
          "D",
          "E"
        ],
        [
          "M",
          "L",
          "N",
          "Q",
          "U",
          "C",
          "X",
          "M",
          "K",
          "M"
        ],
        [
          "W",
          "X",
          "D",
          "Q",
          "H",
          "J",
          "R",
          "A",
          "O",
          "E"
        ]
      ],
      "placements": [
        {
          "label": "Circle",
          "value": "CIRCLE",
          "word": "CIRCLE",
          "clean": "CIRCLE",
          "start": {
            "row": 4,
            "col": 6
          },
          "end": {
            "row": 4,
            "col": 1
          },
          "direction": "W",
          "path": [
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 4,
              "col": 1
            }
          ]
        },
        {
          "label": "Hyena",
          "value": "HYENA",
          "word": "HYENA",
          "clean": "HYENA",
          "start": {
            "row": 8,
            "col": 5
          },
          "end": {
            "row": 12,
            "col": 9
          },
          "direction": "SE",
          "path": [
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 12,
              "col": 9
            }
          ]
        },
        {
          "label": "Jungle",
          "value": "JUNGLE",
          "word": "JUNGLE",
          "clean": "JUNGLE",
          "start": {
            "row": 15,
            "col": 5
          },
          "end": {
            "row": 10,
            "col": 0
          },
          "direction": "NW",
          "path": [
            {
              "row": 15,
              "col": 5
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 10,
              "col": 0
            }
          ]
        },
        {
          "label": "King",
          "value": "KING",
          "word": "KING",
          "clean": "KING",
          "start": {
            "row": 5,
            "col": 2
          },
          "end": {
            "row": 5,
            "col": 5
          },
          "direction": "E",
          "path": [
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            }
          ]
        },
        {
          "label": "Mufasa",
          "value": "MUFASA",
          "word": "MUFASA",
          "clean": "MUFASA",
          "start": {
            "row": 9,
            "col": 5
          },
          "end": {
            "row": 4,
            "col": 0
          },
          "direction": "NW",
          "path": [
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 4,
              "col": 0
            }
          ]
        },
        {
          "label": "Nala",
          "value": "NALA",
          "word": "NALA",
          "clean": "NALA",
          "start": {
            "row": 3,
            "col": 6
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "direction": "NE",
          "path": [
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            }
          ]
        },
        {
          "label": "Pride",
          "value": "PRIDE",
          "word": "PRIDE",
          "clean": "PRIDE",
          "start": {
            "row": 13,
            "col": 5
          },
          "end": {
            "row": 13,
            "col": 9
          },
          "direction": "E",
          "path": [
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 13,
              "col": 9
            }
          ]
        },
        {
          "label": "Pumbaa",
          "value": "PUMBAA",
          "word": "PUMBAA",
          "clean": "PUMBAA",
          "start": {
            "row": 9,
            "col": 2
          },
          "end": {
            "row": 4,
            "col": 7
          },
          "direction": "NE",
          "path": [
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            }
          ]
        },
        {
          "label": "Rafiki",
          "value": "RAFIKI",
          "word": "RAFIKI",
          "clean": "RAFIKI",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 6
          },
          "direction": "E",
          "path": [
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 6
            }
          ]
        },
        {
          "label": "Scar",
          "value": "SCAR",
          "word": "SCAR",
          "clean": "SCAR",
          "start": {
            "row": 3,
            "col": 3
          },
          "end": {
            "row": 0,
            "col": 0
          },
          "direction": "NW",
          "path": [
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 1,
              "col": 1
            },
            {
              "row": 0,
              "col": 0
            }
          ]
        },
        {
          "label": "Simba",
          "value": "SIMBA",
          "word": "SIMBA",
          "clean": "SIMBA",
          "start": {
            "row": 9,
            "col": 4
          },
          "end": {
            "row": 13,
            "col": 4
          },
          "direction": "S",
          "path": [
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 13,
              "col": 4
            }
          ]
        },
        {
          "label": "Timon",
          "value": "TIMON",
          "word": "TIMON",
          "clean": "TIMON",
          "start": {
            "row": 5,
            "col": 9
          },
          "end": {
            "row": 9,
            "col": 9
          },
          "direction": "S",
          "path": [
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 9,
              "col": 9
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "size": 16,
      "rows": 16,
      "cols": 10,
      "topic": "Les Miserables Musical",
      "words": [
        {
          "label": "Valjean",
          "value": "VALJEAN"
        },
        {
          "label": "Javert",
          "value": "JAVERT"
        },
        {
          "label": "Fantine",
          "value": "FANTINE"
        },
        {
          "label": "Cosette",
          "value": "COSETTE"
        },
        {
          "label": "Marius",
          "value": "MARIUS"
        },
        {
          "label": "Eponine",
          "value": "EPONINE"
        },
        {
          "label": "Dream",
          "value": "DREAM"
        },
        {
          "label": "Paris",
          "value": "PARIS"
        },
        {
          "label": "Revolt",
          "value": "REVOLT"
        },
        {
          "label": "Barricade",
          "value": "BARRICADE"
        },
        {
          "label": "Justice",
          "value": "JUSTICE"
        },
        {
          "label": "Prison",
          "value": "PRISON"
        }
      ],
      "grid": [
        [
          "R",
          "H",
          "G",
          "J",
          "M",
          "S",
          "K",
          "P",
          "L",
          "Q"
        ],
        [
          "B",
          "A",
          "R",
          "R",
          "I",
          "C",
          "A",
          "D",
          "E",
          "F"
        ],
        [
          "O",
          "J",
          "V",
          "A",
          "L",
          "J",
          "E",
          "A",
          "N",
          "U"
        ],
        [
          "M",
          "A",
          "R",
          "I",
          "U",
          "S",
          "H",
          "Z",
          "E",
          "S"
        ],
        [
          "Z",
          "V",
          "P",
          "R",
          "I",
          "S",
          "O",
          "N",
          "N",
          "I"
        ],
        [
          "I",
          "E",
          "L",
          "I",
          "O",
          "K",
          "E",
          "N",
          "I",
          "R"
        ],
        [
          "A",
          "R",
          "Q",
          "X",
          "D",
          "N",
          "B",
          "U",
          "N",
          "A"
        ],
        [
          "P",
          "T",
          "Z",
          "D",
          "I",
          "R",
          "O",
          "N",
          "O",
          "P"
        ],
        [
          "G",
          "R",
          "D",
          "T",
          "Z",
          "M",
          "E",
          "E",
          "P",
          "J"
        ],
        [
          "N",
          "N",
          "N",
          "C",
          "E",
          "E",
          "X",
          "A",
          "E",
          "U"
        ],
        [
          "R",
          "A",
          "R",
          "P",
          "K",
          "N",
          "W",
          "A",
          "M",
          "S"
        ],
        [
          "F",
          "E",
          "E",
          "T",
          "T",
          "E",
          "S",
          "O",
          "C",
          "T"
        ],
        [
          "D",
          "V",
          "V",
          "Z",
          "L",
          "M",
          "E",
          "I",
          "F",
          "I"
        ],
        [
          "F",
          "E",
          "O",
          "O",
          "O",
          "Z",
          "J",
          "Y",
          "B",
          "C"
        ],
        [
          "H",
          "N",
          "A",
          "I",
          "L",
          "X",
          "Y",
          "D",
          "K",
          "E"
        ],
        [
          "V",
          "X",
          "L",
          "R",
          "D",
          "T",
          "B",
          "M",
          "H",
          "E"
        ]
      ],
      "placements": [
        {
          "label": "Barricade",
          "value": "BARRICADE",
          "word": "BARRICADE",
          "clean": "BARRICADE",
          "start": {
            "row": 1,
            "col": 0
          },
          "end": {
            "row": 1,
            "col": 8
          },
          "direction": "E",
          "path": [
            {
              "row": 1,
              "col": 0
            },
            {
              "row": 1,
              "col": 1
            },
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 1,
              "col": 8
            }
          ]
        },
        {
          "label": "Cosette",
          "value": "COSETTE",
          "word": "COSETTE",
          "clean": "COSETTE",
          "start": {
            "row": 11,
            "col": 8
          },
          "end": {
            "row": 11,
            "col": 2
          },
          "direction": "W",
          "path": [
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 11,
              "col": 2
            }
          ]
        },
        {
          "label": "Dream",
          "value": "DREAM",
          "word": "DREAM",
          "clean": "DREAM",
          "start": {
            "row": 6,
            "col": 4
          },
          "end": {
            "row": 10,
            "col": 8
          },
          "direction": "SE",
          "path": [
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            }
          ]
        },
        {
          "label": "Eponine",
          "value": "EPONINE",
          "word": "EPONINE",
          "clean": "EPONINE",
          "start": {
            "row": 9,
            "col": 8
          },
          "end": {
            "row": 3,
            "col": 8
          },
          "direction": "N",
          "path": [
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 3,
              "col": 8
            }
          ]
        },
        {
          "label": "Fantine",
          "value": "FANTINE",
          "word": "FANTINE",
          "clean": "FANTINE",
          "start": {
            "row": 11,
            "col": 0
          },
          "end": {
            "row": 5,
            "col": 6
          },
          "direction": "NE",
          "path": [
            {
              "row": 11,
              "col": 0
            },
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            }
          ]
        },
        {
          "label": "Javert",
          "value": "JAVERT",
          "word": "JAVERT",
          "clean": "JAVERT",
          "start": {
            "row": 2,
            "col": 1
          },
          "end": {
            "row": 7,
            "col": 1
          },
          "direction": "S",
          "path": [
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 7,
              "col": 1
            }
          ]
        },
        {
          "label": "Justice",
          "value": "JUSTICE",
          "word": "JUSTICE",
          "clean": "JUSTICE",
          "start": {
            "row": 8,
            "col": 9
          },
          "end": {
            "row": 14,
            "col": 9
          },
          "direction": "S",
          "path": [
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 14,
              "col": 9
            }
          ]
        },
        {
          "label": "Marius",
          "value": "MARIUS",
          "word": "MARIUS",
          "clean": "MARIUS",
          "start": {
            "row": 3,
            "col": 0
          },
          "end": {
            "row": 3,
            "col": 5
          },
          "direction": "E",
          "path": [
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            }
          ]
        },
        {
          "label": "Paris",
          "value": "PARIS",
          "word": "PARIS",
          "clean": "PARIS",
          "start": {
            "row": 7,
            "col": 9
          },
          "end": {
            "row": 3,
            "col": 9
          },
          "direction": "N",
          "path": [
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 3,
              "col": 9
            }
          ]
        },
        {
          "label": "Prison",
          "value": "PRISON",
          "word": "PRISON",
          "clean": "PRISON",
          "start": {
            "row": 4,
            "col": 2
          },
          "end": {
            "row": 4,
            "col": 7
          },
          "direction": "E",
          "path": [
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            }
          ]
        },
        {
          "label": "Revolt",
          "value": "REVOLT",
          "word": "REVOLT",
          "clean": "REVOLT",
          "start": {
            "row": 10,
            "col": 0
          },
          "end": {
            "row": 15,
            "col": 5
          },
          "direction": "SE",
          "path": [
            {
              "row": 10,
              "col": 0
            },
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 15,
              "col": 5
            }
          ]
        },
        {
          "label": "Valjean",
          "value": "VALJEAN",
          "word": "VALJEAN",
          "clean": "VALJEAN",
          "start": {
            "row": 2,
            "col": 2
          },
          "end": {
            "row": 2,
            "col": 8
          },
          "direction": "E",
          "path": [
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 2,
              "col": 8
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "size": 16,
      "rows": 16,
      "cols": 10,
      "topic": "Phantom Of The Opera Musical",
      "words": [
        {
          "label": "Phantom",
          "value": "PHANTOM"
        },
        {
          "label": "Raoul",
          "value": "RAOUL"
        },
        {
          "label": "Opera",
          "value": "OPERA"
        },
        {
          "label": "Mask",
          "value": "MASK"
        },
        {
          "label": "Mirror",
          "value": "MIRROR"
        },
        {
          "label": "Music",
          "value": "MUSIC"
        },
        {
          "label": "Rose",
          "value": "ROSE"
        },
        {
          "label": "Stage",
          "value": "STAGE"
        },
        {
          "label": "Voice",
          "value": "VOICE"
        },
        {
          "label": "Theater",
          "value": "THEATER"
        },
        {
          "label": "Orchestra",
          "value": "ORCHESTRA"
        },
        {
          "label": "Christine",
          "value": "CHRISTINE"
        }
      ],
      "grid": [
        [
          "H",
          "G",
          "X",
          "U",
          "K",
          "A",
          "L",
          "A",
          "E",
          "R"
        ],
        [
          "H",
          "N",
          "T",
          "S",
          "R",
          "E",
          "X",
          "J",
          "E",
          "P"
        ],
        [
          "C",
          "Y",
          "Q",
          "E",
          "S",
          "M",
          "R",
          "T",
          "H",
          "R"
        ],
        [
          "H",
          "O",
          "P",
          "O",
          "U",
          "Y",
          "A",
          "A",
          "O",
          "O"
        ],
        [
          "R",
          "O",
          "R",
          "S",
          "B",
          "E",
          "N",
          "R",
          "Y",
          "C"
        ],
        [
          "I",
          "W",
          "I",
          "C",
          "H",
          "T",
          "R",
          "Z",
          "O",
          "G"
        ],
        [
          "S",
          "C",
          "P",
          "T",
          "O",
          "I",
          "J",
          "X",
          "M",
          "Z"
        ],
        [
          "T",
          "V",
          "M",
          "M",
          "M",
          "U",
          "R",
          "E",
          "Y",
          "U"
        ],
        [
          "I",
          "C",
          "O",
          "N",
          "H",
          "F",
          "N",
          "U",
          "E",
          "S"
        ],
        [
          "N",
          "M",
          "N",
          "I",
          "C",
          "O",
          "X",
          "T",
          "T",
          "G"
        ],
        [
          "E",
          "P",
          "A",
          "D",
          "C",
          "T",
          "O",
          "A",
          "W",
          "P"
        ],
        [
          "B",
          "R",
          "A",
          "S",
          "V",
          "E",
          "G",
          "J",
          "P",
          "J"
        ],
        [
          "M",
          "P",
          "L",
          "A",
          "K",
          "E",
          "Z",
          "K",
          "U",
          "J"
        ],
        [
          "C",
          "Y",
          "X",
          "I",
          "J",
          "R",
          "R",
          "A",
          "W",
          "G"
        ],
        [
          "A",
          "R",
          "T",
          "S",
          "E",
          "H",
          "C",
          "R",
          "O",
          "G"
        ],
        [
          "R",
          "A",
          "O",
          "U",
          "L",
          "C",
          "E",
          "B",
          "V",
          "M"
        ]
      ],
      "placements": [
        {
          "label": "Christine",
          "value": "CHRISTINE",
          "word": "CHRISTINE",
          "clean": "CHRISTINE",
          "start": {
            "row": 2,
            "col": 0
          },
          "end": {
            "row": 10,
            "col": 0
          },
          "direction": "S",
          "path": [
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 8,
              "col": 0
            },
            {
              "row": 9,
              "col": 0
            },
            {
              "row": 10,
              "col": 0
            }
          ]
        },
        {
          "label": "Mask",
          "value": "MASK",
          "word": "MASK",
          "clean": "MASK",
          "start": {
            "row": 9,
            "col": 1
          },
          "end": {
            "row": 12,
            "col": 4
          },
          "direction": "SE",
          "path": [
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 12,
              "col": 4
            }
          ]
        },
        {
          "label": "Mirror",
          "value": "MIRROR",
          "word": "MIRROR",
          "clean": "MIRROR",
          "start": {
            "row": 7,
            "col": 4
          },
          "end": {
            "row": 2,
            "col": 9
          },
          "direction": "NE",
          "path": [
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 2,
              "col": 9
            }
          ]
        },
        {
          "label": "Music",
          "value": "MUSIC",
          "word": "MUSIC",
          "clean": "MUSIC",
          "start": {
            "row": 2,
            "col": 5
          },
          "end": {
            "row": 6,
            "col": 1
          },
          "direction": "SW",
          "path": [
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 1
            }
          ]
        },
        {
          "label": "Opera",
          "value": "OPERA",
          "word": "OPERA",
          "clean": "OPERA",
          "start": {
            "row": 4,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 5
          },
          "direction": "NE",
          "path": [
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 0,
              "col": 5
            }
          ]
        },
        {
          "label": "Orchestra",
          "value": "ORCHESTRA",
          "word": "ORCHESTRA",
          "clean": "ORCHESTRA",
          "start": {
            "row": 14,
            "col": 8
          },
          "end": {
            "row": 14,
            "col": 0
          },
          "direction": "W",
          "path": [
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 14,
              "col": 7
            },
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 14,
              "col": 3
            },
            {
              "row": 14,
              "col": 2
            },
            {
              "row": 14,
              "col": 1
            },
            {
              "row": 14,
              "col": 0
            }
          ]
        },
        {
          "label": "Phantom",
          "value": "PHANTOM",
          "word": "PHANTOM",
          "clean": "PHANTOM",
          "start": {
            "row": 1,
            "col": 9
          },
          "end": {
            "row": 7,
            "col": 3
          },
          "direction": "SW",
          "path": [
            {
              "row": 1,
              "col": 9
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 7,
              "col": 3
            }
          ]
        },
        {
          "label": "Raoul",
          "value": "RAOUL",
          "word": "RAOUL",
          "clean": "RAOUL",
          "start": {
            "row": 15,
            "col": 0
          },
          "end": {
            "row": 15,
            "col": 4
          },
          "direction": "E",
          "path": [
            {
              "row": 15,
              "col": 0
            },
            {
              "row": 15,
              "col": 1
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 15,
              "col": 3
            },
            {
              "row": 15,
              "col": 4
            }
          ]
        },
        {
          "label": "Rose",
          "value": "ROSE",
          "word": "ROSE",
          "clean": "ROSE",
          "start": {
            "row": 4,
            "col": 2
          },
          "end": {
            "row": 1,
            "col": 5
          },
          "direction": "NE",
          "path": [
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 1,
              "col": 5
            }
          ]
        },
        {
          "label": "Stage",
          "value": "STAGE",
          "word": "STAGE",
          "clean": "STAGE",
          "start": {
            "row": 8,
            "col": 9
          },
          "end": {
            "row": 12,
            "col": 5
          },
          "direction": "SW",
          "path": [
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 12,
              "col": 5
            }
          ]
        },
        {
          "label": "Theater",
          "value": "THEATER",
          "word": "THEATER",
          "clean": "THEATER",
          "start": {
            "row": 6,
            "col": 3
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "direction": "NE",
          "path": [
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 0,
              "col": 9
            }
          ]
        },
        {
          "label": "Voice",
          "value": "VOICE",
          "word": "VOICE",
          "clean": "VOICE",
          "start": {
            "row": 7,
            "col": 1
          },
          "end": {
            "row": 11,
            "col": 5
          },
          "direction": "SE",
          "path": [
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 11,
              "col": 5
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "size": 16,
      "rows": 16,
      "cols": 10,
      "topic": "Wicked Musical",
      "words": [
        {
          "label": "Elphaba",
          "value": "ELPHABA"
        },
        {
          "label": "Glinda",
          "value": "GLINDA"
        },
        {
          "label": "Wizard",
          "value": "WIZARD"
        },
        {
          "label": "Fiyero",
          "value": "FIYERO"
        },
        {
          "label": "Witch",
          "value": "WITCH"
        },
        {
          "label": "Magic",
          "value": "MAGIC"
        },
        {
          "label": "Oz",
          "value": "OZ"
        },
        {
          "label": "Green",
          "value": "GREEN"
        },
        {
          "label": "Shiz",
          "value": "SHIZ"
        },
        {
          "label": "Flying",
          "value": "FLYING"
        },
        {
          "label": "Spell",
          "value": "SPELL"
        },
        {
          "label": "Destiny",
          "value": "DESTINY"
        }
      ],
      "grid": [
        [
          "E",
          "V",
          "A",
          "C",
          "C",
          "K",
          "J",
          "A",
          "Y",
          "H"
        ],
        [
          "E",
          "P",
          "X",
          "R",
          "I",
          "I",
          "A",
          "N",
          "I",
          "Z"
        ],
        [
          "W",
          "G",
          "D",
          "J",
          "I",
          "G",
          "E",
          "F",
          "O",
          "O"
        ],
        [
          "Q",
          "E",
          "E",
          "D",
          "P",
          "E",
          "A",
          "R",
          "S",
          "L"
        ],
        [
          "B",
          "N",
          "S",
          "I",
          "R",
          "Y",
          "E",
          "M",
          "J",
          "M"
        ],
        [
          "F",
          "B",
          "T",
          "G",
          "K",
          "Y",
          "B",
          "R",
          "H",
          "Y"
        ],
        [
          "Z",
          "Q",
          "I",
          "X",
          "I",
          "C",
          "I",
          "Q",
          "N",
          "M"
        ],
        [
          "G",
          "D",
          "N",
          "F",
          "G",
          "P",
          "O",
          "N",
          "T",
          "H"
        ],
        [
          "G",
          "E",
          "Y",
          "Z",
          "A",
          "S",
          "P",
          "E",
          "L",
          "L"
        ],
        [
          "I",
          "N",
          "I",
          "F",
          "C",
          "O",
          "Y",
          "I",
          "C",
          "W"
        ],
        [
          "B",
          "H",
          "I",
          "P",
          "Q",
          "L",
          "Y",
          "O",
          "W",
          "W"
        ],
        [
          "S",
          "F",
          "G",
          "Y",
          "Q",
          "B",
          "O",
          "W",
          "I",
          "I"
        ],
        [
          "V",
          "G",
          "G",
          "S",
          "L",
          "Y",
          "I",
          "U",
          "Z",
          "T"
        ],
        [
          "B",
          "I",
          "X",
          "I",
          "Q",
          "F",
          "U",
          "V",
          "A",
          "C"
        ],
        [
          "G",
          "G",
          "L",
          "I",
          "N",
          "D",
          "A",
          "Y",
          "R",
          "H"
        ],
        [
          "E",
          "L",
          "P",
          "H",
          "A",
          "B",
          "A",
          "J",
          "D",
          "I"
        ]
      ],
      "placements": [
        {
          "label": "Destiny",
          "value": "DESTINY",
          "word": "DESTINY",
          "clean": "DESTINY",
          "start": {
            "row": 2,
            "col": 2
          },
          "end": {
            "row": 8,
            "col": 2
          },
          "direction": "S",
          "path": [
            {
              "row": 2,
              "col": 2
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 8,
              "col": 2
            }
          ]
        },
        {
          "label": "Elphaba",
          "value": "ELPHABA",
          "word": "ELPHABA",
          "clean": "ELPHABA",
          "start": {
            "row": 15,
            "col": 0
          },
          "end": {
            "row": 15,
            "col": 6
          },
          "direction": "E",
          "path": [
            {
              "row": 15,
              "col": 0
            },
            {
              "row": 15,
              "col": 1
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 15,
              "col": 3
            },
            {
              "row": 15,
              "col": 4
            },
            {
              "row": 15,
              "col": 5
            },
            {
              "row": 15,
              "col": 6
            }
          ]
        },
        {
          "label": "Fiyero",
          "value": "FIYERO",
          "word": "FIYERO",
          "clean": "FIYERO",
          "start": {
            "row": 7,
            "col": 3
          },
          "end": {
            "row": 2,
            "col": 8
          },
          "direction": "NE",
          "path": [
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 2,
              "col": 8
            }
          ]
        },
        {
          "label": "Flying",
          "value": "FLYING",
          "word": "FLYING",
          "clean": "FLYING",
          "start": {
            "row": 13,
            "col": 5
          },
          "end": {
            "row": 8,
            "col": 0
          },
          "direction": "NW",
          "path": [
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 8,
              "col": 0
            }
          ]
        },
        {
          "label": "Glinda",
          "value": "GLINDA",
          "word": "GLINDA",
          "clean": "GLINDA",
          "start": {
            "row": 14,
            "col": 1
          },
          "end": {
            "row": 14,
            "col": 6
          },
          "direction": "E",
          "path": [
            {
              "row": 14,
              "col": 1
            },
            {
              "row": 14,
              "col": 2
            },
            {
              "row": 14,
              "col": 3
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 14,
              "col": 6
            }
          ]
        },
        {
          "label": "Green",
          "value": "GREEN",
          "word": "GREEN",
          "clean": "GREEN",
          "start": {
            "row": 5,
            "col": 3
          },
          "end": {
            "row": 1,
            "col": 7
          },
          "direction": "NE",
          "path": [
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 1,
              "col": 7
            }
          ]
        },
        {
          "label": "Magic",
          "value": "MAGIC",
          "word": "MAGIC",
          "clean": "MAGIC",
          "start": {
            "row": 4,
            "col": 7
          },
          "end": {
            "row": 0,
            "col": 3
          },
          "direction": "NW",
          "path": [
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 0,
              "col": 3
            }
          ]
        },
        {
          "label": "Oz",
          "value": "OZ",
          "word": "OZ",
          "clean": "OZ",
          "start": {
            "row": 2,
            "col": 9
          },
          "end": {
            "row": 1,
            "col": 9
          },
          "direction": "N",
          "path": [
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 1,
              "col": 9
            }
          ]
        },
        {
          "label": "Shiz",
          "value": "SHIZ",
          "word": "SHIZ",
          "clean": "SHIZ",
          "start": {
            "row": 11,
            "col": 0
          },
          "end": {
            "row": 8,
            "col": 3
          },
          "direction": "NE",
          "path": [
            {
              "row": 11,
              "col": 0
            },
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            }
          ]
        },
        {
          "label": "Spell",
          "value": "SPELL",
          "word": "SPELL",
          "clean": "SPELL",
          "start": {
            "row": 8,
            "col": 5
          },
          "end": {
            "row": 8,
            "col": 9
          },
          "direction": "E",
          "path": [
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 8,
              "col": 9
            }
          ]
        },
        {
          "label": "Witch",
          "value": "WITCH",
          "word": "WITCH",
          "clean": "WITCH",
          "start": {
            "row": 10,
            "col": 9
          },
          "end": {
            "row": 14,
            "col": 9
          },
          "direction": "S",
          "path": [
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 14,
              "col": 9
            }
          ]
        },
        {
          "label": "Wizard",
          "value": "WIZARD",
          "word": "WIZARD",
          "clean": "WIZARD",
          "start": {
            "row": 10,
            "col": 8
          },
          "end": {
            "row": 15,
            "col": 8
          },
          "direction": "S",
          "path": [
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 15,
              "col": 8
            }
          ]
        }
      ]
    },
    {
      "id": 6,
      "size": 16,
      "rows": 16,
      "cols": 10,
      "topic": "Kpop Groups",
      "words": [
        {
          "label": "방탄",
          "value": "방탄"
        },
        {
          "label": "엑소",
          "value": "엑소"
        },
        {
          "label": "아이브",
          "value": "아이브"
        },
        {
          "label": "뉴진스",
          "value": "뉴진스"
        },
        {
          "label": "에스파",
          "value": "에스파"
        },
        {
          "label": "엔믹스",
          "value": "엔믹스"
        },
        {
          "label": "빅뱅",
          "value": "빅뱅"
        },
        {
          "label": "있지",
          "value": "있지"
        },
        {
          "label": "르세라핌",
          "value": "르세라핌"
        },
        {
          "label": "블랙핑크",
          "value": "블랙핑크"
        },
        {
          "label": "세븐틴",
          "value": "세븐틴"
        },
        {
          "label": "트레저",
          "value": "트레저"
        }
      ],
      "grid": [
        [
          "서",
          "라",
          "호",
          "우",
          "수",
          "지",
          "구",
          "투",
          "바",
          "허"
        ],
        [
          "어",
          "하",
          "서",
          "히",
          "우",
          "무",
          "차",
          "히",
          "우",
          "카"
        ],
        [
          "다",
          "더",
          "우",
          "니",
          "세",
          "븐",
          "틴",
          "타",
          "엑",
          "소"
        ],
        [
          "저",
          "레",
          "트",
          "머",
          "호",
          "누",
          "너",
          "시",
          "퍼",
          "러"
        ],
        [
          "뉴",
          "서",
          "쿠",
          "차",
          "아",
          "비",
          "주",
          "조",
          "저",
          "도"
        ],
        [
          "소",
          "진",
          "치",
          "추",
          "가",
          "르",
          "세",
          "라",
          "핌",
          "구"
        ],
        [
          "시",
          "도",
          "스",
          "기",
          "피",
          "모",
          "키",
          "호",
          "타",
          "리"
        ],
        [
          "초",
          "퍼",
          "히",
          "무",
          "라",
          "시",
          "지",
          "피",
          "우",
          "구"
        ],
        [
          "마",
          "하",
          "아",
          "이",
          "브",
          "시",
          "초",
          "퍼",
          "커",
          "바"
        ],
        [
          "로",
          "허",
          "모",
          "나",
          "모",
          "이",
          "고",
          "지",
          "저",
          "쿠"
        ],
        [
          "키",
          "거",
          "머",
          "타",
          "보",
          "토",
          "엔",
          "크",
          "있",
          "로"
        ],
        [
          "이",
          "서",
          "카",
          "어",
          "두",
          "키",
          "핑",
          "믹",
          "비",
          "키"
        ],
        [
          "두",
          "쿠",
          "이",
          "기",
          "처",
          "랙",
          "루",
          "루",
          "스",
          "카"
        ],
        [
          "파",
          "스",
          "에",
          "터",
          "블",
          "사",
          "노",
          "가",
          "저",
          "리"
        ],
        [
          "노",
          "비",
          "치",
          "보",
          "탄",
          "방",
          "빅",
          "뱅",
          "리",
          "보"
        ],
        [
          "우",
          "니",
          "시",
          "누",
          "티",
          "처",
          "소",
          "퍼",
          "허",
          "카"
        ]
      ],
      "placements": [
        {
          "label": "뉴진스",
          "value": "뉴진스",
          "word": "뉴진스",
          "clean": "뉴진스",
          "start": {
            "row": 4,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 2
          },
          "direction": "SE",
          "path": [
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 6,
              "col": 2
            }
          ]
        },
        {
          "label": "르세라핌",
          "value": "르세라핌",
          "word": "르세라핌",
          "clean": "르세라핌",
          "start": {
            "row": 5,
            "col": 5
          },
          "end": {
            "row": 5,
            "col": 8
          },
          "direction": "E",
          "path": [
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            }
          ]
        },
        {
          "label": "방탄",
          "value": "방탄",
          "word": "방탄",
          "clean": "방탄",
          "start": {
            "row": 14,
            "col": 5
          },
          "end": {
            "row": 14,
            "col": 4
          },
          "direction": "W",
          "path": [
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 14,
              "col": 4
            }
          ]
        },
        {
          "label": "블랙핑크",
          "value": "블랙핑크",
          "word": "블랙핑크",
          "clean": "블랙핑크",
          "start": {
            "row": 13,
            "col": 4
          },
          "end": {
            "row": 10,
            "col": 7
          },
          "direction": "NE",
          "path": [
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 10,
              "col": 7
            }
          ]
        },
        {
          "label": "빅뱅",
          "value": "빅뱅",
          "word": "빅뱅",
          "clean": "빅뱅",
          "start": {
            "row": 14,
            "col": 6
          },
          "end": {
            "row": 14,
            "col": 7
          },
          "direction": "E",
          "path": [
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 14,
              "col": 7
            }
          ]
        },
        {
          "label": "세븐틴",
          "value": "세븐틴",
          "word": "세븐틴",
          "clean": "세븐틴",
          "start": {
            "row": 2,
            "col": 4
          },
          "end": {
            "row": 2,
            "col": 6
          },
          "direction": "E",
          "path": [
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 2,
              "col": 6
            }
          ]
        },
        {
          "label": "아이브",
          "value": "아이브",
          "word": "아이브",
          "clean": "아이브",
          "start": {
            "row": 8,
            "col": 2
          },
          "end": {
            "row": 8,
            "col": 4
          },
          "direction": "E",
          "path": [
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            }
          ]
        },
        {
          "label": "에스파",
          "value": "에스파",
          "word": "에스파",
          "clean": "에스파",
          "start": {
            "row": 13,
            "col": 2
          },
          "end": {
            "row": 13,
            "col": 0
          },
          "direction": "W",
          "path": [
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 13,
              "col": 0
            }
          ]
        },
        {
          "label": "엑소",
          "value": "엑소",
          "word": "엑소",
          "clean": "엑소",
          "start": {
            "row": 2,
            "col": 8
          },
          "end": {
            "row": 2,
            "col": 9
          },
          "direction": "E",
          "path": [
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 2,
              "col": 9
            }
          ]
        },
        {
          "label": "엔믹스",
          "value": "엔믹스",
          "word": "엔믹스",
          "clean": "엔믹스",
          "start": {
            "row": 10,
            "col": 6
          },
          "end": {
            "row": 12,
            "col": 8
          },
          "direction": "SE",
          "path": [
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 12,
              "col": 8
            }
          ]
        },
        {
          "label": "있지",
          "value": "있지",
          "word": "있지",
          "clean": "있지",
          "start": {
            "row": 10,
            "col": 8
          },
          "end": {
            "row": 9,
            "col": 7
          },
          "direction": "NW",
          "path": [
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 9,
              "col": 7
            }
          ]
        },
        {
          "label": "트레저",
          "value": "트레저",
          "word": "트레저",
          "clean": "트레저",
          "start": {
            "row": 3,
            "col": 2
          },
          "end": {
            "row": 3,
            "col": 0
          },
          "direction": "W",
          "path": [
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 3,
              "col": 0
            }
          ]
        }
      ]
    }
  ]
} as const;

export default dailyPuzzles;
