import { useStateContext } from "../../context";
import { WishUser } from "./WishUser";
import { WishlistContainer } from "./WishlistContainer";

import "./wishlist.css";

export function Wishlist() {
  const {
    state: { productsInWishList },
  } = useStateContext();

  return (
    <main className="wishlist-main flex flex-column">
      <WishUser />
      <WishlistContainer />
    </main>
  );
}
