import { useStateContext } from "../../context";
import { EmptyWishlist } from "./EmptyWishlist";
import { WishlistCard } from "./WishlistCard";

export function WishlistContainer() {
  const { state, dispatch } = useStateContext();

  return (
    <section className="wishlist-container bg-white m-1 p-1 flex-grow">
      {/* {state.productsInWishList.length ? (
        <header class="pl-2 border-bottom">
          <p class="txt-md">My Wishlist ({state.productsInWishList.length})</p>
        </header>
      ) : (
        <EmptyWishlist />
      )} */}

      <header className=" border-bottom">
        <h1 className="h3">My Wishlist ({state.productsInWishList.length})</h1>
      </header>

      {state.productsInWishList.map((product) => {
        return (
          <article
            className="card card-horizontal p-1 border-m product-card"
            key={product.id}
          >
            <WishlistCard product={product} />
          </article>
        );
      })}
    </section>
  );
}
