import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Hero from "../Hero/Hero"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import About from "../About/About"
import Search from "../Search/Search"
import ProductGrid from "../ProductGrid/ProductGrid"



export default function Home(props) {
  
  
  return(
    <>
    <Navbar />
    <Hero />
    <Search products={props.products} searchValue={props.searchValue} setSearchValue={props.setSearchValue} setCatValue={props.setCatValue} setSearchCatValue={props.setSearchCatValue}/>
    <ProductGrid products={props.products} searchValue={props.searchValue} catValue={props.catValue} searchCatValue={props.searchCatValue}/>
    <About />
    <Contact />
    <Footer /> 
    </>
  )
}
