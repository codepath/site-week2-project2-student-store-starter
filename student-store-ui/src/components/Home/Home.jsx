import * as React from "react"
import "./Home.css"

export default function Home({products}) {
  
  function createProduct(info, idx){
    return (
      <div className="product" key={idx}>
        <img src={info.image}/>
        <p>{info.name}</p>
        <p>{info.price}</p>
      </div>
    )
  }
  
  return (
    <div className="home">
      <div className="product-grid">
      {
        products?.map((product, idx) => createProduct(product, idx))
      }
      </div>
    </div>
  )
}
