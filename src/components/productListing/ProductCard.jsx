import { ProductHeader } from "./ProductHeader";
import { BtnIcon } from "../buttons";
import { ProductCardPrice } from "./ProductCardPrice";
import { AddToCartBtn } from "./AddToCartBtn";

export function ProductCard({ product }) {
  return (
    <article className="card card-vertical p-1 border-m product-card card-icon">
      <div className="card-image flex align-center">
        <img className="img-responsive" src={product.image} alt="product" />
      </div>

      <div className="card-body ml-1">
        <ProductHeader
          name={product.name}
          soldBy={product.soldBy}
          rating={product.rating}
        />

        <p className="txt-sm">{product.shortDesc + "..."}</p>

        <ProductCardPrice
          discountedPrice={product.discountedPrice}
          originalPrice={product.originalPrice}
          discountPercent={product.discountPercent}
        />

        <div className="card-btn-container">
          <AddToCartBtn product={product} />

          {/* <BtnComplementary cnames="w-100 btn-addtocart">
            <i className="fas fa-shopping-cart"></i>
            <span>Add to Cart</span>
          </BtnComplementary> */}

          <BtnIcon cnames={["btn", "icon-btn-primary", "btn-wishlist"]}>
            <i className="far fa-heart" title="add to wishlist"></i>
          </BtnIcon>
        </div>
      </div>
    </article>
  );
}
