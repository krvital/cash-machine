import { calculateMoney } from './';

test('simple case 560 = 100x5 + 50x1 + 10x1', () => {
  const amount = 560;
  const availableNotes = [100, 50, 10];

  const money = calculateMoney(amount, availableNotes);

  expect(money).toBe('100x5 50x1 10x1');
});

test('simple case 100000 = 100x1000', () => {
  const amount = 100000;
  const availableNotes = [100, 50, 10];

  const money = calculateMoney(amount, availableNotes);

  expect(money).toBe('100x1000');
});

test('561 = null', () => {
  const amount = 1000561;
  const availableNotes = [100, 50, 10];

  const money = calculateMoney(amount, availableNotes);

  expect(money).toBeNull();
});

test('120 = 30x4', () => {
  const amount = 120;
  const availableNotes = [100, 50, 30];

  const money = calculateMoney(amount, availableNotes);

  expect(money).toBe('30x4');
});
