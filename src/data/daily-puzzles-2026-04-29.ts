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
  "hash": "26e49fb81732ffdda6400c2e6f64d74f790850418093df6599a2ec6f648acefc",
  "puzzles": [
    {
      "id": 1,
      "size": 16,
      "rows": 16,
      "cols": 10,
      "topic": "Michael Jackson",
      "words": [
        {
          "label": "Thriller",
          "value": "THRILLER"
        },
        {
          "label": "Billie",
          "value": "BILLIE"
        },
        {
          "label": "Jean",
          "value": "JEAN"
        },
        {
          "label": "Moonwalk",
          "value": "MOONWALK"
        },
        {
          "label": "Glove",
          "value": "GLOVE"
        },
        {
          "label": "Pop",
          "value": "POP"
        },
        {
          "label": "King",
          "value": "KING"
        },
        {
          "label": "Neverland",
          "value": "NEVERLAND"
        },
        {
          "label": "Beat",
          "value": "BEAT"
        },
        {
          "label": "Smooth",
          "value": "SMOOTH"
        },
        {
          "label": "Criminal",
          "value": "CRIMINAL"
        },
        {
          "label": "Jackson",
          "value": "JACKSON"
        }
      ],
      "grid": [
        [
          "B",
          "I",
          "L",
          "L",
          "I",
          "E",
          "P",
          "Z",
          "C",
          "O"
        ],
        [
          "H",
          "T",
          "O",
          "O",
          "M",
          "S",
          "O",
          "Q",
          "E",
          "L"
        ],
        [
          "W",
          "W",
          "L",
          "H",
          "W",
          "L",
          "I",
          "K",
          "H",
          "U"
        ],
        [
          "L",
          "S",
          "T",
          "H",
          "R",
          "I",
          "L",
          "L",
          "E",
          "R"
        ],
        [
          "A",
          "B",
          "N",
          "F",
          "J",
          "S",
          "U",
          "K",
          "R",
          "L"
        ],
        [
          "N",
          "M",
          "E",
          "J",
          "E",
          "E",
          "U",
          "T",
          "G",
          "S"
        ],
        [
          "I",
          "O",
          "V",
          "A",
          "A",
          "J",
          "A",
          "G",
          "A",
          "W"
        ],
        [
          "M",
          "O",
          "E",
          "A",
          "T",
          "C",
          "N",
          "N",
          "Y",
          "G"
        ],
        [
          "I",
          "N",
          "R",
          "W",
          "L",
          "I",
          "K",
          "P",
          "M",
          "P"
        ],
        [
          "R",
          "W",
          "L",
          "K",
          "K",
          "N",
          "O",
          "S",
          "O",
          "H"
        ],
        [
          "C",
          "A",
          "A",
          "V",
          "K",
          "F",
          "U",
          "E",
          "O",
          "P"
        ],
        [
          "X",
          "L",
          "N",
          "F",
          "V",
          "P",
          "B",
          "V",
          "U",
          "N"
        ],
        [
          "X",
          "K",
          "D",
          "W",
          "S",
          "U",
          "W",
          "O",
          "H",
          "F"
        ],
        [
          "O",
          "A",
          "D",
          "U",
          "D",
          "E",
          "L",
          "L",
          "Q",
          "U"
        ],
        [
          "J",
          "G",
          "P",
          "N",
          "D",
          "K",
          "B",
          "G",
          "W",
          "A"
        ],
        [
          "B",
          "I",
          "M",
          "J",
          "T",
          "C",
          "Z",
          "D",
          "N",
          "I"
        ]
      ],
      "placements": [
        {
          "label": "Beat",
          "value": "BEAT",
          "word": "BEAT",
          "clean": "BEAT",
          "start": {
            "row": 4,
            "col": 1
          },
          "end": {
            "row": 7,
            "col": 4
          },
          "direction": "SE",
          "path": [
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 5,
              "col": 2
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 7,
              "col": 4
            }
          ]
        },
        {
          "label": "Billie",
          "value": "BILLIE",
          "word": "BILLIE",
          "clean": "BILLIE",
          "start": {
            "row": 0,
            "col": 0
          },
          "end": {
            "row": 0,
            "col": 5
          },
          "direction": "E",
          "path": [
            {
              "row": 0,
              "col": 0
            },
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
            }
          ]
        },
        {
          "label": "Criminal",
          "value": "CRIMINAL",
          "word": "CRIMINAL",
          "clean": "CRIMINAL",
          "start": {
            "row": 10,
            "col": 0
          },
          "end": {
            "row": 3,
            "col": 0
          },
          "direction": "N",
          "path": [
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
            },
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            },
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
            }
          ]
        },
        {
          "label": "Glove",
          "value": "GLOVE",
          "word": "GLOVE",
          "clean": "GLOVE",
          "start": {
            "row": 14,
            "col": 7
          },
          "end": {
            "row": 10,
            "col": 7
          },
          "direction": "N",
          "path": [
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
            }
          ]
        },
        {
          "label": "Jackson",
          "value": "JACKSON",
          "word": "JACKSON",
          "clean": "JACKSON",
          "start": {
            "row": 5,
            "col": 3
          },
          "end": {
            "row": 11,
            "col": 9
          },
          "direction": "SE",
          "path": [
            {
              "row": 5,
              "col": 3
            },
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
            },
            {
              "row": 11,
              "col": 9
            }
          ]
        },
        {
          "label": "Jean",
          "value": "JEAN",
          "word": "JEAN",
          "clean": "JEAN",
          "start": {
            "row": 4,
            "col": 4
          },
          "end": {
            "row": 7,
            "col": 7
          },
          "direction": "SE",
          "path": [
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
            }
          ]
        },
        {
          "label": "King",
          "value": "KING",
          "word": "KING",
          "clean": "KING",
          "start": {
            "row": 9,
            "col": 4
          },
          "end": {
            "row": 6,
            "col": 7
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
            }
          ]
        },
        {
          "label": "Moonwalk",
          "value": "MOONWALK",
          "word": "MOONWALK",
          "clean": "MOONWALK",
          "start": {
            "row": 5,
            "col": 1
          },
          "end": {
            "row": 12,
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
            },
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 11,
              "col": 1
            },
            {
              "row": 12,
              "col": 1
            }
          ]
        },
        {
          "label": "Neverland",
          "value": "NEVERLAND",
          "word": "NEVERLAND",
          "clean": "NEVERLAND",
          "start": {
            "row": 4,
            "col": 2
          },
          "end": {
            "row": 12,
            "col": 2
          },
          "direction": "S",
          "path": [
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
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 11,
              "col": 2
            },
            {
              "row": 12,
              "col": 2
            }
          ]
        },
        {
          "label": "Pop",
          "value": "POP",
          "word": "POP",
          "clean": "POP",
          "start": {
            "row": 10,
            "col": 9
          },
          "end": {
            "row": 8,
            "col": 7
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
            }
          ]
        },
        {
          "label": "Smooth",
          "value": "SMOOTH",
          "word": "SMOOTH",
          "clean": "SMOOTH",
          "start": {
            "row": 1,
            "col": 5
          },
          "end": {
            "row": 1,
            "col": 0
          },
          "direction": "W",
          "path": [
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
            },
            {
              "row": 1,
              "col": 1
            },
            {
              "row": 1,
              "col": 0
            }
          ]
        },
        {
          "label": "Thriller",
          "value": "THRILLER",
          "word": "THRILLER",
          "clean": "THRILLER",
          "start": {
            "row": 3,
            "col": 2
          },
          "end": {
            "row": 3,
            "col": 9
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 3,
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
      "topic": "Ne-yo",
      "words": [
        {
          "label": "Closer",
          "value": "CLOSER"
        },
        {
          "label": "SoSick",
          "value": "SOSICK"
        },
        {
          "label": "Miss",
          "value": "MISS"
        },
        {
          "label": "Independent",
          "value": "INDEPENDENT"
        },
        {
          "label": "Sexy",
          "value": "SEXY"
        },
        {
          "label": "Love",
          "value": "LOVE"
        },
        {
          "label": "Song",
          "value": "SONG"
        },
        {
          "label": "Rnb",
          "value": "RNB"
        },
        {
          "label": "Dance",
          "value": "DANCE"
        },
        {
          "label": "Gentleman",
          "value": "GENTLEMAN"
        },
        {
          "label": "Champagne",
          "value": "CHAMPAGNE"
        },
        {
          "label": "Libra",
          "value": "LIBRA"
        }
      ],
      "grid": [
        [
          "T",
          "C",
          "M",
          "L",
          "A",
          "V",
          "Z",
          "R",
          "W",
          "G"
        ],
        [
          "K",
          "V",
          "Z",
          "T",
          "O",
          "R",
          "I",
          "H",
          "S",
          "M"
        ],
        [
          "A",
          "M",
          "W",
          "I",
          "X",
          "V",
          "S",
          "S",
          "O",
          "R"
        ],
        [
          "T",
          "R",
          "I",
          "O",
          "T",
          "A",
          "E",
          "P",
          "S",
          "L"
        ],
        [
          "N",
          "S",
          "B",
          "N",
          "H",
          "G",
          "N",
          "T",
          "I",
          "H"
        ],
        [
          "E",
          "S",
          "D",
          "I",
          "F",
          "B",
          "F",
          "Y",
          "C",
          "N"
        ],
        [
          "D",
          "I",
          "J",
          "D",
          "L",
          "A",
          "B",
          "O",
          "K",
          "E"
        ],
        [
          "N",
          "M",
          "S",
          "K",
          "L",
          "N",
          "Y",
          "S",
          "N",
          "G"
        ],
        [
          "E",
          "M",
          "E",
          "C",
          "R",
          "U",
          "O",
          "G",
          "Z",
          "E"
        ],
        [
          "P",
          "Q",
          "X",
          "H",
          "O",
          "N",
          "A",
          "Q",
          "C",
          "N"
        ],
        [
          "E",
          "Z",
          "Y",
          "Y",
          "G",
          "P",
          "V",
          "S",
          "H",
          "T"
        ],
        [
          "D",
          "S",
          "P",
          "Z",
          "M",
          "R",
          "O",
          "E",
          "W",
          "L"
        ],
        [
          "N",
          "F",
          "N",
          "A",
          "V",
          "I",
          "F",
          "C",
          "X",
          "E"
        ],
        [
          "I",
          "P",
          "H",
          "B",
          "Y",
          "U",
          "N",
          "N",
          "T",
          "M"
        ],
        [
          "S",
          "C",
          "X",
          "B",
          "O",
          "Z",
          "K",
          "A",
          "M",
          "A"
        ],
        [
          "C",
          "L",
          "O",
          "S",
          "E",
          "R",
          "N",
          "D",
          "L",
          "N"
        ]
      ],
      "placements": [
        {
          "label": "Champagne",
          "value": "CHAMPAGNE",
          "word": "CHAMPAGNE",
          "clean": "CHAMPAGNE",
          "start": {
            "row": 14,
            "col": 1
          },
          "end": {
            "row": 6,
            "col": 9
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
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            }
          ]
        },
        {
          "label": "Closer",
          "value": "CLOSER",
          "word": "CLOSER",
          "clean": "CLOSER",
          "start": {
            "row": 15,
            "col": 0
          },
          "end": {
            "row": 15,
            "col": 5
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
            }
          ]
        },
        {
          "label": "Dance",
          "value": "DANCE",
          "word": "DANCE",
          "clean": "DANCE",
          "start": {
            "row": 15,
            "col": 7
          },
          "end": {
            "row": 11,
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
            }
          ]
        },
        {
          "label": "Gentleman",
          "value": "GENTLEMAN",
          "word": "GENTLEMAN",
          "clean": "GENTLEMAN",
          "start": {
            "row": 7,
            "col": 9
          },
          "end": {
            "row": 15,
            "col": 9
          },
          "direction": "S",
          "path": [
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
            },
            {
              "row": 15,
              "col": 9
            }
          ]
        },
        {
          "label": "Independent",
          "value": "INDEPENDENT",
          "word": "INDEPENDENT",
          "clean": "INDEPENDENT",
          "start": {
            "row": 13,
            "col": 0
          },
          "end": {
            "row": 3,
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
            },
            {
              "row": 7,
              "col": 0
            },
            {
              "row": 6,
              "col": 0
            },
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
            }
          ]
        },
        {
          "label": "Libra",
          "value": "LIBRA",
          "word": "LIBRA",
          "clean": "LIBRA",
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
          "label": "Love",
          "value": "LOVE",
          "word": "LOVE",
          "clean": "LOVE",
          "start": {
            "row": 0,
            "col": 3
          },
          "end": {
            "row": 3,
            "col": 6
          },
          "direction": "SE",
          "path": [
            {
              "row": 0,
              "col": 3
            },
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
            }
          ]
        },
        {
          "label": "Miss",
          "value": "MISS",
          "word": "MISS",
          "clean": "MISS",
          "start": {
            "row": 7,
            "col": 1
          },
          "end": {
            "row": 4,
            "col": 1
          },
          "direction": "N",
          "path": [
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 5,
              "col": 1
            },
            {
              "row": 4,
              "col": 1
            }
          ]
        },
        {
          "label": "Rnb",
          "value": "RNB",
          "word": "RNB",
          "clean": "RNB",
          "start": {
            "row": 8,
            "col": 4
          },
          "end": {
            "row": 6,
            "col": 6
          },
          "direction": "NE",
          "path": [
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 6,
              "col": 6
            }
          ]
        },
        {
          "label": "Sexy",
          "value": "SEXY",
          "word": "SEXY",
          "clean": "SEXY",
          "start": {
            "row": 7,
            "col": 2
          },
          "end": {
            "row": 10,
            "col": 2
          },
          "direction": "S",
          "path": [
            {
              "row": 7,
              "col": 2
            },
            {
              "row": 8,
              "col": 2
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 10,
              "col": 2
            }
          ]
        },
        {
          "label": "Song",
          "value": "SONG",
          "word": "SONG",
          "clean": "SONG",
          "start": {
            "row": 7,
            "col": 7
          },
          "end": {
            "row": 10,
            "col": 4
          },
          "direction": "SW",
          "path": [
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 6
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 10,
              "col": 4
            }
          ]
        },
        {
          "label": "SoSick",
          "value": "SOSICK",
          "word": "SOSICK",
          "clean": "SOSICK",
          "start": {
            "row": 1,
            "col": 8
          },
          "end": {
            "row": 6,
            "col": 8
          },
          "direction": "S",
          "path": [
            {
              "row": 1,
              "col": 8
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 8
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
      "size": 16,
      "rows": 16,
      "cols": 10,
      "topic": "Disney",
      "words": [
        {
          "label": "Mickey",
          "value": "MICKEY"
        },
        {
          "label": "Castle",
          "value": "CASTLE"
        },
        {
          "label": "Princess",
          "value": "PRINCESS"
        },
        {
          "label": "Magic",
          "value": "MAGIC"
        },
        {
          "label": "Pixar",
          "value": "PIXAR"
        },
        {
          "label": "Animation",
          "value": "ANIMATION"
        },
        {
          "label": "Theme",
          "value": "THEME"
        },
        {
          "label": "Park",
          "value": "PARK"
        },
        {
          "label": "Fairy",
          "value": "FAIRY"
        },
        {
          "label": "Dream",
          "value": "DREAM"
        },
        {
          "label": "Adventure",
          "value": "ADVENTURE"
        },
        {
          "label": "Studio",
          "value": "STUDIO"
        }
      ],
      "grid": [
        [
          "V",
          "A",
          "D",
          "V",
          "E",
          "N",
          "T",
          "U",
          "R",
          "E"
        ],
        [
          "A",
          "N",
          "I",
          "M",
          "A",
          "T",
          "I",
          "O",
          "N",
          "B"
        ],
        [
          "X",
          "V",
          "G",
          "O",
          "V",
          "N",
          "K",
          "P",
          "O",
          "J"
        ],
        [
          "B",
          "G",
          "H",
          "F",
          "D",
          "G",
          "R",
          "R",
          "O",
          "U"
        ],
        [
          "Q",
          "L",
          "G",
          "I",
          "O",
          "S",
          "V",
          "I",
          "B",
          "C"
        ],
        [
          "T",
          "H",
          "E",
          "M",
          "E",
          "R",
          "D",
          "N",
          "U",
          "X"
        ],
        [
          "S",
          "M",
          "K",
          "I",
          "Z",
          "U",
          "P",
          "C",
          "S",
          "C"
        ],
        [
          "N",
          "A",
          "Y",
          "F",
          "T",
          "V",
          "U",
          "E",
          "A",
          "N"
        ],
        [
          "B",
          "E",
          "U",
          "S",
          "A",
          "R",
          "F",
          "S",
          "L",
          "U"
        ],
        [
          "I",
          "R",
          "X",
          "L",
          "A",
          "I",
          "T",
          "S",
          "P",
          "J"
        ],
        [
          "F",
          "D",
          "E",
          "X",
          "S",
          "L",
          "R",
          "M",
          "J",
          "Y"
        ],
        [
          "I",
          "W",
          "I",
          "T",
          "E",
          "C",
          "I",
          "Y",
          "W",
          "K"
        ],
        [
          "J",
          "P",
          "E",
          "H",
          "R",
          "C",
          "I",
          "M",
          "V",
          "K"
        ],
        [
          "Y",
          "I",
          "Y",
          "Z",
          "K",
          "F",
          "Z",
          "G",
          "I",
          "V"
        ],
        [
          "C",
          "C",
          "C",
          "E",
          "O",
          "Q",
          "D",
          "A",
          "A",
          "O"
        ],
        [
          "J",
          "W",
          "Y",
          "P",
          "A",
          "R",
          "K",
          "X",
          "K",
          "M"
        ]
      ],
      "placements": [
        {
          "label": "Adventure",
          "value": "ADVENTURE",
          "word": "ADVENTURE",
          "clean": "ADVENTURE",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 9
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
            },
            {
              "row": 0,
              "col": 9
            }
          ]
        },
        {
          "label": "Animation",
          "value": "ANIMATION",
          "word": "ANIMATION",
          "clean": "ANIMATION",
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
          "label": "Castle",
          "value": "CASTLE",
          "word": "CASTLE",
          "clean": "CASTLE",
          "start": {
            "row": 6,
            "col": 9
          },
          "end": {
            "row": 11,
            "col": 4
          },
          "direction": "SW",
          "path": [
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 11,
              "col": 4
            }
          ]
        },
        {
          "label": "Dream",
          "value": "DREAM",
          "word": "DREAM",
          "clean": "DREAM",
          "start": {
            "row": 10,
            "col": 1
          },
          "end": {
            "row": 6,
            "col": 1
          },
          "direction": "N",
          "path": [
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 9,
              "col": 1
            },
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 6,
              "col": 1
            }
          ]
        },
        {
          "label": "Fairy",
          "value": "FAIRY",
          "word": "FAIRY",
          "clean": "FAIRY",
          "start": {
            "row": 7,
            "col": 3
          },
          "end": {
            "row": 11,
            "col": 7
          },
          "direction": "SE",
          "path": [
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
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 11,
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
          "label": "Mickey",
          "value": "MICKEY",
          "word": "MICKEY",
          "clean": "MICKEY",
          "start": {
            "row": 10,
            "col": 7
          },
          "end": {
            "row": 15,
            "col": 2
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
            }
          ]
        },
        {
          "label": "Park",
          "value": "PARK",
          "word": "PARK",
          "clean": "PARK",
          "start": {
            "row": 15,
            "col": 3
          },
          "end": {
            "row": 15,
            "col": 6
          },
          "direction": "E",
          "path": [
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
          "label": "Pixar",
          "value": "PIXAR",
          "word": "PIXAR",
          "clean": "PIXAR",
          "start": {
            "row": 12,
            "col": 1
          },
          "end": {
            "row": 8,
            "col": 5
          },
          "direction": "NE",
          "path": [
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 11,
              "col": 2
            },
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
            }
          ]
        },
        {
          "label": "Princess",
          "value": "PRINCESS",
          "word": "PRINCESS",
          "clean": "PRINCESS",
          "start": {
            "row": 2,
            "col": 7
          },
          "end": {
            "row": 9,
            "col": 7
          },
          "direction": "S",
          "path": [
            {
              "row": 2,
              "col": 7
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 4,
              "col": 7
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 9,
              "col": 7
            }
          ]
        },
        {
          "label": "Studio",
          "value": "STUDIO",
          "word": "STUDIO",
          "clean": "STUDIO",
          "start": {
            "row": 8,
            "col": 3
          },
          "end": {
            "row": 3,
            "col": 8
          },
          "direction": "NE",
          "path": [
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
            },
            {
              "row": 3,
              "col": 8
            }
          ]
        },
        {
          "label": "Theme",
          "value": "THEME",
          "word": "THEME",
          "clean": "THEME",
          "start": {
            "row": 5,
            "col": 0
          },
          "end": {
            "row": 5,
            "col": 4
          },
          "direction": "E",
          "path": [
            {
              "row": 5,
              "col": 0
            },
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
      "topic": "Lilo And Stitch",
      "words": [
        {
          "label": "Lilo",
          "value": "LILO"
        },
        {
          "label": "Stitch",
          "value": "STITCH"
        },
        {
          "label": "Ohana",
          "value": "OHANA"
        },
        {
          "label": "Hawaii",
          "value": "HAWAII"
        },
        {
          "label": "Alien",
          "value": "ALIEN"
        },
        {
          "label": "Experiment",
          "value": "EXPERIMENT"
        },
        {
          "label": "Surf",
          "value": "SURF"
        },
        {
          "label": "Family",
          "value": "FAMILY"
        },
        {
          "label": "Beach",
          "value": "BEACH"
        },
        {
          "label": "Nani",
          "value": "NANI"
        },
        {
          "label": "Jumba",
          "value": "JUMBA"
        },
        {
          "label": "Pleakley",
          "value": "PLEAKLEY"
        }
      ],
      "grid": [
        [
          "F",
          "S",
          "G",
          "S",
          "U",
          "J",
          "Z",
          "P",
          "Q",
          "N"
        ],
        [
          "W",
          "O",
          "P",
          "I",
          "U",
          "F",
          "S",
          "U",
          "L",
          "L"
        ],
        [
          "G",
          "U",
          "H",
          "M",
          "L",
          "W",
          "V",
          "I",
          "M",
          "N"
        ],
        [
          "J",
          "Y",
          "B",
          "N",
          "T",
          "Y",
          "N",
          "Z",
          "J",
          "J"
        ],
        [
          "N",
          "A",
          "N",
          "I",
          "N",
          "E",
          "I",
          "L",
          "A",
          "D"
        ],
        [
          "O",
          "P",
          "J",
          "U",
          "X",
          "L",
          "A",
          "A",
          "Q",
          "F"
        ],
        [
          "E",
          "L",
          "I",
          "L",
          "O",
          "K",
          "X",
          "N",
          "D",
          "Z"
        ],
        [
          "V",
          "X",
          "J",
          "E",
          "U",
          "A",
          "B",
          "A",
          "E",
          "Y"
        ],
        [
          "N",
          "K",
          "P",
          "T",
          "C",
          "E",
          "F",
          "H",
          "O",
          "R"
        ],
        [
          "K",
          "W",
          "B",
          "E",
          "I",
          "L",
          "K",
          "O",
          "V",
          "O"
        ],
        [
          "I",
          "Q",
          "H",
          "T",
          "R",
          "P",
          "G",
          "F",
          "M",
          "T"
        ],
        [
          "I",
          "O",
          "C",
          "X",
          "I",
          "I",
          "A",
          "T",
          "U",
          "M"
        ],
        [
          "A",
          "S",
          "A",
          "X",
          "M",
          "M",
          "M",
          "I",
          "H",
          "M"
        ],
        [
          "W",
          "U",
          "E",
          "T",
          "I",
          "Q",
          "Z",
          "E",
          "U",
          "E"
        ],
        [
          "A",
          "R",
          "B",
          "L",
          "M",
          "R",
          "E",
          "I",
          "N",
          "Q"
        ],
        [
          "H",
          "F",
          "Y",
          "S",
          "T",
          "I",
          "T",
          "C",
          "H",
          "T"
        ]
      ],
      "placements": [
        {
          "label": "Alien",
          "value": "ALIEN",
          "word": "ALIEN",
          "clean": "ALIEN",
          "start": {
            "row": 4,
            "col": 8
          },
          "end": {
            "row": 4,
            "col": 4
          },
          "direction": "W",
          "path": [
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 4,
              "col": 7
            },
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
            }
          ]
        },
        {
          "label": "Beach",
          "value": "BEACH",
          "word": "BEACH",
          "clean": "BEACH",
          "start": {
            "row": 14,
            "col": 2
          },
          "end": {
            "row": 10,
            "col": 2
          },
          "direction": "N",
          "path": [
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
            },
            {
              "row": 10,
              "col": 2
            }
          ]
        },
        {
          "label": "Experiment",
          "value": "EXPERIMENT",
          "word": "EXPERIMENT",
          "clean": "EXPERIMENT",
          "start": {
            "row": 6,
            "col": 0
          },
          "end": {
            "row": 15,
            "col": 9
          },
          "direction": "SE",
          "path": [
            {
              "row": 6,
              "col": 0
            },
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
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 14,
              "col": 8
            },
            {
              "row": 15,
              "col": 9
            }
          ]
        },
        {
          "label": "Family",
          "value": "FAMILY",
          "word": "FAMILY",
          "clean": "FAMILY",
          "start": {
            "row": 10,
            "col": 7
          },
          "end": {
            "row": 15,
            "col": 2
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
            }
          ]
        },
        {
          "label": "Hawaii",
          "value": "HAWAII",
          "word": "HAWAII",
          "clean": "HAWAII",
          "start": {
            "row": 15,
            "col": 0
          },
          "end": {
            "row": 10,
            "col": 0
          },
          "direction": "N",
          "path": [
            {
              "row": 15,
              "col": 0
            },
            {
              "row": 14,
              "col": 0
            },
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
            }
          ]
        },
        {
          "label": "Jumba",
          "value": "JUMBA",
          "word": "JUMBA",
          "clean": "JUMBA",
          "start": {
            "row": 0,
            "col": 5
          },
          "end": {
            "row": 4,
            "col": 1
          },
          "direction": "SW",
          "path": [
            {
              "row": 0,
              "col": 5
            },
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
            }
          ]
        },
        {
          "label": "Lilo",
          "value": "LILO",
          "word": "LILO",
          "clean": "LILO",
          "start": {
            "row": 6,
            "col": 1
          },
          "end": {
            "row": 6,
            "col": 4
          },
          "direction": "E",
          "path": [
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 6,
              "col": 4
            }
          ]
        },
        {
          "label": "Nani",
          "value": "NANI",
          "word": "NANI",
          "clean": "NANI",
          "start": {
            "row": 4,
            "col": 0
          },
          "end": {
            "row": 4,
            "col": 3
          },
          "direction": "E",
          "path": [
            {
              "row": 4,
              "col": 0
            },
            {
              "row": 4,
              "col": 1
            },
            {
              "row": 4,
              "col": 2
            },
            {
              "row": 4,
              "col": 3
            }
          ]
        },
        {
          "label": "Ohana",
          "value": "OHANA",
          "word": "OHANA",
          "clean": "OHANA",
          "start": {
            "row": 9,
            "col": 7
          },
          "end": {
            "row": 5,
            "col": 7
          },
          "direction": "N",
          "path": [
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 7,
              "col": 7
            },
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 5,
              "col": 7
            }
          ]
        },
        {
          "label": "Pleakley",
          "value": "PLEAKLEY",
          "word": "PLEAKLEY",
          "clean": "PLEAKLEY",
          "start": {
            "row": 10,
            "col": 5
          },
          "end": {
            "row": 3,
            "col": 5
          },
          "direction": "N",
          "path": [
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 8,
              "col": 5
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 6,
              "col": 5
            },
            {
              "row": 5,
              "col": 5
            },
            {
              "row": 4,
              "col": 5
            },
            {
              "row": 3,
              "col": 5
            }
          ]
        },
        {
          "label": "Stitch",
          "value": "STITCH",
          "word": "STITCH",
          "clean": "STITCH",
          "start": {
            "row": 15,
            "col": 3
          },
          "end": {
            "row": 15,
            "col": 8
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 15,
              "col": 7
            },
            {
              "row": 15,
              "col": 8
            }
          ]
        },
        {
          "label": "Surf",
          "value": "SURF",
          "word": "SURF",
          "clean": "SURF",
          "start": {
            "row": 12,
            "col": 1
          },
          "end": {
            "row": 15,
            "col": 1
          },
          "direction": "S",
          "path": [
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 14,
              "col": 1
            },
            {
              "row": 15,
              "col": 1
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
      "topic": "One Direction",
      "words": [
        {
          "label": "Harry",
          "value": "HARRY"
        },
        {
          "label": "Styles",
          "value": "STYLES"
        },
        {
          "label": "Niall",
          "value": "NIALL"
        },
        {
          "label": "Horan",
          "value": "HORAN"
        },
        {
          "label": "Louis",
          "value": "LOUIS"
        },
        {
          "label": "Tomlinson",
          "value": "TOMLINSON"
        },
        {
          "label": "Zayn",
          "value": "ZAYN"
        },
        {
          "label": "Malik",
          "value": "MALIK"
        },
        {
          "label": "Liam",
          "value": "LIAM"
        },
        {
          "label": "Payne",
          "value": "PAYNE"
        },
        {
          "label": "Band",
          "value": "BAND"
        },
        {
          "label": "Midnight",
          "value": "MIDNIGHT"
        }
      ],
      "grid": [
        [
          "Y",
          "Y",
          "L",
          "L",
          "Q",
          "U",
          "W",
          "G",
          "C",
          "N"
        ],
        [
          "M",
          "A",
          "P",
          "A",
          "Y",
          "N",
          "E",
          "K",
          "O",
          "R"
        ],
        [
          "M",
          "A",
          "L",
          "I",
          "K",
          "Y",
          "S",
          "S",
          "J",
          "Z"
        ],
        [
          "A",
          "H",
          "Z",
          "R",
          "C",
          "I",
          "N",
          "H",
          "L",
          "F"
        ],
        [
          "O",
          "Y",
          "A",
          "H",
          "U",
          "I",
          "D",
          "I",
          "M",
          "M"
        ],
        [
          "G",
          "X",
          "T",
          "O",
          "L",
          "U",
          "A",
          "V",
          "B",
          "N"
        ],
        [
          "O",
          "T",
          "L",
          "M",
          "M",
          "M",
          "M",
          "L",
          "J",
          "Y"
        ],
        [
          "E",
          "V",
          "O",
          "S",
          "T",
          "Y",
          "L",
          "E",
          "S",
          "A"
        ],
        [
          "O",
          "T",
          "I",
          "Z",
          "F",
          "E",
          "I",
          "L",
          "M",
          "Z"
        ],
        [
          "X",
          "P",
          "A",
          "N",
          "N",
          "O",
          "H",
          "U",
          "V",
          "A"
        ],
        [
          "T",
          "H",
          "G",
          "I",
          "N",
          "D",
          "I",
          "M",
          "I",
          "B"
        ],
        [
          "B",
          "R",
          "A",
          "C",
          "Y",
          "R",
          "R",
          "A",
          "H",
          "D"
        ],
        [
          "Y",
          "L",
          "Z",
          "T",
          "D",
          "V",
          "K",
          "G",
          "H",
          "A"
        ],
        [
          "L",
          "V",
          "X",
          "N",
          "I",
          "Y",
          "B",
          "I",
          "E",
          "L"
        ],
        [
          "U",
          "D",
          "A",
          "H",
          "O",
          "R",
          "A",
          "N",
          "O",
          "H"
        ],
        [
          "H",
          "B",
          "L",
          "Q",
          "M",
          "I",
          "T",
          "L",
          "T",
          "Z"
        ]
      ],
      "placements": [
        {
          "label": "Band",
          "value": "BAND",
          "word": "BAND",
          "clean": "BAND",
          "start": {
            "row": 15,
            "col": 1
          },
          "end": {
            "row": 12,
            "col": 4
          },
          "direction": "NE",
          "path": [
            {
              "row": 15,
              "col": 1
            },
            {
              "row": 14,
              "col": 2
            },
            {
              "row": 13,
              "col": 3
            },
            {
              "row": 12,
              "col": 4
            }
          ]
        },
        {
          "label": "Harry",
          "value": "HARRY",
          "word": "HARRY",
          "clean": "HARRY",
          "start": {
            "row": 11,
            "col": 8
          },
          "end": {
            "row": 11,
            "col": 4
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
            }
          ]
        },
        {
          "label": "Horan",
          "value": "HORAN",
          "word": "HORAN",
          "clean": "HORAN",
          "start": {
            "row": 14,
            "col": 3
          },
          "end": {
            "row": 14,
            "col": 7
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 14,
              "col": 7
            }
          ]
        },
        {
          "label": "Liam",
          "value": "LIAM",
          "word": "LIAM",
          "clean": "LIAM",
          "start": {
            "row": 3,
            "col": 8
          },
          "end": {
            "row": 6,
            "col": 5
          },
          "direction": "SW",
          "path": [
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
            }
          ]
        },
        {
          "label": "Louis",
          "value": "LOUIS",
          "word": "LOUIS",
          "clean": "LOUIS",
          "start": {
            "row": 6,
            "col": 2
          },
          "end": {
            "row": 2,
            "col": 6
          },
          "direction": "NE",
          "path": [
            {
              "row": 6,
              "col": 2
            },
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
            }
          ]
        },
        {
          "label": "Malik",
          "value": "MALIK",
          "word": "MALIK",
          "clean": "MALIK",
          "start": {
            "row": 2,
            "col": 0
          },
          "end": {
            "row": 2,
            "col": 4
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
            },
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
            }
          ]
        },
        {
          "label": "Midnight",
          "value": "MIDNIGHT",
          "word": "MIDNIGHT",
          "clean": "MIDNIGHT",
          "start": {
            "row": 10,
            "col": 7
          },
          "end": {
            "row": 10,
            "col": 0
          },
          "direction": "W",
          "path": [
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 10,
              "col": 6
            },
            {
              "row": 10,
              "col": 5
            },
            {
              "row": 10,
              "col": 4
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 10,
              "col": 0
            }
          ]
        },
        {
          "label": "Niall",
          "value": "NIALL",
          "word": "NIALL",
          "clean": "NIALL",
          "start": {
            "row": 9,
            "col": 4
          },
          "end": {
            "row": 13,
            "col": 0
          },
          "direction": "SW",
          "path": [
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 10,
              "col": 3
            },
            {
              "row": 11,
              "col": 2
            },
            {
              "row": 12,
              "col": 1
            },
            {
              "row": 13,
              "col": 0
            }
          ]
        },
        {
          "label": "Payne",
          "value": "PAYNE",
          "word": "PAYNE",
          "clean": "PAYNE",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 1,
            "col": 6
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
            },
            {
              "row": 1,
              "col": 6
            }
          ]
        },
        {
          "label": "Styles",
          "value": "STYLES",
          "word": "STYLES",
          "clean": "STYLES",
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
          "label": "Tomlinson",
          "value": "TOMLINSON",
          "word": "TOMLINSON",
          "clean": "TOMLINSON",
          "start": {
            "row": 8,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "direction": "NE",
          "path": [
            {
              "row": 8,
              "col": 1
            },
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
        },
        {
          "label": "Zayn",
          "value": "ZAYN",
          "word": "ZAYN",
          "clean": "ZAYN",
          "start": {
            "row": 8,
            "col": 9
          },
          "end": {
            "row": 5,
            "col": 9
          },
          "direction": "N",
          "path": [
            {
              "row": 8,
              "col": 9
            },
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
      "topic": "Korean Dishes",
      "words": [
        {
          "label": "김치",
          "value": "김치"
        },
        {
          "label": "비빔밥",
          "value": "비빔밥"
        },
        {
          "label": "불고기",
          "value": "불고기"
        },
        {
          "label": "떡볶이",
          "value": "떡볶이"
        },
        {
          "label": "잡채",
          "value": "잡채"
        },
        {
          "label": "삼겹살",
          "value": "삼겹살"
        },
        {
          "label": "냉면",
          "value": "냉면"
        },
        {
          "label": "김밥",
          "value": "김밥"
        },
        {
          "label": "된장찌개",
          "value": "된장찌개"
        },
        {
          "label": "순두부찌개",
          "value": "순두부찌개"
        },
        {
          "label": "갈비",
          "value": "갈비"
        },
        {
          "label": "라면",
          "value": "라면"
        }
      ],
      "grid": [
        [
          "카",
          "노",
          "리",
          "푸",
          "소",
          "처",
          "쿠",
          "투",
          "자",
          "도"
        ],
        [
          "차",
          "키",
          "비",
          "로",
          "카",
          "미",
          "노",
          "우",
          "로",
          "누"
        ],
        [
          "다",
          "빔",
          "주",
          "서",
          "오",
          "타",
          "머",
          "푸",
          "기",
          "호"
        ],
        [
          "밥",
          "어",
          "두",
          "구",
          "터",
          "카",
          "된",
          "고",
          "누",
          "키"
        ],
        [
          "오",
          "러",
          "푸",
          "무",
          "비",
          "장",
          "불",
          "쿠",
          "허",
          "디"
        ],
        [
          "오",
          "거",
          "소",
          "부",
          "찌",
          "리",
          "파",
          "하",
          "면",
          "로"
        ],
        [
          "삼",
          "기",
          "도",
          "개",
          "나",
          "부",
          "보",
          "냉",
          "모",
          "자"
        ],
        [
          "두",
          "겹",
          "처",
          "저",
          "투",
          "소",
          "리",
          "푸",
          "호",
          "어"
        ],
        [
          "구",
          "파",
          "살",
          "우",
          "오",
          "쿠",
          "두",
          "하",
          "자",
          "후"
        ],
        [
          "파",
          "오",
          "오",
          "구",
          "푸",
          "라",
          "버",
          "초",
          "비",
          "바"
        ],
        [
          "지",
          "라",
          "바",
          "로",
          "파",
          "지",
          "퍼",
          "갈",
          "김",
          "퍼"
        ],
        [
          "모",
          "면",
          "이",
          "볶",
          "떡",
          "개",
          "어",
          "사",
          "소",
          "치"
        ],
        [
          "가",
          "포",
          "고",
          "수",
          "허",
          "노",
          "찌",
          "밥",
          "김",
          "아"
        ],
        [
          "비",
          "히",
          "디",
          "너",
          "조",
          "도",
          "구",
          "부",
          "서",
          "파"
        ],
        [
          "고",
          "포",
          "러",
          "바",
          "채",
          "잡",
          "타",
          "리",
          "두",
          "부"
        ],
        [
          "노",
          "리",
          "처",
          "루",
          "나",
          "호",
          "카",
          "포",
          "카",
          "순"
        ]
      ],
      "placements": [
        {
          "label": "갈비",
          "value": "갈비",
          "word": "갈비",
          "clean": "갈비",
          "start": {
            "row": 10,
            "col": 7
          },
          "end": {
            "row": 9,
            "col": 8
          },
          "direction": "NE",
          "path": [
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            }
          ]
        },
        {
          "label": "김밥",
          "value": "김밥",
          "word": "김밥",
          "clean": "김밥",
          "start": {
            "row": 12,
            "col": 8
          },
          "end": {
            "row": 12,
            "col": 7
          },
          "direction": "W",
          "path": [
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 12,
              "col": 7
            }
          ]
        },
        {
          "label": "김치",
          "value": "김치",
          "word": "김치",
          "clean": "김치",
          "start": {
            "row": 10,
            "col": 8
          },
          "end": {
            "row": 11,
            "col": 9
          },
          "direction": "SE",
          "path": [
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 11,
              "col": 9
            }
          ]
        },
        {
          "label": "냉면",
          "value": "냉면",
          "word": "냉면",
          "clean": "냉면",
          "start": {
            "row": 6,
            "col": 7
          },
          "end": {
            "row": 5,
            "col": 8
          },
          "direction": "NE",
          "path": [
            {
              "row": 6,
              "col": 7
            },
            {
              "row": 5,
              "col": 8
            }
          ]
        },
        {
          "label": "된장찌개",
          "value": "된장찌개",
          "word": "된장찌개",
          "clean": "된장찌개",
          "start": {
            "row": 3,
            "col": 6
          },
          "end": {
            "row": 6,
            "col": 3
          },
          "direction": "SW",
          "path": [
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
            }
          ]
        },
        {
          "label": "떡볶이",
          "value": "떡볶이",
          "word": "떡볶이",
          "clean": "떡볶이",
          "start": {
            "row": 11,
            "col": 4
          },
          "end": {
            "row": 11,
            "col": 2
          },
          "direction": "W",
          "path": [
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
          "label": "라면",
          "value": "라면",
          "word": "라면",
          "clean": "라면",
          "start": {
            "row": 10,
            "col": 1
          },
          "end": {
            "row": 11,
            "col": 1
          },
          "direction": "S",
          "path": [
            {
              "row": 10,
              "col": 1
            },
            {
              "row": 11,
              "col": 1
            }
          ]
        },
        {
          "label": "불고기",
          "value": "불고기",
          "word": "불고기",
          "clean": "불고기",
          "start": {
            "row": 4,
            "col": 6
          },
          "end": {
            "row": 2,
            "col": 8
          },
          "direction": "NE",
          "path": [
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
          "label": "비빔밥",
          "value": "비빔밥",
          "word": "비빔밥",
          "clean": "비빔밥",
          "start": {
            "row": 1,
            "col": 2
          },
          "end": {
            "row": 3,
            "col": 0
          },
          "direction": "SW",
          "path": [
            {
              "row": 1,
              "col": 2
            },
            {
              "row": 2,
              "col": 1
            },
            {
              "row": 3,
              "col": 0
            }
          ]
        },
        {
          "label": "삼겹살",
          "value": "삼겹살",
          "word": "삼겹살",
          "clean": "삼겹살",
          "start": {
            "row": 6,
            "col": 0
          },
          "end": {
            "row": 8,
            "col": 2
          },
          "direction": "SE",
          "path": [
            {
              "row": 6,
              "col": 0
            },
            {
              "row": 7,
              "col": 1
            },
            {
              "row": 8,
              "col": 2
            }
          ]
        },
        {
          "label": "순두부찌개",
          "value": "순두부찌개",
          "word": "순두부찌개",
          "clean": "순두부찌개",
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
          "label": "잡채",
          "value": "잡채",
          "word": "잡채",
          "clean": "잡채",
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
        }
      ]
    }
  ]
} as const;

export default dailyPuzzles;
