import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="main-heading">
      <nav>
        <div className=" main-nav flex">
          <a href="#" className="company-logo1">
            <img src="\images\Logo-digital.webp" alt="compny logo" />
          </a>
          <h2 className="d-litt">D'LittMan</h2>
          <div className="nav-links">
            <ul className="flex">
              <li>
                <img
                  className="searchbar"
                  src="\images\searchbar.svg"
                  alt="search"
                />
              </li>
              <li>
                <img className="searchbar" src="\images\gear-solid.svg" />
              </li>
              <li>
                <img className="searchbar" src="\images\bell-regular.svg" />
              </li>
              <li>
                {" "}
                <img
                  style={{ backgroundColor: "red", color: "red" }}
                  className="searchbar"
                  src="\images\Letter_A_gold_35061.png"
                />
              </li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
