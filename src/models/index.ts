export type Note = number;
export type AvailableNotes = Note[];

const baseUrl = process.env.BASE_URL || '/';

export const Pages = {
  main: baseUrl,
  withdraw: baseUrl + 'withdraw',
  settings: baseUrl + 'settings'
};
