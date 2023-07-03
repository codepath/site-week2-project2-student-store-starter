import { useState } from "react"

import "./Home.css"

import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import CategoryBar from "../CategoryBar/CategoryBar"
import SearchBar from "../Searchbar/Searchbar"


export default function Home({ cart, setCart }) {
  const [category, setCategory] = useState("All Categories")
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <>
      <div className="subnav-wrap" id="subnavbar">
        <section className="subnavbar">
          <SearchBar 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm} 
          />
          <CategoryBar
            category={category}
            setCategory={setCategory}
          />
        </section>
      </div>
      <div className="home">
        <section className="buy">
          <h3>Best Selling Products</h3>
            <ProductGrid
              category={category}
              searchTerm={searchTerm}
              cart={cart}
              setCart={setCart}
            />
        </section>
        <About />
        <Contact />
      </div>
    </>
  )
}
