import * as React from 'react';
import './ProductGrid.css';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductGrid() {
  return (
    <div className="productGrid">
      {/* List of Product Cards */}
      <ProductCard />
      <ProductCard />
    </div>
  );
}
