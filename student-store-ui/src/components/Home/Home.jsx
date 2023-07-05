import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import Subnavbar from "../Subnavbar/Subnavbar";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import {useState } from "react"
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home({ products, setProducts, shoppingCart, setShoppingCart, handleAddQuantity, handleSubstractQuantity, getQuantity}) {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchResults, setSearchResults] = useState("");

  function filterFunction() {
    const filteredSearchProducts = products?.filter((product) => {
      return product.name.toLowerCase().includes(searchResults.toLowerCase())
    })

    let filteredByCategory = []
    if (activeCategory === "All Categories") {
      filteredByCategory = filteredSearchProducts
    } else {

      filteredByCategory = filteredSearchProducts?.filter((product) => {
        return product.category.toLowerCase() === activeCategory.toLowerCase()
      })
    }
    return filteredByCategory
  }
  const filteredProducts = filterFunction()
  return (
    <>
      <Hero />
      <Subnavbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        products={products}
        setProducts={setProducts}
        setSearchResults={setSearchResults}
      />
      <div className="home">
        <div className="home-content" id="Buy">
          <h2 className="home-title">Best Selling Products</h2>
          <ProductGrid products={filteredProducts} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart} handleAddQuantity = {handleAddQuantity} handleSubstractQuantity = {handleSubstractQuantity} getQuantity = {getQuantity}/>
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}
