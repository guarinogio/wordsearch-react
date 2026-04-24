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
  "topic": "Multi Topic",
  "hash": "839ef7dc5eca73497816f4cbca191874f0629e0c98c4b8a082816d2444d6e260",
  "puzzles": [
    {
      "id": 1,
      "size": 20,
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
          "label": "Schuyler",
          "value": "SCHUYLER"
        },
        {
          "label": "Washington",
          "value": "WASHINGTON"
        },
        {
          "label": "Jefferson",
          "value": "JEFFERSON"
        },
        {
          "label": "Lafayette",
          "value": "LAFAYETTE"
        },
        {
          "label": "Laurens",
          "value": "LAURENS"
        },
        {
          "label": "Yorktown",
          "value": "YORKTOWN"
        },
        {
          "label": "Duel",
          "value": "DUEL"
        },
        {
          "label": "Cabinet",
          "value": "CABINET"
        },
        {
          "label": "Revolution",
          "value": "REVOLUTION"
        },
        {
          "label": "Treasury",
          "value": "TREASURY"
        },
        {
          "label": "Broadway",
          "value": "BROADWAY"
        }
      ],
      "grid": [
        [
          "Z",
          "T",
          "E",
          "T",
          "F",
          "P",
          "U",
          "A",
          "W",
          "K",
          "A",
          "B",
          "T",
          "P",
          "W",
          "S",
          "W",
          "B",
          "M",
          "L"
        ],
        [
          "R",
          "H",
          "H",
          "I",
          "D",
          "W",
          "P",
          "I",
          "C",
          "J",
          "A",
          "N",
          "F",
          "N",
          "V",
          "T",
          "M",
          "D",
          "M",
          "Q"
        ],
        [
          "M",
          "V",
          "R",
          "N",
          "M",
          "E",
          "U",
          "A",
          "U",
          "B",
          "W",
          "S",
          "U",
          "M",
          "Z",
          "F",
          "T",
          "H",
          "M",
          "C"
        ],
        [
          "X",
          "B",
          "F",
          "Z",
          "O",
          "X",
          "B",
          "A",
          "Z",
          "V",
          "R",
          "N",
          "Y",
          "Q",
          "B",
          "R",
          "V",
          "L",
          "P",
          "B"
        ],
        [
          "A",
          "R",
          "Y",
          "H",
          "T",
          "I",
          "K",
          "J",
          "C",
          "L",
          "Y",
          "O",
          "R",
          "K",
          "T",
          "O",
          "W",
          "N",
          "X",
          "R"
        ],
        [
          "A",
          "Z",
          "J",
          "U",
          "N",
          "O",
          "T",
          "G",
          "N",
          "I",
          "H",
          "S",
          "A",
          "W",
          "W",
          "I",
          "Y",
          "I",
          "A",
          "S"
        ],
        [
          "F",
          "G",
          "W",
          "E",
          "P",
          "C",
          "I",
          "U",
          "F",
          "B",
          "L",
          "R",
          "X",
          "D",
          "Z",
          "Q",
          "S",
          "G",
          "Z",
          "I"
        ],
        [
          "S",
          "R",
          "T",
          "J",
          "B",
          "E",
          "Q",
          "Q",
          "L",
          "N",
          "S",
          "E",
          "V",
          "A",
          "W",
          "U",
          "H",
          "Z",
          "D",
          "V"
        ],
        [
          "X",
          "U",
          "A",
          "A",
          "M",
          "U",
          "N",
          "C",
          "G",
          "O",
          "T",
          "F",
          "G",
          "J",
          "G",
          "A",
          "S",
          "H",
          "G",
          "Q"
        ],
        [
          "M",
          "O",
          "Q",
          "O",
          "H",
          "K",
          "K",
          "M",
          "U",
          "T",
          "V",
          "F",
          "K",
          "N",
          "S",
          "A",
          "Y",
          "J",
          "Q",
          "U"
        ],
        [
          "Y",
          "P",
          "Y",
          "H",
          "E",
          "P",
          "D",
          "U",
          "E",
          "L",
          "J",
          "E",
          "W",
          "R",
          "A",
          "B",
          "C",
          "F",
          "T",
          "Q"
        ],
        [
          "Q",
          "P",
          "B",
          "M",
          "L",
          "L",
          "O",
          "Y",
          "N",
          "I",
          "A",
          "J",
          "R",
          "C",
          "A",
          "Q",
          "G",
          "H",
          "E",
          "S"
        ],
        [
          "I",
          "E",
          "B",
          "P",
          "I",
          "O",
          "A",
          "R",
          "S",
          "M",
          "M",
          "U",
          "G",
          "Y",
          "J",
          "I",
          "K",
          "R",
          "J",
          "P"
        ],
        [
          "S",
          "Z",
          "E",
          "D",
          "Z",
          "F",
          "R",
          "U",
          "O",
          "A",
          "B",
          "J",
          "R",
          "K",
          "C",
          "N",
          "Q",
          "F",
          "G",
          "R"
        ],
        [
          "N",
          "M",
          "Y",
          "X",
          "A",
          "F",
          "C",
          "S",
          "C",
          "H",
          "U",
          "Y",
          "L",
          "E",
          "R",
          "B",
          "X",
          "B",
          "J",
          "E"
        ],
        [
          "F",
          "Z",
          "J",
          "L",
          "Y",
          "S",
          "M",
          "A",
          "T",
          "Z",
          "P",
          "U",
          "D",
          "C",
          "N",
          "E",
          "Y",
          "J",
          "Z",
          "Q"
        ],
        [
          "J",
          "C",
          "R",
          "Q",
          "S",
          "J",
          "V",
          "E",
          "R",
          "H",
          "I",
          "M",
          "L",
          "V",
          "C",
          "S",
          "U",
          "X",
          "N",
          "I"
        ],
        [
          "C",
          "A",
          "S",
          "T",
          "C",
          "T",
          "E",
          "R",
          "F",
          "V",
          "I",
          "Q",
          "G",
          "A",
          "R",
          "C",
          "X",
          "L",
          "S",
          "Y"
        ],
        [
          "Y",
          "J",
          "O",
          "V",
          "Z",
          "C",
          "F",
          "T",
          "B",
          "G",
          "N",
          "Y",
          "V",
          "L",
          "B",
          "O",
          "I",
          "O",
          "B",
          "N"
        ],
        [
          "O",
          "E",
          "C",
          "W",
          "K",
          "N",
          "X",
          "I",
          "X",
          "O",
          "M",
          "A",
          "I",
          "Z",
          "R",
          "B",
          "S",
          "A",
          "E",
          "B"
        ]
      ],
      "placements": [
        {
          "label": "Hamilton",
          "value": "HAMILTON",
          "word": "HAMILTON",
          "clean": "HAMILTON",
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
          "label": "Burr",
          "value": "BURR",
          "word": "BURR",
          "clean": "BURR",
          "start": {
            "row": 13,
            "col": 10
          },
          "end": {
            "row": 10,
            "col": 13
          },
          "direction": "NE",
          "path": [
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 10,
              "col": 13
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
            "col": 4
          },
          "end": {
            "row": 14,
            "col": 4
          },
          "direction": "S",
          "path": [
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
            },
            {
              "row": 14,
              "col": 4
            }
          ]
        },
        {
          "label": "Angelica",
          "value": "ANGELICA",
          "word": "ANGELICA",
          "clean": "ANGELICA",
          "start": {
            "row": 10,
            "col": 14
          },
          "end": {
            "row": 3,
            "col": 7
          },
          "direction": "NW",
          "path": [
            {
              "row": 10,
              "col": 14
            },
            {
              "row": 9,
              "col": 13
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 3,
              "col": 7
            }
          ]
        },
        {
          "label": "Schuyler",
          "value": "SCHUYLER",
          "word": "SCHUYLER",
          "clean": "SCHUYLER",
          "start": {
            "row": 14,
            "col": 7
          },
          "end": {
            "row": 14,
            "col": 14
          },
          "direction": "E",
          "path": [
            {
              "row": 14,
              "col": 7
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 14,
              "col": 9
            },
            {
              "row": 14,
              "col": 10
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 14,
              "col": 14
            }
          ]
        },
        {
          "label": "Washington",
          "value": "WASHINGTON",
          "word": "WASHINGTON",
          "clean": "WASHINGTON",
          "start": {
            "row": 5,
            "col": 13
          },
          "end": {
            "row": 5,
            "col": 4
          },
          "direction": "W",
          "path": [
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 5,
              "col": 10
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 5,
              "col": 4
            }
          ]
        },
        {
          "label": "Jefferson",
          "value": "JEFFERSON",
          "word": "JEFFERSON",
          "clean": "JEFFERSON",
          "start": {
            "row": 11,
            "col": 11
          },
          "end": {
            "row": 3,
            "col": 11
          },
          "direction": "N",
          "path": [
            {
              "row": 11,
              "col": 11
            },
            {
              "row": 10,
              "col": 11
            },
            {
              "row": 9,
              "col": 11
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 6,
              "col": 11
            },
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 4,
              "col": 11
            },
            {
              "row": 3,
              "col": 11
            }
          ]
        },
        {
          "label": "Lafayette",
          "value": "LAFAYETTE",
          "word": "LAFAYETTE",
          "clean": "LAFAYETTE",
          "start": {
            "row": 15,
            "col": 3
          },
          "end": {
            "row": 7,
            "col": 11
          },
          "direction": "NE",
          "path": [
            {
              "row": 15,
              "col": 3
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 8,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            }
          ]
        },
        {
          "label": "Laurens",
          "value": "LAURENS",
          "word": "LAURENS",
          "clean": "LAURENS",
          "start": {
            "row": 10,
            "col": 9
          },
          "end": {
            "row": 16,
            "col": 15
          },
          "direction": "SE",
          "path": [
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 11,
              "col": 10
            },
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 15,
              "col": 14
            },
            {
              "row": 16,
              "col": 15
            }
          ]
        },
        {
          "label": "Yorktown",
          "value": "YORKTOWN",
          "word": "YORKTOWN",
          "clean": "YORKTOWN",
          "start": {
            "row": 4,
            "col": 10
          },
          "end": {
            "row": 4,
            "col": 17
          },
          "direction": "E",
          "path": [
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 4,
              "col": 11
            },
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 4,
              "col": 13
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 4,
              "col": 15
            },
            {
              "row": 4,
              "col": 16
            },
            {
              "row": 4,
              "col": 17
            }
          ]
        },
        {
          "label": "Duel",
          "value": "DUEL",
          "word": "DUEL",
          "clean": "DUEL",
          "start": {
            "row": 10,
            "col": 6
          },
          "end": {
            "row": 10,
            "col": 9
          },
          "direction": "E",
          "path": [
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 10,
              "col": 9
            }
          ]
        },
        {
          "label": "Cabinet",
          "value": "CABINET",
          "word": "CABINET",
          "clean": "CABINET",
          "start": {
            "row": 1,
            "col": 8
          },
          "end": {
            "row": 7,
            "col": 2
          },
          "direction": "SW",
          "path": [
            {
              "row": 1,
              "col": 8
            },
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
            }
          ]
        },
        {
          "label": "Revolution",
          "value": "REVOLUTION",
          "word": "REVOLUTION",
          "clean": "REVOLUTION",
          "start": {
            "row": 11,
            "col": 12
          },
          "end": {
            "row": 2,
            "col": 3
          },
          "direction": "NW",
          "path": [
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 10,
              "col": 11
            },
            {
              "row": 9,
              "col": 10
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 2,
              "col": 3
            }
          ]
        },
        {
          "label": "Treasury",
          "value": "TREASURY",
          "word": "TREASURY",
          "clean": "TREASURY",
          "start": {
            "row": 18,
            "col": 7
          },
          "end": {
            "row": 11,
            "col": 7
          },
          "direction": "N",
          "path": [
            {
              "row": 18,
              "col": 7
            },
            {
              "row": 17,
              "col": 7
            },
            {
              "row": 16,
              "col": 7
            },
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
            }
          ]
        },
        {
          "label": "Broadway",
          "value": "BROADWAY",
          "word": "BROADWAY",
          "clean": "BROADWAY",
          "start": {
            "row": 2,
            "col": 9
          },
          "end": {
            "row": 9,
            "col": 16
          },
          "direction": "SE",
          "path": [
            {
              "row": 2,
              "col": 9
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 4,
              "col": 11
            },
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 9,
              "col": 16
            }
          ]
        }
      ]
    },
    {
      "id": 2,
      "size": 20,
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
          "label": "Rafiki",
          "value": "RAFIKI"
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
          "label": "Pride Rock",
          "value": "PRIDEROCK"
        },
        {
          "label": "Savanna",
          "value": "SAVANNA"
        },
        {
          "label": "Circle",
          "value": "CIRCLE"
        },
        {
          "label": "Hakuna",
          "value": "HAKUNA"
        },
        {
          "label": "Lioness",
          "value": "LIONESS"
        },
        {
          "label": "Kingdom",
          "value": "KINGDOM"
        },
        {
          "label": "Mask",
          "value": "MASK"
        },
        {
          "label": "Puppet",
          "value": "PUPPET"
        }
      ],
      "grid": [
        [
          "L",
          "I",
          "B",
          "B",
          "G",
          "F",
          "S",
          "K",
          "Q",
          "Y",
          "K",
          "P",
          "V",
          "R",
          "D",
          "Z",
          "H",
          "X",
          "F",
          "C"
        ],
        [
          "V",
          "D",
          "X",
          "V",
          "C",
          "X",
          "W",
          "G",
          "E",
          "L",
          "C",
          "R",
          "I",
          "C",
          "W",
          "W",
          "D",
          "D",
          "A",
          "O"
        ],
        [
          "K",
          "J",
          "S",
          "I",
          "U",
          "E",
          "G",
          "X",
          "L",
          "G",
          "O",
          "L",
          "I",
          "O",
          "N",
          "E",
          "S",
          "S",
          "N",
          "C"
        ],
        [
          "G",
          "O",
          "C",
          "S",
          "Z",
          "V",
          "U",
          "G",
          "K",
          "F",
          "R",
          "C",
          "C",
          "W",
          "W",
          "X",
          "A",
          "N",
          "U",
          "C"
        ],
        [
          "V",
          "R",
          "A",
          "W",
          "B",
          "E",
          "W",
          "G",
          "V",
          "M",
          "E",
          "I",
          "S",
          "T",
          "B",
          "F",
          "V",
          "A",
          "K",
          "L"
        ],
        [
          "L",
          "N",
          "R",
          "A",
          "F",
          "I",
          "K",
          "I",
          "N",
          "G",
          "D",
          "O",
          "M",
          "I",
          "U",
          "M",
          "A",
          "R",
          "A",
          "K"
        ],
        [
          "B",
          "Y",
          "D",
          "F",
          "B",
          "E",
          "M",
          "T",
          "T",
          "B",
          "I",
          "L",
          "V",
          "M",
          "M",
          "L",
          "N",
          "B",
          "H",
          "S"
        ],
        [
          "A",
          "J",
          "K",
          "D",
          "X",
          "M",
          "N",
          "S",
          "J",
          "E",
          "R",
          "U",
          "W",
          "O",
          "A",
          "B",
          "N",
          "A",
          "O",
          "K"
        ],
        [
          "F",
          "Q",
          "T",
          "S",
          "W",
          "G",
          "U",
          "R",
          "I",
          "R",
          "P",
          "I",
          "O",
          "N",
          "Q",
          "S",
          "A",
          "J",
          "V",
          "K"
        ],
        [
          "Q",
          "K",
          "E",
          "C",
          "Y",
          "S",
          "V",
          "P",
          "W",
          "X",
          "L",
          "P",
          "P",
          "Q",
          "G",
          "O",
          "K",
          "K",
          "B",
          "X"
        ],
        [
          "E",
          "N",
          "X",
          "J",
          "G",
          "V",
          "K",
          "Y",
          "K",
          "C",
          "N",
          "B",
          "U",
          "A",
          "Z",
          "F",
          "O",
          "O",
          "J",
          "C"
        ],
        [
          "K",
          "W",
          "H",
          "Z",
          "W",
          "Z",
          "T",
          "E",
          "Q",
          "Z",
          "N",
          "A",
          "L",
          "P",
          "U",
          "E",
          "F",
          "R",
          "F",
          "W"
        ],
        [
          "H",
          "B",
          "O",
          "L",
          "H",
          "W",
          "T",
          "R",
          "L",
          "V",
          "R",
          "I",
          "U",
          "D",
          "G",
          "C",
          "T",
          "G",
          "Q",
          "Q"
        ],
        [
          "Q",
          "K",
          "D",
          "B",
          "L",
          "Y",
          "X",
          "J",
          "G",
          "R",
          "K",
          "A",
          "U",
          "E",
          "U",
          "G",
          "R",
          "J",
          "W",
          "H"
        ],
        [
          "Y",
          "H",
          "M",
          "P",
          "L",
          "H",
          "P",
          "Y",
          "M",
          "C",
          "Z",
          "S",
          "M",
          "L",
          "V",
          "E",
          "M",
          "R",
          "U",
          "R"
        ],
        [
          "O",
          "E",
          "B",
          "E",
          "M",
          "B",
          "S",
          "B",
          "E",
          "E",
          "Z",
          "J",
          "V",
          "D",
          "E",
          "U",
          "I",
          "D",
          "V",
          "X"
        ],
        [
          "O",
          "X",
          "M",
          "U",
          "D",
          "F",
          "U",
          "E",
          "K",
          "N",
          "E",
          "K",
          "I",
          "E",
          "M",
          "I",
          "G",
          "M",
          "M",
          "T"
        ],
        [
          "T",
          "O",
          "K",
          "C",
          "X",
          "B",
          "P",
          "E",
          "K",
          "A",
          "S",
          "K",
          "P",
          "R",
          "H",
          "Y",
          "L",
          "S",
          "Z",
          "F"
        ],
        [
          "E",
          "N",
          "R",
          "X",
          "B",
          "K",
          "F",
          "U",
          "B",
          "H",
          "E",
          "W",
          "A",
          "O",
          "R",
          "F",
          "M",
          "S",
          "C",
          "M"
        ],
        [
          "M",
          "L",
          "X",
          "E",
          "P",
          "M",
          "F",
          "M",
          "U",
          "E",
          "Z",
          "G",
          "M",
          "S",
          "P",
          "M",
          "Q",
          "L",
          "P",
          "Q"
        ]
      ],
      "placements": [
        {
          "label": "Simba",
          "value": "SIMBA",
          "word": "SIMBA",
          "clean": "SIMBA",
          "start": {
            "row": 4,
            "col": 12
          },
          "end": {
            "row": 8,
            "col": 16
          },
          "direction": "SE",
          "path": [
            {
              "row": 4,
              "col": 12
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 7,
              "col": 15
            },
            {
              "row": 8,
              "col": 16
            }
          ]
        },
        {
          "label": "Nala",
          "value": "NALA",
          "word": "NALA",
          "clean": "NALA",
          "start": {
            "row": 8,
            "col": 13
          },
          "end": {
            "row": 5,
            "col": 16
          },
          "direction": "NE",
          "path": [
            {
              "row": 8,
              "col": 13
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 6,
              "col": 15
            },
            {
              "row": 5,
              "col": 16
            }
          ]
        },
        {
          "label": "Mufasa",
          "value": "MUFASA",
          "word": "MUFASA",
          "clean": "MUFASA",
          "start": {
            "row": 6,
            "col": 13
          },
          "end": {
            "row": 1,
            "col": 18
          },
          "direction": "NE",
          "path": [
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 5,
              "col": 14
            },
            {
              "row": 4,
              "col": 15
            },
            {
              "row": 3,
              "col": 16
            },
            {
              "row": 2,
              "col": 17
            },
            {
              "row": 1,
              "col": 18
            }
          ]
        },
        {
          "label": "Scar",
          "value": "SCAR",
          "word": "SCAR",
          "clean": "SCAR",
          "start": {
            "row": 2,
            "col": 2
          },
          "end": {
            "row": 5,
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
            }
          ]
        },
        {
          "label": "Rafiki",
          "value": "RAFIKI",
          "word": "RAFIKI",
          "clean": "RAFIKI",
          "start": {
            "row": 5,
            "col": 2
          },
          "end": {
            "row": 5,
            "col": 7
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
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 5,
              "col": 7
            }
          ]
        },
        {
          "label": "Timon",
          "value": "TIMON",
          "word": "TIMON",
          "clean": "TIMON",
          "start": {
            "row": 4,
            "col": 13
          },
          "end": {
            "row": 8,
            "col": 13
          },
          "direction": "S",
          "path": [
            {
              "row": 4,
              "col": 13
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 7,
              "col": 13
            },
            {
              "row": 8,
              "col": 13
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
            "col": 7
          },
          "end": {
            "row": 4,
            "col": 2
          },
          "direction": "NW",
          "path": [
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 8,
              "col": 6
            },
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
            }
          ]
        },
        {
          "label": "Pride Rock",
          "value": "PRIDEROCK",
          "word": "PRIDEROCK",
          "clean": "PRIDEROCK",
          "start": {
            "row": 8,
            "col": 10
          },
          "end": {
            "row": 0,
            "col": 10
          },
          "direction": "N",
          "path": [
            {
              "row": 8,
              "col": 10
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 5,
              "col": 10
            },
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 2,
              "col": 10
            },
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 0,
              "col": 10
            }
          ]
        },
        {
          "label": "Savanna",
          "value": "SAVANNA",
          "word": "SAVANNA",
          "clean": "SAVANNA",
          "start": {
            "row": 2,
            "col": 16
          },
          "end": {
            "row": 8,
            "col": 16
          },
          "direction": "S",
          "path": [
            {
              "row": 2,
              "col": 16
            },
            {
              "row": 3,
              "col": 16
            },
            {
              "row": 4,
              "col": 16
            },
            {
              "row": 5,
              "col": 16
            },
            {
              "row": 6,
              "col": 16
            },
            {
              "row": 7,
              "col": 16
            },
            {
              "row": 8,
              "col": 16
            }
          ]
        },
        {
          "label": "Circle",
          "value": "CIRCLE",
          "word": "CIRCLE",
          "clean": "CIRCLE",
          "start": {
            "row": 1,
            "col": 13
          },
          "end": {
            "row": 1,
            "col": 8
          },
          "direction": "W",
          "path": [
            {
              "row": 1,
              "col": 13
            },
            {
              "row": 1,
              "col": 12
            },
            {
              "row": 1,
              "col": 11
            },
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 1,
              "col": 9
            },
            {
              "row": 1,
              "col": 8
            }
          ]
        },
        {
          "label": "Hakuna",
          "value": "HAKUNA",
          "word": "HAKUNA",
          "clean": "HAKUNA",
          "start": {
            "row": 6,
            "col": 18
          },
          "end": {
            "row": 1,
            "col": 18
          },
          "direction": "N",
          "path": [
            {
              "row": 6,
              "col": 18
            },
            {
              "row": 5,
              "col": 18
            },
            {
              "row": 4,
              "col": 18
            },
            {
              "row": 3,
              "col": 18
            },
            {
              "row": 2,
              "col": 18
            },
            {
              "row": 1,
              "col": 18
            }
          ]
        },
        {
          "label": "Lioness",
          "value": "LIONESS",
          "word": "LIONESS",
          "clean": "LIONESS",
          "start": {
            "row": 2,
            "col": 11
          },
          "end": {
            "row": 2,
            "col": 17
          },
          "direction": "E",
          "path": [
            {
              "row": 2,
              "col": 11
            },
            {
              "row": 2,
              "col": 12
            },
            {
              "row": 2,
              "col": 13
            },
            {
              "row": 2,
              "col": 14
            },
            {
              "row": 2,
              "col": 15
            },
            {
              "row": 2,
              "col": 16
            },
            {
              "row": 2,
              "col": 17
            }
          ]
        },
        {
          "label": "Kingdom",
          "value": "KINGDOM",
          "word": "KINGDOM",
          "clean": "KINGDOM",
          "start": {
            "row": 5,
            "col": 6
          },
          "end": {
            "row": 5,
            "col": 12
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 5,
              "col": 10
            },
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 5,
              "col": 12
            }
          ]
        },
        {
          "label": "Mask",
          "value": "MASK",
          "word": "MASK",
          "clean": "MASK",
          "start": {
            "row": 6,
            "col": 13
          },
          "end": {
            "row": 9,
            "col": 16
          },
          "direction": "SE",
          "path": [
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 9,
              "col": 16
            }
          ]
        },
        {
          "label": "Puppet",
          "value": "PUPPET",
          "word": "PUPPET",
          "clean": "PUPPET",
          "start": {
            "row": 11,
            "col": 13
          },
          "end": {
            "row": 6,
            "col": 8
          },
          "direction": "NW",
          "path": [
            {
              "row": 11,
              "col": 13
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 9,
              "col": 11
            },
            {
              "row": 8,
              "col": 10
            },
            {
              "row": 7,
              "col": 9
            },
            {
              "row": 6,
              "col": 8
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "size": 20,
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
          "label": "Enjolras",
          "value": "ENJOLRAS"
        },
        {
          "label": "Gavroche",
          "value": "GAVROCHE"
        },
        {
          "label": "Barricade",
          "value": "BARRICADE"
        },
        {
          "label": "Revolution",
          "value": "REVOLUTION"
        },
        {
          "label": "Paris",
          "value": "PARIS"
        },
        {
          "label": "Bishop",
          "value": "BISHOP"
        },
        {
          "label": "Innkeeper",
          "value": "INNKEEPER"
        },
        {
          "label": "Students",
          "value": "STUDENTS"
        },
        {
          "label": "Redemption",
          "value": "REDEMPTION"
        }
      ],
      "grid": [
        [
          "Y",
          "T",
          "I",
          "F",
          "M",
          "W",
          "J",
          "G",
          "N",
          "E",
          "L",
          "K",
          "E",
          "K",
          "B",
          "R",
          "Z",
          "F",
          "O",
          "A"
        ],
        [
          "F",
          "M",
          "V",
          "Q",
          "R",
          "D",
          "W",
          "O",
          "T",
          "I",
          "N",
          "N",
          "D",
          "W",
          "M",
          "B",
          "R",
          "K",
          "F",
          "Y"
        ],
        [
          "B",
          "Y",
          "F",
          "W",
          "P",
          "E",
          "H",
          "M",
          "H",
          "E",
          "N",
          "I",
          "N",
          "O",
          "P",
          "E",
          "Z",
          "S",
          "M",
          "X"
        ],
        [
          "J",
          "E",
          "S",
          "P",
          "G",
          "F",
          "D",
          "W",
          "B",
          "M",
          "H",
          "O",
          "T",
          "Q",
          "Q",
          "V",
          "I",
          "J",
          "Z",
          "D"
        ],
        [
          "D",
          "Z",
          "A",
          "L",
          "M",
          "X",
          "C",
          "E",
          "H",
          "S",
          "Y",
          "C",
          "N",
          "N",
          "D",
          "B",
          "G",
          "V",
          "W",
          "D"
        ],
        [
          "Z",
          "R",
          "H",
          "Y",
          "N",
          "O",
          "L",
          "R",
          "M",
          "R",
          "U",
          "W",
          "O",
          "J",
          "A",
          "D",
          "V",
          "Y",
          "W",
          "O"
        ],
        [
          "V",
          "Q",
          "R",
          "L",
          "G",
          "A",
          "Y",
          "H",
          "Q",
          "P",
          "C",
          "I",
          "Y",
          "R",
          "K",
          "F",
          "U",
          "R",
          "V",
          "T"
        ],
        [
          "A",
          "W",
          "K",
          "T",
          "X",
          "S",
          "E",
          "O",
          "V",
          "N",
          "T",
          "V",
          "R",
          "F",
          "V",
          "K",
          "J",
          "X",
          "P",
          "Y"
        ],
        [
          "P",
          "F",
          "D",
          "V",
          "E",
          "S",
          "J",
          "J",
          "B",
          "U",
          "S",
          "I",
          "R",
          "A",
          "P",
          "A",
          "G",
          "A",
          "P",
          "Q"
        ],
        [
          "O",
          "U",
          "O",
          "W",
          "J",
          "T",
          "T",
          "U",
          "L",
          "I",
          "C",
          "P",
          "O",
          "G",
          "M",
          "D",
          "G",
          "W",
          "A",
          "S"
        ],
        [
          "H",
          "D",
          "E",
          "W",
          "A",
          "U",
          "J",
          "O",
          "Q",
          "A",
          "M",
          "W",
          "J",
          "N",
          "B",
          "D",
          "F",
          "Z",
          "Z",
          "Z"
        ],
        [
          "S",
          "R",
          "B",
          "P",
          "V",
          "D",
          "V",
          "F",
          "D",
          "Z",
          "V",
          "N",
          "J",
          "H",
          "F",
          "W",
          "R",
          "S",
          "M",
          "L"
        ],
        [
          "I",
          "N",
          "N",
          "K",
          "E",
          "E",
          "P",
          "E",
          "R",
          "Q",
          "V",
          "S",
          "B",
          "U",
          "T",
          "W",
          "G",
          "S",
          "W",
          "Y"
        ],
        [
          "B",
          "U",
          "Q",
          "E",
          "R",
          "N",
          "T",
          "X",
          "R",
          "O",
          "L",
          "F",
          "A",
          "Z",
          "W",
          "X",
          "W",
          "K",
          "C",
          "B"
        ],
        [
          "O",
          "T",
          "W",
          "K",
          "T",
          "T",
          "J",
          "P",
          "F",
          "R",
          "I",
          "P",
          "O",
          "C",
          "H",
          "C",
          "S",
          "S",
          "S",
          "G"
        ],
        [
          "Y",
          "V",
          "B",
          "C",
          "E",
          "S",
          "F",
          "O",
          "V",
          "Z",
          "I",
          "U",
          "P",
          "L",
          "F",
          "Z",
          "U",
          "V",
          "S",
          "E"
        ],
        [
          "X",
          "O",
          "M",
          "S",
          "W",
          "W",
          "F",
          "R",
          "L",
          "F",
          "L",
          "A",
          "W",
          "Z",
          "Q",
          "O",
          "Z",
          "S",
          "Y",
          "E"
        ],
        [
          "H",
          "L",
          "O",
          "J",
          "J",
          "N",
          "O",
          "H",
          "M",
          "R",
          "O",
          "U",
          "S",
          "P",
          "X",
          "Y",
          "W",
          "C",
          "U",
          "Z"
        ],
        [
          "I",
          "C",
          "Y",
          "Z",
          "H",
          "P",
          "V",
          "W",
          "Z",
          "A",
          "A",
          "Z",
          "R",
          "Z",
          "H",
          "S",
          "C",
          "T",
          "R",
          "J"
        ],
        [
          "Q",
          "L",
          "G",
          "E",
          "B",
          "R",
          "J",
          "H",
          "Q",
          "D",
          "Z",
          "S",
          "U",
          "K",
          "P",
          "T",
          "Y",
          "V",
          "L",
          "M"
        ]
      ],
      "placements": [
        {
          "label": "Valjean",
          "value": "VALJEAN",
          "word": "VALJEAN",
          "clean": "VALJEAN",
          "start": {
            "row": 11,
            "col": 10
          },
          "end": {
            "row": 5,
            "col": 4
          },
          "direction": "NW",
          "path": [
            {
              "row": 11,
              "col": 10
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 5,
              "col": 4
            }
          ]
        },
        {
          "label": "Javert",
          "value": "JAVERT",
          "word": "JAVERT",
          "clean": "JAVERT",
          "start": {
            "row": 9,
            "col": 4
          },
          "end": {
            "row": 14,
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
            },
            {
              "row": 14,
              "col": 4
            }
          ]
        },
        {
          "label": "Fantine",
          "value": "FANTINE",
          "word": "FANTINE",
          "clean": "FANTINE",
          "start": {
            "row": 6,
            "col": 15
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "direction": "NW",
          "path": [
            {
              "row": 6,
              "col": 15
            },
            {
              "row": 5,
              "col": 14
            },
            {
              "row": 4,
              "col": 13
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 2,
              "col": 11
            },
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 0,
              "col": 9
            }
          ]
        },
        {
          "label": "Cosette",
          "value": "COSETTE",
          "word": "COSETTE",
          "clean": "COSETTE",
          "start": {
            "row": 18,
            "col": 1
          },
          "end": {
            "row": 12,
            "col": 7
          },
          "direction": "NE",
          "path": [
            {
              "row": 18,
              "col": 1
            },
            {
              "row": 17,
              "col": 2
            },
            {
              "row": 16,
              "col": 3
            },
            {
              "row": 15,
              "col": 4
            },
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            }
          ]
        },
        {
          "label": "Marius",
          "value": "MARIUS",
          "word": "MARIUS",
          "clean": "MARIUS",
          "start": {
            "row": 9,
            "col": 14
          },
          "end": {
            "row": 4,
            "col": 9
          },
          "direction": "NW",
          "path": [
            {
              "row": 9,
              "col": 14
            },
            {
              "row": 8,
              "col": 13
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 6,
              "col": 11
            },
            {
              "row": 5,
              "col": 10
            },
            {
              "row": 4,
              "col": 9
            }
          ]
        },
        {
          "label": "Eponine",
          "value": "EPONINE",
          "word": "EPONINE",
          "clean": "EPONINE",
          "start": {
            "row": 2,
            "col": 15
          },
          "end": {
            "row": 2,
            "col": 9
          },
          "direction": "W",
          "path": [
            {
              "row": 2,
              "col": 15
            },
            {
              "row": 2,
              "col": 14
            },
            {
              "row": 2,
              "col": 13
            },
            {
              "row": 2,
              "col": 12
            },
            {
              "row": 2,
              "col": 11
            },
            {
              "row": 2,
              "col": 10
            },
            {
              "row": 2,
              "col": 9
            }
          ]
        },
        {
          "label": "Enjolras",
          "value": "ENJOLRAS",
          "word": "ENJOLRAS",
          "clean": "ENJOLRAS",
          "start": {
            "row": 12,
            "col": 4
          },
          "end": {
            "row": 19,
            "col": 11
          },
          "direction": "SE",
          "path": [
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 16,
              "col": 8
            },
            {
              "row": 17,
              "col": 9
            },
            {
              "row": 18,
              "col": 10
            },
            {
              "row": 19,
              "col": 11
            }
          ]
        },
        {
          "label": "Gavroche",
          "value": "GAVROCHE",
          "word": "GAVROCHE",
          "clean": "GAVROCHE",
          "start": {
            "row": 9,
            "col": 16
          },
          "end": {
            "row": 2,
            "col": 9
          },
          "direction": "NW",
          "path": [
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 4,
              "col": 11
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 2,
              "col": 9
            }
          ]
        },
        {
          "label": "Barricade",
          "value": "BARRICADE",
          "word": "BARRICADE",
          "clean": "BARRICADE",
          "start": {
            "row": 4,
            "col": 15
          },
          "end": {
            "row": 12,
            "col": 7
          },
          "direction": "SW",
          "path": [
            {
              "row": 4,
              "col": 15
            },
            {
              "row": 5,
              "col": 14
            },
            {
              "row": 6,
              "col": 13
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 9,
              "col": 10
            },
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 12,
              "col": 7
            }
          ]
        },
        {
          "label": "Revolution",
          "value": "REVOLUTION",
          "word": "REVOLUTION",
          "clean": "REVOLUTION",
          "start": {
            "row": 13,
            "col": 4
          },
          "end": {
            "row": 4,
            "col": 13
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
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 6,
              "col": 11
            },
            {
              "row": 5,
              "col": 12
            },
            {
              "row": 4,
              "col": 13
            }
          ]
        },
        {
          "label": "Paris",
          "value": "PARIS",
          "word": "PARIS",
          "clean": "PARIS",
          "start": {
            "row": 8,
            "col": 14
          },
          "end": {
            "row": 8,
            "col": 10
          },
          "direction": "W",
          "path": [
            {
              "row": 8,
              "col": 14
            },
            {
              "row": 8,
              "col": 13
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 8,
              "col": 10
            }
          ]
        },
        {
          "label": "Bishop",
          "value": "BISHOP",
          "word": "BISHOP",
          "clean": "BISHOP",
          "start": {
            "row": 13,
            "col": 0
          },
          "end": {
            "row": 8,
            "col": 0
          },
          "direction": "N",
          "path": [
            {
              "row": 13,
              "col": 0
            },
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 11,
              "col": 0
            },
            {
              "row": 10,
              "col": 0
            },
            {
              "row": 9,
              "col": 0
            },
            {
              "row": 8,
              "col": 0
            }
          ]
        },
        {
          "label": "Innkeeper",
          "value": "INNKEEPER",
          "word": "INNKEEPER",
          "clean": "INNKEEPER",
          "start": {
            "row": 12,
            "col": 0
          },
          "end": {
            "row": 12,
            "col": 8
          },
          "direction": "E",
          "path": [
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 12,
              "col": 8
            }
          ]
        },
        {
          "label": "Students",
          "value": "STUDENTS",
          "word": "STUDENTS",
          "clean": "STUDENTS",
          "start": {
            "row": 8,
            "col": 5
          },
          "end": {
            "row": 15,
            "col": 5
          },
          "direction": "S",
          "path": [
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 15,
              "col": 5
            }
          ]
        },
        {
          "label": "Redemption",
          "value": "REDEMPTION",
          "word": "REDEMPTION",
          "clean": "REDEMPTION",
          "start": {
            "row": 1,
            "col": 4
          },
          "end": {
            "row": 10,
            "col": 13
          },
          "direction": "SE",
          "path": [
            {
              "row": 1,
              "col": 4
            },
            {
              "row": 2,
              "col": 5
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 13
            }
          ]
        }
      ]
    },
    {
      "id": 4,
      "size": 20,
      "topic": "Phantom Of The Opera Musical",
      "words": [
        {
          "label": "Phantom",
          "value": "PHANTOM"
        },
        {
          "label": "Christine",
          "value": "CHRISTINE"
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
          "label": "Masquerade",
          "value": "MASQUERADE"
        },
        {
          "label": "Chandelier",
          "value": "CHANDELIER"
        },
        {
          "label": "Mirror",
          "value": "MIRROR"
        },
        {
          "label": "Lair",
          "value": "LAIR"
        },
        {
          "label": "Mask",
          "value": "MASK"
        },
        {
          "label": "Theatre",
          "value": "THEATRE"
        },
        {
          "label": "Soprano",
          "value": "SOPRANO"
        },
        {
          "label": "Ballet",
          "value": "BALLET"
        },
        {
          "label": "Paris",
          "value": "PARIS"
        },
        {
          "label": "Orchestra",
          "value": "ORCHESTRA"
        },
        {
          "label": "Organ",
          "value": "ORGAN"
        }
      ],
      "grid": [
        [
          "H",
          "C",
          "G",
          "M",
          "B",
          "K",
          "U",
          "M",
          "H",
          "M",
          "F",
          "V",
          "G",
          "D",
          "N",
          "I",
          "C",
          "X",
          "H",
          "Y"
        ],
        [
          "C",
          "S",
          "O",
          "W",
          "D",
          "Y",
          "M",
          "W",
          "U",
          "D",
          "W",
          "A",
          "U",
          "S",
          "U",
          "Z",
          "M",
          "T",
          "Z",
          "R"
        ],
        [
          "G",
          "R",
          "H",
          "S",
          "D",
          "F",
          "B",
          "P",
          "X",
          "K",
          "L",
          "B",
          "P",
          "Z",
          "H",
          "Z",
          "N",
          "N",
          "M",
          "E"
        ],
        [
          "T",
          "S",
          "I",
          "T",
          "F",
          "V",
          "W",
          "Z",
          "Z",
          "M",
          "T",
          "R",
          "H",
          "J",
          "N",
          "N",
          "K",
          "G",
          "P",
          "W"
        ],
        [
          "I",
          "J",
          "I",
          "O",
          "X",
          "M",
          "I",
          "J",
          "E",
          "W",
          "U",
          "X",
          "C",
          "H",
          "D",
          "F",
          "Z",
          "Y",
          "L",
          "J"
        ],
        [
          "S",
          "M",
          "E",
          "P",
          "N",
          "H",
          "K",
          "F",
          "N",
          "S",
          "X",
          "N",
          "R",
          "G",
          "D",
          "V",
          "E",
          "J",
          "D",
          "K"
        ],
        [
          "F",
          "V",
          "H",
          "A",
          "A",
          "A",
          "E",
          "A",
          "P",
          "U",
          "N",
          "R",
          "Q",
          "S",
          "D",
          "F",
          "K",
          "H",
          "P",
          "Y"
        ],
        [
          "F",
          "H",
          "O",
          "Q",
          "N",
          "L",
          "R",
          "N",
          "E",
          "P",
          "C",
          "B",
          "Y",
          "B",
          "E",
          "E",
          "H",
          "K",
          "Y",
          "P"
        ],
        [
          "Z",
          "B",
          "A",
          "L",
          "L",
          "E",
          "T",
          "P",
          "Z",
          "D",
          "U",
          "R",
          "Q",
          "E",
          "S",
          "M",
          "H",
          "R",
          "T",
          "W"
        ],
        [
          "C",
          "Q",
          "G",
          "S",
          "P",
          "B",
          "A",
          "B",
          "O",
          "E",
          "I",
          "K",
          "N",
          "S",
          "U",
          "C",
          "J",
          "V",
          "A",
          "E"
        ],
        [
          "H",
          "W",
          "W",
          "O",
          "Y",
          "N",
          "E",
          "P",
          "X",
          "S",
          "E",
          "G",
          "A",
          "Z",
          "Q",
          "G",
          "J",
          "C",
          "B",
          "J"
        ],
        [
          "A",
          "K",
          "N",
          "E",
          "G",
          "L",
          "H",
          "B",
          "H",
          "L",
          "O",
          "I",
          "P",
          "L",
          "P",
          "H",
          "J",
          "W",
          "D",
          "F"
        ],
        [
          "N",
          "R",
          "A",
          "N",
          "A",
          "A",
          "T",
          "K",
          "D",
          "P",
          "V",
          "P",
          "G",
          "M",
          "O",
          "D",
          "P",
          "Q",
          "E",
          "D"
        ],
        [
          "D",
          "Q",
          "G",
          "I",
          "N",
          "K",
          "A",
          "V",
          "N",
          "P",
          "A",
          "V",
          "Y",
          "J",
          "D",
          "M",
          "I",
          "T",
          "N",
          "L"
        ],
        [
          "E",
          "A",
          "R",
          "T",
          "S",
          "E",
          "H",
          "C",
          "R",
          "O",
          "R",
          "R",
          "I",
          "M",
          "D",
          "E",
          "J",
          "P",
          "N",
          "F"
        ],
        [
          "L",
          "W",
          "O",
          "S",
          "F",
          "T",
          "L",
          "A",
          "L",
          "Z",
          "J",
          "Y",
          "I",
          "A",
          "E",
          "R",
          "Q",
          "B",
          "W",
          "U"
        ],
        [
          "I",
          "M",
          "Z",
          "I",
          "A",
          "A",
          "O",
          "D",
          "H",
          "Z",
          "C",
          "Y",
          "F",
          "S",
          "F",
          "X",
          "U",
          "W",
          "I",
          "M"
        ],
        [
          "E",
          "D",
          "A",
          "R",
          "E",
          "U",
          "Q",
          "S",
          "A",
          "M",
          "M",
          "T",
          "K",
          "K",
          "C",
          "M",
          "I",
          "Z",
          "B",
          "G"
        ],
        [
          "R",
          "W",
          "M",
          "H",
          "L",
          "O",
          "R",
          "C",
          "E",
          "R",
          "G",
          "L",
          "R",
          "D",
          "J",
          "H",
          "J",
          "J",
          "E",
          "N"
        ],
        [
          "P",
          "H",
          "U",
          "C",
          "Q",
          "B",
          "A",
          "Q",
          "Y",
          "E",
          "S",
          "K",
          "U",
          "W",
          "X",
          "M",
          "C",
          "Y",
          "F",
          "S"
        ]
      ],
      "placements": [
        {
          "label": "Phantom",
          "value": "PHANTOM",
          "word": "PHANTOM",
          "clean": "PHANTOM",
          "start": {
            "row": 10,
            "col": 7
          },
          "end": {
            "row": 16,
            "col": 1
          },
          "direction": "SW",
          "path": [
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
            },
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 14,
              "col": 3
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 16,
              "col": 1
            }
          ]
        },
        {
          "label": "Christine",
          "value": "CHRISTINE",
          "word": "CHRISTINE",
          "clean": "CHRISTINE",
          "start": {
            "row": 19,
            "col": 3
          },
          "end": {
            "row": 11,
            "col": 3
          },
          "direction": "N",
          "path": [
            {
              "row": 19,
              "col": 3
            },
            {
              "row": 18,
              "col": 3
            },
            {
              "row": 17,
              "col": 3
            },
            {
              "row": 16,
              "col": 3
            },
            {
              "row": 15,
              "col": 3
            },
            {
              "row": 14,
              "col": 3
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 11,
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
            "row": 14,
            "col": 8
          },
          "end": {
            "row": 18,
            "col": 4
          },
          "direction": "SW",
          "path": [
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 17,
              "col": 5
            },
            {
              "row": 18,
              "col": 4
            }
          ]
        },
        {
          "label": "Opera",
          "value": "OPERA",
          "word": "OPERA",
          "clean": "OPERA",
          "start": {
            "row": 10,
            "col": 3
          },
          "end": {
            "row": 6,
            "col": 7
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
            }
          ]
        },
        {
          "label": "Masquerade",
          "value": "MASQUERADE",
          "word": "MASQUERADE",
          "clean": "MASQUERADE",
          "start": {
            "row": 17,
            "col": 9
          },
          "end": {
            "row": 17,
            "col": 0
          },
          "direction": "W",
          "path": [
            {
              "row": 17,
              "col": 9
            },
            {
              "row": 17,
              "col": 8
            },
            {
              "row": 17,
              "col": 7
            },
            {
              "row": 17,
              "col": 6
            },
            {
              "row": 17,
              "col": 5
            },
            {
              "row": 17,
              "col": 4
            },
            {
              "row": 17,
              "col": 3
            },
            {
              "row": 17,
              "col": 2
            },
            {
              "row": 17,
              "col": 1
            },
            {
              "row": 17,
              "col": 0
            }
          ]
        },
        {
          "label": "Chandelier",
          "value": "CHANDELIER",
          "word": "CHANDELIER",
          "clean": "CHANDELIER",
          "start": {
            "row": 9,
            "col": 0
          },
          "end": {
            "row": 18,
            "col": 0
          },
          "direction": "S",
          "path": [
            {
              "row": 9,
              "col": 0
            },
            {
              "row": 10,
              "col": 0
            },
            {
              "row": 11,
              "col": 0
            },
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 13,
              "col": 0
            },
            {
              "row": 14,
              "col": 0
            },
            {
              "row": 15,
              "col": 0
            },
            {
              "row": 16,
              "col": 0
            },
            {
              "row": 17,
              "col": 0
            },
            {
              "row": 18,
              "col": 0
            }
          ]
        },
        {
          "label": "Mirror",
          "value": "MIRROR",
          "word": "MIRROR",
          "clean": "MIRROR",
          "start": {
            "row": 14,
            "col": 13
          },
          "end": {
            "row": 14,
            "col": 8
          },
          "direction": "W",
          "path": [
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 14,
              "col": 10
            },
            {
              "row": 14,
              "col": 9
            },
            {
              "row": 14,
              "col": 8
            }
          ]
        },
        {
          "label": "Lair",
          "value": "LAIR",
          "word": "LAIR",
          "clean": "LAIR",
          "start": {
            "row": 11,
            "col": 5
          },
          "end": {
            "row": 14,
            "col": 2
          },
          "direction": "SW",
          "path": [
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 14,
              "col": 2
            }
          ]
        },
        {
          "label": "Mask",
          "value": "MASK",
          "word": "MASK",
          "clean": "MASK",
          "start": {
            "row": 14,
            "col": 13
          },
          "end": {
            "row": 17,
            "col": 13
          },
          "direction": "S",
          "path": [
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 15,
              "col": 13
            },
            {
              "row": 16,
              "col": 13
            },
            {
              "row": 17,
              "col": 13
            }
          ]
        },
        {
          "label": "Theatre",
          "value": "THEATRE",
          "word": "THEATRE",
          "clean": "THEATRE",
          "start": {
            "row": 12,
            "col": 6
          },
          "end": {
            "row": 6,
            "col": 6
          },
          "direction": "N",
          "path": [
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 6,
              "col": 6
            }
          ]
        },
        {
          "label": "Soprano",
          "value": "SOPRANO",
          "word": "SOPRANO",
          "clean": "SOPRANO",
          "start": {
            "row": 10,
            "col": 9
          },
          "end": {
            "row": 4,
            "col": 3
          },
          "direction": "NW",
          "path": [
            {
              "row": 10,
              "col": 9
            },
            {
              "row": 9,
              "col": 8
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 7,
              "col": 6
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 4,
              "col": 3
            }
          ]
        },
        {
          "label": "Ballet",
          "value": "BALLET",
          "word": "BALLET",
          "clean": "BALLET",
          "start": {
            "row": 8,
            "col": 1
          },
          "end": {
            "row": 8,
            "col": 6
          },
          "direction": "E",
          "path": [
            {
              "row": 8,
              "col": 1
            },
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
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 8,
              "col": 6
            }
          ]
        },
        {
          "label": "Paris",
          "value": "PARIS",
          "word": "PARIS",
          "clean": "PARIS",
          "start": {
            "row": 12,
            "col": 9
          },
          "end": {
            "row": 16,
            "col": 13
          },
          "direction": "SE",
          "path": [
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 15,
              "col": 12
            },
            {
              "row": 16,
              "col": 13
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
            "col": 9
          },
          "end": {
            "row": 14,
            "col": 1
          },
          "direction": "W",
          "path": [
            {
              "row": 14,
              "col": 9
            },
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
            }
          ]
        },
        {
          "label": "Organ",
          "value": "ORGAN",
          "word": "ORGAN",
          "clean": "ORGAN",
          "start": {
            "row": 15,
            "col": 2
          },
          "end": {
            "row": 11,
            "col": 2
          },
          "direction": "N",
          "path": [
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 14,
              "col": 2
            },
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 12,
              "col": 2
            },
            {
              "row": 11,
              "col": 2
            }
          ]
        }
      ]
    },
    {
      "id": 5,
      "size": 20,
      "topic": "Mamma Mia Musical",
      "words": [
        {
          "label": "Donna",
          "value": "DONNA"
        },
        {
          "label": "Sophie",
          "value": "SOPHIE"
        },
        {
          "label": "Sky",
          "value": "SKY"
        },
        {
          "label": "Tanya",
          "value": "TANYA"
        },
        {
          "label": "Rosie",
          "value": "ROSIE"
        },
        {
          "label": "Greece",
          "value": "GREECE"
        },
        {
          "label": "Island",
          "value": "ISLAND"
        },
        {
          "label": "Wedding",
          "value": "WEDDING"
        },
        {
          "label": "Hotel",
          "value": "HOTEL"
        },
        {
          "label": "ABBA",
          "value": "ABBA"
        },
        {
          "label": "Dynamo",
          "value": "DYNAMO"
        },
        {
          "label": "Father",
          "value": "FATHER"
        },
        {
          "label": "Summer",
          "value": "SUMMER"
        },
        {
          "label": "Dance",
          "value": "DANCE"
        },
        {
          "label": "Disco",
          "value": "DISCO"
        }
      ],
      "grid": [
        [
          "E",
          "W",
          "P",
          "I",
          "N",
          "M",
          "B",
          "J",
          "V",
          "L",
          "U",
          "H",
          "B",
          "P",
          "Q",
          "R",
          "B",
          "V",
          "W",
          "K"
        ],
        [
          "W",
          "T",
          "J",
          "T",
          "T",
          "I",
          "M",
          "S",
          "J",
          "W",
          "L",
          "H",
          "E",
          "V",
          "T",
          "O",
          "I",
          "N",
          "C",
          "Z"
        ],
        [
          "B",
          "K",
          "M",
          "L",
          "G",
          "T",
          "G",
          "M",
          "L",
          "N",
          "R",
          "Q",
          "R",
          "R",
          "P",
          "H",
          "Q",
          "L",
          "N",
          "D"
        ],
        [
          "Q",
          "B",
          "F",
          "L",
          "L",
          "W",
          "S",
          "J",
          "Q",
          "I",
          "R",
          "E",
          "G",
          "I",
          "Q",
          "P",
          "Y",
          "S",
          "D",
          "E"
        ],
        [
          "O",
          "J",
          "J",
          "F",
          "X",
          "C",
          "L",
          "D",
          "Z",
          "V",
          "A",
          "Y",
          "T",
          "L",
          "O",
          "V",
          "X",
          "O",
          "I",
          "H"
        ],
        [
          "Y",
          "K",
          "P",
          "G",
          "Q",
          "H",
          "S",
          "E",
          "A",
          "W",
          "O",
          "T",
          "C",
          "Z",
          "A",
          "N",
          "I",
          "L",
          "R",
          "Q"
        ],
        [
          "P",
          "K",
          "Q",
          "L",
          "M",
          "O",
          "A",
          "C",
          "B",
          "O",
          "F",
          "J",
          "C",
          "M",
          "O",
          "X",
          "A",
          "G",
          "Z",
          "J"
        ],
        [
          "Q",
          "V",
          "U",
          "B",
          "C",
          "Z",
          "Z",
          "A",
          "B",
          "C",
          "H",
          "V",
          "L",
          "K",
          "A",
          "Q",
          "I",
          "I",
          "Q",
          "N"
        ],
        [
          "D",
          "Y",
          "E",
          "F",
          "Z",
          "J",
          "L",
          "N",
          "B",
          "G",
          "Y",
          "C",
          "O",
          "K",
          "Y",
          "T",
          "V",
          "J",
          "O",
          "L"
        ],
        [
          "V",
          "P",
          "L",
          "D",
          "W",
          "W",
          "R",
          "Z",
          "P",
          "I",
          "I",
          "S",
          "W",
          "K",
          "M",
          "S",
          "T",
          "Q",
          "I",
          "W"
        ],
        [
          "S",
          "O",
          "P",
          "H",
          "I",
          "E",
          "J",
          "P",
          "T",
          "W",
          "G",
          "C",
          "R",
          "K",
          "Q",
          "T",
          "V",
          "P",
          "F",
          "Z"
        ],
        [
          "M",
          "R",
          "K",
          "Q",
          "M",
          "A",
          "D",
          "I",
          "S",
          "C",
          "O",
          "E",
          "G",
          "P",
          "H",
          "F",
          "Z",
          "C",
          "V",
          "M"
        ],
        [
          "F",
          "Q",
          "O",
          "M",
          "A",
          "N",
          "Y",
          "D",
          "F",
          "K",
          "H",
          "I",
          "A",
          "L",
          "P",
          "R",
          "Z",
          "G",
          "C",
          "A"
        ],
        [
          "O",
          "N",
          "U",
          "K",
          "I",
          "W",
          "K",
          "N",
          "I",
          "T",
          "O",
          "S",
          "V",
          "I",
          "M",
          "S",
          "Q",
          "I",
          "P",
          "I"
        ],
        [
          "V",
          "S",
          "X",
          "K",
          "Z",
          "I",
          "S",
          "L",
          "A",
          "N",
          "D",
          "O",
          "N",
          "N",
          "A",
          "L",
          "X",
          "Z",
          "A",
          "C"
        ],
        [
          "X",
          "L",
          "U",
          "C",
          "I",
          "R",
          "A",
          "F",
          "G",
          "T",
          "G",
          "R",
          "E",
          "E",
          "C",
          "E",
          "J",
          "U",
          "J",
          "C"
        ],
        [
          "Y",
          "C",
          "N",
          "G",
          "D",
          "Q",
          "L",
          "S",
          "X",
          "A",
          "A",
          "Y",
          "C",
          "D",
          "U",
          "T",
          "F",
          "E",
          "Y",
          "A"
        ],
        [
          "B",
          "O",
          "Y",
          "Z",
          "Z",
          "G",
          "L",
          "M",
          "Q",
          "C",
          "U",
          "G",
          "N",
          "Q",
          "X",
          "O",
          "N",
          "J",
          "P",
          "R"
        ],
        [
          "H",
          "M",
          "C",
          "D",
          "D",
          "K",
          "R",
          "W",
          "E",
          "A",
          "B",
          "B",
          "A",
          "L",
          "U",
          "H",
          "U",
          "C",
          "J",
          "K"
        ],
        [
          "O",
          "X",
          "H",
          "E",
          "K",
          "A",
          "B",
          "P",
          "W",
          "D",
          "P",
          "C",
          "D",
          "G",
          "B",
          "T",
          "B",
          "O",
          "K",
          "L"
        ]
      ],
      "placements": [
        {
          "label": "Donna",
          "value": "DONNA",
          "word": "DONNA",
          "clean": "DONNA",
          "start": {
            "row": 14,
            "col": 10
          },
          "end": {
            "row": 14,
            "col": 14
          },
          "direction": "E",
          "path": [
            {
              "row": 14,
              "col": 10
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 14,
              "col": 14
            }
          ]
        },
        {
          "label": "Sophie",
          "value": "SOPHIE",
          "word": "SOPHIE",
          "clean": "SOPHIE",
          "start": {
            "row": 10,
            "col": 0
          },
          "end": {
            "row": 10,
            "col": 5
          },
          "direction": "E",
          "path": [
            {
              "row": 10,
              "col": 0
            },
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            }
          ]
        },
        {
          "label": "Sky",
          "value": "SKY",
          "word": "SKY",
          "clean": "SKY",
          "start": {
            "row": 14,
            "col": 6
          },
          "end": {
            "row": 12,
            "col": 6
          },
          "direction": "N",
          "path": [
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 13,
              "col": 6
            },
            {
              "row": 12,
              "col": 6
            }
          ]
        },
        {
          "label": "Tanya",
          "value": "TANYA",
          "word": "TANYA",
          "clean": "TANYA",
          "start": {
            "row": 15,
            "col": 9
          },
          "end": {
            "row": 11,
            "col": 5
          },
          "direction": "NW",
          "path": [
            {
              "row": 15,
              "col": 9
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 11,
              "col": 5
            }
          ]
        },
        {
          "label": "Rosie",
          "value": "ROSIE",
          "word": "ROSIE",
          "clean": "ROSIE",
          "start": {
            "row": 15,
            "col": 11
          },
          "end": {
            "row": 11,
            "col": 11
          },
          "direction": "N",
          "path": [
            {
              "row": 15,
              "col": 11
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 11,
              "col": 11
            }
          ]
        },
        {
          "label": "Greece",
          "value": "GREECE",
          "word": "GREECE",
          "clean": "GREECE",
          "start": {
            "row": 15,
            "col": 10
          },
          "end": {
            "row": 15,
            "col": 15
          },
          "direction": "E",
          "path": [
            {
              "row": 15,
              "col": 10
            },
            {
              "row": 15,
              "col": 11
            },
            {
              "row": 15,
              "col": 12
            },
            {
              "row": 15,
              "col": 13
            },
            {
              "row": 15,
              "col": 14
            },
            {
              "row": 15,
              "col": 15
            }
          ]
        },
        {
          "label": "Island",
          "value": "ISLAND",
          "word": "ISLAND",
          "clean": "ISLAND",
          "start": {
            "row": 14,
            "col": 5
          },
          "end": {
            "row": 14,
            "col": 10
          },
          "direction": "E",
          "path": [
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 14,
              "col": 7
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 14,
              "col": 9
            },
            {
              "row": 14,
              "col": 10
            }
          ]
        },
        {
          "label": "Wedding",
          "value": "WEDDING",
          "word": "WEDDING",
          "clean": "WEDDING",
          "start": {
            "row": 9,
            "col": 4
          },
          "end": {
            "row": 15,
            "col": 10
          },
          "direction": "SE",
          "path": [
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 13,
              "col": 8
            },
            {
              "row": 14,
              "col": 9
            },
            {
              "row": 15,
              "col": 10
            }
          ]
        },
        {
          "label": "Hotel",
          "value": "HOTEL",
          "word": "HOTEL",
          "clean": "HOTEL",
          "start": {
            "row": 18,
            "col": 15
          },
          "end": {
            "row": 14,
            "col": 15
          },
          "direction": "N",
          "path": [
            {
              "row": 18,
              "col": 15
            },
            {
              "row": 17,
              "col": 15
            },
            {
              "row": 16,
              "col": 15
            },
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 14,
              "col": 15
            }
          ]
        },
        {
          "label": "ABBA",
          "value": "ABBA",
          "word": "ABBA",
          "clean": "ABBA",
          "start": {
            "row": 18,
            "col": 12
          },
          "end": {
            "row": 18,
            "col": 9
          },
          "direction": "W",
          "path": [
            {
              "row": 18,
              "col": 12
            },
            {
              "row": 18,
              "col": 11
            },
            {
              "row": 18,
              "col": 10
            },
            {
              "row": 18,
              "col": 9
            }
          ]
        },
        {
          "label": "Dynamo",
          "value": "DYNAMO",
          "word": "DYNAMO",
          "clean": "DYNAMO",
          "start": {
            "row": 12,
            "col": 7
          },
          "end": {
            "row": 12,
            "col": 2
          },
          "direction": "W",
          "path": [
            {
              "row": 12,
              "col": 7
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 12,
              "col": 5
            },
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 12,
              "col": 2
            }
          ]
        },
        {
          "label": "Father",
          "value": "FATHER",
          "word": "FATHER",
          "clean": "FATHER",
          "start": {
            "row": 15,
            "col": 7
          },
          "end": {
            "row": 10,
            "col": 12
          },
          "direction": "NE",
          "path": [
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 11,
              "col": 11
            },
            {
              "row": 10,
              "col": 12
            }
          ]
        },
        {
          "label": "Summer",
          "value": "SUMMER",
          "word": "SUMMER",
          "clean": "SUMMER",
          "start": {
            "row": 14,
            "col": 1
          },
          "end": {
            "row": 9,
            "col": 6
          },
          "direction": "NE",
          "path": [
            {
              "row": 14,
              "col": 1
            },
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 12,
              "col": 3
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 9,
              "col": 6
            }
          ]
        },
        {
          "label": "Dance",
          "value": "DANCE",
          "word": "DANCE",
          "clean": "DANCE",
          "start": {
            "row": 19,
            "col": 12
          },
          "end": {
            "row": 15,
            "col": 12
          },
          "direction": "N",
          "path": [
            {
              "row": 19,
              "col": 12
            },
            {
              "row": 18,
              "col": 12
            },
            {
              "row": 17,
              "col": 12
            },
            {
              "row": 16,
              "col": 12
            },
            {
              "row": 15,
              "col": 12
            }
          ]
        },
        {
          "label": "Disco",
          "value": "DISCO",
          "word": "DISCO",
          "clean": "DISCO",
          "start": {
            "row": 11,
            "col": 6
          },
          "end": {
            "row": 11,
            "col": 10
          },
          "direction": "E",
          "path": [
            {
              "row": 11,
              "col": 6
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 11,
              "col": 8
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 11,
              "col": 10
            }
          ]
        }
      ]
    },
    {
      "id": 6,
      "size": 20,
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
          "label": "Oz",
          "value": "OZ"
        },
        {
          "label": "Witch",
          "value": "WITCH"
        },
        {
          "label": "Emerald",
          "value": "EMERALD"
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
          "label": "Nessarose",
          "value": "NESSAROSE"
        },
        {
          "label": "Boq",
          "value": "BOQ"
        },
        {
          "label": "Shiz",
          "value": "SHIZ"
        },
        {
          "label": "Grimmerie",
          "value": "GRIMMERIE"
        },
        {
          "label": "Monkey",
          "value": "MONKEY"
        },
        {
          "label": "Broom",
          "value": "BROOM"
        },
        {
          "label": "Popular",
          "value": "POPULAR"
        },
        {
          "label": "Gravity",
          "value": "GRAVITY"
        }
      ],
      "grid": [
        [
          "Q",
          "K",
          "G",
          "X",
          "P",
          "B",
          "R",
          "T",
          "O",
          "F",
          "O",
          "Y",
          "U",
          "K",
          "P",
          "Q",
          "T",
          "B",
          "G",
          "Q"
        ],
        [
          "R",
          "B",
          "Q",
          "P",
          "L",
          "C",
          "Z",
          "V",
          "M",
          "Q",
          "C",
          "Y",
          "A",
          "F",
          "Y",
          "C",
          "Q",
          "R",
          "Y",
          "B"
        ],
        [
          "I",
          "R",
          "Q",
          "W",
          "D",
          "D",
          "F",
          "W",
          "I",
          "I",
          "M",
          "P",
          "N",
          "L",
          "Y",
          "W",
          "I",
          "T",
          "C",
          "H"
        ],
        [
          "N",
          "G",
          "A",
          "F",
          "T",
          "Z",
          "H",
          "K",
          "I",
          "G",
          "A",
          "K",
          "J",
          "R",
          "R",
          "M",
          "Q",
          "X",
          "F",
          "A"
        ],
        [
          "P",
          "Z",
          "Q",
          "J",
          "U",
          "H",
          "N",
          "I",
          "Z",
          "K",
          "S",
          "G",
          "Z",
          "N",
          "M",
          "K",
          "K",
          "U",
          "L",
          "I"
        ],
        [
          "K",
          "X",
          "U",
          "W",
          "N",
          "S",
          "I",
          "N",
          "D",
          "H",
          "B",
          "E",
          "Y",
          "E",
          "J",
          "Q",
          "Q",
          "X",
          "I",
          "X"
        ],
        [
          "S",
          "R",
          "V",
          "Y",
          "S",
          "R",
          "N",
          "K",
          "F",
          "D",
          "J",
          "K",
          "R",
          "C",
          "Y",
          "P",
          "U",
          "V",
          "B",
          "P"
        ],
        [
          "Z",
          "U",
          "N",
          "T",
          "M",
          "O",
          "Z",
          "T",
          "B",
          "Y",
          "T",
          "I",
          "V",
          "A",
          "R",
          "G",
          "F",
          "I",
          "N",
          "M"
        ],
        [
          "S",
          "L",
          "Q",
          "K",
          "K",
          "X",
          "A",
          "F",
          "E",
          "T",
          "E",
          "M",
          "E",
          "R",
          "A",
          "L",
          "D",
          "B",
          "E",
          "Z"
        ],
        [
          "B",
          "B",
          "K",
          "U",
          "W",
          "E",
          "O",
          "K",
          "B",
          "U",
          "P",
          "S",
          "Z",
          "J",
          "K",
          "B",
          "R",
          "O",
          "O",
          "M"
        ],
        [
          "V",
          "P",
          "U",
          "S",
          "I",
          "F",
          "N",
          "B",
          "E",
          "T",
          "E",
          "P",
          "O",
          "P",
          "U",
          "L",
          "A",
          "R",
          "F",
          "Q"
        ],
        [
          "W",
          "U",
          "G",
          "G",
          "O",
          "O",
          "N",
          "E",
          "R",
          "Q",
          "U",
          "A",
          "U",
          "R",
          "R",
          "B",
          "Z",
          "E",
          "R",
          "R"
        ],
        [
          "M",
          "A",
          "A",
          "G",
          "M",
          "N",
          "R",
          "S",
          "G",
          "P",
          "N",
          "D",
          "M",
          "S",
          "A",
          "A",
          "I",
          "Y",
          "T",
          "G"
        ],
        [
          "H",
          "D",
          "V",
          "E",
          "N",
          "E",
          "L",
          "W",
          "A",
          "H",
          "V",
          "N",
          "H",
          "H",
          "K",
          "S",
          "W",
          "I",
          "R",
          "W"
        ],
        [
          "X",
          "R",
          "Q",
          "C",
          "J",
          "D",
          "V",
          "S",
          "J",
          "W",
          "F",
          "I",
          "P",
          "M",
          "F",
          "N",
          "S",
          "F",
          "R",
          "Y"
        ],
        [
          "O",
          "W",
          "E",
          "S",
          "K",
          "A",
          "E",
          "W",
          "W",
          "M",
          "Z",
          "L",
          "G",
          "V",
          "R",
          "G",
          "X",
          "E",
          "H",
          "R"
        ],
        [
          "Q",
          "G",
          "I",
          "P",
          "C",
          "G",
          "V",
          "A",
          "P",
          "R",
          "E",
          "G",
          "O",
          "T",
          "X",
          "Y",
          "K",
          "E",
          "N",
          "V"
        ],
        [
          "Y",
          "Z",
          "A",
          "X",
          "S",
          "M",
          "N",
          "W",
          "T",
          "E",
          "A",
          "P",
          "L",
          "K",
          "P",
          "Y",
          "N",
          "N",
          "Q",
          "A"
        ],
        [
          "L",
          "G",
          "X",
          "X",
          "X",
          "S",
          "P",
          "J",
          "U",
          "G",
          "W",
          "L",
          "R",
          "Z",
          "N",
          "P",
          "F",
          "O",
          "L",
          "J"
        ],
        [
          "O",
          "T",
          "A",
          "R",
          "M",
          "Y",
          "P",
          "W",
          "G",
          "B",
          "I",
          "J",
          "W",
          "D",
          "R",
          "Q",
          "S",
          "V",
          "C",
          "D"
        ]
      ],
      "placements": [
        {
          "label": "Elphaba",
          "value": "ELPHABA",
          "word": "ELPHABA",
          "clean": "ELPHABA",
          "start": {
            "row": 16,
            "col": 10
          },
          "end": {
            "row": 10,
            "col": 16
          },
          "direction": "NE",
          "path": [
            {
              "row": 16,
              "col": 10
            },
            {
              "row": 15,
              "col": 11
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 13,
              "col": 13
            },
            {
              "row": 12,
              "col": 14
            },
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 10,
              "col": 16
            }
          ]
        },
        {
          "label": "Glinda",
          "value": "GLINDA",
          "word": "GLINDA",
          "clean": "GLINDA",
          "start": {
            "row": 16,
            "col": 11
          },
          "end": {
            "row": 11,
            "col": 11
          },
          "direction": "N",
          "path": [
            {
              "row": 16,
              "col": 11
            },
            {
              "row": 15,
              "col": 11
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 11,
              "col": 11
            }
          ]
        },
        {
          "label": "Oz",
          "value": "OZ",
          "word": "OZ",
          "clean": "OZ",
          "start": {
            "row": 9,
            "col": 18
          },
          "end": {
            "row": 8,
            "col": 19
          },
          "direction": "NE",
          "path": [
            {
              "row": 9,
              "col": 18
            },
            {
              "row": 8,
              "col": 19
            }
          ]
        },
        {
          "label": "Witch",
          "value": "WITCH",
          "word": "WITCH",
          "clean": "WITCH",
          "start": {
            "row": 2,
            "col": 15
          },
          "end": {
            "row": 2,
            "col": 19
          },
          "direction": "E",
          "path": [
            {
              "row": 2,
              "col": 15
            },
            {
              "row": 2,
              "col": 16
            },
            {
              "row": 2,
              "col": 17
            },
            {
              "row": 2,
              "col": 18
            },
            {
              "row": 2,
              "col": 19
            }
          ]
        },
        {
          "label": "Emerald",
          "value": "EMERALD",
          "word": "EMERALD",
          "clean": "EMERALD",
          "start": {
            "row": 8,
            "col": 10
          },
          "end": {
            "row": 8,
            "col": 16
          },
          "direction": "E",
          "path": [
            {
              "row": 8,
              "col": 10
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 8,
              "col": 13
            },
            {
              "row": 8,
              "col": 14
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 8,
              "col": 16
            }
          ]
        },
        {
          "label": "Wizard",
          "value": "WIZARD",
          "word": "WIZARD",
          "clean": "WIZARD",
          "start": {
            "row": 13,
            "col": 16
          },
          "end": {
            "row": 8,
            "col": 16
          },
          "direction": "N",
          "path": [
            {
              "row": 13,
              "col": 16
            },
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 11,
              "col": 16
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 8,
              "col": 16
            }
          ]
        },
        {
          "label": "Fiyero",
          "value": "FIYERO",
          "word": "FIYERO",
          "clean": "FIYERO",
          "start": {
            "row": 14,
            "col": 17
          },
          "end": {
            "row": 9,
            "col": 17
          },
          "direction": "N",
          "path": [
            {
              "row": 14,
              "col": 17
            },
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 12,
              "col": 17
            },
            {
              "row": 11,
              "col": 17
            },
            {
              "row": 10,
              "col": 17
            },
            {
              "row": 9,
              "col": 17
            }
          ]
        },
        {
          "label": "Nessarose",
          "value": "NESSAROSE",
          "word": "NESSAROSE",
          "clean": "NESSAROSE",
          "start": {
            "row": 16,
            "col": 18
          },
          "end": {
            "row": 8,
            "col": 10
          },
          "direction": "NW",
          "path": [
            {
              "row": 16,
              "col": 18
            },
            {
              "row": 15,
              "col": 17
            },
            {
              "row": 14,
              "col": 16
            },
            {
              "row": 13,
              "col": 15
            },
            {
              "row": 12,
              "col": 14
            },
            {
              "row": 11,
              "col": 13
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 9,
              "col": 11
            },
            {
              "row": 8,
              "col": 10
            }
          ]
        },
        {
          "label": "Boq",
          "value": "BOQ",
          "word": "BOQ",
          "clean": "BOQ",
          "start": {
            "row": 8,
            "col": 17
          },
          "end": {
            "row": 10,
            "col": 19
          },
          "direction": "SE",
          "path": [
            {
              "row": 8,
              "col": 17
            },
            {
              "row": 9,
              "col": 18
            },
            {
              "row": 10,
              "col": 19
            }
          ]
        },
        {
          "label": "Shiz",
          "value": "SHIZ",
          "word": "SHIZ",
          "clean": "SHIZ",
          "start": {
            "row": 12,
            "col": 13
          },
          "end": {
            "row": 15,
            "col": 10
          },
          "direction": "SW",
          "path": [
            {
              "row": 12,
              "col": 13
            },
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 14,
              "col": 11
            },
            {
              "row": 15,
              "col": 10
            }
          ]
        },
        {
          "label": "Grimmerie",
          "value": "GRIMMERIE",
          "word": "GRIMMERIE",
          "clean": "GRIMMERIE",
          "start": {
            "row": 0,
            "col": 18
          },
          "end": {
            "row": 8,
            "col": 10
          },
          "direction": "SW",
          "path": [
            {
              "row": 0,
              "col": 18
            },
            {
              "row": 1,
              "col": 17
            },
            {
              "row": 2,
              "col": 16
            },
            {
              "row": 3,
              "col": 15
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 5,
              "col": 13
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 8,
              "col": 10
            }
          ]
        },
        {
          "label": "Monkey",
          "value": "MONKEY",
          "word": "MONKEY",
          "clean": "MONKEY",
          "start": {
            "row": 12,
            "col": 4
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "direction": "NE",
          "path": [
            {
              "row": 12,
              "col": 4
            },
            {
              "row": 11,
              "col": 5
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 8,
              "col": 8
            },
            {
              "row": 7,
              "col": 9
            }
          ]
        },
        {
          "label": "Broom",
          "value": "BROOM",
          "word": "BROOM",
          "clean": "BROOM",
          "start": {
            "row": 9,
            "col": 15
          },
          "end": {
            "row": 9,
            "col": 19
          },
          "direction": "E",
          "path": [
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 9,
              "col": 17
            },
            {
              "row": 9,
              "col": 18
            },
            {
              "row": 9,
              "col": 19
            }
          ]
        },
        {
          "label": "Popular",
          "value": "POPULAR",
          "word": "POPULAR",
          "clean": "POPULAR",
          "start": {
            "row": 10,
            "col": 11
          },
          "end": {
            "row": 10,
            "col": 17
          },
          "direction": "E",
          "path": [
            {
              "row": 10,
              "col": 11
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 10,
              "col": 13
            },
            {
              "row": 10,
              "col": 14
            },
            {
              "row": 10,
              "col": 15
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 10,
              "col": 17
            }
          ]
        },
        {
          "label": "Gravity",
          "value": "GRAVITY",
          "word": "GRAVITY",
          "clean": "GRAVITY",
          "start": {
            "row": 7,
            "col": 15
          },
          "end": {
            "row": 7,
            "col": 9
          },
          "direction": "W",
          "path": [
            {
              "row": 7,
              "col": 15
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 7,
              "col": 13
            },
            {
              "row": 7,
              "col": 12
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 7,
              "col": 9
            }
          ]
        }
      ]
    }
  ]
} as const;

export default dailyPuzzles;
