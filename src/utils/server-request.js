/* eslint-disable eqeqeq */
import axios from "axios";

import { PRODUCTS_URL, CART_URL } from "./constant";

export const getProducts = async (dispatch, setLoading) => {
  try {
    setLoading(true);
    const res = await axios.get(PRODUCTS_URL);

    if (res.status == 200) {
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

    if (res.status == 200) {
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

    dispatch({
      type: "SET_CART",
      payload: [...state.productsInCart, res.data],
    });

    isLoading(false);
  } catch (error) {
    throw new Error("failed! try again");
  }
};
