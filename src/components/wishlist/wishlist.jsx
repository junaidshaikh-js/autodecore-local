import { useStateContext } from "../../context";

export function Wishlist() {
  const {
    state: { productsInWishList },
  } = useStateContext();

  return (
    <>
      {productsInWishList.map((product) => {
        return <span key={product.id}>{product.name}</span>;
      })}
    </>
  );
}
