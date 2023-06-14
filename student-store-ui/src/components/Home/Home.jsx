import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero";
import SearchNFilter from "../SearchNFilter/SearchNFilter";
import Navbar from "../Navbar/Navbar";


import { BrowserRouter, Link } from "react-router-dom";


export default function Home({products}) {


  function createProduct(info) {
    return (
      <section className="products-grid">
        <div className="product-card">
          <div className="product-img">
            <img src={info.image} />
          </div>
          <div className= "product-info">
            <p>{info.name}</p>
            <p>${info.price}</p>
          </div>
        </div>
      </section>
    )
    
  }

  return (
    <div className="home">
      <Navbar />
      <Hero />
      <SearchNFilter products={products}/>
      {
      products?.map(product => createProduct(product))
}
  <Navbar />
    </div>

  )
  
}
