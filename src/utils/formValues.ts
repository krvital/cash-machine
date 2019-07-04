export function formValues<T>(formElement: HTMLFormElement): T {
  const values = {};
  const formData = new FormData(formElement);
  for (const entry of formData) {
    values[entry[0]] = entry[1];
  }

  return values as T;
}
