import * as React from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";
import { useState } from 'react';
import { useEffect } from 'react';

export default function ProductGrid({ products, searchTerm, category, cart, setCart}) {
  useEffect(() => {

  }, [cart]);

  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) {
      return false;
    }
    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  function handleIncrement(id) {
    setCart((prevCart) => {
      return { ...prevCart, [id]: (prevCart[id] || 0) + 1 };
    });
  }
  
  function handleDecrement(id) {
    setCart((prevCart) => {
      if (prevCart[id] > 1) {
        return { ...prevCart, [id]: prevCart[id] - 1 };
      } else {
        const newCart = { ...prevCart };
        delete newCart[id];
        return newCart;
      }
    });
  }

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <section className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="product-info">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </Link>
          <div>
            <button onClick={() => handleIncrement(product.id)}>+</button>
            <span>{cart[product.id] || 0}</span>
            <button onClick={() => handleDecrement(product.id)}>-</button>
          </div>
        </section>
      ))}
    </div>
  );
}


