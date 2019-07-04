import { convertNotes } from './';

const string = '900 100 0 10 999';
const converted = convertNotes(string);

test('notes string will be converted into array', () => {
  expect(Array.isArray(converted)).toBe(true);
});

test('converted array must include numbers', () => {
  expect(converted.every(x => typeof x === 'number')).toBe(true);
});

test('all numbers in converted greater than zero', () => {
  expect(converted.every(x => x > 0)).toBe(true);
});

test('arr must not be empty', () => {
  expect(converted.length).toBeGreaterThan(0);
});

test('converted array must be sorted by desc', () => {
  expect(converted[0]).toBeGreaterThan(converted[1]);
});
