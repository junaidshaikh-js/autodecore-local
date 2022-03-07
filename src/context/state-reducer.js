export function stateReducer(state, { type, payload }) {
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    case "SET_CART":
      return { ...state, productsInCart: payload };
    case "SET_WISHLIST":
      return { ...state, productsInWishList: payload };
    case "REMOVE_ITEM_FROM_CART":
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
    case "ADD_TO_WISHLIST":
      return {
        ...state,
        productsInWishList: [...state.productsInWishList, payload],
      };
    case "REMOVE_ITEM_FROM_WISHLIST":
      return {
        ...state,
        productsInWishList: state.productsInWishList.filter(
          (product) => product.id !== payload
        ),
      };
    default:
      throw new Error("Unhandled action type");
  }
}
