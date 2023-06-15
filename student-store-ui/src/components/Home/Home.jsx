import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"
import ProductGrid from "../ProductGrid/ProductGrid"
import {useState, useEffect} from "react"

export default function Home({products}) {
  const [searchedProducts, setSearchedProducts] = useState(products)
  useEffect(() => {setSearchedProducts(products)}, [products])
  return (
    <div className="home">
      <Hero />
      <Search products={products} searchedProducts={searchedProducts} setSearchedProducts={setSearchedProducts}/>
      {/* {console.log(searchedProducts)} */}
      <ProductGrid products={searchedProducts}/>
    </div>
  )
}
