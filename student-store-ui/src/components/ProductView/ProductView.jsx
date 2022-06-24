import * as React from "react"
import "./ProductView.css"
import Hero from "../Hero/Hero"

export default function ProductView(props) {
  
    console.log(11,props.product);
    let price = props.product.price.toFixed(2)


    



 




    return (
        




    <div className = "product-view">
        
        <div className = "product">
            <div className = "product-heading">
                <h2 className = "product-title">Product #{props.product.id}</h2>
                <img className = "product-poster" src={props.product.image} alt="" />
            </div>
            <div className = "product-detail">
                <h5 className = "product-name">{props.product.name}</h5>
                <p className = "product-description">{props.product.description}</p>
                <p className = "product-price">Price: ${price}</p>
            </div>

        </div>


        
    </div>

  )
}