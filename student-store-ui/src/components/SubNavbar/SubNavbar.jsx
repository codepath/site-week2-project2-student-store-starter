import * as React from "react";
import "./SubNavbar.css";

import { useState } from "react";

export default function SubNavbar({ items, setItems }) {
  const [formData, setFormData] = useState({
    productName: '',
  });

  function handleInput(event){
    setFormData({
        ...formData,
        [event.target.name] : event.target.value
        
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    setItems([...items, formData])
  }

  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <form>
              {/* <label htmlFor="Search">search</label> */}
              <input
                type="text"
                name="productName"
                placeholder="Search"
                onChange={handleInput}
                value={formData.productName}
              />
              <button onClick={handleSubmit}>
                <i className="material-icons">search</i>
              </button>
              
            </form>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>
              Help
            </span>
            <div className="cart">
              <a href="/">
                My Cart
                <i className="material-icons">shopping_cart</i>
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
              <button>Clothing</button>
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
