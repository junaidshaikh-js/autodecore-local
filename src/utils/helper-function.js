export function isInList(list, id) {
  return Boolean(list.find((item) => item.productID === id));
}

export function getId(list, productID) {
  return list.find((item) => item.productID === productID)["id"];
}
