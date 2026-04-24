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
  "hash": "9aeee59a6f2422486399b6853b3154635d185804181223c5e1866126b5eddab2",
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
          "D",
          "N",
          "J",
          "F",
          "B",
          "I",
          "E",
          "C",
          "L",
          "R",
          "H",
          "U",
          "D",
          "B",
          "H",
          "A",
          "E",
          "L",
          "I",
          "I"
        ],
        [
          "ᄒ",
          "O",
          "N",
          "W",
          "C",
          "T",
          "V",
          "E",
          "R",
          "H",
          "E",
          "ᄆ",
          "Y",
          "G",
          "C",
          "E",
          "O",
          "P",
          "V",
          "J"
        ],
        [
          "ᅧ",
          "T",
          "R",
          "A",
          "B",
          "Z",
          "G",
          "F",
          "J",
          "H",
          "Y",
          "N",
          "ᅲ",
          "I",
          "C",
          "F",
          "N",
          "D",
          "N",
          "F"
        ],
        [
          "ᆨ",
          "G",
          "N",
          "V",
          "E",
          "A",
          "F",
          "R",
          "D",
          "N",
          "V",
          "P",
          "L",
          "ᄌ",
          "K",
          "S",
          "R",
          "C",
          "T",
          "F"
        ],
        [
          "ᄆ",
          "N",
          "S",
          "F",
          "D",
          "M",
          "Z",
          "H",
          "C",
          "K",
          "O",
          "E",
          "D",
          "P",
          "ᅵ",
          "M",
          "J",
          "F",
          "S",
          "T"
        ],
        [
          "ᅧ",
          "I",
          "O",
          "O",
          "D",
          "U",
          "E",
          "L",
          "O",
          "M",
          "G",
          "I",
          "B",
          "B",
          "E",
          "ᄏ",
          "K",
          "Q",
          "N",
          "N"
        ],
        [
          "ᆼ",
          "H",
          "X",
          "T",
          "C",
          "M",
          "D",
          "B",
          "N",
          "N",
          "N",
          "W",
          "C",
          "R",
          "F",
          "H",
          "ᅥ",
          "Z",
          "S",
          "V"
        ],
        [
          "A",
          "S",
          "M",
          "T",
          "D",
          "P",
          "W",
          "I",
          "A",
          "C",
          "N",
          "O",
          "U",
          "U",
          "O",
          "O",
          "B",
          "ᆯ",
          "V",
          "J"
        ],
        [
          "W",
          "A",
          "J",
          "A",
          "G",
          "Q",
          "L",
          "L",
          "S",
          "A",
          "U",
          "O",
          "T",
          "G",
          "L",
          "A",
          "A",
          "O",
          "H",
          "F"
        ],
        [
          "N",
          "W",
          "H",
          "B",
          "Z",
          "T",
          "V",
          "V",
          "D",
          "X",
          "F",
          "K",
          "S",
          "L",
          "B",
          "O",
          "D",
          "S",
          "F",
          "I"
        ],
        [
          "L",
          "Y",
          "L",
          "M",
          "B",
          "E",
          "T",
          "L",
          "I",
          "L",
          "U",
          "K",
          "L",
          "R",
          "I",
          "U",
          "V",
          "W",
          "F",
          "L"
        ],
        [
          "X",
          "C",
          "C",
          "G",
          "A",
          "B",
          "I",
          "N",
          "E",
          "T",
          "E",
          "K",
          "C",
          "C",
          "E",
          "M",
          "Q",
          "E",
          "A",
          "O"
        ],
        [
          "L",
          "A",
          "H",
          "R",
          "K",
          "L",
          "A",
          "F",
          "A",
          "Y",
          "E",
          "T",
          "T",
          "E",
          "D",
          "F",
          "A",
          "M",
          "R",
          "Y"
        ],
        [
          "A",
          "V",
          "Y",
          "C",
          "L",
          "Y",
          "J",
          "ᄋ",
          "ᅭ",
          "ᄏ",
          "ᅳ",
          "ᄐ",
          "ᅡ",
          "ᄋ",
          "ᅮ",
          "ᆫ",
          "F",
          "H",
          "E",
          "Y"
        ],
        [
          "S",
          "I",
          "H",
          "N",
          "R",
          "Z",
          "E",
          "K",
          "B",
          "K",
          "I",
          "T",
          "V",
          "I",
          "B",
          "O",
          "Y",
          "E",
          "J",
          "Z"
        ],
        [
          "L",
          "R",
          "R",
          "C",
          "X",
          "U",
          "D",
          "U",
          "G",
          "S",
          "R",
          "X",
          "R",
          "C",
          "M",
          "G",
          "J",
          "X",
          "J",
          "H"
        ],
        [
          "N",
          "C",
          "R",
          "G",
          "A",
          "Z",
          "I",
          "L",
          "E",
          "A",
          "K",
          "W",
          "V",
          "K",
          "B",
          "P",
          "J",
          "C",
          "G",
          "B"
        ],
        [
          "H",
          "N",
          "A",
          "U",
          "H",
          "L",
          "F",
          "P",
          "I",
          "C",
          "I",
          "P",
          "B",
          "B",
          "D",
          "M",
          "Y",
          "L",
          "U",
          "D"
        ],
        [
          "M",
          "Z",
          "J",
          "A",
          "B",
          "F",
          "U",
          "F",
          "N",
          "E",
          "K",
          "X",
          "N",
          "P",
          "N",
          "V",
          "D",
          "S",
          "Y",
          "W"
        ],
        [
          "Q",
          "B",
          "P",
          "T",
          "Y",
          "Z",
          "E",
          "C",
          "B",
          "S",
          "F",
          "H",
          "V",
          "N",
          "N",
          "S",
          "J",
          "J",
          "P",
          "H"
        ]
      ],
      "placements": [
        {
          "label": "Angelica",
          "value": "ANGELICA",
          "word": "ANGELICA",
          "clean": "ANGELICA",
          "start": {
            "row": 7,
            "col": 8
          },
          "end": {
            "row": 0,
            "col": 15
          },
          "direction": "NE",
          "path": [
            {
              "row": 7,
              "col": 8
            },
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 5,
              "col": 10
            },
            {
              "row": 4,
              "col": 11
            },
            {
              "row": 3,
              "col": 12
            },
            {
              "row": 2,
              "col": 13
            },
            {
              "row": 1,
              "col": 14
            },
            {
              "row": 0,
              "col": 15
            }
          ]
        },
        {
          "label": "Broadway",
          "value": "BROADWAY",
          "word": "BROADWAY",
          "clean": "BROADWAY",
          "start": {
            "row": 5,
            "col": 12
          },
          "end": {
            "row": 12,
            "col": 19
          },
          "direction": "SE",
          "path": [
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
            },
            {
              "row": 10,
              "col": 17
            },
            {
              "row": 11,
              "col": 18
            },
            {
              "row": 12,
              "col": 19
            }
          ]
        },
        {
          "label": "Burr",
          "value": "BURR",
          "word": "BURR",
          "clean": "BURR",
          "start": {
            "row": 18,
            "col": 4
          },
          "end": {
            "row": 15,
            "col": 1
          },
          "direction": "NW",
          "path": [
            {
              "row": 18,
              "col": 4
            },
            {
              "row": 17,
              "col": 3
            },
            {
              "row": 16,
              "col": 2
            },
            {
              "row": 15,
              "col": 1
            }
          ]
        },
        {
          "label": "Duelo",
          "value": "DUELO",
          "word": "DUELO",
          "clean": "DUELO",
          "start": {
            "row": 5,
            "col": 4
          },
          "end": {
            "row": 5,
            "col": 8
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 5,
              "col": 8
            }
          ]
        },
        {
          "label": "Eliza",
          "value": "ELIZA",
          "word": "ELIZA",
          "clean": "ELIZA",
          "start": {
            "row": 16,
            "col": 8
          },
          "end": {
            "row": 16,
            "col": 4
          },
          "direction": "W",
          "path": [
            {
              "row": 16,
              "col": 8
            },
            {
              "row": 16,
              "col": 7
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 16,
              "col": 5
            },
            {
              "row": 16,
              "col": 4
            }
          ]
        },
        {
          "label": "Gabinete",
          "value": "GABINETE",
          "word": "GABINETE",
          "clean": "GABINETE",
          "start": {
            "row": 11,
            "col": 3
          },
          "end": {
            "row": 11,
            "col": 10
          },
          "direction": "E",
          "path": [
            {
              "row": 11,
              "col": 3
            },
            {
              "row": 11,
              "col": 4
            },
            {
              "row": 11,
              "col": 5
            },
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
        },
        {
          "label": "Hamilton",
          "value": "HAMILTON",
          "word": "HAMILTON",
          "clean": "HAMILTON",
          "start": {
            "row": 13,
            "col": 17
          },
          "end": {
            "row": 6,
            "col": 10
          },
          "direction": "NW",
          "path": [
            {
              "row": 13,
              "col": 17
            },
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 11,
              "col": 15
            },
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
            }
          ]
        },
        {
          "label": "Jefferson",
          "value": "JEFFERSON",
          "word": "JEFFERSON",
          "clean": "JEFFERSON",
          "start": {
            "row": 15,
            "col": 18
          },
          "end": {
            "row": 7,
            "col": 10
          },
          "direction": "NW",
          "path": [
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
            },
            {
              "row": 10,
              "col": 13
            },
            {
              "row": 9,
              "col": 12
            },
            {
              "row": 8,
              "col": 11
            },
            {
              "row": 7,
              "col": 10
            }
          ]
        },
        {
          "label": "Lafayette",
          "value": "LAFAYETTE",
          "word": "LAFAYETTE",
          "clean": "LAFAYETTE",
          "start": {
            "row": 12,
            "col": 5
          },
          "end": {
            "row": 12,
            "col": 13
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 12,
              "col": 9
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 12,
              "col": 11
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 12,
              "col": 13
            }
          ]
        },
        {
          "label": "Legado",
          "value": "LEGADO",
          "word": "LEGADO",
          "clean": "LEGADO",
          "start": {
            "row": 0,
            "col": 8
          },
          "end": {
            "row": 5,
            "col": 3
          },
          "direction": "SW",
          "path": [
            {
              "row": 0,
              "col": 8
            },
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
          "label": "RevoluciÓN",
          "value": "REVOLUCION",
          "word": "REVOLUCION",
          "clean": "REVOLUCION",
          "start": {
            "row": 12,
            "col": 18
          },
          "end": {
            "row": 3,
            "col": 9
          },
          "direction": "NW",
          "path": [
            {
              "row": 12,
              "col": 18
            },
            {
              "row": 11,
              "col": 17
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 8,
              "col": 14
            },
            {
              "row": 7,
              "col": 13
            },
            {
              "row": 6,
              "col": 12
            },
            {
              "row": 5,
              "col": 11
            },
            {
              "row": 4,
              "col": 10
            },
            {
              "row": 3,
              "col": 9
            }
          ]
        },
        {
          "label": "Washington",
          "value": "WASHINGTON",
          "word": "WASHINGTON",
          "clean": "WASHINGTON",
          "start": {
            "row": 9,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 1
          },
          "direction": "N",
          "path": [
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
          "label": "뮤지컬",
          "value": "뮤지컬",
          "word": "뮤지컬",
          "clean": "뮤지컬",
          "start": {
            "row": 1,
            "col": 11
          },
          "end": {
            "row": 7,
            "col": 17
          },
          "direction": "SE",
          "path": [
            {
              "row": 1,
              "col": 11
            },
            {
              "row": 2,
              "col": 12
            },
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 5,
              "col": 15
            },
            {
              "row": 6,
              "col": 16
            },
            {
              "row": 7,
              "col": 17
            }
          ]
        },
        {
          "label": "요크타운",
          "value": "요크타운",
          "word": "요크타운",
          "clean": "요크타운",
          "start": {
            "row": 13,
            "col": 7
          },
          "end": {
            "row": 13,
            "col": 15
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 13,
              "col": 13
            },
            {
              "row": 13,
              "col": 14
            },
            {
              "row": 13,
              "col": 15
            }
          ]
        },
        {
          "label": "혁명",
          "value": "혁명",
          "word": "혁명",
          "clean": "혁명",
          "start": {
            "row": 1,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 0
          },
          "direction": "S",
          "path": [
            {
              "row": 1,
              "col": 0
            },
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
          "R",
          "G",
          "S",
          "H",
          "K",
          "V",
          "D",
          "O",
          "W",
          "V",
          "I",
          "N",
          "B",
          "B",
          "K",
          "T",
          "L",
          "O",
          "V",
          "T"
        ],
        [
          "V",
          "I",
          "L",
          "E",
          "A",
          "M",
          "M",
          "G",
          "N",
          "K",
          "R",
          "O",
          "K",
          "H",
          "F",
          "K",
          "P",
          "G",
          "T",
          "N"
        ],
        [
          "M",
          "L",
          "Z",
          "B",
          "S",
          "C",
          "R",
          "Z",
          "T",
          "D",
          "P",
          "A",
          "N",
          "Q",
          "S",
          "B",
          "O",
          "R",
          "P",
          "O"
        ],
        [
          "U",
          "C",
          "Y",
          "X",
          "A",
          "K",
          "C",
          "A",
          "X",
          "Q",
          "N",
          "E",
          "C",
          "I",
          "P",
          "O",
          "G",
          "L",
          "O",
          "W"
        ],
        [
          "O",
          "K",
          "O",
          "G",
          "F",
          "H",
          "K",
          "B",
          "Y",
          "Q",
          "H",
          "K",
          "J",
          "S",
          "E",
          "Z",
          "E",
          "K",
          "T",
          "X"
        ],
        [
          "I",
          "A",
          "R",
          "V",
          "U",
          "K",
          "U",
          "N",
          "A",
          "Q",
          "B",
          "D",
          "S",
          "J",
          "ᄉ",
          "R",
          "Q",
          "A",
          "W",
          "B"
        ],
        [
          "P",
          "S",
          "G",
          "P",
          "M",
          "G",
          "Q",
          "N",
          "X",
          "N",
          "A",
          "L",
          "A",
          "X",
          "ᅡ",
          "O",
          "W",
          "F",
          "D",
          "H"
        ],
        [
          "U",
          "G",
          "U",
          "C",
          "Z",
          "Y",
          "N",
          "O",
          "N",
          "R",
          "T",
          "K",
          "X",
          "S",
          "ᄌ",
          "P",
          "D",
          "M",
          "Y",
          "L"
        ],
        [
          "U",
          "K",
          "L",
          "T",
          "L",
          "A",
          "L",
          "H",
          "O",
          "ᆯ",
          "Y",
          "O",
          "Q",
          "S",
          "ᅡ",
          "Y",
          "T",
          "P",
          "I",
          "W"
        ],
        [
          "ᄋ",
          "C",
          "L",
          "D",
          "V",
          "Y",
          "O",
          "S",
          "ᅥ",
          "H",
          "O",
          "S",
          "U",
          "U",
          "W",
          "W",
          "E",
          "V",
          "P",
          "O"
        ],
        [
          "ᅪ",
          "T",
          "O",
          "A",
          "O",
          "T",
          "N",
          "ᄏ",
          "A",
          "P",
          "E",
          "N",
          "O",
          "X",
          "T",
          "L",
          "I",
          "K",
          "L",
          "U"
        ],
        [
          "ᆼ",
          "I",
          "S",
          "K",
          "K",
          "D",
          "ᅵ",
          "G",
          "B",
          "B",
          "I",
          "A",
          "L",
          "M",
          "B",
          "X",
          "S",
          "U",
          "S",
          "X"
        ],
        [
          "ᄀ",
          "M",
          "L",
          "P",
          "M",
          "ᄌ",
          "K",
          "N",
          "Y",
          "R",
          "A",
          "A",
          "U",
          "H",
          "Z",
          "O",
          "C",
          "M",
          "C",
          "G"
        ],
        [
          "ᅮ",
          "O",
          "D",
          "F",
          "ᅲ",
          "K",
          "N",
          "O",
          "W",
          "Y",
          "G",
          "N",
          "M",
          "Z",
          "X",
          "R",
          "K",
          "H",
          "E",
          "H"
        ],
        [
          "ᆨ",
          "N",
          "M",
          "ᄆ",
          "G",
          "V",
          "W",
          "T",
          "N",
          "K",
          "B",
          "N",
          "A",
          "S",
          "I",
          "Q",
          "P",
          "P",
          "R",
          "A"
        ],
        [
          "S",
          "G",
          "U",
          "U",
          "F",
          "D",
          "Z",
          "F",
          "S",
          "U",
          "B",
          "H",
          "B",
          "C",
          "C",
          "Z",
          "A",
          "U",
          "B",
          "N"
        ],
        [
          "O",
          "T",
          "F",
          "K",
          "C",
          "R",
          "O",
          "B",
          "D",
          "W",
          "D",
          "D",
          "R",
          "H",
          "Z",
          "P",
          "J",
          "M",
          "F",
          "C"
        ],
        [
          "S",
          "X",
          "H",
          "C",
          "K",
          "S",
          "K",
          "E",
          "W",
          "H",
          "X",
          "I",
          "A",
          "K",
          "Y",
          "P",
          "I",
          "B",
          "Q",
          "L"
        ],
        [
          "Y",
          "P",
          "T",
          "U",
          "K",
          "F",
          "J",
          "X",
          "G",
          "H",
          "F",
          "N",
          "S",
          "E",
          "H",
          "S",
          "X",
          "A",
          "W",
          "Y"
        ],
        [
          "Q",
          "Q",
          "M",
          "S",
          "J",
          "B",
          "B",
          "J",
          "K",
          "H",
          "A",
          "N",
          "S",
          "N",
          "O",
          "E",
          "L",
          "A",
          "N",
          "H"
        ]
      ],
      "placements": [
        {
          "label": "CÍRculo",
          "value": "CIRCULO",
          "word": "CIRCULO",
          "clean": "CIRCULO",
          "start": {
            "row": 15,
            "col": 13
          },
          "end": {
            "row": 9,
            "col": 19
          },
          "direction": "NE",
          "path": [
            {
              "row": 15,
              "col": 13
            },
            {
              "row": 14,
              "col": 14
            },
            {
              "row": 13,
              "col": 15
            },
            {
              "row": 12,
              "col": 16
            },
            {
              "row": 11,
              "col": 17
            },
            {
              "row": 10,
              "col": 18
            },
            {
              "row": 9,
              "col": 19
            }
          ]
        },
        {
          "label": "LeÓN",
          "value": "LEON",
          "word": "LEON",
          "clean": "LEON",
          "start": {
            "row": 19,
            "col": 16
          },
          "end": {
            "row": 19,
            "col": 13
          },
          "direction": "W",
          "path": [
            {
              "row": 19,
              "col": 16
            },
            {
              "row": 19,
              "col": 15
            },
            {
              "row": 19,
              "col": 14
            },
            {
              "row": 19,
              "col": 13
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
            "col": 4
          },
          "end": {
            "row": 1,
            "col": 4
          },
          "direction": "N",
          "path": [
            {
              "row": 6,
              "col": 4
            },
            {
              "row": 5,
              "col": 4
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 3,
              "col": 4
            },
            {
              "row": 2,
              "col": 4
            },
            {
              "row": 1,
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
            "row": 6,
            "col": 9
          },
          "end": {
            "row": 6,
            "col": 12
          },
          "direction": "E",
          "path": [
            {
              "row": 6,
              "col": 9
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 6,
              "col": 11
            },
            {
              "row": 6,
              "col": 12
            }
          ]
        },
        {
          "label": "Orgullo",
          "value": "ORGULLO",
          "word": "ORGULLO",
          "clean": "ORGULLO",
          "start": {
            "row": 4,
            "col": 2
          },
          "end": {
            "row": 10,
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
            "col": 17
          },
          "end": {
            "row": 19,
            "col": 17
          },
          "direction": "S",
          "path": [
            {
              "row": 14,
              "col": 17
            },
            {
              "row": 15,
              "col": 17
            },
            {
              "row": 16,
              "col": 17
            },
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 18,
              "col": 17
            },
            {
              "row": 19,
              "col": 17
            }
          ]
        },
        {
          "label": "Reino",
          "value": "REINO",
          "word": "REINO",
          "clean": "REINO",
          "start": {
            "row": 5,
            "col": 15
          },
          "end": {
            "row": 1,
            "col": 11
          },
          "direction": "NW",
          "path": [
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
            }
          ]
        },
        {
          "label": "Sabana",
          "value": "SABANA",
          "word": "SABANA",
          "clean": "SABANA",
          "start": {
            "row": 9,
            "col": 7
          },
          "end": {
            "row": 14,
            "col": 12
          },
          "direction": "SE",
          "path": [
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
            },
            {
              "row": 12,
              "col": 10
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 14,
              "col": 12
            }
          ]
        },
        {
          "label": "Savanna",
          "value": "SAVANNA",
          "word": "SAVANNA",
          "clean": "SAVANNA",
          "start": {
            "row": 11,
            "col": 2
          },
          "end": {
            "row": 5,
            "col": 8
          },
          "direction": "NE",
          "path": [
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
            },
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
          "label": "Scar",
          "value": "SCAR",
          "word": "SCAR",
          "clean": "SCAR",
          "start": {
            "row": 4,
            "col": 13
          },
          "end": {
            "row": 1,
            "col": 10
          },
          "direction": "NW",
          "path": [
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
            }
          ]
        },
        {
          "label": "Simba",
          "value": "SIMBA",
          "word": "SIMBA",
          "clean": "SIMBA",
          "start": {
            "row": 18,
            "col": 15
          },
          "end": {
            "row": 14,
            "col": 19
          },
          "direction": "NE",
          "path": [
            {
              "row": 18,
              "col": 15
            },
            {
              "row": 17,
              "col": 16
            },
            {
              "row": 16,
              "col": 17
            },
            {
              "row": 15,
              "col": 18
            },
            {
              "row": 14,
              "col": 19
            }
          ]
        },
        {
          "label": "Timon",
          "value": "TIMON",
          "word": "TIMON",
          "clean": "TIMON",
          "start": {
            "row": 10,
            "col": 1
          },
          "end": {
            "row": 14,
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
            },
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
            }
          ]
        },
        {
          "label": "뮤지컬",
          "value": "뮤지컬",
          "word": "뮤지컬",
          "clean": "뮤지컬",
          "start": {
            "row": 14,
            "col": 3
          },
          "end": {
            "row": 8,
            "col": 9
          },
          "direction": "NE",
          "path": [
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
            }
          ]
        },
        {
          "label": "사자",
          "value": "사자",
          "word": "사자",
          "clean": "사자",
          "start": {
            "row": 5,
            "col": 14
          },
          "end": {
            "row": 8,
            "col": 14
          },
          "direction": "S",
          "path": [
            {
              "row": 5,
              "col": 14
            },
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 8,
              "col": 14
            }
          ]
        },
        {
          "label": "왕국",
          "value": "왕국",
          "word": "왕국",
          "clean": "왕국",
          "start": {
            "row": 9,
            "col": 0
          },
          "end": {
            "row": 14,
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
          "F",
          "E",
          "U",
          "R",
          "U",
          "D",
          "A",
          "R",
          "Y",
          "W",
          "K",
          "G",
          "B",
          "B",
          "O",
          "X",
          "U",
          "D",
          "E",
          "E"
        ],
        [
          "V",
          "W",
          "W",
          "E",
          "E",
          "X",
          "M",
          "H",
          "V",
          "J",
          "A",
          "V",
          "E",
          "R",
          "T",
          "R",
          "I",
          "J",
          "L",
          "A"
        ],
        [
          "G",
          "N",
          "B",
          "ᄒ",
          "B",
          "D",
          "P",
          "T",
          "J",
          "U",
          "Z",
          "T",
          "D",
          "E",
          "N",
          "I",
          "T",
          "N",
          "A",
          "F"
        ],
        [
          "N",
          "V",
          "N",
          "ᅧ",
          "O",
          "E",
          "E",
          "R",
          "E",
          "V",
          "O",
          "L",
          "U",
          "C",
          "I",
          "O",
          "N",
          "E",
          "Z",
          "A"
        ],
        [
          "B",
          "M",
          "G",
          "ᆨ",
          "B",
          "D",
          "J",
          "N",
          "I",
          "R",
          "N",
          "R",
          "P",
          "R",
          "R",
          "B",
          "O",
          "R",
          "O",
          "P"
        ],
        [
          "O",
          "A",
          "F",
          "ᄆ",
          "J",
          "U",
          "Z",
          "O",
          "C",
          "S",
          "T",
          "ᄆ",
          "V",
          "Y",
          "C",
          "F",
          "Q",
          "P",
          "T",
          "L"
        ],
        [
          "E",
          "R",
          "G",
          "ᅧ",
          "R",
          "L",
          "G",
          "W",
          "Y",
          "I",
          "I",
          "V",
          "ᅲ",
          "S",
          "H",
          "W",
          "R",
          "V",
          "M",
          "U"
        ],
        [
          "D",
          "I",
          "S",
          "ᆼ",
          "Q",
          "H",
          "X",
          "R",
          "L",
          "O",
          "O",
          "O",
          "E",
          "ᄌ",
          "C",
          "L",
          "W",
          "S",
          "U",
          "F"
        ],
        [
          "A",
          "U",
          "W",
          "M",
          "C",
          "C",
          "Q",
          "G",
          "Z",
          "N",
          "H",
          "N",
          "N",
          "U",
          "ᅵ",
          "G",
          "W",
          "S",
          "K",
          "G"
        ],
        [
          "C",
          "S",
          "K",
          "V",
          "J",
          "P",
          "A",
          "C",
          "A",
          "Z",
          "P",
          "P",
          "G",
          "E",
          "T",
          "ᄏ",
          "O",
          "Y",
          "G",
          "Z"
        ],
        [
          "I",
          "H",
          "ᄑ",
          "S",
          "U",
          "I",
          "X",
          "E",
          "H",
          "Y",
          "B",
          "E",
          "U",
          "P",
          "R",
          "P",
          "ᅥ",
          "H",
          "N",
          "J"
        ],
        [
          "R",
          "E",
          "ᅳ",
          "S",
          "L",
          "K",
          "J",
          "P",
          "B",
          "K",
          "R",
          "H",
          "E",
          "M",
          "P",
          "O",
          "G",
          "ᆯ",
          "Z",
          "L"
        ],
        [
          "R",
          "W",
          "ᄅ",
          "X",
          "K",
          "L",
          "A",
          "Y",
          "I",
          "N",
          "B",
          "N",
          "D",
          "W",
          "X",
          "P",
          "Q",
          "M",
          "F",
          "W"
        ],
        [
          "A",
          "K",
          "ᅡ",
          "F",
          "A",
          "R",
          "Y",
          "Z",
          "E",
          "Y",
          "I",
          "Q",
          "V",
          "C",
          "E",
          "X",
          "B",
          "M",
          "L",
          "I"
        ],
        [
          "B",
          "A",
          "ᆼ",
          "V",
          "I",
          "H",
          "V",
          "T",
          "O",
          "N",
          "W",
          "Q",
          "H",
          "T",
          "O",
          "R",
          "R",
          "C",
          "A",
          "U"
        ],
        [
          "U",
          "B",
          "ᄉ",
          "S",
          "X",
          "N",
          "H",
          "N",
          "O",
          "F",
          "K",
          "Q",
          "T",
          "Y",
          "R",
          "A",
          "I",
          "L",
          "T",
          "C"
        ],
        [
          "B",
          "U",
          "ᅳ",
          "S",
          "G",
          "U",
          "E",
          "P",
          "B",
          "R",
          "S",
          "E",
          "G",
          "G",
          "D",
          "D",
          "I",
          "U",
          "A",
          "G"
        ],
        [
          "F",
          "K",
          "Y",
          "I",
          "V",
          "U",
          "E",
          "G",
          "R",
          "U",
          "S",
          "W",
          "G",
          "S",
          "K",
          "S",
          "G",
          "J",
          "L",
          "F"
        ],
        [
          "F",
          "T",
          "P",
          "U",
          "S",
          "P",
          "U",
          "J",
          "W",
          "O",
          "T",
          "W",
          "C",
          "Q",
          "T",
          "R",
          "T",
          "I",
          "W",
          "T"
        ],
        [
          "D",
          "I",
          "S",
          "Y",
          "J",
          "E",
          "B",
          "E",
          "C",
          "P",
          "Q",
          "J",
          "W",
          "H",
          "S",
          "I",
          "P",
          "R",
          "L",
          "U"
        ]
      ],
      "placements": [
        {
          "label": "Barricade",
          "value": "BARRICADE",
          "word": "BARRICADE",
          "clean": "BARRICADE",
          "start": {
            "row": 14,
            "col": 0
          },
          "end": {
            "row": 6,
            "col": 0
          },
          "direction": "N",
          "path": [
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
            }
          ]
        },
        {
          "label": "Cosette",
          "value": "COSETTE",
          "word": "COSETTE",
          "clean": "COSETTE",
          "start": {
            "row": 19,
            "col": 8
          },
          "end": {
            "row": 13,
            "col": 14
          },
          "direction": "NE",
          "path": [
            {
              "row": 19,
              "col": 8
            },
            {
              "row": 18,
              "col": 9
            },
            {
              "row": 17,
              "col": 10
            },
            {
              "row": 16,
              "col": 11
            },
            {
              "row": 15,
              "col": 12
            },
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 13,
              "col": 14
            }
          ]
        },
        {
          "label": "Eponine",
          "value": "EPONINE",
          "word": "EPONINE",
          "clean": "EPONINE",
          "start": {
            "row": 17,
            "col": 6
          },
          "end": {
            "row": 11,
            "col": 12
          },
          "direction": "NE",
          "path": [
            {
              "row": 17,
              "col": 6
            },
            {
              "row": 16,
              "col": 7
            },
            {
              "row": 15,
              "col": 8
            },
            {
              "row": 14,
              "col": 9
            },
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
            "col": 19
          },
          "end": {
            "row": 2,
            "col": 13
          },
          "direction": "W",
          "path": [
            {
              "row": 2,
              "col": 19
            },
            {
              "row": 2,
              "col": 18
            },
            {
              "row": 2,
              "col": 17
            },
            {
              "row": 2,
              "col": 16
            },
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
            }
          ]
        },
        {
          "label": "Javert",
          "value": "JAVERT",
          "word": "JAVERT",
          "clean": "JAVERT",
          "start": {
            "row": 1,
            "col": 9
          },
          "end": {
            "row": 1,
            "col": 14
          },
          "direction": "E",
          "path": [
            {
              "row": 1,
              "col": 9
            },
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 1,
              "col": 11
            },
            {
              "row": 1,
              "col": 12
            },
            {
              "row": 1,
              "col": 13
            },
            {
              "row": 1,
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
            "row": 4,
            "col": 1
          },
          "end": {
            "row": 9,
            "col": 1
          },
          "direction": "S",
          "path": [
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
            },
            {
              "row": 8,
              "col": 1
            },
            {
              "row": 9,
              "col": 1
            }
          ]
        },
        {
          "label": "ParÍS",
          "value": "PARIS",
          "word": "PARIS",
          "clean": "PARIS",
          "start": {
            "row": 11,
            "col": 7
          },
          "end": {
            "row": 15,
            "col": 3
          },
          "direction": "SW",
          "path": [
            {
              "row": 11,
              "col": 7
            },
            {
              "row": 12,
              "col": 6
            },
            {
              "row": 13,
              "col": 5
            },
            {
              "row": 14,
              "col": 4
            },
            {
              "row": 15,
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
            "row": 2,
            "col": 6
          },
          "end": {
            "row": 11,
            "col": 15
          },
          "direction": "SE",
          "path": [
            {
              "row": 2,
              "col": 6
            },
            {
              "row": 3,
              "col": 7
            },
            {
              "row": 4,
              "col": 8
            },
            {
              "row": 5,
              "col": 9
            },
            {
              "row": 6,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 8,
              "col": 12
            },
            {
              "row": 9,
              "col": 13
            },
            {
              "row": 10,
              "col": 14
            },
            {
              "row": 11,
              "col": 15
            }
          ]
        },
        {
          "label": "RedenciÓN",
          "value": "REDENCION",
          "word": "REDENCION",
          "clean": "REDENCION",
          "start": {
            "row": 0,
            "col": 3
          },
          "end": {
            "row": 8,
            "col": 11
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
            }
          ]
        },
        {
          "label": "RevoluciÓN",
          "value": "REVOLUCION",
          "word": "REVOLUCION",
          "clean": "REVOLUCION",
          "start": {
            "row": 3,
            "col": 7
          },
          "end": {
            "row": 3,
            "col": 16
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 3,
              "col": 10
            },
            {
              "row": 3,
              "col": 11
            },
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
            }
          ]
        },
        {
          "label": "SueÑO",
          "value": "SUENO",
          "word": "SUENO",
          "clean": "SUENO",
          "start": {
            "row": 18,
            "col": 4
          },
          "end": {
            "row": 14,
            "col": 8
          },
          "direction": "NE",
          "path": [
            {
              "row": 18,
              "col": 4
            },
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
            }
          ]
        },
        {
          "label": "Valjean",
          "value": "VALJEAN",
          "word": "VALJEAN",
          "clean": "VALJEAN",
          "start": {
            "row": 14,
            "col": 3
          },
          "end": {
            "row": 8,
            "col": 9
          },
          "direction": "NE",
          "path": [
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
            }
          ]
        },
        {
          "label": "뮤지컬",
          "value": "뮤지컬",
          "word": "뮤지컬",
          "clean": "뮤지컬",
          "start": {
            "row": 5,
            "col": 11
          },
          "end": {
            "row": 11,
            "col": 17
          },
          "direction": "SE",
          "path": [
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
            },
            {
              "row": 8,
              "col": 14
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 11,
              "col": 17
            }
          ]
        },
        {
          "label": "프랑스",
          "value": "프랑스",
          "word": "프랑스",
          "clean": "프랑스",
          "start": {
            "row": 10,
            "col": 2
          },
          "end": {
            "row": 16,
            "col": 2
          },
          "direction": "S",
          "path": [
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
            },
            {
              "row": 13,
              "col": 2
            },
            {
              "row": 14,
              "col": 2
            },
            {
              "row": 15,
              "col": 2
            },
            {
              "row": 16,
              "col": 2
            }
          ]
        },
        {
          "label": "혁명",
          "value": "혁명",
          "word": "혁명",
          "clean": "혁명",
          "start": {
            "row": 2,
            "col": 3
          },
          "end": {
            "row": 7,
            "col": 3
          },
          "direction": "S",
          "path": [
            {
              "row": 2,
              "col": 3
            },
            {
              "row": 3,
              "col": 3
            },
            {
              "row": 4,
              "col": 3
            },
            {
              "row": 5,
              "col": 3
            },
            {
              "row": 6,
              "col": 3
            },
            {
              "row": 7,
              "col": 3
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
          "G",
          "O",
          "C",
          "P",
          "F",
          "L",
          "A",
          "H",
          "X",
          "B",
          "Y",
          "Y",
          "V",
          "E",
          "Y",
          "R",
          "D",
          "R",
          "T",
          "L"
        ],
        [
          "X",
          "K",
          "L",
          "L",
          "G",
          "G",
          "R",
          "Y",
          "D",
          "G",
          "ᄀ",
          "ᅡ",
          "ᄆ",
          "ᅧ",
          "ᆫ",
          "ᄋ",
          "ᅲ",
          "ᄅ",
          "ᅧ",
          "ᆼ"
        ],
        [
          "S",
          "R",
          "X",
          "M",
          "I",
          "Q",
          "U",
          "J",
          "U",
          "F",
          "T",
          "P",
          "N",
          "B",
          "O",
          "B",
          "X",
          "F",
          "X",
          "X"
        ],
        [
          "M",
          "U",
          "S",
          "I",
          "C",
          "A",
          "K",
          "E",
          "I",
          "N",
          "V",
          "N",
          "Z",
          "O",
          "T",
          "N",
          "R",
          "ᅡ",
          "K",
          "U"
        ],
        [
          "O",
          "A",
          "L",
          "E",
          "Y",
          "H",
          "G",
          "N",
          "Y",
          "X",
          "J",
          "C",
          "C",
          "T",
          "E",
          "P",
          "V",
          "ᄅ",
          "O",
          "C"
        ],
        [
          "Q",
          "P",
          "T",
          "O",
          "L",
          "X",
          "R",
          "S",
          "D",
          "Q",
          "F",
          "R",
          "D",
          "J",
          "A",
          "X",
          "R",
          "ᅦ",
          "E",
          "W"
        ],
        [
          "Q",
          "P",
          "H",
          "J",
          "X",
          "L",
          "J",
          "I",
          "X",
          "F",
          "A",
          "R",
          "N",
          "H",
          "T",
          "P",
          "D",
          "ᄑ",
          "D",
          "B"
        ],
        [
          "N",
          "W",
          "G",
          "A",
          "C",
          "H",
          "N",
          "C",
          "S",
          "I",
          "E",
          "U",
          "D",
          "S",
          "R",
          "J",
          "V",
          "ᅩ",
          "D",
          "I"
        ],
        [
          "A",
          "U",
          "C",
          "K",
          "N",
          "F",
          "R",
          "C",
          "F",
          "T",
          "M",
          "C",
          "W",
          "S",
          "O",
          "P",
          "V",
          "ᄋ",
          "F",
          "V"
        ],
        [
          "H",
          "P",
          "I",
          "C",
          "S",
          "T",
          "M",
          "E",
          "Z",
          "U",
          "I",
          "O",
          "J",
          "Z",
          "O",
          "R",
          "A",
          "O",
          "U",
          "L"
        ],
        [
          "O",
          "I",
          "M",
          "Y",
          "F",
          "D",
          "O",
          "Y",
          "I",
          "Z",
          "Z",
          "N",
          "N",
          "O",
          "J",
          "P",
          "T",
          "X",
          "H",
          "J"
        ],
        [
          "O",
          "B",
          "X",
          "K",
          "A",
          "Y",
          "L",
          "M",
          "V",
          "L",
          "M",
          "A",
          "E",
          "N",
          "R",
          "A",
          "R",
          "B",
          "A",
          "Y"
        ],
        [
          "R",
          "P",
          "F",
          "A",
          "N",
          "T",
          "A",
          "S",
          "M",
          "A",
          "E",
          "N",
          "R",
          "H",
          "O",
          "T",
          "H",
          "A",
          "H",
          "K"
        ],
        [
          "U",
          "O",
          "Z",
          "B",
          "P",
          "S",
          "X",
          "U",
          "P",
          "R",
          "H",
          "D",
          "P",
          "A",
          "G",
          "K",
          "P",
          "T",
          "N",
          "A"
        ],
        [
          "K",
          "K",
          "K",
          "W",
          "F",
          "P",
          "M",
          "J",
          "L",
          "I",
          "H",
          "U",
          "N",
          "M",
          "C",
          "K",
          "X",
          "K",
          "C",
          "O"
        ],
        [
          "A",
          "H",
          "V",
          "V",
          "B",
          "G",
          "A",
          "J",
          "S",
          "W",
          "M",
          "L",
          "I",
          "A",
          "P",
          "S",
          "O",
          "V",
          "I",
          "J"
        ],
        [
          "R",
          "C",
          "Y",
          "W",
          "D",
          "A",
          "S",
          "H",
          "M",
          "U",
          "M",
          "R",
          "C",
          "E",
          "H",
          "L",
          "A",
          "N",
          "B",
          "Y"
        ],
        [
          "E",
          "C",
          "P",
          "M",
          "U",
          "F",
          "K",
          "T",
          "O",
          "E",
          "R",
          "V",
          "P",
          "H",
          "H",
          "C",
          "K",
          "M",
          "M",
          "K"
        ],
        [
          "P",
          "W",
          "N",
          "M",
          "R",
          "Y",
          "A",
          "A",
          "N",
          "O",
          "M",
          "Z",
          "I",
          "V",
          "R",
          "S",
          "R",
          "H",
          "J",
          "V"
        ],
        [
          "O",
          "O",
          "H",
          "W",
          "B",
          "K",
          "D",
          "B",
          "R",
          "I",
          "R",
          "K",
          "P",
          "E",
          "L",
          "J",
          "D",
          "O",
          "J",
          "F"
        ]
      ],
      "placements": [
        {
          "label": "Chandelier",
          "value": "CHANDELIER",
          "word": "CHANDELIER",
          "clean": "CHANDELIER",
          "start": {
            "row": 17,
            "col": 15
          },
          "end": {
            "row": 8,
            "col": 6
          },
          "direction": "NW",
          "path": [
            {
              "row": 17,
              "col": 15
            },
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
          "label": "Christine",
          "value": "CHRISTINE",
          "word": "CHRISTINE",
          "clean": "CHRISTINE",
          "start": {
            "row": 3,
            "col": 4
          },
          "end": {
            "row": 11,
            "col": 12
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
            },
            {
              "row": 8,
              "col": 9
            },
            {
              "row": 9,
              "col": 10
            },
            {
              "row": 10,
              "col": 11
            },
            {
              "row": 11,
              "col": 12
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
            "col": 2
          },
          "end": {
            "row": 12,
            "col": 9
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 12,
              "col": 9
            }
          ]
        },
        {
          "label": "MÁScara",
          "value": "MASCARA",
          "word": "MASCARA",
          "clean": "MASCARA",
          "start": {
            "row": 17,
            "col": 17
          },
          "end": {
            "row": 11,
            "col": 11
          },
          "direction": "NW",
          "path": [
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 16,
              "col": 16
            },
            {
              "row": 15,
              "col": 15
            },
            {
              "row": 14,
              "col": 14
            },
            {
              "row": 13,
              "col": 13
            },
            {
              "row": 12,
              "col": 12
            },
            {
              "row": 11,
              "col": 11
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
            "col": 6
          },
          "end": {
            "row": 17,
            "col": 6
          },
          "direction": "S",
          "path": [
            {
              "row": 14,
              "col": 6
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 16,
              "col": 6
            },
            {
              "row": 17,
              "col": 6
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
            "row": 19,
            "col": 8
          },
          "direction": "SW",
          "path": [
            {
              "row": 14,
              "col": 13
            },
            {
              "row": 15,
              "col": 12
            },
            {
              "row": 16,
              "col": 11
            },
            {
              "row": 17,
              "col": 10
            },
            {
              "row": 18,
              "col": 9
            },
            {
              "row": 19,
              "col": 8
            }
          ]
        },
        {
          "label": "MÚSica",
          "value": "MUSICA",
          "word": "MUSICA",
          "clean": "MUSICA",
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
          "label": "Opera",
          "value": "OPERA",
          "word": "OPERA",
          "clean": "OPERA",
          "start": {
            "row": 19,
            "col": 0
          },
          "end": {
            "row": 15,
            "col": 0
          },
          "direction": "N",
          "path": [
            {
              "row": 19,
              "col": 0
            },
            {
              "row": 18,
              "col": 0
            },
            {
              "row": 17,
              "col": 0
            },
            {
              "row": 16,
              "col": 0
            },
            {
              "row": 15,
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
            "row": 5,
            "col": 1
          },
          "end": {
            "row": 11,
            "col": 7
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
          "label": "Raoul",
          "value": "RAOUL",
          "word": "RAOUL",
          "clean": "RAOUL",
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
          "label": "Soprano",
          "value": "SOPRANO",
          "word": "SOPRANO",
          "clean": "SOPRANO",
          "start": {
            "row": 8,
            "col": 13
          },
          "end": {
            "row": 14,
            "col": 19
          },
          "direction": "SE",
          "path": [
            {
              "row": 8,
              "col": 13
            },
            {
              "row": 9,
              "col": 14
            },
            {
              "row": 10,
              "col": 15
            },
            {
              "row": 11,
              "col": 16
            },
            {
              "row": 12,
              "col": 17
            },
            {
              "row": 13,
              "col": 18
            },
            {
              "row": 14,
              "col": 19
            }
          ]
        },
        {
          "label": "Teatro",
          "value": "TEATRO",
          "word": "TEATRO",
          "clean": "TEATRO",
          "start": {
            "row": 3,
            "col": 14
          },
          "end": {
            "row": 8,
            "col": 14
          },
          "direction": "S",
          "path": [
            {
              "row": 3,
              "col": 14
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 5,
              "col": 14
            },
            {
              "row": 6,
              "col": 14
            },
            {
              "row": 7,
              "col": 14
            },
            {
              "row": 8,
              "col": 14
            }
          ]
        },
        {
          "label": "가면",
          "value": "가면",
          "word": "가면",
          "clean": "가면",
          "start": {
            "row": 1,
            "col": 10
          },
          "end": {
            "row": 1,
            "col": 14
          },
          "direction": "E",
          "path": [
            {
              "row": 1,
              "col": 10
            },
            {
              "row": 1,
              "col": 11
            },
            {
              "row": 1,
              "col": 12
            },
            {
              "row": 1,
              "col": 13
            },
            {
              "row": 1,
              "col": 14
            }
          ]
        },
        {
          "label": "오페라",
          "value": "오페라",
          "word": "오페라",
          "clean": "오페라",
          "start": {
            "row": 8,
            "col": 17
          },
          "end": {
            "row": 3,
            "col": 17
          },
          "direction": "N",
          "path": [
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
            },
            {
              "row": 4,
              "col": 17
            },
            {
              "row": 3,
              "col": 17
            }
          ]
        },
        {
          "label": "유령",
          "value": "유령",
          "word": "유령",
          "clean": "유령",
          "start": {
            "row": 1,
            "col": 15
          },
          "end": {
            "row": 1,
            "col": 19
          },
          "direction": "E",
          "path": [
            {
              "row": 1,
              "col": 15
            },
            {
              "row": 1,
              "col": 16
            },
            {
              "row": 1,
              "col": 17
            },
            {
              "row": 1,
              "col": 18
            },
            {
              "row": 1,
              "col": 19
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
          "Q",
          "T",
          "A",
          "N",
          "Y",
          "A",
          "L",
          "V",
          "L",
          "Y",
          "Y",
          "Z",
          "K",
          "D",
          "N",
          "A",
          "L",
          "S",
          "I",
          "Q"
        ],
        [
          "Y",
          "B",
          "S",
          "S",
          "X",
          "B",
          "G",
          "O",
          "K",
          "O",
          "V",
          "M",
          "P",
          "X",
          "Y",
          "G",
          "Y",
          "I",
          "J",
          "B"
        ],
        [
          "E",
          "V",
          "Y",
          "Z",
          "R",
          "H",
          "A",
          "S",
          "N",
          "A",
          "S",
          "F",
          "A",
          "S",
          "O",
          "P",
          "H",
          "I",
          "E",
          "X"
        ],
        [
          "F",
          "N",
          "S",
          "G",
          "T",
          "D",
          "S",
          "H",
          "I",
          "I",
          "Q",
          "K",
          "F",
          "D",
          "D",
          "M",
          "U",
          "F",
          "I",
          "D"
        ],
        [
          "S",
          "V",
          "D",
          "B",
          "O",
          "F",
          "T",
          "A",
          "Z",
          "C",
          "X",
          "S",
          "S",
          "E",
          "R",
          "I",
          "T",
          "J",
          "G",
          "T"
        ],
        [
          "A",
          "E",
          "A",
          "B",
          "H",
          "K",
          "I",
          "I",
          "V",
          "E",
          "M",
          "C",
          "L",
          "D",
          "F",
          "E",
          "K",
          "O",
          "K",
          "X"
        ],
        [
          "K",
          "K",
          "D",
          "Q",
          "M",
          "N",
          "N",
          "J",
          "C",
          "R",
          "I",
          "I",
          "W",
          "G",
          "M",
          "L",
          "R",
          "R",
          "A",
          "Y"
        ],
        [
          "D",
          "ᄆ",
          "K",
          "O",
          "H",
          "W",
          "B",
          "S",
          "R",
          "G",
          "A",
          "Y",
          "E",
          "ᆫ",
          "ᅩ",
          "ᄒ",
          "ᆯ",
          "ᅧ",
          "ᄀ",
          "Q"
        ],
        [
          "X",
          "ᅲ",
          "V",
          "F",
          "T",
          "J",
          "Y",
          "B",
          "C",
          "B",
          "A",
          "H",
          "X",
          "D",
          "L",
          "B",
          "X",
          "S",
          "T",
          "P"
        ],
        [
          "G",
          "ᄌ",
          "L",
          "Z",
          "U",
          "L",
          "P",
          "C",
          "U",
          "Q",
          "C",
          "R",
          "P",
          "K",
          "T",
          "Z",
          "E",
          "P",
          "Z",
          "H"
        ],
        [
          "O",
          "ᅵ",
          "F",
          "Q",
          "A",
          "R",
          "J",
          "Q",
          "E",
          "S",
          "H",
          "K",
          "Q",
          "V",
          "B",
          "Z",
          "E",
          "L",
          "S",
          "U"
        ],
        [
          "W",
          "ᄏ",
          "P",
          "K",
          "P",
          "V",
          "E",
          "Y",
          "O",
          "C",
          "T",
          "S",
          "H",
          "M",
          "W",
          "T",
          "H",
          "W",
          "U",
          "A"
        ],
        [
          "V",
          "ᅥ",
          "W",
          "N",
          "C",
          "I",
          "Q",
          "D",
          "I",
          "S",
          "F",
          "R",
          "B",
          "J",
          "G",
          "P",
          "U",
          "D",
          "N",
          "R"
        ],
        [
          "F",
          "ᆯ",
          "P",
          "P",
          "S",
          "O",
          "I",
          "Q",
          "C",
          "F",
          "U",
          "V",
          "H",
          "U",
          "B",
          "X",
          "T",
          "N",
          "O",
          "P"
        ],
        [
          "R",
          "C",
          "U",
          "O",
          "J",
          "A",
          "J",
          "V",
          "S",
          "B",
          "X",
          "P",
          "L",
          "M",
          "E",
          "L",
          "O",
          "K",
          "P",
          "X"
        ],
        [
          "E",
          "P",
          "R",
          "F",
          "O",
          "Y",
          "B",
          "S",
          "V",
          "E",
          "D",
          "M",
          "U",
          "K",
          "U",
          "D",
          "J",
          "I",
          "A",
          "Y"
        ],
        [
          "I",
          "K",
          "P",
          "N",
          "B",
          "V",
          "G",
          "B",
          "I",
          "Y",
          "E",
          "D",
          "R",
          "P",
          "V",
          "T",
          "I",
          "S",
          "T",
          "R"
        ],
        [
          "N",
          "H",
          "E",
          "M",
          "C",
          "Q",
          "N",
          "F",
          "A",
          "O",
          "C",
          "M",
          "X",
          "N",
          "N",
          "I",
          "L",
          "H",
          "P",
          "Y"
        ],
        [
          "A",
          "Q",
          "K",
          "Z",
          "X",
          "I",
          "Y",
          "Q",
          "H",
          "A",
          "Y",
          "I",
          "M",
          "B",
          "C",
          "S",
          "Z",
          "Z",
          "F",
          "U"
        ],
        [
          "D",
          "O",
          "A",
          "S",
          "Y",
          "X",
          "G",
          "G",
          "E",
          "P",
          "ᄉ",
          "ᅥ",
          "ᆷ",
          "V",
          "R",
          "C",
          "R",
          "Y",
          "A",
          "S"
        ]
      ],
      "placements": [
        {
          "label": "Abba",
          "value": "ABBA",
          "word": "ABBA",
          "clean": "ABBA",
          "start": {
            "row": 14,
            "col": 5
          },
          "end": {
            "row": 17,
            "col": 8
          },
          "direction": "SE",
          "path": [
            {
              "row": 14,
              "col": 5
            },
            {
              "row": 15,
              "col": 6
            },
            {
              "row": 16,
              "col": 7
            },
            {
              "row": 17,
              "col": 8
            }
          ]
        },
        {
          "label": "Baile",
          "value": "BAILE",
          "word": "BAILE",
          "clean": "BAILE",
          "start": {
            "row": 8,
            "col": 9
          },
          "end": {
            "row": 4,
            "col": 13
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
            }
          ]
        },
        {
          "label": "Boda",
          "value": "BODA",
          "word": "BODA",
          "clean": "BODA",
          "start": {
            "row": 5,
            "col": 3
          },
          "end": {
            "row": 2,
            "col": 6
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
            }
          ]
        },
        {
          "label": "Donna",
          "value": "DONNA",
          "word": "DONNA",
          "clean": "DONNA",
          "start": {
            "row": 15,
            "col": 15
          },
          "end": {
            "row": 11,
            "col": 19
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
            },
            {
              "row": 11,
              "col": 19
            }
          ]
        },
        {
          "label": "Grecia",
          "value": "GRECIA",
          "word": "GRECIA",
          "clean": "GRECIA",
          "start": {
            "row": 7,
            "col": 9
          },
          "end": {
            "row": 2,
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
            }
          ]
        },
        {
          "label": "Island",
          "value": "ISLAND",
          "word": "ISLAND",
          "clean": "ISLAND",
          "start": {
            "row": 0,
            "col": 18
          },
          "end": {
            "row": 0,
            "col": 13
          },
          "direction": "W",
          "path": [
            {
              "row": 0,
              "col": 18
            },
            {
              "row": 0,
              "col": 17
            },
            {
              "row": 0,
              "col": 16
            },
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
            }
          ]
        },
        {
          "label": "Madre",
          "value": "MADRE",
          "word": "MADRE",
          "clean": "MADRE",
          "start": {
            "row": 1,
            "col": 11
          },
          "end": {
            "row": 5,
            "col": 15
          },
          "direction": "SE",
          "path": [
            {
              "row": 1,
              "col": 11
            },
            {
              "row": 2,
              "col": 12
            },
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 5,
              "col": 15
            }
          ]
        },
        {
          "label": "Reina",
          "value": "REINA",
          "word": "REINA",
          "clean": "REINA",
          "start": {
            "row": 14,
            "col": 0
          },
          "end": {
            "row": 18,
            "col": 0
          },
          "direction": "S",
          "path": [
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
          "label": "Rosie",
          "value": "ROSIE",
          "word": "ROSIE",
          "clean": "ROSIE",
          "start": {
            "row": 15,
            "col": 2
          },
          "end": {
            "row": 11,
            "col": 6
          },
          "direction": "NE",
          "path": [
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
            },
            {
              "row": 11,
              "col": 6
            }
          ]
        },
        {
          "label": "Sky",
          "value": "SKY",
          "word": "SKY",
          "clean": "SKY",
          "start": {
            "row": 2,
            "col": 7
          },
          "end": {
            "row": 0,
            "col": 9
          },
          "direction": "NE",
          "path": [
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
          "label": "Sophie",
          "value": "SOPHIE",
          "word": "SOPHIE",
          "clean": "SOPHIE",
          "start": {
            "row": 2,
            "col": 13
          },
          "end": {
            "row": 2,
            "col": 18
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 2,
              "col": 18
            }
          ]
        },
        {
          "label": "Tanya",
          "value": "TANYA",
          "word": "TANYA",
          "clean": "TANYA",
          "start": {
            "row": 0,
            "col": 1
          },
          "end": {
            "row": 0,
            "col": 5
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
            }
          ]
        },
        {
          "label": "결혼",
          "value": "결혼",
          "word": "결혼",
          "clean": "결혼",
          "start": {
            "row": 7,
            "col": 18
          },
          "end": {
            "row": 7,
            "col": 13
          },
          "direction": "W",
          "path": [
            {
              "row": 7,
              "col": 18
            },
            {
              "row": 7,
              "col": 17
            },
            {
              "row": 7,
              "col": 16
            },
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
            "col": 1
          },
          "end": {
            "row": 13,
            "col": 1
          },
          "direction": "S",
          "path": [
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
            },
            {
              "row": 13,
              "col": 1
            }
          ]
        },
        {
          "label": "섬",
          "value": "섬",
          "word": "섬",
          "clean": "섬",
          "start": {
            "row": 19,
            "col": 10
          },
          "end": {
            "row": 19,
            "col": 12
          },
          "direction": "E",
          "path": [
            {
              "row": 19,
              "col": 10
            },
            {
              "row": 19,
              "col": 11
            },
            {
              "row": 19,
              "col": 12
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
          "R",
          "S",
          "X",
          "ᄆ",
          "Q",
          "R",
          "K",
          "G",
          "Y",
          "X",
          "ᄌ",
          "H",
          "K",
          "R",
          "B",
          "K",
          "D",
          "G",
          "G",
          "D"
        ],
        [
          "O",
          "L",
          "P",
          "D",
          "ᅡ",
          "V",
          "Q",
          "Z",
          "R",
          "C",
          "ᅮ",
          "L",
          "J",
          "M",
          "X",
          "M",
          "Q",
          "N",
          "N",
          "J"
        ],
        [
          "B",
          "J",
          "H",
          "V",
          "U",
          "ᄇ",
          "Y",
          "J",
          "Q",
          "Q",
          "ᆼ",
          "C",
          "Z",
          "M",
          "R",
          "G",
          "G",
          "K",
          "E",
          "Y"
        ],
        [
          "C",
          "G",
          "P",
          "T",
          "U",
          "B",
          "ᅥ",
          "N",
          "D",
          "T",
          "ᄅ",
          "P",
          "P",
          "B",
          "R",
          "F",
          "R",
          "Q",
          "S",
          "Z"
        ],
        [
          "W",
          "I",
          "Z",
          "A",
          "R",
          "D",
          "D",
          "ᆸ",
          "S",
          "V",
          "ᅧ",
          "Q",
          "U",
          "H",
          "O",
          "N",
          "A",
          "P",
          "S",
          "M"
        ],
        [
          "W",
          "P",
          "S",
          "H",
          "H",
          "T",
          "W",
          "L",
          "ᄉ",
          "T",
          "ᆨ",
          "G",
          "Z",
          "N",
          "H",
          "Q",
          "U",
          "R",
          "A",
          "Z"
        ],
        [
          "V",
          "L",
          "L",
          "Z",
          "H",
          "Q",
          "J",
          "H",
          "W",
          "ᅡ",
          "I",
          "B",
          "R",
          "L",
          "D",
          "L",
          "H",
          "H",
          "R",
          "V"
        ],
        [
          "C",
          "Q",
          "M",
          "Y",
          "E",
          "V",
          "L",
          "F",
          "I",
          "Y",
          "E",
          "R",
          "O",
          "A",
          "K",
          "C",
          "I",
          "G",
          "O",
          "M"
        ],
        [
          "L",
          "C",
          "E",
          "M",
          "P",
          "Q",
          "X",
          "X",
          "R",
          "F",
          "K",
          "W",
          "R",
          "T",
          "V",
          "Y",
          "T",
          "P",
          "S",
          "Y"
        ],
        [
          "F",
          "A",
          "B",
          "A",
          "H",
          "P",
          "L",
          "E",
          "U",
          "T",
          "E",
          "V",
          "U",
          "D",
          "O",
          "I",
          "Z",
          "O",
          "E",
          "Q"
        ],
        [
          "P",
          "A",
          "Y",
          "T",
          "Q",
          "M",
          "Q",
          "K",
          "W",
          "V",
          "I",
          "X",
          "K",
          "I",
          "R",
          "Y",
          "T",
          "M",
          "L",
          "Y"
        ],
        [
          "A",
          "P",
          "E",
          "K",
          "E",
          "A",
          "Y",
          "O",
          "P",
          "M",
          "G",
          "M",
          "O",
          "A",
          "L",
          "Z",
          "I",
          "Y",
          "X",
          "T"
        ],
        [
          "T",
          "K",
          "C",
          "E",
          "M",
          "G",
          "E",
          "K",
          "I",
          "G",
          "N",
          "P",
          "I",
          "Z",
          "Z",
          "K",
          "O",
          "X",
          "L",
          "C"
        ],
        [
          "J",
          "R",
          "N",
          "P",
          "H",
          "I",
          "V",
          "G",
          "M",
          "E",
          "M",
          "E",
          "R",
          "A",
          "L",
          "D",
          "G",
          "O",
          "Z",
          "W"
        ],
        [
          "Z",
          "C",
          "V",
          "P",
          "ᄆ",
          "A",
          "Q",
          "Z",
          "J",
          "F",
          "X",
          "P",
          "N",
          "H",
          "C",
          "T",
          "I",
          "W",
          "Z",
          "I"
        ],
        [
          "G",
          "X",
          "J",
          "S",
          "R",
          "ᅡ",
          "V",
          "I",
          "E",
          "Z",
          "V",
          "J",
          "Z",
          "U",
          "P",
          "X",
          "Q",
          "Y",
          "O",
          "J"
        ],
        [
          "N",
          "K",
          "J",
          "V",
          "X",
          "L",
          "ᄂ",
          "N",
          "S",
          "P",
          "G",
          "L",
          "I",
          "N",
          "D",
          "A",
          "I",
          "B",
          "M",
          "P"
        ],
        [
          "O",
          "U",
          "C",
          "D",
          "T",
          "O",
          "S",
          "ᅧ",
          "Q",
          "Q",
          "W",
          "Z",
          "Q",
          "H",
          "B",
          "R",
          "U",
          "J",
          "A",
          "D"
        ],
        [
          "X",
          "I",
          "P",
          "Z",
          "T",
          "T",
          "I",
          "H",
          "X",
          "R",
          "A",
          "L",
          "U",
          "P",
          "O",
          "P",
          "R",
          "T",
          "C",
          "F"
        ],
        [
          "X",
          "P",
          "P",
          "T",
          "I",
          "H",
          "L",
          "J",
          "N",
          "Z",
          "S",
          "I",
          "O",
          "F",
          "S",
          "I",
          "T",
          "W",
          "N",
          "K"
        ]
      ],
      "placements": [
        {
          "label": "Boq",
          "value": "BOQ",
          "word": "BOQ",
          "clean": "BOQ",
          "start": {
            "row": 3,
            "col": 13
          },
          "end": {
            "row": 5,
            "col": 15
          },
          "direction": "SE",
          "path": [
            {
              "row": 3,
              "col": 13
            },
            {
              "row": 4,
              "col": 14
            },
            {
              "row": 5,
              "col": 15
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
            "col": 14
          },
          "end": {
            "row": 17,
            "col": 18
          },
          "direction": "E",
          "path": [
            {
              "row": 17,
              "col": 14
            },
            {
              "row": 17,
              "col": 15
            },
            {
              "row": 17,
              "col": 16
            },
            {
              "row": 17,
              "col": 17
            },
            {
              "row": 17,
              "col": 18
            }
          ]
        },
        {
          "label": "Elphaba",
          "value": "ELPHABA",
          "word": "ELPHABA",
          "clean": "ELPHABA",
          "start": {
            "row": 9,
            "col": 7
          },
          "end": {
            "row": 9,
            "col": 1
          },
          "direction": "W",
          "path": [
            {
              "row": 9,
              "col": 7
            },
            {
              "row": 9,
              "col": 6
            },
            {
              "row": 9,
              "col": 5
            },
            {
              "row": 9,
              "col": 4
            },
            {
              "row": 9,
              "col": 3
            },
            {
              "row": 9,
              "col": 2
            },
            {
              "row": 9,
              "col": 1
            }
          ]
        },
        {
          "label": "Emerald",
          "value": "EMERALD",
          "word": "EMERALD",
          "clean": "EMERALD",
          "start": {
            "row": 13,
            "col": 9
          },
          "end": {
            "row": 13,
            "col": 15
          },
          "direction": "E",
          "path": [
            {
              "row": 13,
              "col": 9
            },
            {
              "row": 13,
              "col": 10
            },
            {
              "row": 13,
              "col": 11
            },
            {
              "row": 13,
              "col": 12
            },
            {
              "row": 13,
              "col": 13
            },
            {
              "row": 13,
              "col": 14
            },
            {
              "row": 13,
              "col": 15
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
            "col": 7
          },
          "end": {
            "row": 7,
            "col": 12
          },
          "direction": "E",
          "path": [
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
            },
            {
              "row": 7,
              "col": 10
            },
            {
              "row": 7,
              "col": 11
            },
            {
              "row": 7,
              "col": 12
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
            "col": 10
          },
          "end": {
            "row": 16,
            "col": 15
          },
          "direction": "E",
          "path": [
            {
              "row": 16,
              "col": 10
            },
            {
              "row": 16,
              "col": 11
            },
            {
              "row": 16,
              "col": 12
            },
            {
              "row": 16,
              "col": 13
            },
            {
              "row": 16,
              "col": 14
            },
            {
              "row": 16,
              "col": 15
            }
          ]
        },
        {
          "label": "Gravity",
          "value": "GRAVITY",
          "word": "GRAVITY",
          "clean": "GRAVITY",
          "start": {
            "row": 5,
            "col": 11
          },
          "end": {
            "row": 11,
            "col": 17
          },
          "direction": "SE",
          "path": [
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
            },
            {
              "row": 8,
              "col": 14
            },
            {
              "row": 9,
              "col": 15
            },
            {
              "row": 10,
              "col": 16
            },
            {
              "row": 11,
              "col": 17
            }
          ]
        },
        {
          "label": "Magia",
          "value": "MAGIA",
          "word": "MAGIA",
          "clean": "MAGIA",
          "start": {
            "row": 10,
            "col": 5
          },
          "end": {
            "row": 14,
            "col": 5
          },
          "direction": "S",
          "path": [
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
            }
          ]
        },
        {
          "label": "Nessarose",
          "value": "NESSAROSE",
          "word": "NESSAROSE",
          "clean": "NESSAROSE",
          "start": {
            "row": 1,
            "col": 18
          },
          "end": {
            "row": 9,
            "col": 18
          },
          "direction": "S",
          "path": [
            {
              "row": 1,
              "col": 18
            },
            {
              "row": 2,
              "col": 18
            },
            {
              "row": 3,
              "col": 18
            },
            {
              "row": 4,
              "col": 18
            },
            {
              "row": 5,
              "col": 18
            },
            {
              "row": 6,
              "col": 18
            },
            {
              "row": 7,
              "col": 18
            },
            {
              "row": 8,
              "col": 18
            },
            {
              "row": 9,
              "col": 18
            }
          ]
        },
        {
          "label": "Popular",
          "value": "POPULAR",
          "word": "POPULAR",
          "clean": "POPULAR",
          "start": {
            "row": 18,
            "col": 15
          },
          "end": {
            "row": 18,
            "col": 9
          },
          "direction": "W",
          "path": [
            {
              "row": 18,
              "col": 15
            },
            {
              "row": 18,
              "col": 14
            },
            {
              "row": 18,
              "col": 13
            },
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
          "label": "Witch",
          "value": "WITCH",
          "word": "WITCH",
          "clean": "WITCH",
          "start": {
            "row": 14,
            "col": 17
          },
          "end": {
            "row": 14,
            "col": 13
          },
          "direction": "W",
          "path": [
            {
              "row": 14,
              "col": 17
            },
            {
              "row": 14,
              "col": 16
            },
            {
              "row": 14,
              "col": 15
            },
            {
              "row": 14,
              "col": 14
            },
            {
              "row": 14,
              "col": 13
            }
          ]
        },
        {
          "label": "Wizard",
          "value": "WIZARD",
          "word": "WIZARD",
          "clean": "WIZARD",
          "start": {
            "row": 4,
            "col": 0
          },
          "end": {
            "row": 4,
            "col": 5
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
            },
            {
              "row": 4,
              "col": 4
            },
            {
              "row": 4,
              "col": 5
            }
          ]
        },
        {
          "label": "마녀",
          "value": "마녀",
          "word": "마녀",
          "clean": "마녀",
          "start": {
            "row": 14,
            "col": 4
          },
          "end": {
            "row": 17,
            "col": 7
          },
          "direction": "SE",
          "path": [
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
            }
          ]
        },
        {
          "label": "마법사",
          "value": "마법사",
          "word": "마법사",
          "clean": "마법사",
          "start": {
            "row": 0,
            "col": 3
          },
          "end": {
            "row": 6,
            "col": 9
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
            }
          ]
        },
        {
          "label": "중력",
          "value": "중력",
          "word": "중력",
          "clean": "중력",
          "start": {
            "row": 0,
            "col": 10
          },
          "end": {
            "row": 5,
            "col": 10
          },
          "direction": "S",
          "path": [
            {
              "row": 0,
              "col": 10
            },
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
        }
      ]
    }
  ]
} as const;

export default dailyPuzzles;
