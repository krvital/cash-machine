export function validateNotesString(notes: string): string | undefined {
  if (!notes.match(/^(\d|\s)+$/)) {
    return 'Invalid notes format';
  }
}
