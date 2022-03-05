/* eslint-disable eqeqeq */
import axios from "axios";

import { PRODUCTS_URL } from "./constant";

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
