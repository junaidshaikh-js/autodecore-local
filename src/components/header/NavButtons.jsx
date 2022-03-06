import { Link } from "react-router-dom";

import { useStateContext } from "../../context/state-context";
import { BtnSecondary } from "../buttons";

export function NavButtons() {
  const {
    state: { productsInCart, productsInWishList },
  } = useStateContext();

  return (
    <div>
      <ul className="hy-navbar-links">
        <li className="mr-1">
          <a className="logout-btn" href="#">
            <BtnSecondary buttonText="login" />
          </a>
        </li>
        <li className="mr-1">
          <a href="#">
            <div className="btn btn-icon btn-icon-md badge-container">
              <i
                className="far fa-heart"
                title="Wishlist"
                aria-hidden="true"
              ></i>

              <span className="badge badge-md badge-num top-right bg-complimentary">
                {productsInWishList.length}
              </span>
            </div>
            <span className="visually-hidden">Wishlist</span>
          </a>
        </li>

        <li>
          <Link to="/cart">
            <div className="btn btn-icon btn-icon-md badge-container">
              <i className="fas fa-shopping-cart" title="Shopping Cart"></i>
              {productsInCart.length ? (
                <span className="badge badge-md badge-num top-right bg-complimentary">
                  {productsInCart.length}
                </span>
              ) : null}
            </div>
            <span className="visually-hidden">Cart </span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
