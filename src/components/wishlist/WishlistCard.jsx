import { ProductCardPrice } from "../productListing/ProductCardPrice";
import { ProductHeader } from "../productListing/ProductHeader";

export function WishlistCard({ product }) {
  return (
    <>
      <div className="card-image">
        <img className="img-responsive" src={product.image} alt="product" />
      </div>

      <div className="card-body mx-2">
        <ProductHeader
          name={product.name}
          soldBy={product.soldBy}
          rating={product.rating}
        />

        <ProductCardPrice
          originalPrice={product.originalPrice}
          discountPercent={product.discountPercent}
          discountedPrice={product.discountedPrice}
          cnames="flex align-center"
        />
      </div>

      <button className="btn wishlist-remove-btn">
        <i className="fas fa-trash"></i>
      </button>
    </>
  );
}
