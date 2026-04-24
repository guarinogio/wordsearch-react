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
  "hash": "b5c6191e4d10125dad7b1255972c16b80c3e177f1bbe9d43964ad46da6850253",
  "puzzles": [
    {
      "id": 1,
      "size": 10,
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
        }
      ],
      "grid": [
        [
          "F",
          "Z",
          "Y",
          "B",
          "U",
          "R",
          "R",
          "N",
          "J",
          "N"
        ],
        [
          "H",
          "L",
          "J",
          "L",
          "D",
          "G",
          "O",
          "F",
          "W",
          "U"
        ],
        [
          "K",
          "E",
          "I",
          "T",
          "Z",
          "T",
          "N",
          "O",
          "M",
          "A"
        ],
        [
          "O",
          "U",
          "J",
          "C",
          "L",
          "E",
          "T",
          "D",
          "N",
          "K"
        ],
        [
          "Q",
          "D",
          "N",
          "I",
          "A",
          "K",
          "L",
          "G",
          "Z",
          "Y"
        ],
        [
          "G",
          "Y",
          "M",
          "X",
          "R",
          "B",
          "E",
          "I",
          "C",
          "J"
        ],
        [
          "O",
          "A",
          "L",
          "O",
          "I",
          "L",
          "I",
          "A",
          "Z",
          "G"
        ],
        [
          "H",
          "R",
          "Y",
          "T",
          "I",
          "E",
          "G",
          "N",
          "S",
          "A"
        ],
        [
          "T",
          "P",
          "G",
          "C",
          "X",
          "E",
          "R",
          "G",
          "E",
          "B"
        ],
        [
          "B",
          "D",
          "A",
          "D",
          "L",
          "M",
          "R",
          "L",
          "G",
          "T"
        ]
      ],
      "placements": [
        {
          "label": "Angelica",
          "value": "ANGELICA",
          "word": "ANGELICA",
          "clean": "ANGELICA",
          "start": {
            "row": 2,
            "col": 9
          },
          "end": {
            "row": 9,
            "col": 2
          },
          "direction": "SW",
          "path": [
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 9,
              "col": 2
            }
          ]
        },
        {
          "label": "Burr",
          "value": "BURR",
          "word": "BURR",
          "clean": "BURR",
          "start": {
            "row": 0,
            "col": 3
          },
          "end": {
            "row": 0,
            "col": 6
          },
          "direction": "E",
          "path": [
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
          "label": "Cabinet",
          "value": "CABINET",
          "word": "CABINET",
          "clean": "CABINET",
          "start": {
            "row": 3,
            "col": 3
          },
          "end": {
            "row": 9,
            "col": 9
          },
          "direction": "SE",
          "path": [
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            }
          ]
        },
        {
          "label": "Duel",
          "value": "DUEL",
          "word": "DUEL",
          "clean": "DUEL",
          "start": {
            "row": 4,
            "col": 1
          },
          "end": {
            "row": 1,
            "col": 1
          },
          "direction": "N",
          "path": [
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 1,
              "col": 1
            }
          ]
        },
        {
          "label": "Eliza",
          "value": "ELIZA",
          "word": "ELIZA",
          "clean": "ELIZA",
          "start": {
            "row": 3,
            "col": 5
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "direction": "SE",
          "path": [
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            }
          ]
        },
        {
          "label": "Hamilton",
          "value": "HAMILTON",
          "word": "HAMILTON",
          "clean": "HAMILTON",
          "start": {
            "row": 7,
            "col": 0
          },
          "end": {
            "row": 0,
            "col": 7
          },
          "direction": "NE",
          "path": [
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            }
          ]
        },
        {
          "label": "Legacy",
          "value": "LEGACY",
          "word": "LEGACY",
          "clean": "LEGACY",
          "start": {
            "row": 9,
            "col": 4
          },
          "end": {
            "row": 4,
            "col": 9
          },
          "direction": "NE",
          "path": [
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
          "label": "Yorktown",
          "value": "YORKTOWN",
          "word": "YORKTOWN",
          "clean": "YORKTOWN",
          "start": {
            "row": 7,
            "col": 2
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "direction": "NE",
          "path": [
            {
              "row": 7,
              "col": 2
            },
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
        }
      ]
    },
    {
      "id": 2,
      "size": 10,
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
        }
      ],
      "grid": [
        [
          "Q",
          "Y",
          "H",
          "K",
          "A",
          "S",
          "A",
          "F",
          "U",
          "M"
        ],
        [
          "O",
          "F",
          "N",
          "A",
          "L",
          "A",
          "A",
          "E",
          "I",
          "P"
        ],
        [
          "D",
          "N",
          "M",
          "L",
          "P",
          "A",
          "P",
          "T",
          "K",
          "V"
        ],
        [
          "T",
          "N",
          "L",
          "S",
          "B",
          "Z",
          "Q",
          "K",
          "I",
          "C"
        ],
        [
          "G",
          "R",
          "O",
          "M",
          "T",
          "T",
          "R",
          "S",
          "F",
          "Q"
        ],
        [
          "C",
          "P",
          "U",
          "M",
          "L",
          "W",
          "X",
          "B",
          "A",
          "J"
        ],
        [
          "J",
          "P",
          "R",
          "S",
          "I",
          "V",
          "G",
          "L",
          "R",
          "S"
        ],
        [
          "B",
          "G",
          "T",
          "I",
          "C",
          "T",
          "D",
          "E",
          "K",
          "H"
        ],
        [
          "M",
          "P",
          "R",
          "L",
          "D",
          "A",
          "I",
          "D",
          "K",
          "B"
        ],
        [
          "S",
          "I",
          "M",
          "B",
          "A",
          "E",
          "R",
          "J",
          "Z",
          "Y"
        ]
      ],
      "placements": [
        {
          "label": "Mufasa",
          "value": "MUFASA",
          "word": "MUFASA",
          "clean": "MUFASA",
          "start": {
            "row": 0,
            "col": 9
          },
          "end": {
            "row": 0,
            "col": 4
          },
          "direction": "W",
          "path": [
            {
              "row": 0,
              "col": 9
            },
            {
              "row": 0,
              "col": 8
            },
            {
              "row": 0,
              "col": 7
            },
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 4
            }
          ]
        },
        {
          "label": "Nala",
          "value": "NALA",
          "word": "NALA",
          "clean": "NALA",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 1,
            "col": 5
          },
          "direction": "E",
          "path": [
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
            }
          ]
        },
        {
          "label": "Pride",
          "value": "PRIDE",
          "word": "PRIDE",
          "clean": "PRIDE",
          "start": {
            "row": 5,
            "col": 1
          },
          "end": {
            "row": 9,
            "col": 5
          },
          "direction": "SE",
          "path": [
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 9,
              "col": 5
            }
          ]
        },
        {
          "label": "Pumbaa",
          "value": "PUMBAA",
          "word": "PUMBAA",
          "clean": "PUMBAA",
          "start": {
            "row": 6,
            "col": 1
          },
          "end": {
            "row": 1,
            "col": 6
          },
          "direction": "NE",
          "path": [
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 1,
              "col": 6
            }
          ]
        },
        {
          "label": "Rafiki",
          "value": "RAFIKI",
          "word": "RAFIKI",
          "clean": "RAFIKI",
          "start": {
            "row": 6,
            "col": 8
          },
          "end": {
            "row": 1,
            "col": 8
          },
          "direction": "N",
          "path": [
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
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 1,
              "col": 8
            }
          ]
        },
        {
          "label": "Scar",
          "value": "SCAR",
          "word": "SCAR",
          "clean": "SCAR",
          "start": {
            "row": 6,
            "col": 3
          },
          "end": {
            "row": 9,
            "col": 6
          },
          "direction": "SE",
          "path": [
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
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
            "col": 0
          },
          "end": {
            "row": 9,
            "col": 4
          },
          "direction": "E",
          "path": [
            {
              "row": 9,
              "col": 0
            },
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 9,
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
            "row": 7,
            "col": 5
          },
          "end": {
            "row": 3,
            "col": 1
          },
          "direction": "NW",
          "path": [
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 3,
              "col": 1
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "size": 10,
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
        }
      ],
      "grid": [
        [
          "S",
          "B",
          "L",
          "E",
          "P",
          "O",
          "N",
          "I",
          "N",
          "E"
        ],
        [
          "U",
          "Z",
          "U",
          "B",
          "D",
          "W",
          "V",
          "C",
          "D",
          "N"
        ],
        [
          "I",
          "Y",
          "U",
          "R",
          "Y",
          "K",
          "O",
          "F",
          "F",
          "A"
        ],
        [
          "R",
          "V",
          "E",
          "T",
          "X",
          "S",
          "A",
          "N",
          "A",
          "E"
        ],
        [
          "A",
          "A",
          "V",
          "R",
          "E",
          "N",
          "P",
          "U",
          "O",
          "J"
        ],
        [
          "M",
          "W",
          "G",
          "T",
          "T",
          "P",
          "M",
          "V",
          "I",
          "L"
        ],
        [
          "B",
          "O",
          "T",
          "I",
          "G",
          "P",
          "A",
          "Q",
          "P",
          "A"
        ],
        [
          "F",
          "E",
          "N",
          "J",
          "A",
          "V",
          "E",
          "R",
          "T",
          "V"
        ],
        [
          "U",
          "E",
          "I",
          "G",
          "W",
          "N",
          "E",
          "K",
          "I",
          "S"
        ],
        [
          "X",
          "V",
          "Z",
          "G",
          "R",
          "I",
          "J",
          "T",
          "Z",
          "S"
        ]
      ],
      "placements": [
        {
          "label": "Cosette",
          "value": "COSETTE",
          "word": "COSETTE",
          "clean": "COSETTE",
          "start": {
            "row": 1,
            "col": 7
          },
          "end": {
            "row": 7,
            "col": 1
          },
          "direction": "SW",
          "path": [
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 7,
              "col": 1
            }
          ]
        },
        {
          "label": "Dream",
          "value": "DREAM",
          "word": "DREAM",
          "clean": "DREAM",
          "start": {
            "row": 1,
            "col": 4
          },
          "end": {
            "row": 5,
            "col": 0
          },
          "direction": "SW",
          "path": [
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 5,
              "col": 0
            }
          ]
        },
        {
          "label": "Eponine",
          "value": "EPONINE",
          "word": "EPONINE",
          "clean": "EPONINE",
          "start": {
            "row": 0,
            "col": 3
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 0,
              "col": 9
            }
          ]
        },
        {
          "label": "Fantine",
          "value": "FANTINE",
          "word": "FANTINE",
          "clean": "FANTINE",
          "start": {
            "row": 2,
            "col": 7
          },
          "end": {
            "row": 8,
            "col": 1
          },
          "direction": "SW",
          "path": [
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 8,
              "col": 1
            }
          ]
        },
        {
          "label": "Javert",
          "value": "JAVERT",
          "word": "JAVERT",
          "clean": "JAVERT",
          "start": {
            "row": 7,
            "col": 3
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "direction": "E",
          "path": [
            {
              "row": 7,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            }
          ]
        },
        {
          "label": "Marius",
          "value": "MARIUS",
          "word": "MARIUS",
          "clean": "MARIUS",
          "start": {
            "row": 5,
            "col": 0
          },
          "end": {
            "row": 0,
            "col": 0
          },
          "direction": "N",
          "path": [
            {
              "row": 5,
              "col": 0
            },
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 3,
              "col": 0
            },
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 1,
              "col": 0
            },
            {
              "row": 0,
              "col": 0
            }
          ]
        },
        {
          "label": "Paris",
          "value": "PARIS",
          "word": "PARIS",
          "clean": "PARIS",
          "start": {
            "row": 5,
            "col": 5
          },
          "end": {
            "row": 9,
            "col": 9
          },
          "direction": "SE",
          "path": [
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            }
          ]
        },
        {
          "label": "Valjean",
          "value": "VALJEAN",
          "word": "VALJEAN",
          "clean": "VALJEAN",
          "start": {
            "row": 7,
            "col": 9
          },
          "end": {
            "row": 1,
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
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 1,
              "col": 9
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "size": 10,
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
        }
      ],
      "grid": [
        [
          "N",
          "V",
          "M",
          "E",
          "N",
          "F",
          "Q",
          "E",
          "Q",
          "T"
        ],
        [
          "C",
          "E",
          "Y",
          "I",
          "E",
          "G",
          "F",
          "S",
          "J",
          "E"
        ],
        [
          "L",
          "M",
          "G",
          "M",
          "R",
          "Y",
          "F",
          "O",
          "X",
          "U"
        ],
        [
          "M",
          "U",
          "U",
          "A",
          "O",
          "R",
          "B",
          "R",
          "R",
          "I"
        ],
        [
          "D",
          "O",
          "O",
          "S",
          "T",
          "P",
          "O",
          "L",
          "F",
          "Z"
        ],
        [
          "C",
          "M",
          "T",
          "A",
          "I",
          "S",
          "E",
          "R",
          "U",
          "W"
        ],
        [
          "S",
          "A",
          "Y",
          "N",
          "R",
          "C",
          "X",
          "R",
          "X",
          "N"
        ],
        [
          "J",
          "S",
          "N",
          "Y",
          "A",
          "E",
          "X",
          "O",
          "A",
          "N"
        ],
        [
          "F",
          "K",
          "M",
          "Q",
          "M",
          "H",
          "D",
          "U",
          "F",
          "T"
        ],
        [
          "K",
          "X",
          "T",
          "E",
          "B",
          "G",
          "P",
          "T",
          "Q",
          "O"
        ]
      ],
      "placements": [
        {
          "label": "Mask",
          "value": "MASK",
          "word": "MASK",
          "clean": "MASK",
          "start": {
            "row": 5,
            "col": 1
          },
          "end": {
            "row": 8,
            "col": 1
          },
          "direction": "S",
          "path": [
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
            },
            {
              "row": 8,
              "col": 1
            }
          ]
        },
        {
          "label": "Mirror",
          "value": "MIRROR",
          "word": "MIRROR",
          "clean": "MIRROR",
          "start": {
            "row": 0,
            "col": 2
          },
          "end": {
            "row": 5,
            "col": 7
          },
          "direction": "SE",
          "path": [
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
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
            "col": 1
          },
          "end": {
            "row": 6,
            "col": 5
          },
          "direction": "SE",
          "path": [
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            }
          ]
        },
        {
          "label": "Opera",
          "value": "OPERA",
          "word": "OPERA",
          "clean": "OPERA",
          "start": {
            "row": 3,
            "col": 4
          },
          "end": {
            "row": 7,
            "col": 8
          },
          "direction": "SE",
          "path": [
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            }
          ]
        },
        {
          "label": "Phantom",
          "value": "PHANTOM",
          "word": "PHANTOM",
          "clean": "PHANTOM",
          "start": {
            "row": 9,
            "col": 6
          },
          "end": {
            "row": 3,
            "col": 0
          },
          "direction": "NW",
          "path": [
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 7,
              "col": 4
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 3,
              "col": 0
            }
          ]
        },
        {
          "label": "Raoul",
          "value": "RAOUL",
          "word": "RAOUL",
          "clean": "RAOUL",
          "start": {
            "row": 6,
            "col": 4
          },
          "end": {
            "row": 2,
            "col": 0
          },
          "direction": "NW",
          "path": [
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 3,
              "col": 1
            },
            {
              "row": 2,
              "col": 0
            }
          ]
        },
        {
          "label": "Rose",
          "value": "ROSE",
          "word": "ROSE",
          "clean": "ROSE",
          "start": {
            "row": 3,
            "col": 7
          },
          "end": {
            "row": 0,
            "col": 7
          },
          "direction": "N",
          "path": [
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 0,
              "col": 7
            }
          ]
        },
        {
          "label": "Stage",
          "value": "STAGE",
          "word": "STAGE",
          "clean": "STAGE",
          "start": {
            "row": 5,
            "col": 5
          },
          "end": {
            "row": 1,
            "col": 1
          },
          "direction": "NW",
          "path": [
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 4,
              "col": 4
            },
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
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "size": 10,
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
        }
      ],
      "grid": [
        [
          "A",
          "B",
          "A",
          "H",
          "P",
          "L",
          "E",
          "O",
          "N",
          "C"
        ],
        [
          "W",
          "R",
          "C",
          "G",
          "R",
          "Y",
          "L",
          "K",
          "I",
          "F"
        ],
        [
          "O",
          "Z",
          "Y",
          "S",
          "L",
          "X",
          "Q",
          "G",
          "Q",
          "I"
        ],
        [
          "X",
          "S",
          "X",
          "O",
          "G",
          "I",
          "A",
          "D",
          "P",
          "Y"
        ],
        [
          "E",
          "U",
          "X",
          "Q",
          "R",
          "M",
          "N",
          "F",
          "A",
          "E"
        ],
        [
          "N",
          "W",
          "I",
          "Z",
          "A",
          "R",
          "D",
          "D",
          "D",
          "R"
        ],
        [
          "L",
          "E",
          "X",
          "W",
          "I",
          "T",
          "C",
          "H",
          "A",
          "O"
        ],
        [
          "T",
          "F",
          "E",
          "U",
          "P",
          "Y",
          "V",
          "Y",
          "W",
          "B"
        ],
        [
          "I",
          "M",
          "V",
          "R",
          "U",
          "M",
          "S",
          "T",
          "Q",
          "K"
        ],
        [
          "V",
          "V",
          "W",
          "Y",
          "G",
          "H",
          "U",
          "B",
          "P",
          "W"
        ]
      ],
      "placements": [
        {
          "label": "Elphaba",
          "value": "ELPHABA",
          "word": "ELPHABA",
          "clean": "ELPHABA",
          "start": {
            "row": 0,
            "col": 6
          },
          "end": {
            "row": 0,
            "col": 0
          },
          "direction": "W",
          "path": [
            {
              "row": 0,
              "col": 6
            },
            {
              "row": 0,
              "col": 5
            },
            {
              "row": 0,
              "col": 4
            },
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 0,
              "col": 2
            },
            {
              "row": 0,
              "col": 1
            },
            {
              "row": 0,
              "col": 0
            }
          ]
        },
        {
          "label": "Fiyero",
          "value": "FIYERO",
          "word": "FIYERO",
          "clean": "FIYERO",
          "start": {
            "row": 1,
            "col": 9
          },
          "end": {
            "row": 6,
            "col": 9
          },
          "direction": "S",
          "path": [
            {
              "row": 1,
              "col": 9
            },
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 4,
              "col": 9
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 9
            }
          ]
        },
        {
          "label": "Glinda",
          "value": "GLINDA",
          "word": "GLINDA",
          "clean": "GLINDA",
          "start": {
            "row": 1,
            "col": 3
          },
          "end": {
            "row": 6,
            "col": 8
          },
          "direction": "SE",
          "path": [
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 3,
              "col": 5
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 8
            }
          ]
        },
        {
          "label": "Green",
          "value": "GREEN",
          "word": "GREEN",
          "clean": "GREEN",
          "start": {
            "row": 9,
            "col": 4
          },
          "end": {
            "row": 5,
            "col": 0
          },
          "direction": "NW",
          "path": [
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 8,
              "col": 3
            },
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 5,
              "col": 0
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
            "col": 5
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "direction": "NE",
          "path": [
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
          "label": "Oz",
          "value": "OZ",
          "word": "OZ",
          "clean": "OZ",
          "start": {
            "row": 2,
            "col": 0
          },
          "end": {
            "row": 2,
            "col": 1
          },
          "direction": "E",
          "path": [
            {
              "row": 2,
              "col": 0
            },
            {
              "row": 2,
              "col": 1
            }
          ]
        },
        {
          "label": "Witch",
          "value": "WITCH",
          "word": "WITCH",
          "clean": "WITCH",
          "start": {
            "row": 6,
            "col": 3
          },
          "end": {
            "row": 6,
            "col": 7
          },
          "direction": "E",
          "path": [
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 6,
              "col": 7
            }
          ]
        },
        {
          "label": "Wizard",
          "value": "WIZARD",
          "word": "WIZARD",
          "clean": "WIZARD",
          "start": {
            "row": 5,
            "col": 1
          },
          "end": {
            "row": 5,
            "col": 6
          },
          "direction": "E",
          "path": [
            {
              "row": 5,
              "col": 1
            },
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
            },
            {
              "row": 5,
              "col": 6
            }
          ]
        }
      ]
    },
    {
      "id": 6,
      "size": 10,
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
        }
      ],
      "grid": [
        [
          "추",
          "하",
          "나",
          "엔",
          "후",
          "니",
          "소",
          "소",
          "어",
          "조"
        ],
        [
          "미",
          "코",
          "바",
          "믹",
          "히",
          "아",
          "엑",
          "라",
          "라",
          "허"
        ],
        [
          "디",
          "파",
          "탄",
          "스",
          "에",
          "라",
          "이",
          "티",
          "파",
          "고"
        ],
        [
          "서",
          "아",
          "방",
          "바",
          "스",
          "뱅",
          "빅",
          "브",
          "터",
          "커"
        ],
        [
          "소",
          "터",
          "어",
          "보",
          "파",
          "히",
          "처",
          "히",
          "두",
          "쿠"
        ],
        [
          "버",
          "스",
          "부",
          "고",
          "카",
          "디",
          "비",
          "푸",
          "푸",
          "나"
        ],
        [
          "수",
          "히",
          "진",
          "사",
          "티",
          "초",
          "투",
          "보",
          "시",
          "다"
        ],
        [
          "리",
          "수",
          "주",
          "뉴",
          "주",
          "서",
          "있",
          "거",
          "어",
          "추"
        ],
        [
          "디",
          "푸",
          "카",
          "더",
          "코",
          "키",
          "푸",
          "지",
          "나",
          "미"
        ],
        [
          "노",
          "두",
          "라",
          "서",
          "가",
          "두",
          "치",
          "기",
          "고",
          "차"
        ]
      ],
      "placements": [
        {
          "label": "뉴진스",
          "value": "뉴진스",
          "word": "뉴진스",
          "clean": "뉴진스",
          "start": {
            "row": 7,
            "col": 3
          },
          "end": {
            "row": 5,
            "col": 1
          },
          "direction": "NW",
          "path": [
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
            }
          ]
        },
        {
          "label": "방탄",
          "value": "방탄",
          "word": "방탄",
          "clean": "방탄",
          "start": {
            "row": 3,
            "col": 2
          },
          "end": {
            "row": 2,
            "col": 2
          },
          "direction": "N",
          "path": [
            {
              "row": 3,
              "col": 2
            },
            {
              "row": 2,
              "col": 2
            }
          ]
        },
        {
          "label": "빅뱅",
          "value": "빅뱅",
          "word": "빅뱅",
          "clean": "빅뱅",
          "start": {
            "row": 3,
            "col": 6
          },
          "end": {
            "row": 3,
            "col": 5
          },
          "direction": "W",
          "path": [
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 3,
              "col": 5
            }
          ]
        },
        {
          "label": "아이브",
          "value": "아이브",
          "word": "아이브",
          "clean": "아이브",
          "start": {
            "row": 1,
            "col": 5
          },
          "end": {
            "row": 3,
            "col": 7
          },
          "direction": "SE",
          "path": [
            {
              "row": 1,
              "col": 5
            },
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            }
          ]
        },
        {
          "label": "에스파",
          "value": "에스파",
          "word": "에스파",
          "clean": "에스파",
          "start": {
            "row": 2,
            "col": 4
          },
          "end": {
            "row": 4,
            "col": 4
          },
          "direction": "S",
          "path": [
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 4,
              "col": 4
            }
          ]
        },
        {
          "label": "엑소",
          "value": "엑소",
          "word": "엑소",
          "clean": "엑소",
          "start": {
            "row": 1,
            "col": 6
          },
          "end": {
            "row": 0,
            "col": 7
          },
          "direction": "NE",
          "path": [
            {
              "row": 1,
              "col": 6
            },
            {
              "row": 0,
              "col": 7
            }
          ]
        },
        {
          "label": "엔믹스",
          "value": "엔믹스",
          "word": "엔믹스",
          "clean": "엔믹스",
          "start": {
            "row": 0,
            "col": 3
          },
          "end": {
            "row": 2,
            "col": 3
          },
          "direction": "S",
          "path": [
            {
              "row": 0,
              "col": 3
            },
            {
              "row": 1,
              "col": 3
            },
            {
              "row": 2,
              "col": 3
            }
          ]
        },
        {
          "label": "있지",
          "value": "있지",
          "word": "있지",
          "clean": "있지",
          "start": {
            "row": 7,
            "col": 6
          },
          "end": {
            "row": 8,
            "col": 7
          },
          "direction": "SE",
          "path": [
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 8,
              "col": 7
            }
          ]
        }
      ]
    }
  ]
} as const;

export default dailyPuzzles;
