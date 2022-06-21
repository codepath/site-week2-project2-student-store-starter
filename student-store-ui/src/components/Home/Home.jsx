import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Searchbar from "../Searchbar/Searchbar"
import About from "../About/About"

export default function Home(props) {
  return (
    <div className="home">
      <Hero />
      <Searchbar />
      <ProductGrid products={props.products} handleAddItemToCart={props.handleAddItemToCart} 
      handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
      <About />
      <Contact />
      <Footer />

    </div>
  )
}

