type Data = { [key: string]: number[] };
export type Criteria = { values: number[]; isInverted?: boolean };

const exampleSpectrum = [0, 1, 11, 21, 31];
const extendedExampleSpectrum = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
];

type Goal = {
  data: Data;
  criteria: Criteria;
};

const defaultCriteria: Criteria = {
  values: [30, 20, 10, 1, 0],
  isInverted: false
};

/** foiling
 * balancing
 * dock start
 * windsurfing
 */
const foil: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [1, 30, 15],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

/** movement
 * exercise
 * swimming
 * walking
 */

const movement: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [45, 85, 40],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};
/** music
 * piano
 * banjo
 * theory
 */

const music: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [2, 60, 10],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

const stretch: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [19, 15, 8],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

/** juggling
 * soccer
 * balls
 */
const juggle: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [2, 5, 2],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

/** transport
 * unicycle
 * roller skates
 */

const transport: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [2, 2, 1],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

/** words
 * reading
 * writing
 * word game
 */
const word: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [10, 60, 45],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

const meditation: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [8, 5, 10],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

const animation: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [0, 0, 27],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

const language: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [0, 0, 2],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

const sleep: Goal = {
  criteria: { values: [8, 7, 6, 5, 0], isInverted: false },
  data: {
    jan: [5, 8, 7.5],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

const gaming: Goal = {
  criteria: { values: [60, 45, 30, 15, 0], isInverted: true },
  data: {
    jan: [240, 23, 12.5],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

const browsing: Goal = {
  criteria: { values: [30, 20, 10, 1, 0], isInverted: true },
  data: {
    jan: [40, 60, 25],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

const howIWasFeeling: Goal = {
  criteria: { values: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0], isInverted: false },
  data: {
    jan: [6, 7, 7],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

const days: Goal = {
  criteria: { values: [1, 0], isInverted: false },
  data: {
    jan: [1, 1, 1],
    feb: [],
    mar: [],
    apr: [],
    may: [],
    jun: [],
    jul: [],
    aug: [],
    sep: [],
    oct: [],
    nov: [],
    dec: []
  }
};

export const goals: { [key: string]: Goal } = {
  foil,
  movement,
  music,
  stretch,
  juggle,
  transport,
  word,
  meditation,
  animation,
  language,
  sleep,
  gaming,
  browsing,
  howIWasFeeling,
  days
};
