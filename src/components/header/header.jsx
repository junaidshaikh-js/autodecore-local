import { FaBars } from "react-icons/fa";

import { BtnIcon } from "../buttons";
import { SearchBox } from "./SearchBox";
import { NavButtons } from "./NavButtons";

import "./header.css";

export function Header() {
  return (
    <header>
      <div className="hy-header-wrapper">
        <nav className="hy-navbar px-sm pb-sm pt-1">
          <div className="hy-navbar-links-container mr-1 mb-sm">
            <div className="align-center">
              <BtnIcon Icon={FaBars} cnames={["btn", "hy-hamburger-btn"]} />

              <div className="hy-logo">
                <a href="./index.html">
                  <span>
                    Auto<span style={{ color: "#FFDE59" }}>Decore</span>
                  </span>
                </a>
              </div>
            </div>
            <NavButtons />
          </div>
          <SearchBox />
        </nav>
      </div>
    </header>
  );
}
