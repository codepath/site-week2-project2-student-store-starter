import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
export default function Home({products, handleAddItemsToCart, handleRemoveItemToCart}) {
  return (
    <div className="home">
      <div className="overlay">
        <div className="banner">
          <img src="https://i.pinimg.com/originals/44/3b/44/443b44dfcaf450db93d35c2a5ca5d5c3.gif"></img>
        </div>
      </div>  
      <ProductGrid products={products} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart= {handleRemoveItemToCart}/>
      <About />
      <Contact />
      <Footer />
      {/* <Hero />
      <ProductGrid products={products} handleAddItemsToCart ={handleAddItemsToCart} handleRemoveItemToCart= {handleRemoveItemToCart}/>
          <About />
          <Contact />
          <Footer /> */}
    </div>
  )
}
