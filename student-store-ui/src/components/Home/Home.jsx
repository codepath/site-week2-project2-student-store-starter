/* eslint-disable react/prop-types */
import * as React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import ProductGrid from '../ProductGrid/ProductGrid';

export default function Home({
  products, shoppingCart, activeQuery, category, handleAddItemToCart,
  handleRemoveItemFromCart, handleSearch,
}) {
  return (
    <div className="home">
      <Hero />
      <input
        className="product-query"
        type="input"
        name="query"
        placeholder="Search for products"
        onKeyDown={(e) => {
          if (e.key === 'Enter') { handleSearch(e.target.value); }
        }}
      />
      <button className="search-button" type="button">
        <img
          className="search-icon"
          src="https://i.imgur.com/Q0cXzWQ.png"
          alt="search button"
        />
      </button>
      <ProductGrid
        products={products}
        activeQuery={activeQuery}
        category={category}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        shoppingCart={shoppingCart}
      />
    </div>
  );
}
