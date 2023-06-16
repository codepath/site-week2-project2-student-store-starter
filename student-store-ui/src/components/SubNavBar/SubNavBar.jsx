import * as React from "react";
import "./SubNavBar.css";
import { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import Home from "../Home/Home";
//import { handleSubmit, handleChange, searchTerm } from "react";

export default function SubNavBar({searchTerm, setSearchTerm, category, setCategory }) {

  

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  function handleCategoryClick(event){
    const newCategory = event.target.innerText;
    setCategory(newCategory)
  }

  return (
    <nav className="sub-navbar">
      <div className="cont">
        <div className="row">
          <form className="form-input" onSubmit={handleSubmit}>
            <label className="product-label" htmlFor="search"></label>
            <input
              className="search-bar"
              type="text"
              name="search"
              onChange={handleChange}
              value={searchTerm}
              placeholder="Search"
            />
            <button className="button-bar">🔍</button>
          </form>
        </div>
        
        <div className="row">
          <div className="hamburger-menu">
            <i> button </i>
          </div>
          <ul>
            <li className={category == "All Categories" ? "is-active" : ""}>
              <button onClick={handleCategoryClick} >All Categories</button>
              </li>
            <li className={category == "Clothing" ? "is-active" : ""}><button onClick={handleCategoryClick}>Clothing</button></li>
            <li className={category == "Food" ? "is-active" : ""}><button onClick={handleCategoryClick}>Food</button></li>
            <li className={category == "Accessories" ? "is-active" : ""}><button onClick={handleCategoryClick}>Accessories</button></li>
            <li className={category == "Tech" ? "is-active" : ""}><button onClick={handleCategoryClick}>Tech</button></li>
          </ul>
        </div>

        
      </div>
    </nav>
  );
}
