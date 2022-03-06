import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "./components/header/header";
import { ProductListingPage } from "./components/productListing";
import { Cart } from "./components";
import { getCartProducts } from "./utils";
import { useStateContext } from "./context";

import "./style.css";

function App() {
  const { dispatch } = useStateContext();

  useEffect(() => {
    getCartProducts(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/products" element={<ProductListingPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
