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
          (product) => product.productID !== payload
        ),
      };
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        productsInCart: state.productsInCart.map((product) =>
          product.productID === payload.id
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
          (product) => product.productID !== payload
        ),
      };
    case "INCLUDE_OUT_OF_STOCK":
      return { ...state, filters: { ...state.filters, inStock: payload } };
    case "SORT_BY_PRICE":
      return {
        ...state,
        filters: { ...state.filters, sort: payload },
      };
    case "SORT_BY_RATING":
      return {
        ...state,
        filters: { ...state.filters, rating: payload },
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: payload.isChecked
            ? [...state.filters.categories, payload.value]
            : state.filters.categories.filter(
                (category) => category !== payload.value
              ),
        },
      };
    case "FILTER_BY_PRICE_RANGE":
      return {
        ...state,
        filters: {
          ...state.filters,
          price: payload,
        },
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          sort: "",
          inStock: false,
          rating: 0,
          categories: [],
          price: 2000,
        },
      };
    default:
      throw new Error("Unhandled action type");
  }
}
