import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function productGrid(props) {
  console.log(props)
    return (
      <div className="productGrid" id="buy">
      <div className="content"><h1>Best Selling Products</h1>
        {console.log(props.products)}
        <div className="grid">
        {props.products.map((product, i) => {
          return (<ProductCard className="productCard" key={i} name={product.name}
          price={product.price} pic={product.image}/> )
        })}
        </div>
        </div>
      </div>
    )
}