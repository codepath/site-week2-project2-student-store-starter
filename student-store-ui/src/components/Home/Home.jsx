import * as React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import Sidebar from "../Sidebar/Sidebar";


export default function Home({ products }) {
  const [searchResults, setSearchResults] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };
  const allItemSubtotal = 0

  return (
    <div className="home">
      <Navbar />
      <Sidebar cartItems={cartItems} setCartItems={setCartItems} allItemSubtotal={allItemSubtotal}/>
      <Hero />
      <Search handleSearch={handleSearch} products={products} cartItems={cartItems} setCartItems={setCartItems}/>
      <Navbar />
      
    </div>
  );
}
