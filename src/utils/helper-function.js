export function isInList(list, id) {
  return Boolean(list.find((item) => item.product_id === id));
}
