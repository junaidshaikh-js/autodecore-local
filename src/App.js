import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/header";
import { ProductListingPage } from "./components/productListing";
import { Cart } from "./components";
import { getCartProducts, getProducts, getWishList } from "./utils";
import { useStateContext } from "./context";

import "./style.css";
import { Wishlist } from "./components/wishlist";
import { Home } from "./components/home";
import { Login, Signup } from "./components/authentication";

function App() {
  const { dispatch } = useStateContext();

  useEffect(() => {
    getProducts(dispatch);
    getCartProducts(dispatch);
    getWishList(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
