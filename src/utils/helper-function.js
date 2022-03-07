export function isInList(list, id) {
  return Boolean(list.find((item) => item.id === id));
}
