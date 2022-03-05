import { useEffect, useState } from "react";

import { useStateContext } from "../../context/state-context";
import { Filter } from "./Filter";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../../utils/server-request";

import "./product-listing.css";
import { Loader } from "../loader";

export function ProductListingPage() {
  const [isLoading, setIsloading] = useState(false);

  const {
    state: { products },
    dispatch,
  } = useStateContext();

  useEffect(() => {
    getProducts(dispatch, setIsloading);
  }, []);

  return (
    <main className="product-listing flex flex-column">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter />

          <section class="products-section p-1 my-1 mx-1 flex-grow bg-white">
            <p class="h5">Showing all products ({products.length})</p>

            <div class="product-container grid mt-2">
              {products.map((product) => {
                return <ProductCard product={product} />;
              })}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
