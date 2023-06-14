import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero";
import SearchNFilter from "../SearchNFilter/SearchNFilter";
import Navbar from "../Navbar/Navbar";
import ProductGrid from "../ProductGrid/ProductGrid";



import { BrowserRouter, Link } from "react-router-dom";


export default function Home({products}) {

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <ProductGrid products={products} />
      {/* <SearchNFilter products={products}/> */}
  <Navbar />
    </div>

  )
  
}
