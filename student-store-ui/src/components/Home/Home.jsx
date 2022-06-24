import * as React from "react"
import "./Home.css"

import Hero from "../Hero/Hero"
import ProductSettings from "../ProductSettings/ProductSettings"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"

export default function Home(props) {
  const [category, setCategory] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div id="home" className="home">
      <Hero/>
      <ProductSettings searchQuery={searchQuery} setSearchQuery={setSearchQuery} setCategory={setCategory}/>
      <ProductGrid category={category} 
        searchQuery={searchQuery} 
        products={props.products} 
        shoppingCart={props.shoppingCart} 
        setShoppingCart={props.setShoppingCart}
        handleAddItemToCart={props.handleAddItemToCart}
        handleRemoveItemFromCart={props.handleRemoveItemFromCart}/>
      <About/>
      <Contact/>
    </div>
  )
}