import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductCard(props) {
  const [quantity, setQuantity] = useState(0);
  
  // clear cart
  useEffect(() => {
    if (props.shoppingCart.length === 0){
      setQuantity(0)
    }
  }, [props.shoppingCart])

  useEffect(() => {
    let index = props.shoppingCart?.findIndex((cart) => {
      return cart.product === props.product.name;
    });
    if (quantity === 1 && index === -1) {
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
    } else if (quantity >= 1) {
      props.setShoppingCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[index].quantity = quantity;
        updatedCart[index].cost = props.product.price * quantity
        return updatedCart;
      });
    } else if (quantity === 0) {
      props.setShoppingCart((shoppingCart => shoppingCart.toSpliced(index, 1)))
    }
  }, [quantity]);

  function incrementValue() {
    setQuantity((prevValue) => prevValue + 1);
  }

  function decrementValue() {
    if (quantity > 0) {
      setQuantity((prevValue) => prevValue - 1);
    }
  }

  return (
    <div className="product">
      <Link id="product-link" to={"products/" + props.product.id}>
        <img
          className="product-poster"
          src={props.product.image}
          alt={`Image of ${props.product.name}`}
        />
      </Link>
      <div className="product-info">
        <div>
          <p>{props.product.name}</p>
          <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
          <p>${props.product.price.toFixed(2)}</p>
        </div>
        <div id="div-button">
          <div id="button-card">
            <button
              className="card-button"
              onClick={incrementValue}
              type="submit"
            >
              +
            </button>
            <button
              className="card-button"
              onClick={decrementValue}
              type="submit"
            >
              -
            </button>
          </div>
          <div>
            {quantity > 0 && <div id="quantitySpan">{quantity}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
