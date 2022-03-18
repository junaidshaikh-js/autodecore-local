import { useState } from "react";
import { Link } from "react-router-dom";
import "./authentication.css";

export function Login() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="main-wrapper">
      <main>
        <div className="login-form-wrapper flex flex-center">
          <article className="login flex flex-column mx-1">
            <div className="login__message p-1 flex-grow">
              <h2>Login</h2>
              <p>Get access to your orders, Wishlist and Recommendations</p>
            </div>
            <div className="login__form mt-1 p-1 flex-grow">
              <form>
                <div>
                  <label for="input" className="form-label field-required">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="form-field my-sm p-sm border-sm w-100"
                    placeholder="johndoe@example.com"
                    id="input"
                    required
                  />
                </div>

                <div>
                  <label for="password" className="form-label  field-required">
                    Password
                  </label>

                  <div className="input-icon">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      className="form-field my-sm p-sm border-sm w-100"
                      placeholder="*********"
                      id="password"
                      required
                    />

                    <span
                      className="show-password-icon-container"
                      onClick={() => setIsPasswordVisible((i) => !i)}
                    >
                      {isPasswordVisible ? (
                        <i className="fas fa-eye"></i>
                      ) : (
                        <i className="fas fa-eye-slash"></i>
                      )}
                    </span>
                  </div>
                </div>

                {/* will be used for later features */}
                {/* <div className="flex justify-between align-center mt-2">
                  <span>
                    <input className="mr-sm" type="checkbox" id="remember-me" />
                    <label for="remember-me"> Remember me</label>
                  </span>

                  <a href="#" className="primary-link">
                    Forgot Password?
                  </a>
                </div> */}

                <button
                  className="btn login-submit mt-1 complementary-btn w-100"
                  type="submit"
                >
                  Login
                </button>
              </form>

              <div className="txt-center mt-1 primary-link">
                <Link to="/signup">
                  Create new account{" "}
                  <i className="fas fa-chevron-circle-right"></i>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
