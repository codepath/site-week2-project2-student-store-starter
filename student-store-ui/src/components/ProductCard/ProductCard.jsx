import * as React from "react"
import "./ProductCard.css"
import {useEffect, useState} from "react"
import { Link } from 'react-router-dom'

// export default function ProductCard({product, index, quantity}){
export default function ProductCard({product, index}){

const [quantity, setQuantity] = useState(0);

function incrementQuant(event){
    // if (quant>=0){
      setQuantity(quantity+1);
    // }
   
  }
  function decrementQuant(event){
    if (quantity > 0){
      setQuantity(quantity-1);
    }
  
  }
  const productPrice = product.price.toLocaleString("us-EN", {
            style: "currency",
            currency: "USD",
   })
    return (
        <div className="product-card" key={index} > 
            <Link to={"products/" + product.id}>
                <img src={product.image} ></img>
            </Link>
            <div className="product-info">
                <div className="main-info">
                    <p className="product-name">{product.name}</p>
                    <div className="stars">
                        <img src={"https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        <img src={"https://www.transparentpng.com/download/star/jjbv96-star-icon-clipart.png"} alt="star ratings" className="star-rating"
                        style={{width: "20px", height: "20px"}}></img>
                        </div>
                    <p className="product-price">{productPrice}</p>
                </div>
                <div className="actions">
                <div className="buttons">
                    <button className="add" onClick={()=> incrementQuant()}>
                    <i className="material-icons">add</i>
                    </button>
                    <button className="remove" onClick={() => decrementQuant()}>
                    <i className="material-icons">remove</i>
                    </button>
                </div>
                <span className="quantity">
                    <span className="amt" style={{background: "#013a63"}}>{quantity}</span>
                </span>
                </div>

            </div>
        </div> )}