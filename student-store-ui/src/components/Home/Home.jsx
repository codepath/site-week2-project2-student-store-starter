import * as React from "react"
import Hero from "../Hero/Hero"
import SearchBar from "../SearchBar/SearchBar"
import ProductGrid from "../ProductGrid/ProductGrid"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

import "./Home.css"

export default function Home({ products }) {
  return (
    <div className="home">
      <Hero />
      <SearchBar />
      <ProductGrid products={ products } />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
