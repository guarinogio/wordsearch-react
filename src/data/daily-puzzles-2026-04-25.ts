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
  "id": "2026-04-25",
  "date": "2026-04-25",
  "topic": "Manual",
  "hash": "8b1c5c2fd9b2465f035a7b0ad95f71f89cf1fe786d7830354b7ce9a3492674f9",
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
          "label": "RevoluciÓN",
          "value": "REVOLUCION"
        },
        {
          "label": "Gabinete",
          "value": "GABINETE"
        },
        {
          "label": "Legado",
          "value": "LEGADO"
        },
        {
          "label": "Duelo",
          "value": "DUELO"
        },
        {
          "label": "Broadway",
          "value": "BROADWAY"
        },
        {
          "label": "뮤지컬",
          "value": "뮤지컬"
        },
        {
          "label": "혁명",
          "value": "혁명"
        },
        {
          "label": "요크타운",
          "value": "요크타운"
        }
      ],
      "grid": [
        [
          "Z",
          "P",
          "F",
          "N",
          "L",
          "G",
          "X",
          "O",
          "I",
          "N",
          "Q",
          "U",
          "K",
          "U",
          "J",
          "B",
          "V",
          "E",
          "G",
          "Z"
        ],
        [
          "T",
          "H",
          "A",
          "M",
          "I",
          "L",
          "T",
          "O",
          "N",
          "T",
          "Z",
          "C",
          "C",
          "E",
          "N",
          "U",
          "G",
          "X",
          "Z",
          "K"
        ],
        [
          "S",
          "J",
          "B",
          "A",
          "J",
          "K",
          "G",
          "H",
          "R",
          "E",
          "W",
          "G",
          "H",
          "M",
          "B",
          "R",
          "Q",
          "Y",
          "K",
          "S"
        ],
        [
          "S",
          "L",
          "M",
          "E",
          "T",
          "A",
          "N",
          "O",
          "J",
          "E",
          "L",
          "A",
          "Q",
          "B",
          "U",
          "R",
          "A",
          "Q",
          "D",
          "N"
        ],
        [
          "D",
          "Z",
          "L",
          "P",
          "S",
          "C",
          "W",
          "A",
          "O",
          "O",
          "O",
          "I",
          "Y",
          "K",
          "M",
          "W",
          "O",
          "F",
          "Q",
          "T"
        ],
        [
          "D",
          "J",
          "E",
          "M",
          "R",
          "X",
          "J",
          "J",
          "Q",
          "L",
          "I",
          "C",
          "Z",
          "V",
          "D",
          "G",
          "O",
          "N",
          "Q",
          "G"
        ],
        [
          "J",
          "J",
          "Z",
          "D",
          "F",
          "U",
          "O",
          "I",
          "E",
          "Y",
          "X",
          "O",
          "L",
          "A",
          "C",
          "H",
          "N",
          "O",
          "W",
          "U"
        ],
        [
          "B",
          "G",
          "B",
          "ᄆ",
          "ᅲ",
          "ᄌ",
          "ᅵ",
          "ᄏ",
          "ᅥ",
          "ᆯ",
          "C",
          "C",
          "O",
          "E",
          "I",
          "C",
          "H",
          "T",
          "E",
          "A"
        ],
        [
          "G",
          "Y",
          "D",
          "E",
          "Z",
          "K",
          "N",
          "L",
          "H",
          "P",
          "P",
          "R",
          "R",
          "H",
          "O",
          "N",
          "A",
          "G",
          "A",
          "A"
        ],
        [
          "P",
          "A",
          "L",
          "U",
          "E",
          "W",
          "W",
          "O",
          "A",
          "R",
          "B",
          "K",
          "N",
          "G",
          "P",
          "N",
          "N",
          "N",
          "A",
          "M"
        ],
        [
          "L",
          "V",
          "B",
          "F",
          "E",
          "K",
          "S",
          "L",
          "S",
          "F",
          "E",
          "W",
          "R",
          "T",
          "U",
          "K",
          "G",
          "I",
          "D",
          "B"
        ],
        [
          "E",
          "P",
          "R",
          "I",
          "L",
          "L",
          "O",
          "H",
          "ᆫ",
          "R",
          "A",
          "V",
          "C",
          "V",
          "Z",
          "I",
          "E",
          "H",
          "F",
          "B"
        ],
        [
          "G",
          "J",
          "Z",
          "Q",
          "N",
          "E",
          "O",
          "ᅮ",
          "O",
          "W",
          "E",
          "Y",
          "O",
          "Z",
          "W",
          "L",
          "L",
          "S",
          "Y",
          "K"
        ],
        [
          "A",
          "G",
          "Y",
          "X",
          "J",
          "E",
          "ᄋ",
          "ᄒ",
          "J",
          "G",
          "C",
          "F",
          "E",
          "L",
          "N",
          "D",
          "I",
          "A",
          "T",
          "O"
        ],
        [
          "D",
          "R",
          "M",
          "U",
          "U",
          "ᅡ",
          "T",
          "V",
          "ᅧ",
          "U",
          "E",
          "X",
          "F",
          "T",
          "U",
          "V",
          "C",
          "W",
          "H",
          "I"
        ],
        [
          "O",
          "N",
          "Q",
          "Z",
          "ᄐ",
          "F",
          "J",
          "E",
          "I",
          "ᆨ",
          "X",
          "N",
          "W",
          "E",
          "T",
          "C",
          "A",
          "U",
          "W",
          "B"
        ],
        [
          "S",
          "H",
          "Y",
          "ᅳ",
          "F",
          "W",
          "E",
          "I",
          "A",
          "U",
          "ᄆ",
          "Z",
          "F",
          "O",
          "J",
          "E",
          "I",
          "I",
          "T",
          "U"
        ],
        [
          "L",
          "M",
          "ᄏ",
          "P",
          "K",
          "W",
          "C",
          "Z",
          "W",
          "X",
          "N",
          "ᅧ",
          "N",
          "T",
          "U",
          "X",
          "O",
          "O",
          "C",
          "L"
        ],
        [
          "N",
          "ᅭ",
          "W",
          "F",
          "Z",
          "L",
          "V",
          "F",
          "L",
          "X",
          "N",
          "K",
          "ᆼ",
          "O",
          "B",
          "V",
          "V",
          "G",
          "N",
          "K"
        ],
        [
          "ᄋ",
          "X",
          "C",
          "P",
          "F",
          "E",
          "Z",
          "F",
          "B",
          "D",
          "Y",
          "P",
          "T",
          "O",
          "C",
          "X",
          "K",
          "S",
          "F",
          "C"
        ]
      ],
      "placements": [
        {
          "label": "Angelica",
          "value": "ANGELICA",
          "word": "ANGELICA",
          "clean": "ANGELICA",
          "start": {
            "row": 8,
            "col": 16
          },
          "end": {
            "row": 15,
            "col": 16
          },
          "direction": "S",
          "path": [
            {
              "row": 8,
              "col": 16
            },
            {
              "row": 9,
              "col": 16
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 11,
              "col": 16
            },
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 13,
              "col": 16
            },
            {
              "row": 14,
              "col": 16
            },
            {
              "row": 15,
              "col": 16
            }
          ]
        },
        {
          "label": "Broadway",
          "value": "BROADWAY",
          "word": "BROADWAY",
          "clean": "BROADWAY",
          "start": {
            "row": 9,
            "col": 10
          },
          "end": {
            "row": 2,
            "col": 17
          },
          "direction": "NE",
          "path": [
            {
              "row": 9,
              "col": 10
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 7,
              "col": 12
            },
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
            "col": 15
          },
          "end": {
            "row": 3,
            "col": 15
          },
          "direction": "S",
          "path": [
            {
              "row": 0,
              "col": 15
            },
            {
              "row": 1,
              "col": 15
            },
            {
              "row": 2,
              "col": 15
            },
            {
              "row": 3,
              "col": 15
            }
          ]
        },
        {
          "label": "Duelo",
          "value": "DUELO",
          "word": "DUELO",
          "clean": "DUELO",
          "start": {
            "row": 8,
            "col": 2
          },
          "end": {
            "row": 12,
            "col": 6
          },
          "direction": "SE",
          "path": [
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
            }
          ]
        },
        {
          "label": "Eliza",
          "value": "ELIZA",
          "word": "ELIZA",
          "clean": "ELIZA",
          "start": {
            "row": 2,
            "col": 9
          },
          "end": {
            "row": 6,
            "col": 13
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
            }
          ]
        },
        {
          "label": "Gabinete",
          "value": "GABINETE",
          "word": "GABINETE",
          "clean": "GABINETE",
          "start": {
            "row": 8,
            "col": 0
          },
          "end": {
            "row": 15,
            "col": 7
          },
          "direction": "SE",
          "path": [
            {
              "row": 8,
              "col": 0
            },
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
            "col": 1
          },
          "end": {
            "row": 1,
            "col": 8
          },
          "direction": "E",
          "path": [
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
          "label": "Jefferson",
          "value": "JEFFERSON",
          "word": "JEFFERSON",
          "clean": "JEFFERSON",
          "start": {
            "row": 16,
            "col": 14
          },
          "end": {
            "row": 8,
            "col": 6
          },
          "direction": "NW",
          "path": [
            {
              "row": 16,
              "col": 14
            },
            {
              "row": 15,
              "col": 13
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 8,
              "col": 6
            }
          ]
        },
        {
          "label": "Lafayette",
          "value": "LAFAYETTE",
          "word": "LAFAYETTE",
          "clean": "LAFAYETTE",
          "start": {
            "row": 8,
            "col": 7
          },
          "end": {
            "row": 16,
            "col": 15
          },
          "direction": "SE",
          "path": [
            {
              "row": 8,
              "col": 7
            },
            {
              "row": 9,
              "col": 8
            },
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
          "label": "Legado",
          "value": "LEGADO",
          "word": "LEGADO",
          "clean": "LEGADO",
          "start": {
            "row": 10,
            "col": 0
          },
          "end": {
            "row": 15,
            "col": 0
          },
          "direction": "S",
          "path": [
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
            }
          ]
        },
        {
          "label": "RevoluciÓN",
          "value": "REVOLUCION",
          "word": "REVOLUCION",
          "clean": "REVOLUCION",
          "start": {
            "row": 9,
            "col": 9
          },
          "end": {
            "row": 18,
            "col": 18
          },
          "direction": "SE",
          "path": [
            {
              "row": 9,
              "col": 9
            },
            {
              "row": 10,
              "col": 10
            },
            {
              "row": 11,
              "col": 11
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 13,
              "col": 13
            },
            {
              "row": 14,
              "col": 14
            },
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 16,
              "col": 16
            },
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 18,
              "col": 18
            }
          ]
        },
        {
          "label": "Washington",
          "value": "WASHINGTON",
          "word": "WASHINGTON",
          "clean": "WASHINGTON",
          "start": {
            "row": 14,
            "col": 17
          },
          "end": {
            "row": 5,
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
            },
            {
              "row": 8,
              "col": 17
            },
            {
              "row": 7,
              "col": 17
            },
            {
              "row": 6,
              "col": 17
            },
            {
              "row": 5,
              "col": 17
            }
          ]
        },
        {
          "label": "뮤지컬",
          "value": "뮤지컬",
          "word": "뮤지컬",
          "clean": "뮤지컬",
          "start": {
            "row": 7,
            "col": 3
          },
          "end": {
            "row": 7,
            "col": 9
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
            },
            {
              "row": 7,
              "col": 9
            }
          ]
        },
        {
          "label": "요크타운",
          "value": "요크타운",
          "word": "요크타운",
          "clean": "요크타운",
          "start": {
            "row": 19,
            "col": 0
          },
          "end": {
            "row": 11,
            "col": 8
          },
          "direction": "NE",
          "path": [
            {
              "row": 19,
              "col": 0
            },
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
            },
            {
              "row": 11,
              "col": 8
            }
          ]
        },
        {
          "label": "혁명",
          "value": "혁명",
          "word": "혁명",
          "clean": "혁명",
          "start": {
            "row": 13,
            "col": 7
          },
          "end": {
            "row": 18,
            "col": 12
          },
          "direction": "SE",
          "path": [
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
            },
            {
              "row": 16,
              "col": 10
            },
            {
              "row": 17,
              "col": 11
            },
            {
              "row": 18,
              "col": 12
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
          "label": "Timon",
          "value": "TIMON"
        },
        {
          "label": "Pumbaa",
          "value": "PUMBAA"
        },
        {
          "label": "Savanna",
          "value": "SAVANNA"
        },
        {
          "label": "Reino",
          "value": "REINO"
        },
        {
          "label": "LeÓN",
          "value": "LEON"
        },
        {
          "label": "Orgullo",
          "value": "ORGULLO"
        },
        {
          "label": "Sabana",
          "value": "SABANA"
        },
        {
          "label": "CÍRculo",
          "value": "CIRCULO"
        },
        {
          "label": "뮤지컬",
          "value": "뮤지컬"
        },
        {
          "label": "사자",
          "value": "사자"
        },
        {
          "label": "왕국",
          "value": "왕국"
        }
      ],
      "grid": [
        [
          "F",
          "Q",
          "S",
          "F",
          "R",
          "C",
          "O",
          "J",
          "T",
          "M",
          "E",
          "L",
          "Z",
          "Y",
          "Y",
          "X",
          "G",
          "U",
          "E",
          "D"
        ],
        [
          "N",
          "Q",
          "D",
          "R",
          "X",
          "E",
          "S",
          "X",
          "B",
          "B",
          "T",
          "S",
          "V",
          "C",
          "G",
          "W",
          "W",
          "H",
          "O",
          "Y"
        ],
        [
          "A",
          "E",
          "Y",
          "E",
          "D",
          "C",
          "O",
          "Y",
          "M",
          "Q",
          "I",
          "H",
          "S",
          "G",
          "K",
          "A",
          "Z",
          "G",
          "A",
          "G"
        ],
        [
          "F",
          "G",
          "I",
          "O",
          "A",
          "N",
          "C",
          "H",
          "C",
          "H",
          "M",
          "X",
          "V",
          "S",
          "F",
          "G",
          "C",
          "B",
          "Y",
          "Q"
        ],
        [
          "Z",
          "I",
          "N",
          "R",
          "I",
          "Y",
          "Z",
          "I",
          "A",
          "E",
          "O",
          "V",
          "V",
          "A",
          "G",
          "Y",
          "M",
          "R",
          "R",
          "W"
        ],
        [
          "G",
          "E",
          "H",
          "E",
          "F",
          "Y",
          "K",
          "A",
          "M",
          "T",
          "N",
          "F",
          "ᅡ",
          "V",
          "R",
          "I",
          "S",
          "M",
          "T",
          "S"
        ],
        [
          "H",
          "D",
          "R",
          "M",
          "I",
          "B",
          "S",
          "L",
          "D",
          "N",
          "Z",
          "ᄌ",
          "O",
          "A",
          "S",
          "X",
          "V",
          "J",
          "O",
          "K"
        ],
        [
          "N",
          "O",
          "D",
          "H",
          "U",
          "S",
          "D",
          "A",
          "T",
          "V",
          "ᅡ",
          "L",
          "L",
          "N",
          "U",
          "H",
          "Z",
          "E",
          "K",
          "ᆯ"
        ],
        [
          "O",
          "N",
          "R",
          "Q",
          "U",
          "N",
          "B",
          "N",
          "M",
          "ᄉ",
          "U",
          "K",
          "Y",
          "N",
          "K",
          "Z",
          "A",
          "R",
          "ᄋ",
          "ᅥ"
        ],
        [
          "E",
          "R",
          "M",
          "L",
          "D",
          "V",
          "F",
          "O",
          "G",
          "C",
          "H",
          "J",
          "M",
          "A",
          "C",
          "Z",
          "V",
          "Q",
          "ᅪ",
          "ᄏ"
        ],
        [
          "L",
          "M",
          "M",
          "A",
          "U",
          "L",
          "B",
          "S",
          "R",
          "A",
          "R",
          "X",
          "U",
          "L",
          "M",
          "W",
          "G",
          "H",
          "ᆼ",
          "ᅵ"
        ],
        [
          "N",
          "S",
          "Z",
          "A",
          "H",
          "E",
          "Y",
          "I",
          "U",
          "Z",
          "C",
          "I",
          "F",
          "J",
          "N",
          "X",
          "U",
          "I",
          "ᄀ",
          "ᄌ"
        ],
        [
          "O",
          "W",
          "F",
          "R",
          "F",
          "Z",
          "C",
          "M",
          "O",
          "W",
          "I",
          "N",
          "A",
          "S",
          "V",
          "M",
          "C",
          "V",
          "ᅮ",
          "ᅲ"
        ],
        [
          "S",
          "R",
          "F",
          "A",
          "T",
          "L",
          "Y",
          "H",
          "B",
          "W",
          "H",
          "X",
          "S",
          "W",
          "A",
          "Q",
          "X",
          "P",
          "ᆨ",
          "ᄆ"
        ],
        [
          "N",
          "P",
          "G",
          "E",
          "J",
          "L",
          "T",
          "A",
          "B",
          "T",
          "G",
          "G",
          "A",
          "M",
          "D",
          "B",
          "G",
          "Z",
          "X",
          "J"
        ],
        [
          "B",
          "T",
          "U",
          "U",
          "S",
          "Z",
          "J",
          "N",
          "T",
          "A",
          "D",
          "T",
          "Y",
          "Z",
          "B",
          "J",
          "A",
          "N",
          "W",
          "U"
        ],
        [
          "L",
          "X",
          "Y",
          "M",
          "L",
          "P",
          "U",
          "D",
          "C",
          "Q",
          "A",
          "P",
          "G",
          "E",
          "A",
          "Q",
          "F",
          "N",
          "Y",
          "E"
        ],
        [
          "C",
          "O",
          "I",
          "Q",
          "B",
          "L",
          "Z",
          "J",
          "Y",
          "O",
          "A",
          "O",
          "S",
          "T",
          "H",
          "Z",
          "O",
          "F",
          "A",
          "X"
        ],
        [
          "U",
          "I",
          "I",
          "N",
          "A",
          "A",
          "O",
          "C",
          "A",
          "O",
          "O",
          "A",
          "U",
          "Y",
          "P",
          "R",
          "Z",
          "J",
          "E",
          "O"
        ],
        [
          "T",
          "T",
          "W",
          "U",
          "T",
          "W",
          "A",
          "S",
          "M",
          "G",
          "T",
          "U",
          "F",
          "B",
          "W",
          "F",
          "Z",
          "Q",
          "G",
          "M"
        ]
      ],
      "placements": [
        {
          "label": "CÍRculo",
          "value": "CIRCULO",
          "word": "CIRCULO",
          "clean": "CIRCULO",
          "start": {
            "row": 12,
            "col": 6
          },
          "end": {
            "row": 6,
            "col": 12
          },
          "direction": "NE",
          "path": [
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
            },
            {
              "row": 6,
              "col": 12
            }
          ]
        },
        {
          "label": "LeÓN",
          "value": "LEON",
          "word": "LEON",
          "clean": "LEON",
          "start": {
            "row": 10,
            "col": 0
          },
          "end": {
            "row": 7,
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
            "col": 12
          },
          "end": {
            "row": 14,
            "col": 12
          },
          "direction": "S",
          "path": [
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 14,
              "col": 12
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
            "col": 7
          },
          "end": {
            "row": 5,
            "col": 7
          },
          "direction": "N",
          "path": [
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
          "label": "Orgullo",
          "value": "ORGULLO",
          "word": "ORGULLO",
          "clean": "ORGULLO",
          "start": {
            "row": 12,
            "col": 0
          },
          "end": {
            "row": 18,
            "col": 6
          },
          "direction": "SE",
          "path": [
            {
              "row": 12,
              "col": 0
            },
            {
              "row": 13,
              "col": 1
            },
            {
              "row": 14,
              "col": 2
            },
            {
              "row": 15,
              "col": 3
            },
            {
              "row": 16,
              "col": 4
            },
            {
              "row": 17,
              "col": 5
            },
            {
              "row": 18,
              "col": 6
            }
          ]
        },
        {
          "label": "Pumbaa",
          "value": "PUMBAA",
          "word": "PUMBAA",
          "clean": "PUMBAA",
          "start": {
            "row": 14,
            "col": 1
          },
          "end": {
            "row": 19,
            "col": 6
          },
          "direction": "SE",
          "path": [
            {
              "row": 14,
              "col": 1
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 16,
              "col": 3
            },
            {
              "row": 17,
              "col": 4
            },
            {
              "row": 18,
              "col": 5
            },
            {
              "row": 19,
              "col": 6
            }
          ]
        },
        {
          "label": "Reino",
          "value": "REINO",
          "word": "REINO",
          "clean": "REINO",
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
          "label": "Sabana",
          "value": "SABANA",
          "word": "SABANA",
          "clean": "SABANA",
          "start": {
            "row": 12,
            "col": 13
          },
          "end": {
            "row": 17,
            "col": 18
          },
          "direction": "SE",
          "path": [
            {
              "row": 12,
              "col": 13
            },
            {
              "row": 13,
              "col": 14
            },
            {
              "row": 14,
              "col": 15
            },
            {
              "row": 15,
              "col": 16
            },
            {
              "row": 16,
              "col": 17
            },
            {
              "row": 17,
              "col": 18
            }
          ]
        },
        {
          "label": "Savanna",
          "value": "SAVANNA",
          "word": "SAVANNA",
          "clean": "SAVANNA",
          "start": {
            "row": 3,
            "col": 13
          },
          "end": {
            "row": 9,
            "col": 13
          },
          "direction": "S",
          "path": [
            {
              "row": 3,
              "col": 13
            },
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
            },
            {
              "row": 9,
              "col": 13
            }
          ]
        },
        {
          "label": "Scar",
          "value": "SCAR",
          "word": "SCAR",
          "clean": "SCAR",
          "start": {
            "row": 1,
            "col": 6
          },
          "end": {
            "row": 4,
            "col": 3
          },
          "direction": "SW",
          "path": [
            {
              "row": 1,
              "col": 6
            },
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
            }
          ]
        },
        {
          "label": "Simba",
          "value": "SIMBA",
          "word": "SIMBA",
          "clean": "SIMBA",
          "start": {
            "row": 6,
            "col": 14
          },
          "end": {
            "row": 2,
            "col": 18
          },
          "direction": "NE",
          "path": [
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 5,
              "col": 15
            },
            {
              "row": 4,
              "col": 16
            },
            {
              "row": 3,
              "col": 17
            },
            {
              "row": 2,
              "col": 18
            }
          ]
        },
        {
          "label": "Timon",
          "value": "TIMON",
          "word": "TIMON",
          "clean": "TIMON",
          "start": {
            "row": 1,
            "col": 10
          },
          "end": {
            "row": 5,
            "col": 10
          },
          "direction": "S",
          "path": [
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 2,
              "col": 10
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 5,
              "col": 10
            }
          ]
        },
        {
          "label": "뮤지컬",
          "value": "뮤지컬",
          "word": "뮤지컬",
          "clean": "뮤지컬",
          "start": {
            "row": 13,
            "col": 19
          },
          "end": {
            "row": 7,
            "col": 19
          },
          "direction": "N",
          "path": [
            {
              "row": 13,
              "col": 19
            },
            {
              "row": 12,
              "col": 19
            },
            {
              "row": 11,
              "col": 19
            },
            {
              "row": 10,
              "col": 19
            },
            {
              "row": 9,
              "col": 19
            },
            {
              "row": 8,
              "col": 19
            },
            {
              "row": 7,
              "col": 19
            }
          ]
        },
        {
          "label": "사자",
          "value": "사자",
          "word": "사자",
          "clean": "사자",
          "start": {
            "row": 8,
            "col": 9
          },
          "end": {
            "row": 5,
            "col": 12
          },
          "direction": "NE",
          "path": [
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
            }
          ]
        },
        {
          "label": "왕국",
          "value": "왕국",
          "word": "왕국",
          "clean": "왕국",
          "start": {
            "row": 8,
            "col": 18
          },
          "end": {
            "row": 13,
            "col": 18
          },
          "direction": "S",
          "path": [
            {
              "row": 8,
              "col": 18
            },
            {
              "row": 9,
              "col": 18
            },
            {
              "row": 10,
              "col": 18
            },
            {
              "row": 11,
              "col": 18
            },
            {
              "row": 12,
              "col": 18
            },
            {
              "row": 13,
              "col": 18
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
          "label": "Barricade",
          "value": "BARRICADE"
        },
        {
          "label": "RevoluciÓN",
          "value": "REVOLUCION"
        },
        {
          "label": "RedenciÓN",
          "value": "REDENCION"
        },
        {
          "label": "Prisionero",
          "value": "PRISIONERO"
        },
        {
          "label": "ParÍS",
          "value": "PARIS"
        },
        {
          "label": "SueÑO",
          "value": "SUENO"
        },
        {
          "label": "뮤지컬",
          "value": "뮤지컬"
        },
        {
          "label": "혁명",
          "value": "혁명"
        },
        {
          "label": "프랑스",
          "value": "프랑스"
        }
      ],
      "grid": [
        [
          "H",
          "E",
          "H",
          "R",
          "N",
          "I",
          "V",
          "M",
          "T",
          "X",
          "W",
          "I",
          "W",
          "N",
          "L",
          "Y",
          "N",
          "T",
          "O",
          "N"
        ],
        [
          "M",
          "T",
          "A",
          "A",
          "K",
          "K",
          "G",
          "P",
          "J",
          "Z",
          "M",
          "U",
          "H",
          "P",
          "Q",
          "J",
          "F",
          "J",
          "S",
          "A"
        ],
        [
          "K",
          "T",
          "S",
          "F",
          "Z",
          "L",
          "A",
          "O",
          "A",
          "Y",
          "N",
          "S",
          "U",
          "E",
          "N",
          "O",
          "W",
          "Z",
          "C",
          "O"
        ],
        [
          "P",
          "E",
          "F",
          "B",
          "H",
          "R",
          "B",
          "T",
          "R",
          "B",
          "X",
          "U",
          "ᄒ",
          "ᅧ",
          "ᆨ",
          "ᄆ",
          "ᅧ",
          "ᆼ",
          "J",
          "R"
        ],
        [
          "N",
          "S",
          "E",
          "S",
          "I",
          "Q",
          "O",
          "O",
          "A",
          "E",
          "R",
          "X",
          "I",
          "U",
          "V",
          "R",
          "B",
          "M",
          "I",
          "U"
        ],
        [
          "Q",
          "O",
          "A",
          "S",
          "L",
          "X",
          "H",
          "R",
          "C",
          "G",
          "N",
          "X",
          "T",
          "Y",
          "Y",
          "C",
          "N",
          "T",
          "Z",
          "B"
        ],
        [
          "Y",
          "C",
          "C",
          "G",
          "W",
          "F",
          "R",
          "Y",
          "M",
          "X",
          "P",
          "O",
          "O",
          "H",
          "R",
          "G",
          "G",
          "R",
          "M",
          "Q"
        ],
        [
          "V",
          "S",
          "B",
          "B",
          "T",
          "I",
          "I",
          "U",
          "D",
          "K",
          "E",
          "S",
          "I",
          "E",
          "Z",
          "L",
          "A",
          "I",
          "G",
          "K"
        ],
        [
          "A",
          "X",
          "X",
          "U",
          "C",
          "T",
          "C",
          "I",
          "N",
          "C",
          "A",
          "W",
          "V",
          "S",
          "T",
          "R",
          "E",
          "V",
          "A",
          "J"
        ],
        [
          "L",
          "O",
          "D",
          "A",
          "X",
          "B",
          "Q",
          "E",
          "C",
          "Y",
          "B",
          "O",
          "ᄆ",
          "K",
          "I",
          "T",
          "V",
          "P",
          "I",
          "G"
        ],
        [
          "J",
          "F",
          "D",
          "U",
          "M",
          "U",
          "I",
          "Q",
          "Q",
          "V",
          "L",
          "D",
          "ᅲ",
          "X",
          "K",
          "R",
          "P",
          "C",
          "M",
          "K"
        ],
        [
          "E",
          "E",
          "S",
          "E",
          "A",
          "Y",
          "Z",
          "N",
          "K",
          "U",
          "N",
          "ᅳ",
          "ᄌ",
          "E",
          "Y",
          "S",
          "P",
          "R",
          "V",
          "U"
        ],
        [
          "A",
          "K",
          "D",
          "Y",
          "R",
          "D",
          "K",
          "Y",
          "C",
          "D",
          "ᄉ",
          "V",
          "ᅵ",
          "P",
          "S",
          "U",
          "E",
          "O",
          "E",
          "S"
        ],
        [
          "N",
          "S",
          "R",
          "V",
          "I",
          "G",
          "F",
          "I",
          "F",
          "ᆼ",
          "R",
          "G",
          "ᄏ",
          "O",
          "R",
          "M",
          "E",
          "Y",
          "J",
          "S"
        ],
        [
          "Z",
          "N",
          "K",
          "I",
          "U",
          "K",
          "O",
          "S",
          "ᅡ",
          "P",
          "C",
          "P",
          "ᅥ",
          "N",
          "Q",
          "N",
          "V",
          "H",
          "X",
          "M"
        ],
        [
          "P",
          "V",
          "T",
          "P",
          "S",
          "N",
          "A",
          "ᄅ",
          "D",
          "C",
          "Z",
          "D",
          "ᆯ",
          "I",
          "D",
          "T",
          "G",
          "G",
          "E",
          "I"
        ],
        [
          "P",
          "M",
          "D",
          "T",
          "V",
          "Q",
          "ᅳ",
          "G",
          "C",
          "R",
          "X",
          "A",
          "A",
          "N",
          "N",
          "P",
          "W",
          "V",
          "T",
          "T"
        ],
        [
          "L",
          "N",
          "M",
          "S",
          "V",
          "ᄑ",
          "X",
          "V",
          "F",
          "W",
          "U",
          "W",
          "X",
          "E",
          "S",
          "U",
          "X",
          "E",
          "D",
          "D"
        ],
        [
          "E",
          "P",
          "O",
          "S",
          "T",
          "E",
          "N",
          "I",
          "T",
          "N",
          "A",
          "F",
          "S",
          "V",
          "U",
          "Y",
          "P",
          "T",
          "X",
          "I"
        ],
        [
          "F",
          "J",
          "R",
          "E",
          "D",
          "E",
          "N",
          "C",
          "I",
          "O",
          "N",
          "N",
          "O",
          "Y",
          "S",
          "A",
          "A",
          "R",
          "Z",
          "G"
        ]
      ],
      "placements": [
        {
          "label": "Barricade",
          "value": "BARRICADE",
          "word": "BARRICADE",
          "clean": "BARRICADE",
          "start": {
            "row": 3,
            "col": 9
          },
          "end": {
            "row": 11,
            "col": 1
          },
          "direction": "SW",
          "path": [
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 7
            },
            {
              "row": 6,
              "col": 6
            },
            {
              "row": 7,
              "col": 5
            },
            {
              "row": 8,
              "col": 4
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 10,
              "col": 2
            },
            {
              "row": 11,
              "col": 1
            }
          ]
        },
        {
          "label": "Cosette",
          "value": "COSETTE",
          "word": "COSETTE",
          "clean": "COSETTE",
          "start": {
            "row": 6,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 1
          },
          "direction": "N",
          "path": [
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
            },
            {
              "row": 0,
              "col": 1
            }
          ]
        },
        {
          "label": "Eponine",
          "value": "EPONINE",
          "word": "EPONINE",
          "clean": "EPONINE",
          "start": {
            "row": 11,
            "col": 13
          },
          "end": {
            "row": 17,
            "col": 13
          },
          "direction": "S",
          "path": [
            {
              "row": 11,
              "col": 13
            },
            {
              "row": 12,
              "col": 13
            },
            {
              "row": 13,
              "col": 13
            },
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
          "label": "Fantine",
          "value": "FANTINE",
          "word": "FANTINE",
          "clean": "FANTINE",
          "start": {
            "row": 18,
            "col": 11
          },
          "end": {
            "row": 18,
            "col": 5
          },
          "direction": "W",
          "path": [
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
            },
            {
              "row": 18,
              "col": 8
            },
            {
              "row": 18,
              "col": 7
            },
            {
              "row": 18,
              "col": 6
            },
            {
              "row": 18,
              "col": 5
            }
          ]
        },
        {
          "label": "Javert",
          "value": "JAVERT",
          "word": "JAVERT",
          "clean": "JAVERT",
          "start": {
            "row": 8,
            "col": 19
          },
          "end": {
            "row": 8,
            "col": 14
          },
          "direction": "W",
          "path": [
            {
              "row": 8,
              "col": 19
            },
            {
              "row": 8,
              "col": 18
            },
            {
              "row": 8,
              "col": 17
            },
            {
              "row": 8,
              "col": 16
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 8,
              "col": 14
            }
          ]
        },
        {
          "label": "Marius",
          "value": "MARIUS",
          "word": "MARIUS",
          "clean": "MARIUS",
          "start": {
            "row": 10,
            "col": 4
          },
          "end": {
            "row": 15,
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
            },
            {
              "row": 15,
              "col": 4
            }
          ]
        },
        {
          "label": "ParÍS",
          "value": "PARIS",
          "word": "PARIS",
          "clean": "PARIS",
          "start": {
            "row": 1,
            "col": 7
          },
          "end": {
            "row": 5,
            "col": 3
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
            }
          ]
        },
        {
          "label": "Prisionero",
          "value": "PRISIONERO",
          "word": "PRISIONERO",
          "clean": "PRISIONERO",
          "start": {
            "row": 11,
            "col": 16
          },
          "end": {
            "row": 2,
            "col": 7
          },
          "direction": "NW",
          "path": [
            {
              "row": 11,
              "col": 16
            },
            {
              "row": 10,
              "col": 15
            },
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
            },
            {
              "row": 3,
              "col": 8
            },
            {
              "row": 2,
              "col": 7
            }
          ]
        },
        {
          "label": "RedenciÓN",
          "value": "REDENCION",
          "word": "REDENCION",
          "clean": "REDENCION",
          "start": {
            "row": 19,
            "col": 2
          },
          "end": {
            "row": 19,
            "col": 10
          },
          "direction": "E",
          "path": [
            {
              "row": 19,
              "col": 2
            },
            {
              "row": 19,
              "col": 3
            },
            {
              "row": 19,
              "col": 4
            },
            {
              "row": 19,
              "col": 5
            },
            {
              "row": 19,
              "col": 6
            },
            {
              "row": 19,
              "col": 7
            },
            {
              "row": 19,
              "col": 8
            },
            {
              "row": 19,
              "col": 9
            },
            {
              "row": 19,
              "col": 10
            }
          ]
        },
        {
          "label": "RevoluciÓN",
          "value": "REVOLUCION",
          "word": "REVOLUCION",
          "clean": "REVOLUCION",
          "start": {
            "row": 6,
            "col": 14
          },
          "end": {
            "row": 15,
            "col": 5
          },
          "direction": "SW",
          "path": [
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 7,
              "col": 13
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 9,
              "col": 11
            },
            {
              "row": 10,
              "col": 10
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 13,
              "col": 7
            },
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 15,
              "col": 5
            }
          ]
        },
        {
          "label": "SueÑO",
          "value": "SUENO",
          "word": "SUENO",
          "clean": "SUENO",
          "start": {
            "row": 2,
            "col": 11
          },
          "end": {
            "row": 2,
            "col": 15
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
            "col": 0
          },
          "end": {
            "row": 13,
            "col": 0
          },
          "direction": "S",
          "path": [
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
            }
          ]
        },
        {
          "label": "뮤지컬",
          "value": "뮤지컬",
          "word": "뮤지컬",
          "clean": "뮤지컬",
          "start": {
            "row": 9,
            "col": 12
          },
          "end": {
            "row": 15,
            "col": 12
          },
          "direction": "S",
          "path": [
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 11,
              "col": 12
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 15,
              "col": 12
            }
          ]
        },
        {
          "label": "프랑스",
          "value": "프랑스",
          "word": "프랑스",
          "clean": "프랑스",
          "start": {
            "row": 17,
            "col": 5
          },
          "end": {
            "row": 11,
            "col": 11
          },
          "direction": "NE",
          "path": [
            {
              "row": 17,
              "col": 5
            },
            {
              "row": 16,
              "col": 6
            },
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
            }
          ]
        },
        {
          "label": "혁명",
          "value": "혁명",
          "word": "혁명",
          "clean": "혁명",
          "start": {
            "row": 3,
            "col": 12
          },
          "end": {
            "row": 3,
            "col": 17
          },
          "direction": "E",
          "path": [
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 3,
              "col": 14
            },
            {
              "row": 3,
              "col": 15
            },
            {
              "row": 3,
              "col": 16
            },
            {
              "row": 3,
              "col": 17
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
          "label": "Mask",
          "value": "MASK"
        },
        {
          "label": "Mirror",
          "value": "MIRROR"
        },
        {
          "label": "Chandelier",
          "value": "CHANDELIER"
        },
        {
          "label": "Fantasma",
          "value": "FANTASMA"
        },
        {
          "label": "MÁScara",
          "value": "MASCARA"
        },
        {
          "label": "Teatro",
          "value": "TEATRO"
        },
        {
          "label": "MÚSica",
          "value": "MUSICA"
        },
        {
          "label": "Soprano",
          "value": "SOPRANO"
        },
        {
          "label": "오페라",
          "value": "오페라"
        },
        {
          "label": "가면",
          "value": "가면"
        },
        {
          "label": "유령",
          "value": "유령"
        }
      ],
      "grid": [
        [
          "B",
          "B",
          "H",
          "Q",
          "N",
          "F",
          "Y",
          "J",
          "G",
          "A",
          "I",
          "G",
          "N",
          "Y",
          "Y",
          "Z",
          "P",
          "H",
          "P",
          "J"
        ],
        [
          "N",
          "V",
          "L",
          "Q",
          "O",
          "F",
          "B",
          "J",
          "M",
          "V",
          "Y",
          "V",
          "F",
          "T",
          "L",
          "R",
          "H",
          "G",
          "N",
          "G"
        ],
        [
          "A",
          "X",
          "Y",
          "L",
          "U",
          "F",
          "N",
          "F",
          "H",
          "O",
          "O",
          "J",
          "R",
          "C",
          "G",
          "F",
          "A",
          "L",
          "L",
          "F"
        ],
        [
          "C",
          "W",
          "H",
          "S",
          "O",
          "P",
          "R",
          "A",
          "N",
          "O",
          "X",
          "T",
          "J",
          "M",
          "R",
          "N",
          "N",
          "G",
          "V",
          "W"
        ],
        [
          "X",
          "B",
          "C",
          "Y",
          "N",
          "Q",
          "X",
          "V",
          "V",
          "B",
          "C",
          "Q",
          "E",
          "O",
          "T",
          "P",
          "T",
          "S",
          "R",
          "W"
        ],
        [
          "Y",
          "D",
          "L",
          "U",
          "O",
          "A",
          "R",
          "K",
          "U",
          "C",
          "D",
          "J",
          "R",
          "E",
          "D",
          "H",
          "O",
          "V",
          "P",
          "M"
        ],
        [
          "C",
          "H",
          "I",
          "R",
          "U",
          "A",
          "Z",
          "T",
          "X",
          "G",
          "U",
          "R",
          "A",
          "Q",
          "Z",
          "Z",
          "M",
          "X",
          "Z",
          "S"
        ],
        [
          "H",
          "Z",
          "L",
          "W",
          "C",
          "N",
          "S",
          "I",
          "I",
          "U",
          "I",
          "T",
          "R",
          "Y",
          "R",
          "V",
          "K",
          "W",
          "J",
          "E"
        ],
        [
          "A",
          "Z",
          "G",
          "I",
          "B",
          "X",
          "A",
          "M",
          "R",
          "M",
          "R",
          "S",
          "N",
          "D",
          "Z",
          "S",
          "M",
          "W",
          "N",
          "Z"
        ],
        [
          "B",
          "T",
          "S",
          "I",
          "W",
          "S",
          "C",
          "R",
          "G",
          "O",
          "O",
          "D",
          "C",
          "D",
          "A",
          "H",
          "M",
          "D",
          "S",
          "C"
        ],
        [
          "P",
          "U",
          "N",
          "E",
          "X",
          "H",
          "T",
          "H",
          "A",
          "N",
          "U",
          "I",
          "Z",
          "M",
          "P",
          "Y",
          "C",
          "O",
          "H",
          "H"
        ],
        [
          "M",
          "W",
          "K",
          "J",
          "V",
          "ᅡ",
          "B",
          "L",
          "A",
          "C",
          "B",
          "F",
          "Q",
          "F",
          "E",
          "S",
          "F",
          "Z",
          "D",
          "R"
        ],
        [
          "B",
          "L",
          "O",
          "T",
          "ᄅ",
          "ᆼ",
          "E",
          "S",
          "ᄀ",
          "N",
          "S",
          "G",
          "F",
          "K",
          "V",
          "U",
          "B",
          "J",
          "V",
          "I"
        ],
        [
          "Q",
          "W",
          "G",
          "ᅦ",
          "ᅧ",
          "C",
          "D",
          "N",
          "A",
          "ᅡ",
          "D",
          "A",
          "U",
          "A",
          "W",
          "O",
          "O",
          "R",
          "B",
          "S"
        ],
        [
          "R",
          "Q",
          "ᄑ",
          "ᄅ",
          "M",
          "E",
          "B",
          "R",
          "X",
          "Q",
          "ᄆ",
          "E",
          "M",
          "L",
          "N",
          "K",
          "A",
          "K",
          "Z",
          "T"
        ],
        [
          "T",
          "ᅩ",
          "ᅲ",
          "X",
          "Q",
          "V",
          "E",
          "S",
          "J",
          "B",
          "N",
          "ᅧ",
          "L",
          "L",
          "V",
          "T",
          "Q",
          "N",
          "C",
          "I"
        ],
        [
          "ᄋ",
          "ᄋ",
          "P",
          "S",
          "U",
          "P",
          "P",
          "E",
          "O",
          "I",
          "E",
          "N",
          "ᆫ",
          "I",
          "X",
          "P",
          "A",
          "N",
          "B",
          "N"
        ],
        [
          "Z",
          "P",
          "Z",
          "A",
          "O",
          "I",
          "S",
          "J",
          "I",
          "E",
          "X",
          "O",
          "R",
          "Q",
          "E",
          "Y",
          "G",
          "S",
          "Y",
          "E"
        ],
        [
          "N",
          "E",
          "N",
          "Q",
          "Y",
          "T",
          "C",
          "T",
          "N",
          "D",
          "M",
          "S",
          "Z",
          "L",
          "B",
          "R",
          "C",
          "A",
          "M",
          "T"
        ],
        [
          "V",
          "C",
          "D",
          "K",
          "O",
          "Y",
          "B",
          "X",
          "L",
          "S",
          "T",
          "M",
          "W",
          "F",
          "Y",
          "K",
          "D",
          "I",
          "A",
          "A"
        ]
      ],
      "placements": [
        {
          "label": "Chandelier",
          "value": "CHANDELIER",
          "word": "CHANDELIER",
          "clean": "CHANDELIER",
          "start": {
            "row": 9,
            "col": 6
          },
          "end": {
            "row": 18,
            "col": 15
          },
          "direction": "SE",
          "path": [
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
            },
            {
              "row": 17,
              "col": 14
            },
            {
              "row": 18,
              "col": 15
            }
          ]
        },
        {
          "label": "Christine",
          "value": "CHRISTINE",
          "word": "CHRISTINE",
          "clean": "CHRISTINE",
          "start": {
            "row": 9,
            "col": 19
          },
          "end": {
            "row": 17,
            "col": 19
          },
          "direction": "S",
          "path": [
            {
              "row": 9,
              "col": 19
            },
            {
              "row": 10,
              "col": 19
            },
            {
              "row": 11,
              "col": 19
            },
            {
              "row": 12,
              "col": 19
            },
            {
              "row": 13,
              "col": 19
            },
            {
              "row": 14,
              "col": 19
            },
            {
              "row": 15,
              "col": 19
            },
            {
              "row": 16,
              "col": 19
            },
            {
              "row": 17,
              "col": 19
            }
          ]
        },
        {
          "label": "Fantasma",
          "value": "FANTASMA",
          "word": "FANTASMA",
          "clean": "FANTASMA",
          "start": {
            "row": 12,
            "col": 12
          },
          "end": {
            "row": 19,
            "col": 19
          },
          "direction": "SE",
          "path": [
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 13,
              "col": 13
            },
            {
              "row": 14,
              "col": 14
            },
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 16,
              "col": 16
            },
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 18,
              "col": 18
            },
            {
              "row": 19,
              "col": 19
            }
          ]
        },
        {
          "label": "MÁScara",
          "value": "MASCARA",
          "word": "MASCARA",
          "clean": "MASCARA",
          "start": {
            "row": 14,
            "col": 12
          },
          "end": {
            "row": 8,
            "col": 6
          },
          "direction": "NW",
          "path": [
            {
              "row": 14,
              "col": 12
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 11,
              "col": 9
            },
            {
              "row": 10,
              "col": 8
            },
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 8,
              "col": 6
            }
          ]
        },
        {
          "label": "Mask",
          "value": "MASK",
          "word": "MASK",
          "clean": "MASK",
          "start": {
            "row": 10,
            "col": 13
          },
          "end": {
            "row": 7,
            "col": 16
          },
          "direction": "NE",
          "path": [
            {
              "row": 10,
              "col": 13
            },
            {
              "row": 9,
              "col": 14
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 7,
              "col": 16
            }
          ]
        },
        {
          "label": "Mirror",
          "value": "MIRROR",
          "word": "MIRROR",
          "clean": "MIRROR",
          "start": {
            "row": 8,
            "col": 9
          },
          "end": {
            "row": 3,
            "col": 14
          },
          "direction": "NE",
          "path": [
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
            },
            {
              "row": 3,
              "col": 14
            }
          ]
        },
        {
          "label": "MÚSica",
          "value": "MUSICA",
          "word": "MUSICA",
          "clean": "MUSICA",
          "start": {
            "row": 11,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 5
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
            }
          ]
        },
        {
          "label": "Opera",
          "value": "OPERA",
          "word": "OPERA",
          "clean": "OPERA",
          "start": {
            "row": 17,
            "col": 4
          },
          "end": {
            "row": 13,
            "col": 8
          },
          "direction": "NE",
          "path": [
            {
              "row": 17,
              "col": 4
            },
            {
              "row": 16,
              "col": 5
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 14,
              "col": 7
            },
            {
              "row": 13,
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
            "row": 0,
            "col": 16
          },
          "end": {
            "row": 6,
            "col": 16
          },
          "direction": "S",
          "path": [
            {
              "row": 0,
              "col": 16
            },
            {
              "row": 1,
              "col": 16
            },
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
            }
          ]
        },
        {
          "label": "Raoul",
          "value": "RAOUL",
          "word": "RAOUL",
          "clean": "RAOUL",
          "start": {
            "row": 5,
            "col": 6
          },
          "end": {
            "row": 5,
            "col": 2
          },
          "direction": "W",
          "path": [
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
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 5,
              "col": 2
            }
          ]
        },
        {
          "label": "Soprano",
          "value": "SOPRANO",
          "word": "SOPRANO",
          "clean": "SOPRANO",
          "start": {
            "row": 3,
            "col": 3
          },
          "end": {
            "row": 3,
            "col": 9
          },
          "direction": "E",
          "path": [
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
        },
        {
          "label": "Teatro",
          "value": "TEATRO",
          "word": "TEATRO",
          "clean": "TEATRO",
          "start": {
            "row": 4,
            "col": 14
          },
          "end": {
            "row": 9,
            "col": 9
          },
          "direction": "SW",
          "path": [
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
            },
            {
              "row": 9,
              "col": 9
            }
          ]
        },
        {
          "label": "가면",
          "value": "가면",
          "word": "가면",
          "clean": "가면",
          "start": {
            "row": 12,
            "col": 8
          },
          "end": {
            "row": 16,
            "col": 12
          },
          "direction": "SE",
          "path": [
            {
              "row": 12,
              "col": 8
            },
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 14,
              "col": 10
            },
            {
              "row": 15,
              "col": 11
            },
            {
              "row": 16,
              "col": 12
            }
          ]
        },
        {
          "label": "오페라",
          "value": "오페라",
          "word": "오페라",
          "clean": "오페라",
          "start": {
            "row": 16,
            "col": 0
          },
          "end": {
            "row": 11,
            "col": 5
          },
          "direction": "NE",
          "path": [
            {
              "row": 16,
              "col": 0
            },
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
            },
            {
              "row": 11,
              "col": 5
            }
          ]
        },
        {
          "label": "유령",
          "value": "유령",
          "word": "유령",
          "clean": "유령",
          "start": {
            "row": 16,
            "col": 1
          },
          "end": {
            "row": 12,
            "col": 5
          },
          "direction": "NE",
          "path": [
            {
              "row": 16,
              "col": 1
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 14,
              "col": 3
            },
            {
              "row": 13,
              "col": 4
            },
            {
              "row": 12,
              "col": 5
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
          "label": "Abba",
          "value": "ABBA"
        },
        {
          "label": "Island",
          "value": "ISLAND"
        },
        {
          "label": "Boda",
          "value": "BODA"
        },
        {
          "label": "Grecia",
          "value": "GRECIA"
        },
        {
          "label": "Madre",
          "value": "MADRE"
        },
        {
          "label": "Baile",
          "value": "BAILE"
        },
        {
          "label": "Reina",
          "value": "REINA"
        },
        {
          "label": "뮤지컬",
          "value": "뮤지컬"
        },
        {
          "label": "섬",
          "value": "섬"
        },
        {
          "label": "결혼",
          "value": "결혼"
        }
      ],
      "grid": [
        [
          "P",
          "E",
          "A",
          "F",
          "Q",
          "I",
          "E",
          "W",
          "Q",
          "A",
          "J",
          "A",
          "N",
          "N",
          "O",
          "D",
          "W",
          "J",
          "V",
          "A"
        ],
        [
          "E",
          "Z",
          "C",
          "N",
          "I",
          "E",
          "B",
          "R",
          "X",
          "N",
          "I",
          "ᆯ",
          "ᅥ",
          "ᄏ",
          "ᅵ",
          "ᄌ",
          "ᅲ",
          "ᄆ",
          "E",
          "G"
        ],
        [
          "C",
          "I",
          "C",
          "A",
          "C",
          "U",
          "M",
          "W",
          "V",
          "E",
          "F",
          "M",
          "Q",
          "Y",
          "S",
          "V",
          "A",
          "F",
          "D",
          "M"
        ],
        [
          "F",
          "U",
          "B",
          "K",
          "C",
          "C",
          "A",
          "H",
          "P",
          "E",
          "Z",
          "H",
          "U",
          "V",
          "D",
          "D",
          "B",
          "J",
          "R",
          "M"
        ],
        [
          "I",
          "V",
          "U",
          "B",
          "S",
          "V",
          "D",
          "Z",
          "Y",
          "A",
          "C",
          "A",
          "M",
          "G",
          "V",
          "R",
          "U",
          "X",
          "Z",
          "R"
        ],
        [
          "Q",
          "M",
          "A",
          "D",
          "I",
          "H",
          "R",
          "J",
          "C",
          "I",
          "B",
          "A",
          "F",
          "V",
          "B",
          "S",
          "H",
          "Y",
          "J",
          "N"
        ],
        [
          "E",
          "I",
          "S",
          "O",
          "R",
          "O",
          "E",
          "J",
          "A",
          "N",
          "I",
          "E",
          "R",
          "O",
          "M",
          "O",
          "Q",
          "E",
          "U",
          "Y"
        ],
        [
          "C",
          "N",
          "X",
          "I",
          "D",
          "F",
          "F",
          "A",
          "D",
          "E",
          "M",
          "C",
          "G",
          "B",
          "G",
          "P",
          "G",
          "P",
          "X",
          "L"
        ],
        [
          "Y",
          "J",
          "F",
          "H",
          "N",
          "G",
          "D",
          "B",
          "M",
          "Z",
          "A",
          "I",
          "A",
          "G",
          "N",
          "H",
          "Q",
          "R",
          "E",
          "H"
        ],
        [
          "V",
          "L",
          "P",
          "Y",
          "B",
          "O",
          "C",
          "A",
          "J",
          "G",
          "C",
          "L",
          "F",
          "N",
          "L",
          "I",
          "B",
          "S",
          "R",
          "H"
        ],
        [
          "U",
          "I",
          "H",
          "G",
          "B",
          "D",
          "G",
          "R",
          "E",
          "C",
          "I",
          "A",
          "E",
          "L",
          "F",
          "E",
          "M",
          "R",
          "P",
          "N"
        ],
        [
          "Q",
          "V",
          "P",
          "P",
          "J",
          "Y",
          "L",
          "M",
          "S",
          "T",
          "F",
          "P",
          "D",
          "ᆷ",
          "ᅥ",
          "ᄉ",
          "A",
          "I",
          "K",
          "ᆫ"
        ],
        [
          "U",
          "W",
          "A",
          "Y",
          "N",
          "A",
          "T",
          "L",
          "L",
          "U",
          "Z",
          "F",
          "Z",
          "W",
          "C",
          "H",
          "P",
          "E",
          "ᅩ",
          "R"
        ],
        [
          "Q",
          "S",
          "T",
          "I",
          "L",
          "G",
          "Z",
          "K",
          "J",
          "Y",
          "J",
          "O",
          "S",
          "F",
          "X",
          "U",
          "G",
          "ᄒ",
          "W",
          "E"
        ],
        [
          "T",
          "U",
          "E",
          "U",
          "S",
          "W",
          "F",
          "O",
          "R",
          "R",
          "V",
          "P",
          "L",
          "I",
          "E",
          "U",
          "ᆯ",
          "D",
          "M",
          "M"
        ],
        [
          "X",
          "I",
          "S",
          "A",
          "V",
          "L",
          "M",
          "B",
          "Q",
          "Y",
          "Q",
          "W",
          "I",
          "E",
          "R",
          "ᅧ",
          "K",
          "G",
          "S",
          "R"
        ],
        [
          "A",
          "G",
          "B",
          "H",
          "W",
          "T",
          "A",
          "L",
          "Y",
          "T",
          "W",
          "P",
          "I",
          "E",
          "ᄀ",
          "F",
          "Q",
          "U",
          "C",
          "X"
        ],
        [
          "I",
          "B",
          "U",
          "I",
          "E",
          "I",
          "L",
          "N",
          "P",
          "V",
          "R",
          "H",
          "M",
          "J",
          "H",
          "W",
          "L",
          "F",
          "R",
          "N"
        ],
        [
          "A",
          "H",
          "J",
          "P",
          "L",
          "M",
          "T",
          "E",
          "D",
          "M",
          "P",
          "M",
          "U",
          "N",
          "L",
          "H",
          "B",
          "D",
          "B",
          "R"
        ],
        [
          "K",
          "F",
          "L",
          "E",
          "T",
          "I",
          "W",
          "H",
          "F",
          "C",
          "T",
          "K",
          "R",
          "S",
          "K",
          "Y",
          "N",
          "K",
          "Q",
          "E"
        ]
      ],
      "placements": [
        {
          "label": "Abba",
          "value": "ABBA",
          "word": "ABBA",
          "clean": "ABBA",
          "start": {
            "row": 15,
            "col": 3
          },
          "end": {
            "row": 18,
            "col": 0
          },
          "direction": "SW",
          "path": [
            {
              "row": 15,
              "col": 3
            },
            {
              "row": 16,
              "col": 2
            },
            {
              "row": 17,
              "col": 1
            },
            {
              "row": 18,
              "col": 0
            }
          ]
        },
        {
          "label": "Baile",
          "value": "BAILE",
          "word": "BAILE",
          "clean": "BAILE",
          "start": {
            "row": 15,
            "col": 7
          },
          "end": {
            "row": 19,
            "col": 3
          },
          "direction": "SW",
          "path": [
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
            },
            {
              "row": 19,
              "col": 3
            }
          ]
        },
        {
          "label": "Boda",
          "value": "BODA",
          "word": "BODA",
          "clean": "BODA",
          "start": {
            "row": 10,
            "col": 4
          },
          "end": {
            "row": 7,
            "col": 7
          },
          "direction": "NE",
          "path": [
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
            }
          ]
        },
        {
          "label": "Donna",
          "value": "DONNA",
          "word": "DONNA",
          "clean": "DONNA",
          "start": {
            "row": 0,
            "col": 15
          },
          "end": {
            "row": 0,
            "col": 11
          },
          "direction": "W",
          "path": [
            {
              "row": 0,
              "col": 15
            },
            {
              "row": 0,
              "col": 14
            },
            {
              "row": 0,
              "col": 13
            },
            {
              "row": 0,
              "col": 12
            },
            {
              "row": 0,
              "col": 11
            }
          ]
        },
        {
          "label": "Grecia",
          "value": "GRECIA",
          "word": "GRECIA",
          "clean": "GRECIA",
          "start": {
            "row": 10,
            "col": 6
          },
          "end": {
            "row": 10,
            "col": 11
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
            },
            {
              "row": 10,
              "col": 10
            },
            {
              "row": 10,
              "col": 11
            }
          ]
        },
        {
          "label": "Island",
          "value": "ISLAND",
          "word": "ISLAND",
          "clean": "ISLAND",
          "start": {
            "row": 13,
            "col": 3
          },
          "end": {
            "row": 18,
            "col": 8
          },
          "direction": "SE",
          "path": [
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
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 17,
              "col": 7
            },
            {
              "row": 18,
              "col": 8
            }
          ]
        },
        {
          "label": "Madre",
          "value": "MADRE",
          "word": "MADRE",
          "clean": "MADRE",
          "start": {
            "row": 2,
            "col": 6
          },
          "end": {
            "row": 6,
            "col": 6
          },
          "direction": "S",
          "path": [
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 3,
              "col": 6
            },
            {
              "row": 4,
              "col": 6
            },
            {
              "row": 5,
              "col": 6
            },
            {
              "row": 6,
              "col": 6
            }
          ]
        },
        {
          "label": "Reina",
          "value": "REINA",
          "word": "REINA",
          "clean": "REINA",
          "start": {
            "row": 6,
            "col": 12
          },
          "end": {
            "row": 6,
            "col": 8
          },
          "direction": "W",
          "path": [
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 6,
              "col": 11
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 6,
              "col": 8
            }
          ]
        },
        {
          "label": "Rosie",
          "value": "ROSIE",
          "word": "ROSIE",
          "clean": "ROSIE",
          "start": {
            "row": 6,
            "col": 4
          },
          "end": {
            "row": 6,
            "col": 0
          },
          "direction": "W",
          "path": [
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 6,
              "col": 2
            },
            {
              "row": 6,
              "col": 1
            },
            {
              "row": 6,
              "col": 0
            }
          ]
        },
        {
          "label": "Sky",
          "value": "SKY",
          "word": "SKY",
          "clean": "SKY",
          "start": {
            "row": 19,
            "col": 13
          },
          "end": {
            "row": 19,
            "col": 15
          },
          "direction": "E",
          "path": [
            {
              "row": 19,
              "col": 13
            },
            {
              "row": 19,
              "col": 14
            },
            {
              "row": 19,
              "col": 15
            }
          ]
        },
        {
          "label": "Sophie",
          "value": "SOPHIE",
          "word": "SOPHIE",
          "clean": "SOPHIE",
          "start": {
            "row": 5,
            "col": 15
          },
          "end": {
            "row": 10,
            "col": 15
          },
          "direction": "S",
          "path": [
            {
              "row": 5,
              "col": 15
            },
            {
              "row": 6,
              "col": 15
            },
            {
              "row": 7,
              "col": 15
            },
            {
              "row": 8,
              "col": 15
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 10,
              "col": 15
            }
          ]
        },
        {
          "label": "Tanya",
          "value": "TANYA",
          "word": "TANYA",
          "clean": "TANYA",
          "start": {
            "row": 12,
            "col": 6
          },
          "end": {
            "row": 12,
            "col": 2
          },
          "direction": "W",
          "path": [
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
          "label": "결혼",
          "value": "결혼",
          "word": "결혼",
          "clean": "결혼",
          "start": {
            "row": 16,
            "col": 14
          },
          "end": {
            "row": 11,
            "col": 19
          },
          "direction": "NE",
          "path": [
            {
              "row": 16,
              "col": 14
            },
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 14,
              "col": 16
            },
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 12,
              "col": 18
            },
            {
              "row": 11,
              "col": 19
            }
          ]
        },
        {
          "label": "뮤지컬",
          "value": "뮤지컬",
          "word": "뮤지컬",
          "clean": "뮤지컬",
          "start": {
            "row": 1,
            "col": 17
          },
          "end": {
            "row": 1,
            "col": 11
          },
          "direction": "W",
          "path": [
            {
              "row": 1,
              "col": 17
            },
            {
              "row": 1,
              "col": 16
            },
            {
              "row": 1,
              "col": 15
            },
            {
              "row": 1,
              "col": 14
            },
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
            }
          ]
        },
        {
          "label": "섬",
          "value": "섬",
          "word": "섬",
          "clean": "섬",
          "start": {
            "row": 11,
            "col": 15
          },
          "end": {
            "row": 11,
            "col": 13
          },
          "direction": "W",
          "path": [
            {
              "row": 11,
              "col": 15
            },
            {
              "row": 11,
              "col": 14
            },
            {
              "row": 11,
              "col": 13
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
          "label": "Gravity",
          "value": "GRAVITY"
        },
        {
          "label": "Emerald",
          "value": "EMERALD"
        },
        {
          "label": "Witch",
          "value": "WITCH"
        },
        {
          "label": "Popular",
          "value": "POPULAR"
        },
        {
          "label": "Magia",
          "value": "MAGIA"
        },
        {
          "label": "Bruja",
          "value": "BRUJA"
        },
        {
          "label": "마법사",
          "value": "마법사"
        },
        {
          "label": "마녀",
          "value": "마녀"
        },
        {
          "label": "중력",
          "value": "중력"
        }
      ],
      "grid": [
        [
          "J",
          "P",
          "H",
          "D",
          "Y",
          "K",
          "M",
          "C",
          "B",
          "E",
          "E",
          "Y",
          "I",
          "W",
          "E",
          "R",
          "A",
          "G",
          "S",
          "C"
        ],
        [
          "F",
          "U",
          "J",
          "Y",
          "Q",
          "P",
          "G",
          "G",
          "J",
          "B",
          "P",
          "S",
          "P",
          "X",
          "E",
          "M",
          "P",
          "T",
          "E",
          "P"
        ],
        [
          "G",
          "V",
          "I",
          "W",
          "I",
          "T",
          "C",
          "H",
          "R",
          "V",
          "E",
          "Y",
          "O",
          "U",
          "Y",
          "U",
          "X",
          "J",
          "O",
          "ᆨ"
        ],
        [
          "X",
          "H",
          "O",
          "J",
          "Z",
          "T",
          "K",
          "K",
          "G",
          "A",
          "E",
          "I",
          "L",
          "R",
          "U",
          "F",
          "X",
          "O",
          "ᅧ",
          "S"
        ],
        [
          "M",
          "Q",
          "M",
          "S",
          "K",
          "A",
          "V",
          "B",
          "L",
          "T",
          "V",
          "R",
          "D",
          "T",
          "A",
          "P",
          "H",
          "ᄅ",
          "R",
          "P"
        ],
        [
          "U",
          "X",
          "Q",
          "F",
          "F",
          "G",
          "X",
          "M",
          "I",
          "M",
          "X",
          "I",
          "G",
          "G",
          "J",
          "S",
          "ᆼ",
          "I",
          "U",
          "Q"
        ],
        [
          "C",
          "X",
          "L",
          "C",
          "O",
          "U",
          "L",
          "E",
          "N",
          "V",
          "P",
          "Y",
          "T",
          "G",
          "F",
          "ᅮ",
          "S",
          "N",
          "N",
          "O"
        ],
        [
          "A",
          "Y",
          "C",
          "B",
          "F",
          "I",
          "ᅡ",
          "L",
          "D",
          "V",
          "R",
          "J",
          "M",
          "Y",
          "ᄌ",
          "I",
          "E",
          "E",
          "J",
          "W"
        ],
        [
          "R",
          "K",
          "P",
          "K",
          "O",
          "ᄉ",
          "Y",
          "P",
          "A",
          "G",
          "Y",
          "N",
          "H",
          "O",
          "D",
          "C",
          "Y",
          "V",
          "N",
          "C"
        ],
        [
          "C",
          "I",
          "T",
          "M",
          "ᆸ",
          "Q",
          "R",
          "H",
          "R",
          "E",
          "Q",
          "J",
          "V",
          "Q",
          "K",
          "J",
          "X",
          "E",
          "B",
          "R"
        ],
        [
          "Y",
          "K",
          "L",
          "ᅥ",
          "R",
          "A",
          "V",
          "A",
          "E",
          "J",
          "O",
          "A",
          "E",
          "Y",
          "V",
          "Z",
          "B",
          "T",
          "R",
          "O"
        ],
        [
          "M",
          "N",
          "ᄇ",
          "Z",
          "L",
          "Q",
          "E",
          "B",
          "O",
          "J",
          "X",
          "M",
          "K",
          "G",
          "D",
          "V",
          "K",
          "W",
          "G",
          "O"
        ],
        [
          "B",
          "ᅡ",
          "Z",
          "U",
          "W",
          "X",
          "D",
          "A",
          "F",
          "R",
          "E",
          "M",
          "L",
          "R",
          "L",
          "R",
          "Z",
          "X",
          "ᅧ",
          "U"
        ],
        [
          "ᄆ",
          "G",
          "P",
          "N",
          "F",
          "B",
          "P",
          "D",
          "W",
          "R",
          "A",
          "W",
          "U",
          "D",
          "G",
          "V",
          "A",
          "ᄂ",
          "O",
          "I"
        ],
        [
          "L",
          "O",
          "Q",
          "C",
          "P",
          "Q",
          "J",
          "D",
          "A",
          "G",
          "T",
          "F",
          "K",
          "X",
          "J",
          "W",
          "ᅡ",
          "Z",
          "C",
          "O"
        ],
        [
          "P",
          "U",
          "G",
          "H",
          "C",
          "W",
          "L",
          "L",
          "I",
          "S",
          "L",
          "Z",
          "J",
          "E",
          "A",
          "ᄆ",
          "P",
          "X",
          "I",
          "F"
        ],
        [
          "F",
          "O",
          "H",
          "K",
          "H",
          "B",
          "D",
          "A",
          "E",
          "X",
          "J",
          "R",
          "G",
          "R",
          "L",
          "U",
          "U",
          "Y",
          "M",
          "W"
        ],
        [
          "S",
          "K",
          "M",
          "V",
          "B",
          "R",
          "U",
          "J",
          "A",
          "J",
          "M",
          "O",
          "Q",
          "X",
          "N",
          "T",
          "W",
          "H",
          "Q",
          "N"
        ],
        [
          "I",
          "D",
          "D",
          "A",
          "K",
          "T",
          "U",
          "X",
          "V",
          "F",
          "H",
          "P",
          "T",
          "K",
          "K",
          "F",
          "J",
          "Y",
          "Q",
          "J"
        ],
        [
          "J",
          "P",
          "O",
          "E",
          "P",
          "D",
          "V",
          "D",
          "T",
          "M",
          "S",
          "Y",
          "W",
          "A",
          "C",
          "G",
          "I",
          "C",
          "W",
          "X"
        ]
      ],
      "placements": [
        {
          "label": "Boq",
          "value": "BOQ",
          "word": "BOQ",
          "clean": "BOQ",
          "start": {
            "row": 7,
            "col": 3
          },
          "end": {
            "row": 9,
            "col": 5
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
            }
          ]
        },
        {
          "label": "Bruja",
          "value": "BRUJA",
          "word": "BRUJA",
          "clean": "BRUJA",
          "start": {
            "row": 17,
            "col": 4
          },
          "end": {
            "row": 17,
            "col": 8
          },
          "direction": "E",
          "path": [
            {
              "row": 17,
              "col": 4
            },
            {
              "row": 17,
              "col": 5
            },
            {
              "row": 17,
              "col": 6
            },
            {
              "row": 17,
              "col": 7
            },
            {
              "row": 17,
              "col": 8
            }
          ]
        },
        {
          "label": "Elphaba",
          "value": "ELPHABA",
          "word": "ELPHABA",
          "clean": "ELPHABA",
          "start": {
            "row": 6,
            "col": 7
          },
          "end": {
            "row": 12,
            "col": 7
          },
          "direction": "S",
          "path": [
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
            },
            {
              "row": 10,
              "col": 7
            },
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 12,
              "col": 7
            }
          ]
        },
        {
          "label": "Emerald",
          "value": "EMERALD",
          "word": "EMERALD",
          "clean": "EMERALD",
          "start": {
            "row": 10,
            "col": 12
          },
          "end": {
            "row": 16,
            "col": 6
          },
          "direction": "SW",
          "path": [
            {
              "row": 10,
              "col": 12
            },
            {
              "row": 11,
              "col": 11
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 13,
              "col": 9
            },
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
            }
          ]
        },
        {
          "label": "Fiyero",
          "value": "FIYERO",
          "word": "FIYERO",
          "clean": "FIYERO",
          "start": {
            "row": 6,
            "col": 14
          },
          "end": {
            "row": 11,
            "col": 19
          },
          "direction": "SE",
          "path": [
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
            },
            {
              "row": 9,
              "col": 17
            },
            {
              "row": 10,
              "col": 18
            },
            {
              "row": 11,
              "col": 19
            }
          ]
        },
        {
          "label": "Glinda",
          "value": "GLINDA",
          "word": "GLINDA",
          "clean": "GLINDA",
          "start": {
            "row": 3,
            "col": 8
          },
          "end": {
            "row": 8,
            "col": 8
          },
          "direction": "S",
          "path": [
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
            },
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 8,
              "col": 8
            }
          ]
        },
        {
          "label": "Gravity",
          "value": "GRAVITY",
          "word": "GRAVITY",
          "clean": "GRAVITY",
          "start": {
            "row": 1,
            "col": 7
          },
          "end": {
            "row": 7,
            "col": 13
          },
          "direction": "SE",
          "path": [
            {
              "row": 1,
              "col": 7
            },
            {
              "row": 2,
              "col": 8
            },
            {
              "row": 3,
              "col": 9
            },
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 7,
              "col": 13
            }
          ]
        },
        {
          "label": "Magia",
          "value": "MAGIA",
          "word": "MAGIA",
          "clean": "MAGIA",
          "start": {
            "row": 12,
            "col": 11
          },
          "end": {
            "row": 16,
            "col": 7
          },
          "direction": "SW",
          "path": [
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 14,
              "col": 9
            },
            {
              "row": 15,
              "col": 8
            },
            {
              "row": 16,
              "col": 7
            }
          ]
        },
        {
          "label": "Nessarose",
          "value": "NESSAROSE",
          "word": "NESSAROSE",
          "clean": "NESSAROSE",
          "start": {
            "row": 8,
            "col": 18
          },
          "end": {
            "row": 0,
            "col": 10
          },
          "direction": "NW",
          "path": [
            {
              "row": 8,
              "col": 18
            },
            {
              "row": 7,
              "col": 17
            },
            {
              "row": 6,
              "col": 16
            },
            {
              "row": 5,
              "col": 15
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 2,
              "col": 12
            },
            {
              "row": 1,
              "col": 11
            },
            {
              "row": 0,
              "col": 10
            }
          ]
        },
        {
          "label": "Popular",
          "value": "POPULAR",
          "word": "POPULAR",
          "clean": "POPULAR",
          "start": {
            "row": 15,
            "col": 0
          },
          "end": {
            "row": 9,
            "col": 6
          },
          "direction": "NE",
          "path": [
            {
              "row": 15,
              "col": 0
            },
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
          "label": "Witch",
          "value": "WITCH",
          "word": "WITCH",
          "clean": "WITCH",
          "start": {
            "row": 2,
            "col": 3
          },
          "end": {
            "row": 2,
            "col": 7
          },
          "direction": "E",
          "path": [
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
            }
          ]
        },
        {
          "label": "Wizard",
          "value": "WIZARD",
          "word": "WIZARD",
          "clean": "WIZARD",
          "start": {
            "row": 16,
            "col": 19
          },
          "end": {
            "row": 11,
            "col": 14
          },
          "direction": "NW",
          "path": [
            {
              "row": 16,
              "col": 19
            },
            {
              "row": 15,
              "col": 18
            },
            {
              "row": 14,
              "col": 17
            },
            {
              "row": 13,
              "col": 16
            },
            {
              "row": 12,
              "col": 15
            },
            {
              "row": 11,
              "col": 14
            }
          ]
        },
        {
          "label": "마녀",
          "value": "마녀",
          "word": "마녀",
          "clean": "마녀",
          "start": {
            "row": 15,
            "col": 15
          },
          "end": {
            "row": 12,
            "col": 18
          },
          "direction": "NE",
          "path": [
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 14,
              "col": 16
            },
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 12,
              "col": 18
            }
          ]
        },
        {
          "label": "마법사",
          "value": "마법사",
          "word": "마법사",
          "clean": "마법사",
          "start": {
            "row": 13,
            "col": 0
          },
          "end": {
            "row": 7,
            "col": 6
          },
          "direction": "NE",
          "path": [
            {
              "row": 13,
              "col": 0
            },
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
            },
            {
              "row": 7,
              "col": 6
            }
          ]
        },
        {
          "label": "중력",
          "value": "중력",
          "word": "중력",
          "clean": "중력",
          "start": {
            "row": 7,
            "col": 14
          },
          "end": {
            "row": 2,
            "col": 19
          },
          "direction": "NE",
          "path": [
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
            },
            {
              "row": 4,
              "col": 17
            },
            {
              "row": 3,
              "col": 18
            },
            {
              "row": 2,
              "col": 19
            }
          ]
        }
      ]
    }
  ]
} as const;

export default dailyPuzzles;
