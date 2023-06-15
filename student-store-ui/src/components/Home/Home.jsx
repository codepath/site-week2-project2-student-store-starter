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

export default function Home({ products, setProducts }) {
  const [activeCategory, setActiveCategory] = useState("All Categories");
  // const [searchResults, setSearchResults] = useState (products);
  const [searchResults, setSearchResults] = useState ("");

  // console.log("Home products", products)
  // console.log("Home component searchResults", searchResults)

  function filterCategory() {
    if (activeCategory === "All Categories") {
      return products;
    } else {
      console.log("triggering else")
      return products.filter(
        (product) => product.category.toLowerCase() === activeCategory.toLowerCase()
      );
    }
  }

  const filteredSearchProducts = products?.filter((product) => {
    // console.log(product.name.toLowerCase() === searchResults.toLowerCase())
    return product.name.toLowerCase().includes(searchResults.toLowerCase())
  })
  console.log("Home component filtered search", filteredSearchProducts)
  
  const filteredProducts = filterCategory();
  // console.log("Home component consolelog", products, searchResults, activeCategory)
  // console.log("Home component searchResults",  searchResults)

  return (
    <>
      <Hero />
      <Subnavbar 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
        products = {products} 
        setProducts = {setProducts}
        setSearchResults = {setSearchResults} 
        />
      
      <div className="home">
        <div className="home-content" id="Buy">
          <h2 className="home-title">Best Selling Products</h2>
          <ProductGrid products={filteredSearchProducts} />
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}
