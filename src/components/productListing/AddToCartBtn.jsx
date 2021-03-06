import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { useStateContext } from "../../context";
import { addItemToCart } from "../../utils";
import { isInList } from "../../utils";
import { InlineLoader } from "../loader";

export function AddToCartBtn({ product }) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  let navigate = useNavigate();

  const { state, dispatch } = useStateContext();

  function handleAddToCart(product) {
    if (isInList(state.productsInCart, product.productID))
      navigate("/cart", { replace: true });
    else {
      addItemToCart(dispatch, product, setIsAddingToCart, state);
    }
  }

  return (
    <button
      className="w-100 btn-addtocart btn btn-complementary"
      disabled={product.inStock || isAddingToCart ? false : true}
      onClick={() => handleAddToCart(product)}
    >
      {!product.inStock ? (
        "OUT OF STOCK"
      ) : isAddingToCart ? (
        <span className="flex justify-center align-center">
          <InlineLoader /> "Adding"
        </span>
      ) : isInList(state.productsInCart, product.productID) ? (
        "Go to Cart"
      ) : (
        "Add to Cart"
      )}
    </button>
  );
}
