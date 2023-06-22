import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import {useState} from 'react';

export default function ProductCard(props) {

  const[quantity, setQuantity] = useState(0)
  
  
    function addHandleQuantity (event) {
      setQuantity((quantity) => 
        quantity + 1)
    }
  
    function subHandleQuantity (event) {
      setQuantity((quantity) => 
        quantity - 1)
    }
  
  
      return (
        <div className="product-name">
          <Link to={"products/" + props.product.id}>
          <img src={props.product.image} />
          </Link>
          <p>{props.product.name}</p>
          <p>⭐⭐⭐⭐⭐</p>
          <p id="price">${props.product.price.toFixed(2)}</p>
          <div className="quantity">
          <button id="add" onClick={addHandleQuantity}> + </button>
          <button id="sub" onClick={subHandleQuantity}> - </button> 
          <p id="quant">Quantity: {quantity}</p>
        </div>
        </div>
      );
    }

