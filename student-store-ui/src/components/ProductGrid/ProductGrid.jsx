import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import { useState } from "react"

export default function productGrid(props) {
  const [showDescription, setShowDescription] = React.useState(false);
    return (
      <div className="productGrid" id="buy">
      <div className="content"><h1>Best Selling Products</h1>
        {console.log(props.products)}
        <div className="grid">
        {props.products.map((product, i) => {
          return (<ProductCard className="productCard" key={i} name={product.name}
          price={product.price} pic={product.image} showDescription={showDescription}/> )
        })}
        </div>
        </div>
      </div>
    )
}