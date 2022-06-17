import * as React from "react"
import "./ProductsGrid.css"

import ProductCard from "../ProductCard/ProductCard"


export default function ProductsGrid(props) {
  return (
    <div className="home">
      <div className="productCards">
        {props.products.map((item) => (
            <ProductCard name={item.name} key={item.id} image={item.image} price={item.price}/>
        ))}
      </div>
    
    </div>
  )
}