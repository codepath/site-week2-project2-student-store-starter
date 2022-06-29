import * as React from 'react';
import './Home.css';

export default function Hero({
  product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart, showDescription,
}) {
  return (
    <div className="hero">

      <div className="intro">Welcome!</div>
      <img alt="hero img" className="hero-img image is-96x96" src="../../images/store.svg" />

    </div>

  );
}
