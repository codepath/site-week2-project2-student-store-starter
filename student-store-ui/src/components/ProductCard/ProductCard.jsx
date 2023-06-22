import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductCard(prop) {
  const [quantity, setQuantity] = useState(0);

  function incrementValue() {
    setQuantity((prevValue) => prevValue + 1);
  }

  function decrementValue() {
    if(quantity > 0){
      setQuantity((prevValue) => prevValue - 1);
    }
  }

  return (
    <div className="product">
      <Link id="product-link" to={"products/" + prop.product.id}>
        <img
          className="product-poster"
          src={prop.product.image}
          alt={`Image of ${prop.product.name}`}
        />
      </Link>
      <div className="product-info">
      <div>
        <p>{prop.product.name}</p>
        <p>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</p>
        <p>${prop.product.price.toFixed(2)}</p>
        </div>
        <div id="div-button">
         <div id="button-card">
        <button className="card-button" onClick={incrementValue} type="submit">
          +
        </button>
        <button className="card-button" onClick={decrementValue} type="submit">
          -
        </button>
        </div>
        <div>
        {quantity > 0 ? (
          <div id="quantitySpan">{quantity}</div>
        ) : (
          console.log("nothing here to see")
      )}
      </div>
      </div>
      </div>
    </div>
  );
}
