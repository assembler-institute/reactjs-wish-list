/* eslint-disable prettier/prettier */
export function saveItem(item) {
  window.localStorage.setItem(item.id, JSON.stringify(item))
}

export function getItem(id) {
  window.localStorage.getItem(id)
}

export function deleteItem(id) {
  window.localStorage.removeItem(id)
}