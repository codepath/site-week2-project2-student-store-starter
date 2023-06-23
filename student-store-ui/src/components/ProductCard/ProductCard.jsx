import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';


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
  
   useEffect(() => {
    let index = props.shoppingCart?.findIndex((cart) => {
      return cart.product === props.product.name;
    });
    if (quantity === 1 && index === -1){
      const newCart = [
        ...props.shoppingCart,
        {
          product: props.product.name, 
          quantity: quantity,
          unit_price: props.product.price,
          cost: props.product.price 
        },
      ];
      props.setShoppingCart(newCart);
    } else if (quantity >= 1){
      props.setShoppingCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[index].quantity = quantity;
        updatedCart[index].cost = props.product.price * quantity;

        return updatedCart;
      });
    } else if (quantity === 0){
      props.setShoppingCart((shoppingCart => shoppingCart.toSpliced(index,1)))
    }
   }, [quantity]);

  console.log(props.shoppingCart)
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

