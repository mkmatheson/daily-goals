type Data = { [key: string]: number[] };
export type Criteria = { values: number[]; isInverted?: boolean };

const exampleSpectrum = [0, 1, 11, 21, 31];
const extendedExampleSpectrum = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32
];

export type Goal = {
  data: Data;
  name: string;
  criteria: Criteria;
};

export const defaultCriteria: Criteria = {
  values: [30, 20, 10, 1, 0],
  isInverted: false
};
