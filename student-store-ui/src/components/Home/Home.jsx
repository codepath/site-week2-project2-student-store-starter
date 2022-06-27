import * as React from "react"
import Hero from "../Hero/Hero"
import SearchBar from "../SearchBar/SearchBar"
import Category from "../Category/Category"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Footer from "../Footer/Footer"

import "./Home.css"

export default function Home({ products, categories, setProducts, allProducts, onAddClickHandler, onSubtractClickHandler, shoppingCart }) {
  return (
    <div className="home" id="home">
      <Hero />
      <SearchBar allProducts={ allProducts } setProducts={ setProducts } />
      <div className="categories">
        { categories.map((category, idx) => <Category name={ category } key={`category${idx}`} setProducts={ setProducts }
        allProducts = { allProducts } />) }
      </div>
      <ProductGrid products={ products } onAddClickHandler={ onAddClickHandler } onSubtractClickHandler={ onSubtractClickHandler }
      shoppingCart={ shoppingCart } />
      <About />
      <Footer />
    </div>
  )
}
