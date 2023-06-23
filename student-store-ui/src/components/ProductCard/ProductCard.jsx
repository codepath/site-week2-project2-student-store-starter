import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductCard({
  product,
  shoppingCart,
  setShoppingCart,
}) {
  const [quantity, setQuantity] = useState(0);

  // clear cart
  useEffect(() => {
    if (shoppingCart.length === 0) {
      setQuantity(0);
    }
  }, [shoppingCart]);

  useEffect(() => {
    let index = shoppingCart?.findIndex((cart) => {
      return cart.product === product.name;
    });
    if (quantity === 1 && index === -1) {
      const newCart = [
        ...shoppingCart,
        {
          product: product.name,
          quantity: quantity,
          unit_price: product.price,
          cost: product.price,
        },
      ];
      setShoppingCart(newCart);
    } else if (quantity >= 1) {
      setShoppingCart((prevCart) => {
        const updatedCart = [...prevCart];
        updatedCart[index].quantity = quantity;
        updatedCart[index].cost = product.price * quantity;
        return updatedCart;
      });
    } else if (quantity === 0) {
      setShoppingCart((shoppingCart) => shoppingCart.toSpliced(index, 1));
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
      <Link id="product-link" to={"products/" + product.id}>
        <img
          className="product-poster"
          src={product.image}
          alt={`Image of ${product.name}`}
        />
      </Link>
      <div className="product-info">
        <div>
          <p>{product.name}</p>
          <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
          <p>${product.price.toFixed(2)}</p>
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
          <div>{quantity > 0 && <div id="quantitySpan">{quantity}</div>}</div>
        </div>
      </div>
    </div>
  );
}
