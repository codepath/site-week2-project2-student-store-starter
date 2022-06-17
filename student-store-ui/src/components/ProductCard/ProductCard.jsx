import * as React from "react"
import "./ProductCard.css"

export default function ProductCard(props) {
    console.log(222,props.name)
  return (

    <div className = "product-card">
        <h3>{props.name}</h3>
        <h5>{props.price}</h5>
        <img src={props.image} alt="" />
    </div>

  )
}