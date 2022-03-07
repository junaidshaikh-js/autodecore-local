import { FaMinus, FaPlus, FaTrash, FaHeart } from "react-icons/fa";
import { useStateContext } from "../../context";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeItemFromCart,
} from "../../utils";

export function CartProductActionBtn({ product }) {
  const { state, dispatch } = useStateContext();

  return (
    <section className="cart-product-actions">
      <div className="product-count flex align-center">
        <button
          className="btn decrease-product-quantity"
          onClick={() => {
            decreaseProductQuantity(dispatch, product);
          }}
          disabled={product.cartQty === 1 ? true : false}
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
          onClick={() => increaseProductQuantity(dispatch, product)}
        >
          <FaPlus />
        </button>
      </div>

      <div className="pt-1 mt-sm mx-1 flex justify-between w-100">
        <button className="btn">
          <FaHeart color="gray" />{" "}
          <span className="ml-sm">Save to wishlist</span>
        </button>
        <button
          className="btn"
          onClick={() => {
            removeItemFromCart(dispatch, product);
          }}
        >
          <FaTrash color="gray" /> <span className="ml-sm">Remove</span>
        </button>
      </div>
    </section>
  );
}
