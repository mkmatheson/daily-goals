type Data = { [key: string]: number[] };
type Criteria = { values: number[]; isInverted?: boolean };

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
    jan: [1, 30],
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
    jan: [45, 85],
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
    jan: [2, 60],
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
    jan: [19, 15],
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
    jan: [2, 5],
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
    jan: [2, 2],
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
 * word game
 */
const word: Goal = {
  criteria: defaultCriteria,
  data: {
    jan: [10, 60],
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
    jan: [8, 5],
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
    jan: [5, 8],
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
  criteria: { values: [60, 45, 30, 15], isInverted: true },
  data: {
    jan: [240, 23],
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
    jan: [40, 40],
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
    jan: [1, 1],
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
  sleep,
  gaming,
  browsing,
  days
};
