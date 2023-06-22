import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import {useState} from 'react';

export default function ProductCard(props) {

  const[quantity, setQuantity] = useState(0)
  console.log(quantity)
  
  
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
          <p>${props.product.price.toFixed(2)}</p>
          <div className="quantity">
          <button onClick={addHandleQuantity}> + </button>
          <button onClick={subHandleQuantity}> - </button> 
          <p>{quantity}</p>
        </div>
        </div>
      );
    }

