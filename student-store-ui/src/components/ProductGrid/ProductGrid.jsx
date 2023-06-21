import * as React from "react";
import "./ProductGrid.css";
import { useState } from "react";

export default function ProductGrid({ products, selectedCategory, searchTerm }) {
  const filteredProducts = products.filter(product => {
    const inCategory = selectedCategory === "" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return inCategory && matchesSearch;
  });

  const returntf = function() => {25}

  function createProduct(info) {
    return (
      <section className="products-grid">
        <div className="product-card">
          <div className="product-img">
            <img src={info.image} alt="product" />
          </div>
          <div className="product-info">
            <p>{info.name}</p>
            <p>{info.price}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div className="prodgrid">
      {filteredProducts.map((product) => createProduct(product))}
    </div>
  );
}