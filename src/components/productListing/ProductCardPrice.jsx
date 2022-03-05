import React from "react";

export function ProductCardPrice({
  discountedPrice,
  originalPrice,
  discountPercent,
}) {
  return (
    <div className="price-container mb-1">
      <p className="txt-md mr-sm txt-bold">₹{discountedPrice}</p>
      <span className="txt-strike-through txt-secondary mr-sm">
        ₹{originalPrice}
      </span>
      <span className="discount-percent">{discountPercent}% off</span>
    </div>
  );
}
