import * as React from "react"
import { useState, useMemo } from "react";

import Hero from "./Hero";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import ProductGrid from "../ProductGrid/ProductGrid"
import Sidebar from "../Sidebar/Sidebar";
import "./Home.css"

export default function Home(props) {

  let products = props.products
  
//   const addToCart = (el) => {
//     setCart([...cart, el]);
// };

// const cartItems = cart.map((el) => (
//   <div key={el.id}>
//     {`${el.name}: $${el.price}`}
//     <input type="submit" value="remove" onClick={() => removeFromCart(el)} />
//   </div>
// ));

// const removeFromCart = (el) => {
//   let hardCopy = [...cart];
//   hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
//   setCart(hardCopy);
// };

  // Sidebar
  // let [sidebarOpen, setSidebarOpen] = useState(false);

  // const openHandler = () => {
  //   if (!sidebarOpen) {
  //     setSidebarOpen(true)
  //   } else {
  //     setSidebarOpen(false)
  //   }
  // }

  // const closeHandler = () => {
  //   setSidebarOpen(false)
  // }

  // let sidebar;
  // if (sidebarOpen) {
  //   sidebar = <Sidebar shoppingCart={cart} close={closeHandler} sidebar={"sidebar"}/>
  // }

  // Filter
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

// Search
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

      {/* <button onClick={openHandler}>Open Shopping Cart</button>
      {sidebar} */}
      <input id="search-input" placeholder="Search For a Product" onChange={handleSearchChange} type="text"></input>
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
      <About />
      <Contact />
      <Footer />
    </div>
  )
}