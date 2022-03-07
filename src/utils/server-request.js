/* eslint-disable eqeqeq */
import axios from "axios";

import { PRODUCTS_URL, CART_URL, WISHLIST_URL } from "./constant";

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

export const addItemToCart = async (dispatch, product, state, isLoading) => {
  try {
    isLoading(true);
    const res = await axios({
      method: "post",
      url: CART_URL,
      data: {
        ...product,
        cartQty: 1,
      },
    });

    console.log(res.status);
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
        payload: { id: product.id, quantity: quantity },
      });
    }

    setIsUpdating(false);
  } catch (error) {
    throw new Error("Cart quantity can not be updated");
  }
}

export async function addToWishlist(dispatch, product, setIsUpdating) {
  setIsUpdating(true);
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

      updateProducts(dispatch, product, res.data.inWishList);
    }

    setIsUpdating(true);
  } catch (error) {
    throw new Error("can not be added to wishlist");
  }
}

async function updateProducts(dispatch, product, wishListStatus) {
  try {
    const res = await axios({
      method: "put",
      url: `${PRODUCTS_URL}/${product.id}`,
      data: {
        inWishList: wishListStatus,
      },
    });

    if (res.status == 200 || res.status == 201) {
      dispatch({
        type: "UPDATE_PRODUCTS",
        payload: { id: product.id, wishListStatus: wishListStatus },
      });
    }
  } catch (error) {
    throw new Error("Products can not be loaded");
  }
}
