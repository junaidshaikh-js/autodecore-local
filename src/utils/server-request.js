/* eslint-disable eqeqeq */
import axios from "axios";

import { PRODUCTS_URL, CART_URL, WISHLIST_URL } from "./constant";
import { isInList } from "./helper-function";

export const getProducts = async (dispatch, setLoading) => {
  try {
    setLoading(true);
    const res = await axios.get(PRODUCTS_URL);

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: "SET_PRODUCTS", payload: res.data });
    }

    setLoading(false);
  } catch (error) {
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

export const addItemToCart = async (dispatch, product, state, isLoading) => {
  try {
    isLoading(true);
    const res = await axios({
      method: "post",
      url: CART_URL,
      data: {
        ...product,
        product_id: product.id,
        cartQty: 1,
      },
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({
        type: "SET_CART",
        payload: [...state.productsInCart, res.data],
      });
    }

    isLoading(false);
  } catch (error) {
    throw new Error("failed! try again");
  }
};

export async function decreaseProductQuantity(
  dispatch,
  product,
  setIsUpdating
) {
  const quantity = product.cartQty - 1;

  updateCartQuantity(dispatch, product, quantity, setIsUpdating);
}

export async function increaseProductQuantity(
  dispatch,
  product,
  setIsUpdating
) {
  if (product.cartQty >= 3) {
    alert("can not add more than 3");
  } else {
    const quantity = product.cartQty + 1;

    updateCartQuantity(dispatch, product, quantity, setIsUpdating);
  }
}

export async function removeItemFromCart(dispatch, product, setIsUpdating) {
  setIsUpdating(true);
  try {
    const res = await axios({
      method: "delete",
      url: `${CART_URL}/${product.id}`,
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({ type: "REMOVE_ITEM_FROM_CART", payload: res.data.id });
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
  setIsUpdating
) {
  setIsUpdating(true);
  try {
    const res = await axios({
      method: "put",
      url: `${CART_URL}/${product.id}`,
      data: {
        cartQty: quantity,
      },
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({
        type: "UPDATE_CART_QUANTITY",
        payload: { id: res.data.id, quantity: quantity },
      });
    }

    setIsUpdating(false);
  } catch (error) {
    throw new Error("Cart quantity can not be updated");
  }
}

export async function toggleWishList(dispatch, product, setIsUpdating, state) {
  setIsUpdating(true);
  if (!isInList(state.productsInWishList, product.id)) {
    try {
      const res = await axios({
        method: "post",
        url: WISHLIST_URL,
        data: {
          ...product,
          product_id: product.id,
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
  console.log(product.id);
  try {
    const res = await axios({
      method: "delete",
      url: `${WISHLIST_URL}/${
        state.productsInWishList.find(
          (item) => item.product_id == (product.product_id ?? product.id)
        )["id"]
      }`,
    });

    if ((res.status = "200" || res.status == "201")) {
      dispatch({
        type: "REMOVE_ITEM_FROM_WISHLIST",
        payload: res.data.product_id,
      });
    }

    setIsUpdating(false);
  } catch (error) {
    setIsUpdating(false);
    throw new Error("can not be deleted to wishlist");
  }
}
