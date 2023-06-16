import React from 'react';
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";

export default function ProductGrid({ products, searchTerm, selectedCategory }) {
  return (
    <div id="Buy" className="product-grid">
      <div className="content">
        <h3>Best Selling Products</h3>
        <div className="grid">
          {products
            .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .filter(product => selectedCategory ? product.category.toLowerCase() === selectedCategory.toLowerCase() : true)
            .map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}
