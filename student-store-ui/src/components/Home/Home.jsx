import * as React from "react"
import { useState, useMemo } from "react";
import ProductGrid from "../ProductGrid/ProductGrid"
import "./Home.css"

export default function Home(props) {

  let products = props.products

  const [activeCategory, setCategory] = React.useState(null)
  const [search, setSearch] = React.useState('')
  

  // Filter
  function handleCategoryChange(event) {
    setCategory(event.target.value);
  }

 function getFilteredList() {
    if (!activeCategory) {
      return products;
    }
    return products.filter((product) => product.category === activeCategory);
  }

let filteredList = useMemo(getFilteredList, [activeCategory, products]);

// Search
function handleSearchChange(event) {
  setSearch(event.target.value);
}

if (search.length > 0) {
  filteredList = filteredList.filter((i) => {
    return i.name.toLowerCase().match(search.toLowerCase())
  });
}

  return (
    <div className="home">
      <p>Home</p>
      <input placeholder="Search For a Product" onChange={handleSearchChange} type="text" name="search-input"></input>
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
      <ProductGrid products={filteredList} />
    </div>
  )
}

export function Hero() {
  return (
    <div className="hero">
      <p className="intro">Welcome!</p>
    </div>
  )
}

export function Contact() {
  return (
    <div className="contact">
      <p>I'm the contact section</p>
    </div>
  )
}

export function Footer() {
  return (
    <div className="footer">
      <p>I'm the footer</p>

    </div>
  )
}