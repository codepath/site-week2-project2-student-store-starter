import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"

export default function ProductGrid(props) {
  //console.log(props)

    return (
      <div className="grid">
        {props.products.map((product, index) => <ProductCard key={`${product} - ${index} `} product={product} 
        addToCart={props.addToCart}/>)}
      </div>
    )
  }