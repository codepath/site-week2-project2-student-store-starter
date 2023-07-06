import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"
import { useState } from "react";

export default function ProductCard({ product, setCartItems, cartItems }) {
  //handles adding to cart
const addToCart = (item) => {
  setCartItems((cartItems) => [...cartItems, item]);
};


//setting quantity of items
const [quantity, setQuantity] = useState(0);

// user adds to cart
  const handleAddToCart = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity + 1,
      subtotal: (quantity +1) * product.price,
    };
    // handles existing items
    const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);
    if (existingItemIndex !== -1) {
      // Item already exists in the cart, update quantity
      const updatedCartItems = [...cartItems];
      const existingItem = updatedCartItems[existingItemIndex];
      existingItem.quantity = quantity + 1;
      existingItem.subtotal = existingItem.quantity * existingItem.price;
      setCartItems(updatedCartItems);
    } else {
      // Item is not in the cart, add it
      addToCart(item);
    }    
  };

// handles removing items frm cart
  const handleRemoveFromCart = () => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.id !== product.id
    );
    setCartItems(updatedCartItems);
  };


  const add = () => {
    setQuantity(quantity + 1);
    handleAddToCart();
  };

  const subtract = () => {
    if (quantity < 2) {
      setQuantity(0);
      handleRemoveFromCart();
    } 
    
    else {
      setQuantity(quantity - 1);
      const updatedCartItems = [...cartItems];
      const existingItemIndex = updatedCartItems.findIndex(
        (cartItem) => cartItem.id === product.id
      );
      const existingItem = updatedCartItems[existingItemIndex];
      existingItem.quantity = existingItem.quantity - 1;
      existingItem.subtotal = existingItem.quantity * existingItem.price;
      setCartItems(updatedCartItems);
    }
  };
  
    return (
      <section className="products-grid">
        <div className="product-card">
          <div className="product-img">
            <Link to={"/product/" + product.id}>
              <img src={product.image} alt={product.name} />
            </Link>
          </div>
          <div className="product-info">
            <p>{product.name}</p>
            <p>
              {product.price.toLocaleString("us-EN", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </div>
          <div className="action">
            <button className="addsub" onClick={subtract}>-</button>
            <button className="count">{quantity}</button>
            <button className="addsub" onClick={add}>+</button>
          </div>
        </div>
      </section>
    );
  }
  
