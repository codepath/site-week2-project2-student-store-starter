import React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"
import ProductGrid from "../ProductGrid/ProductGrid"
import {useState, useEffect} from "react"
import CategoryCard from "../CategoryCard/CategoryCard"
import About from "../About/About"
import Footer from "../Footer/Footer"
import Contact from "../Contact/Contact"

export default function Home({products}) {
  const [searchedProducts, setSearchedProducts] = useState(products)
  const [catResults, setCatResults] = useState(products)
  
  // this function fileters based on user input
  const filterBySearch = (event) => {
    setSearchedProducts(products.filter((product) => product.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase())))
    setCatResults(searchedProducts)
  }

  const categories = [... new Set(products.map(product => product.category))]

  useEffect(() => {
    setSearchedProducts(products)
  }, [products])

  useEffect(() => {
    setCatResults([...searchedProducts])
  }, [searchedProducts])
  
  return (
    <div id="home">
      <Hero />
      <Search setSearchedProducts={setSearchedProducts} filterFunction={filterBySearch}/>
      <CategoryCard products={products} catOptions={categories} 
      searchedProducts={searchedProducts} setCatResults={setCatResults}/>
      <ProductGrid products={catResults}/>
      <About />
      <Footer />
      <Contact />
    </div>
  )
}
