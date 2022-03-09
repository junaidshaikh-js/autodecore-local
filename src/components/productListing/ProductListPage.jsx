import { useEffect, useState } from "react";

import { useStateContext } from "../../context/state-context";
import { Filter } from "./Filter";
import { ProductCard } from "./ProductCard";
import { getProducts } from "../../utils/server-request";
import { Loader } from "../loader";

import "./product-listing.css";

export function ProductListingPage() {
  const [isLoading, setIsloading] = useState(false);

  const {
    state: { products },
    dispatch,
  } = useStateContext();

  useEffect(() => {
    getProducts(dispatch, setIsloading);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="product-listing flex flex-column">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filter />

          <section className="products-section p-1 my-1 mx-1 flex-grow bg-white">
            <p className="h5">Showing all products ({products.length})</p>

            <div className="product-container grid mt-2">
              {products.map((product) => {
                return (
                  <ProductCard key={product.productID} product={product} />
                );
              })}
            </div>
          </section>
        </>
      )}
    </main>
  );
}
