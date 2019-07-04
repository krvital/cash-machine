import { validateNotesString } from './';

test('validation should pass if notes string is valid', () => {
  const notesString = '100 1 0';

  expect(validateNotesString(notesString)).toBeUndefined();
});

test('notes string may include only numbers and/or whitespaces', () => {
  const notesString = '100 1 -';

  expect(validateNotesString(notesString)).toBeTruthy();
});
