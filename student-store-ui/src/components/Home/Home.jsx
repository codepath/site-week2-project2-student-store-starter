import * as React from "react"
import "./Home.css"

export default function Home({products}) {
  return (
    <div className="home">
      <h3>Best Selling Products</h3>

      <div className="product-grid">
      {
        products?.map((product) => 
          <div className="product">
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        )
      }
      </div>
    </div>
  )
}
