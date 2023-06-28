import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import SubNavbar from "../SubNavbar/SubNavbar"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import "./Home.css"

export default function Home({products, searchValue, handleSearch, activeCategory, setActiveCategory, handleAddItemToCart, handleRemoveItemFromCart, getQuantityOfItemInCart}) {

const displayCategoryProducts = 
activeCategory && 
  activeCategory.toLowerCase() !== "all categories" ? 
  products.filter((product) => {
    return product.category === activeCategory.toLowerCase()
}): products

const displayProducts = 
  products = displayCategoryProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchValue.toLowerCase())})

  return (
    <div className="home" id="Home">
      <Navbar />
      <Hero />
      <About />
      <SubNavbar handleSearch={handleSearch}
       searchValue={searchValue} 
       activeCategory={activeCategory}
       setActiveCategory={setActiveCategory}
       />
      <ProductGrid products={displayProducts}
       handleAddItemToCart={handleAddItemToCart}
       handleRemoveItemFromCart={handleRemoveItemFromCart}
       getQuantityOfItemInCart={getQuantityOfItemInCart}
        />
      <Contact />
      <Footer />
    </div>
  )
}
