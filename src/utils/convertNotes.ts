import compose from 'ramda/src/compose';
import trim from 'ramda/src/trim';
import split from 'ramda/src/split';
import gt from 'ramda/src/gt';
import map from 'ramda/src/map';
import filter from 'ramda/src/filter';
import sort from 'ramda/src/sort';
import { AvailableNotes } from '../models';

const toNumber = (x: string): number => Number(x);
const greaterThanZero = (x: number) => gt(x, 0);

export const convertNotes: (notes: string) => AvailableNotes = compose(
  sort((a, b) => b - a),
  filter<number, 'array'>(greaterThanZero),
  map(toNumber),
  split(' '),
  trim
);
