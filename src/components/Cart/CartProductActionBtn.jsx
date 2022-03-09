import { FaMinus, FaPlus, FaTrash, FaHeart } from "react-icons/fa";
import { useState } from "react";

import { useStateContext } from "../../context";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeItemFromCart,
  saveToWishlist,
} from "../../utils";

export function CartProductActionBtn({ product }) {
  const [isUpdating, setIsUpdating] = useState(false);
  const { state, dispatch } = useStateContext();

  return (
    <section className="cart-product-actions w-100">
      <div className="product-count ml-sm flex align-center">
        <button
          className="btn decrease-product-quantity"
          onClick={() => {
            decreaseProductQuantity(dispatch, product, setIsUpdating, state);
          }}
          disabled={product.cartQty === 1 || isUpdating ? true : false}
        >
          <FaMinus />
        </button>

        <input
          type="text"
          className="product-quantity-count txt-center mx-sm"
          value={product.cartQty}
          tabIndex="-1"
          readOnly
        />

        <button
          className="btn increase-product-quantity"
          onClick={() =>
            increaseProductQuantity(dispatch, product, setIsUpdating, state)
          }
          disabled={isUpdating}
        >
          <FaPlus />
        </button>
      </div>

      <div className="pt-sm mt-sm  flex justify-between w-100">
        <button
          className="btn"
          onClick={() =>
            saveToWishlist(dispatch, product, setIsUpdating, state)
          }
          disabled={isUpdating}
        >
          <FaHeart color="gray" />{" "}
          <span className="ml-sm">Save to wishlist</span>
        </button>
        <button
          className="btn"
          onClick={() => {
            removeItemFromCart(dispatch, product, setIsUpdating, state);
          }}
          disabled={isUpdating}
        >
          <FaTrash color="gray" /> <span className="ml-sm">Remove</span>
        </button>
      </div>
    </section>
  );
}
