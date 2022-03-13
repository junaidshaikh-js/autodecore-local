/* eslint-disable eqeqeq */
import axios from "axios";

import { PRODUCTS_URL, CART_URL, WISHLIST_URL } from "./constant";
import { getId, isInList } from "./helper-function";

export const getProducts = async (dispatch) => {
  try {
    const res = await axios.get(PRODUCTS_URL);

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: "SET_PRODUCTS", payload: res.data });
    }
  } catch (error) {
    console.log(error);
    throw new Error("Products can not be loaded");
  }
};

export const getCartProducts = async (dispatch) => {
  try {
    const res = await axios.get(CART_URL);

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: "SET_CART", payload: res.data });
    }
  } catch (error) {
    throw new Error("Products can not be loaded");
  }
};

export const getWishList = async (dispatch) => {
  try {
    const res = await axios.get(WISHLIST_URL);

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: "SET_WISHLIST", payload: res.data });
    }
  } catch (error) {
    throw new Error("Products can not be loaded");
  }
};

export const addItemToCart = async (
  dispatch,
  product,
  setIsUpdating,
  state
) => {
  try {
    setIsUpdating(true);
    const res = await axios({
      method: "post",
      url: CART_URL,
      data: {
        ...product,
        cartQty: 1,
      },
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({
        type: "SET_CART",
        payload: [...state.productsInCart, res.data],
      });
    }

    setIsUpdating(false);
  } catch (error) {
    throw new Error("failed! try again");
  }
};

export async function decreaseProductQuantity(
  dispatch,
  product,
  setIsUpdating,
  state
) {
  const quantity = product.cartQty - 1;

  updateCartQuantity(dispatch, product, quantity, setIsUpdating, state);
}

export async function increaseProductQuantity(
  dispatch,
  product,
  setIsUpdating,
  state
) {
  if (product.cartQty >= 3) {
    alert("can not add more than 3");
  } else {
    const quantity = product.cartQty + 1;

    updateCartQuantity(dispatch, product, quantity, setIsUpdating, state);
  }
}

export async function removeItemFromCart(
  dispatch,
  product,
  setIsUpdating,
  state
) {
  setIsUpdating(true);
  try {
    const res = await axios({
      method: "delete",
      url: `${CART_URL}/${getId(state.productsInCart, product.productID)}`,
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: res.data.productID });
    }

    setIsUpdating(false);
  } catch (error) {
    throw new Error("Item can not be removed");
  }
}

export async function updateCartQuantity(
  dispatch,
  product,
  quantity,
  setIsUpdating,
  state
) {
  setIsUpdating(true);
  try {
    const res = await axios({
      method: "put",
      url: `${CART_URL}/${getId(state.productsInCart, product.productID)}`,
      data: {
        cartQty: quantity,
      },
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({
        type: "UPDATE_CART_QUANTITY",
        payload: { id: res.data.productID, quantity: quantity },
      });
    }

    setIsUpdating(false);
  } catch (error) {
    throw new Error("Cart quantity can not be updated");
  }
}

export async function toggleWishList(dispatch, product, setIsUpdating, state) {
  setIsUpdating(true);
  if (!isInList(state.productsInWishList, product.productID)) {
    try {
      const res = await axios({
        method: "post",
        url: WISHLIST_URL,
        data: {
          ...product,
          inWishList: true,
        },
      });

      if ((res.status = "200" || res.status == "201")) {
        dispatch({ type: "ADD_TO_WISHLIST", payload: res.data });
      }

      setIsUpdating(false);
    } catch (error) {
      throw new Error("can not be added to wishlist");
    }
  } else {
    removeItemFromWishlist(dispatch, product, setIsUpdating, state);
  }
}

export async function removeItemFromWishlist(
  dispatch,
  product,
  setIsUpdating,
  state
) {
  try {
    const res = await axios({
      method: "delete",
      url: `${WISHLIST_URL}/${getId(
        state.productsInWishList,
        product.productID
      )}`,
    });

    if ((res.status = "200" || res.status == "201")) {
      dispatch({
        type: "REMOVE_ITEM_FROM_WISHLIST",
        payload: res.data.productID,
      });
    }

    setIsUpdating(false);
  } catch (error) {
    setIsUpdating(false);
    throw new Error("can not be deleted from wishlist");
  }
}

export async function saveToWishlist(dispatch, product, setIsUpdating, state) {
  try {
    removeItemFromCart(dispatch, product, setIsUpdating, state);

    toggleWishList(dispatch, product, setIsUpdating, state);
  } catch (error) {
    throw new Error("Item can not be saved to wishlist");
  }
}

export async function moveToCart(dispatch, product, setIsUpdating, state) {
  try {
    await removeItemFromWishlist(dispatch, product, setIsUpdating, state);

    await addItemToCart(dispatch, product, setIsUpdating, state);
  } catch (error) {
    throw new Error("Can not be added to cart");
  }
}
