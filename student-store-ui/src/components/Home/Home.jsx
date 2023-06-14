import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Logo from "../Logo/logo"
import About from "../About/About"
import Contact from "../Contact/Contact"

export default function Home({category, products, searchTerm}) {
  return (
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
  )
}
