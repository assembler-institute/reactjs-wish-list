export function readLocalStorage(key) {
  try {
    const raw = localStorage.getItem(key);
    const data = JSON.parse(raw);

    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

export function writeLocalStorage(key, data) {
  try {
    const raw = JSON.stringify(data);
    localStorage.setItem(key, raw);
  } catch (err) {
    console.error(err);
  }
}
