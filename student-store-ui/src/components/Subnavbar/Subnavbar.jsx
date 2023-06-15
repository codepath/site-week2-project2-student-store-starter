import * as React from "react";
import "./Subnavbar.css";

export default function Subnavbar() {
  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value=""
            ></input>
            <i className="material-icons">search</i>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>Help
            </span>
            <div className="cart">
              <a href="/">
                My Cart<i className="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <ul className="category-menu open">
            <li className="is-active">
              <button>All Categories</button>
            </li>
            <li className="">
              <button onClick={() => handleCategory()}>Clothing</button>
            </li>
            <li className="">
              <button>Food</button>
            </li>
            <li className="">
              <button>Accessories</button>
            </li>
            <li className="">
              <button>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
