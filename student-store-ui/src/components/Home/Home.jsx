import * as React from 'react';
import './Home.css';

import { useState } from 'react';
import ProductGrid from './ProductGrid';
import Hero from './Hero';

export default function Home({
  products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart, error, findQuantity, isFetching,
}) {
  const [searchedProducts, updateSearchedProducts] = useState([-1]);
  const [selectedCategory, updateSelectedCategory] = useState('all');

  // Updates displayed products based on search query
  // 3 Cases:
  //  1. Empty search query
  //  2. Query is in list of all products
  //  3. Query is not in list of all products
  const handleSearchItem = (e) => {
    const query = e.target.value.toLowerCase();
    // Case 1:
    //  Searched products has Not found value
    if (query.length === 0) {
      updateSearchedProducts([-1]);
      return;
    }

    // Case 2 & 3:
    //  Searched products contains
    //  either list of products or remains empty
    //  Case 3 Empty case is handled in ProductGrid.jsx
    const results = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const product of products) {
      if (product.name.toLowerCase().includes(query)
        && (product.category === selectedCategory
          || selectedCategory === 'all')
      ) {
        results.push(product);
      }
    }

    updateSearchedProducts(results);
  };

  const handleCategories = (event) => updateSelectedCategory(event.currentTarget.id);

  return (
    <div className="home">
      <p>Home</p>
      <Hero />
      <label htmlFor="search">
        Search Products:
        <input onChange={handleSearchItem} placeholder="Search here" name="search" />
      </label>
      <div className="filter-categories">
        <button type="button" id="all" onClick={handleCategories}>All Categories</button>
        <button type="button" id="clothing" onClick={handleCategories}>Clothing</button>
        <button type="button" id="food" onClick={handleCategories}>Food</button>
        <button type="button" id="accessories" onClick={handleCategories}>Accessories</button>
        <button type="button" id="tech" onClick={handleCategories}>Tech</button>
      </div>
      <div className="home-body">
        {isFetching ? <p>Fetching products...</p> : (
          <ProductGrid
        // if no search query, default to filter by category
            products={searchedProducts[0] !== -1
              ? searchedProducts
              : products.filter((product) => (product.category === selectedCategory)
                                               || (selectedCategory === 'all'))}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            shoppingCart={shoppingCart}
            error={error}
            findQuantity={findQuantity}
          />
        )}
      </div>

      <div className="about-us">
        <h3>About Us</h3>
        We are an online student store.
      </div>
      <div className="contact-us">
        Contact us: benjm@fb.com
      </div>
      <div className="footer">
        Have a good day!
      </div>
    </div>

  );
}
