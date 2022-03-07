export function stateReducer(state, { type, payload }) {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    case "SET_CART":
      return { ...state, productsInCart: payload };
    case "REMOVE_ITEM_FROM_CART":
      console.log("in remove item from cart", payload);
      return {
        ...state,
        productsInCart: state.productsInCart.filter(
          (product) => product.id !== payload
        ),
      };
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        productsInCart: state.productsInCart.map((product) =>
          product.id === payload.id
            ? { ...product, cartQty: payload.quantity }
            : product
        ),
      };
    default:
      throw new Error("Unhandled action type");
  }
}
