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
  const [searchResults, setSearchResults] = useState ("");

  function filterCategory() {
    if (activeCategory === "All Categories") {
      return products;
    } else {
      console.log("triggering else")
      // return products.filter(
      //   (product) => product.category.toLowerCase() === activeCategory.toLowerCase()
      // );
    }
  }


  // filter for search term
    // see filteredSearchProducts
  // filter for category
    // utilize a button to set activeCat
    // apply a filter on previously filteredSearchProducts based on matching category
  // return double filtered product aray

  // const filteredSearchProducts = products?.filter((product) => {
  //   return product.name.toLowerCase().includes(searchResults.toLowerCase())
  // })

  function filterFunction(){
  const filteredSearchProducts = products?.filter((product) => {
    return product.name.toLowerCase().includes(searchResults.toLowerCase())
  })
  console.log("Home component filtered search", filteredSearchProducts)

  let filteredByCategory = []
  if (activeCategory === "All Categories") {
    filteredByCategory = filteredSearchProducts
  } else {

    filteredByCategory = filteredSearchProducts?.filter((product) => {
      return product.category.toLowerCase() === activeCategory.toLowerCase()
    })
  }
    
  console.log("filteredByCat",filteredByCategory)

  return filteredByCategory

}

const filteredProducts = filterFunction()
console.log(filteredProducts)

  console.log("activeCat", activeCategory)

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
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
      <About />
      <Contact />
      <Footer />
    </>
  );
}
