import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import Search from "../Search/Search"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({products}) {
  const [searchedProducts, setSearchedProducts] = React.useState(products)
  return (
    <div className="home">
      <Hero />
      <Search products={products} searchedProducts={searchedProducts} setSearchedProducts={setSearchedProducts}/>
      <ProductGrid products={searchedProducts}/>
    </div>
  )
}
