import * as React from "react"
import Hero from "../Hero/Hero"
import SearchBar from "../SearchBar/SearchBar"
import Category from "../Category/Category"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Footer from "../Footer/Footer"

import "./Home.css"

export default function Home({ products, categories, setProducts, allProducts, onAddClickHandler, onSubtractClickHandler, shoppingCart }) {
  const [activeCategory, setActiveCategory] = React.useState('All categories')
  return (
    <div className="home container" id="home">
      <Hero />
      <SearchBar onChange={(searchText) => {
         setProducts(
          allProducts.filter((product) =>
              product.name
                  .toLowerCase()
                  .includes(searchText)
          )
      );
      }} />
      <div className="categories container mb-4 mt-4">
        { categories.map((category, idx) => <Category name={ category } key={`category${idx}`} setProducts={ setProducts }
        allProducts = { allProducts } activeCategory={ activeCategory } setActiveCategory={ setActiveCategory } />) }
      </div>
      <ProductGrid products={ products } onAddClickHandler={ onAddClickHandler } onSubtractClickHandler={ onSubtractClickHandler }
      shoppingCart={ shoppingCart } />
      <About />
      <Footer />
    </div>
  )
}
