import { useStateContext } from "../../context";
import { EmptyCart } from "./EmptyCart";

export function Cart() {
  const {
    state: { productsInCart },
  } = useStateContext();

  return (
    <>
      {!productsInCart.length ? (
        <EmptyCart />
      ) : (
        productsInCart.map((product) => (
          <span key={product.id}>
            {product.name} {product.cartQty}
          </span>
        ))
      )}
    </>
  );
}
