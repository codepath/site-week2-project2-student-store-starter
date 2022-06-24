import * as React from "react"
import ProductsGrid from "./ProductsGrid/ProductsGrid"
import HeroBanner from "./HeroBanner/HeroBanner"
import Footer from "../Footer/Footer"
import "./Home.css"

export default function Home({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart, query, setQuery, handleOnSearch, getQuantity, setCategory}) {
  return (
    <section>
      <HeroBanner/>
      <ProductsGrid 
      getQuantity = {getQuantity}
      products={products} 
      handleAddItemToCart = {handleAddItemToCart}
      handleRemoveItemFromCart = {handleRemoveItemFromCart}
      query = {query}
      setQuery = {setQuery}
      shoppingCart = {shoppingCart} 
      handleOnSearch = {handleOnSearch}
      setCategory = {setCategory}
      />
      
    </section>
    
  )
}
