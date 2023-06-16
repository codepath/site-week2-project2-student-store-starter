import React from 'react';
import ProductCard from "../ProductCard/ProductCard";

import "./ProductGrid.css";

export default function ProductGrid({ products }) {
  return (
    <div id="Buy" className="product-grid">
      <div className="content">
        <h3>Best Selling Products</h3>
        <div className="grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
