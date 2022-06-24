import * as React from "react"
import { useMemo } from "react";

import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import ProductGrid from "../ProductGrid/ProductGrid"

import "./Home.css"

export default function Home(props) {

  let products = props.products

  // Filter Feature
  function handleCategoryChange(event) {
    props.setCategory(event.target.value);
  }

 function getFilteredList() {
    if (!props.activeCategory) {
      return products;
    }
    return products.filter((product) => product.category === props.activeCategory);
  }

  let filteredList = useMemo(getFilteredList, [props.activeCategory, products]);

  // Search Feature
  function handleSearchChange(event) {
    props.setSearch(event.target.value);
  }

  if (props.search.length > 0) {
    filteredList = filteredList.filter((i) => {
      return i.name.toLowerCase().match(props.search.toLowerCase())
    });
  }

  return (
    <div className="home">
      <Hero />
      <input id="search-input" placeholder="Search For Products" onChange={handleSearchChange} type="text"></input>
      <div className="sub-navbar">
        <select
          name="category-list"
          id="category-list"
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="clothing">Clothing</option>
          <option value="food">Food</option>
          <option value="accessories">Accessories</option>
          <option value="tech">Tech</option>
        </select>
      </div>
      <ProductGrid 
      products={filteredList} 
      handleAddItemToCart={props.handleAddItemToCart} 
      handleRemoveItemFromCart={props.handleRemoveItemFromCart} 
      shoppingCart={props.shoppingCart} />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}