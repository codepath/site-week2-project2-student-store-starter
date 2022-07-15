import "./Home.css"

import * as React from "react"

import About from "../About/About"
import CategoryFilter from "../Categories/Categories"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import Hero from "../Hero/Hero"
import ProductGrid from "../Product/Grid/ProductGrid"
import SearchBar from "../Search/Search"


export default function Home(props) {
    return (
      <div className = "home">
        <Hero/>
        <About/>
        <SearchBar
            setSearchInput = {props.setSearchInput} 
            handleOnSearchChange = {props.handleOnSearchChange}
            handleCategory = {props.handleCategory}
        />
        <ProductGrid
            products = {props.products}
            shoppingCart = {props.shoppingCart} 
            handleAddItemToCart = {props.handleAddItemToCart} 
            handleRemoveItemFromCart = {props.handleRemoveItemFromCart}
        />
        <Contact/>
        <Footer/>
      </div>
    )
}