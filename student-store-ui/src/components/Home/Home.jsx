import * as React from "react"
import "./Home.css"
import Hero from "../Hero/Hero"
import SubNavBar from "../SubNavBar/SubNavBar"

export default function Home({products}) {

  function  createProduct(info){
    return (
        <div className="product-card">

          <img src={info.image} />
          <p>{info.name}</p>
          <p>${info.price}</p>


        </div>



    )



  }
  return (
    <>
      <Hero />
      <SubNavBar />
      <div className="home">
        <div className="home-content">
          
          <h2 className="home-title">Best Selling Products</h2>
          <div className="product-grid">

            {products?.map(product => createProduct(product))}

          </div>

        </div>





      </div>


    </>
  )
}