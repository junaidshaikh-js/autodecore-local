import { BtnSecondary } from "../buttons";

export function NavButtons() {
  return (
    <div>
      <ul className="hy-navbar-links">
        <li className="mr-1">
          <a className="logout-btn" href="./index.html">
            <BtnSecondary buttonText="login" />
          </a>
        </li>
        <li className="mr-1">
          <a href="./wishlist.html">
            <div className="btn btn-icon btn-icon-md badge-container">
              <i
                className="far fa-heart"
                title="Wishlist"
                aria-hidden="true"
              ></i>

              <span className="badge badge-md badge-num top-right bg-complimentary">
                0
              </span>
            </div>
            <span className="visually-hidden">Wishlist</span>
          </a>
        </li>

        <li>
          <a href="./cart.html">
            <div className="btn btn-icon btn-icon-md badge-container">
              <i className="fas fa-shopping-cart" title="Shopping Cart"></i>
              <span className="badge badge-md badge-num top-right bg-complimentary">
                0
              </span>
            </div>
            <span className="visually-hidden">Cart </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
