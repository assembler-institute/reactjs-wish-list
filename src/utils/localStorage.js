/* eslint-disable prettier/prettier */
export function saveItem(item) {
  window.localStorage.setItem(item.id, JSON.stringify(item))
}

export function getItem(id) {
  return window.localStorage.getItem(id)
}

export function deleteItem(id) {
  window.localStorage.removeItem(id)
}

export function generateNewKey() {
  return Object.keys(localStorage).length > 0 ? Math.max(...Object.keys(localStorage)) + 1 : 1
}