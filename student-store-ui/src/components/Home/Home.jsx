import * as React from "react"
import { useState } from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Logo from "../Logo/logo"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Subnavbar from "../Subnavbar/Subnavbar"

export default function Home({products}) {
  const [category, setCategory] = useState("All Categories")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All Categories", "Food", "Clothing", "Tech", "Accessories"]

  return (
    <>
      <Subnavbar 
        categories={categories}
        category={category}
        setCategory={setCategory}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="home">
        <section className="buy">
          <h3>Best Selling Products</h3>
            <ProductGrid 
              products={products}
              category={category}
              searchTerm={searchTerm}
            />
        </section>
        <About />
        <Contact />
      </div>
    </>
  )
}
