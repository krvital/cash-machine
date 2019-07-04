const needNotesToString = notes => {
  const notesValues = Object.keys(notes).map(Number);
  notesValues.sort((a, b) => b - a);

  return notesValues
    .filter(key => notes[key] > 0)
    .map(key => `${key}x${notes[key]}`)
    .join(' ');
};

export function calculateMoney(amount: number, availableNotes: number[]): string | null {
  const minNotesAmount = [0];
  const needNotes = availableNotes.reduce((acc, curr) => ({ ...acc, [curr]: 0 }), {});

  for (let m = 1; m <= amount; m++) {
    minNotesAmount[m] = Infinity;

    for (let note of availableNotes) {
      if (m >= note && minNotesAmount[m] > minNotesAmount[m - note] + 1) {
        minNotesAmount[m] = minNotesAmount[m - note] + 1;
      }
    }
  }

  if (minNotesAmount[amount] === Infinity) {
    return null;
  }

  while (amount > 0) {
    let curAmount = amount;

    for (let note of availableNotes) {
      if (
        amount >= note &&
        (minNotesAmount[amount] === minNotesAmount[amount - note] + 1 ||
          minNotesAmount[amount] === minNotesAmount[amount - note])
      ) {
        needNotes[note] = needNotes[note] + 1;
        amount = amount - note;
        break;
      }
    }

    if (curAmount === amount) {
      break;
    }
  }

  return needNotesToString(needNotes);
}
