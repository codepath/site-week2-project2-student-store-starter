import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid(props) {
  //console.log(props)

    return (
      <div className="home">
        {props.products.map((product, index) => <ProductCard key={`${product} - ${index} `} product={product} 
        addToCart={props.addToCart}/>)}
      </div>
    )
  }