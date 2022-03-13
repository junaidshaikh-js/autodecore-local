import { useStateContext } from "../../context/state-context";
import { Filter } from "./Filter";
import { ProductCard } from "./ProductCard";
import { getFilteredProducts } from "../../utils";

import "./product-listing.css";

export function ProductListingPage() {
  const {
    state: { products, filters },
  } = useStateContext();

  const filteredProducts = getFilteredProducts(products, filters);

  return (
    <main className="product-listing flex flex-column">
      <>
        <Filter />

        <section className="products-section p-1 my-1 mx-1 flex-grow bg-white">
          <p className="h5">Showing all products ({filteredProducts.length})</p>

          <div className="product-container grid mt-2">
            {filteredProducts.map((product) => {
              return <ProductCard key={product.productID} product={product} />;
            })}
          </div>
        </section>
      </>
    </main>
  );
}
