import * as React from "react"
import "./Home.css"

export default function Home({products}) {
  return (
    <div className="home">
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
  )
}
