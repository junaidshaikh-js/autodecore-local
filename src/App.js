import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/header";
import { ProductListingPage } from "./components/productListing";
import { Cart } from "./components";
import { getCartProducts, getWishList } from "./utils";
import { useStateContext } from "./context";

import "./style.css";
import { Wishlist } from "./components/wishlist";

function App() {
  const { dispatch } = useStateContext();

  useEffect(() => {
    getCartProducts(dispatch);
    getWishList(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </>
  );
}

export default App;
