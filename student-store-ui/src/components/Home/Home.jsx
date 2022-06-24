import * as React from "react"
import Hero from "../Hero/Hero"
import SearchBar from "../SearchBar/SearchBar"
import Category from "../Category/Category"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

import "./Home.css"

export default function Home({ products, categories, setActiveCategory, activeCategory, setProducts, allProducts }) {
  return (
    <div className="home" id="home">
      <Hero />
      <SearchBar />
      <div className="categories">
        { categories.map((category, idx) => <Category name={ category } key={`category${idx}`} setActiveCategory={ setActiveCategory }
        activeCategory={ activeCategory } setProducts={ setProducts } products={ products } 
        allProducts = { allProducts } />) }
      </div>
      <ProductGrid products={ products } />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
