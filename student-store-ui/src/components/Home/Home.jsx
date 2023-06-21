import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";
import Subnavbar from "../Subnavbar/Subnavbar";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home({ products, setProducts, handleAddItemToCart, handleRemoveItemToCart, shoppingCart, setShoppingCart}) {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  const [searchResults, setSearchResults] = useState("");

  function filterCategory() {
    if (activeCategory === "All Categories") {
      return products;
    } else {

    }
  }

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
          <ProductGrid products={filteredProducts} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemToCart = {handleRemoveItemToCart} shoppingCart = {shoppingCart} setShoppingCart = {setShoppingCart}/>
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}
