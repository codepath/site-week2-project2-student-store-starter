import * as React from "react"
import "./Home.css"

export default function Home({products}) {
  return (
    <div className="home">
      {
        products?.map(product => {
          return (<div className="product">
            <img src={product.image} />
            <p>{product.name}</p>
            <p>{product.price}</p>
            </div>)
        })
      }
    </div>
  )
}
