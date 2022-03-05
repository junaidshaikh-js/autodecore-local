export function stateReducer(state, { type, payload }) {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    case "SET_CART":
      return { ...state, productsInCart: payload };
    default:
      throw new Error("Unhandled action type");
  }
}
