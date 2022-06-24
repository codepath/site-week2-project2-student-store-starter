/* eslint-disable react/prop-types */
import * as React from 'react';
import './ProductGrid.css';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductGrid({
  products, query, category, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart,
}) {
  const activeProducts = products.filter((product) => (
    product.name.toLowerCase().includes(query.toLowerCase())
    && (product.category === category || category === 'all')
  ));

  return (
    <div className="product-grid">
      {activeProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          productId={product.id}
          shoppingCart={shoppingCart}
          showDescription={false}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      ))}
    </div>
  );
}
