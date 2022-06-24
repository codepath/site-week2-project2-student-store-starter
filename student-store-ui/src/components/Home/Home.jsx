/* eslint-disable react/prop-types */
import * as React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import ProductGrid from '../ProductGrid/ProductGrid';

export default function Home({
  products, shoppingCart, query, category, handleAddItemToCart,
  handleRemoveItemFromCart, handleQueryChange, handleSearch,
}) {
  return (
    <div className="home">
      <Hero />
      <input
        className="product-query"
        type="input"
        name="query"
        placeholder="Search for products"
        onChange={(e) => handleQueryChange(e.target.value)}
        value={query}
      />
      <button className="search-button" onClick={handleSearch} type="button">
        <img
          className="search-icon"
          src="https://i.imgur.com/Q0cXzWQ.png"
          alt="search button"
        />
      </button>
      <ProductGrid
        products={products}
        query={query}
        category={category}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        shoppingCart={shoppingCart}
      />
    </div>
  );
}
