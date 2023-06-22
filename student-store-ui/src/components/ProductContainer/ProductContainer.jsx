
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../ProductDetails/ProductDetails";
import "./ProductContainer.css";

export default function ProductContainer({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...product, count: 1 },
      ]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const decreaseCount = (productId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, count: item.count - 1 } : item
      )
    );
  };

  const getCartItemQuantity = (productId) => {
    const item = cartItems.find((item) => item.id === productId);
    return item ? item.count : 0;
  };

  if (selectedProduct) {
    return <ProductDetails product={selectedProduct} />;
  }

  return (
    <div className="product-container">
      {products?.map((product) => (
        <div key={product.id}>
          <Link to={"products/" + product.id}>
            <div className="product">
              <img src={product.image} alt={product.name} />
              <p>{product.name}</p>
              <p>
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <br />
            </div>
          </Link>
          <br></br>
          <br></br>
          <div className="addRemovebuttons">
            <button onClick={() => addToCart(product)}>+</button>
            <button
              onClick={() => decreaseCount(product.id)}
              disabled={getCartItemQuantity(product.id) === 0}
            >
              -
            </button>
            <button onClick={() => removeFromCart(product.id)}>Remove</button>
            <span>{getCartItemQuantity(product.id)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
