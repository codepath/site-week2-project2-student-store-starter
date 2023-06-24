import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({
  cart,
  setCart,
  product,
  showDescription,
  quantities,
  setQuantities,
}) {
  function handleAddItemToCart() {
    setQuantities({ ...quantities, [product.id]: quantities[product.id] + 1 });

    const idx = cart.findIndex((prod) => {
      return parseInt(prod.itemId) === parseInt(product.id);
    });

    if (idx !== -1) {
      cart.splice(idx, 1, {
        itemId: parseInt(product.id),
        quantity: quantities[product.id] + 1,
      });
      setCart(cart);
    } else {
      setCart(() => [
        ...cart,
        { itemId: parseInt(product.id), quantity: quantities[product.id] + 1 },
      ]);
    }
  }

  function handleRemoveItemToCart() {
    if (quantities[product.id] > 0) {
      setQuantities({
        ...quantities,
        [product.id]: quantities[product.id] - 1,
      });

      const idx = cart.findIndex((prod) => {
        console.log(prod);
        return parseInt(prod.itemId) === parseInt(product.id);
      });
      console.log("i", idx, product.id);
      if (idx !== -1) {
        if (quantities[product.id] - 1 === 0) {
          cart.splice(idx, 1);
        } else {
          cart.splice(idx, 1, {
            itemId: parseInt(product.id),
            quantity: quantities[product.id] - 1,
          });
        }

        setCart(cart);
      } else {
        setCart(() => [
          ...cart,
          {
            itemId: parseInt(product.id),
            quantity: quantities[product.id] - 1,
          },
        ]);
      }
    }
  }

  return (
    <div className="product-card">
      <Link to={"/product/" + product.id}>
        <img className="prod-image" src={product.image} />
        <div className="prod-details">
          <p className="prod-name"> {product.name} </p>
          <p className="prod-price"> {`$ ${(parseFloat(product.price)).toFixed(2)}`} </p>
        </div>
      </Link>

      <div className="amount-cont">
        <div className="buttons">
          <button onClick={handleAddItemToCart}> + </button>
          <button onClick={handleRemoveItemToCart}> - </button>
        </div>
        <p className="amount"> Amount: {quantities[product.id]} </p>
      </div>

      {showDescription && (
        <div className="prod-description">{product.description}</div>
      )}
    </div>
  );
}

export default ProductCard;
