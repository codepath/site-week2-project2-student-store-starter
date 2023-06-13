import * as React from "react"
import "./Home.css"

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
      {
      products?.map(product => createProduct(product))
}
    </div>
  )
  
}
