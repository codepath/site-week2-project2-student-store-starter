import * as React from "react";
import "./SubNavBar.css";
import { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import Home from "../Home/Home";
//import { handleSubmit, handleChange, searchTerm } from "react";
import { Outlet } from "react-router-dom";

export default function SubNavBar({
  searchTerm,
  setSearchTerm,
  category,
  setCategory,
}) {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  function handleCategoryClick(event) {
    const newCategory = event.target.innerText;
    setCategory(newCategory);
  }

  return (
    <nav class="sub-navbar">
      <div class="content">
        <div class="row">
          <div class="search-bar">


            <input
              type="text"
              name="search"
              onChange={handleChange}
              placeholder="Search"
              value={searchTerm}
            />

            <i class="material-icons">search</i>
          </div>
          <div class="links">
            <span class="help">
              <i class="material-icons">help</i>Help
            </span>
            <div class="cart">
              <a href="/">
                My Cart<i class="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="hamburger-menu">
            <i class="material-icons">menu</i>
          </div>
          <ul class="category-menu open">
            <li className={category == "All Categories" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>All Categories</button>
            </li>
            <li className={category == "Clothing" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Clothing</button>
            </li>
            <li className={category == "Food" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Food</button>
            </li>
            <li className={category == "Accessories" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Accessories</button>
            </li>
            <li className={category == "Tech" ? "is-active" : ""}>
              <button onClick={handleCategoryClick}>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
