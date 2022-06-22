/* eslint-disable react/prop-types */
import * as React from 'react';
import './ProductGrid.css';
import ProductCard from '../ProductCard/ProductCard';

// helper function; get quantity of specific product in cart
function getProductQuantity(shoppingCart, productId) {
  const productIndex = shoppingCart.findIndex((product) => product.id === productId);
  if (productIndex !== -1) return shoppingCart[productIndex].quantity;
  return 0;
}

export default function ProductGrid({
  products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart,
}) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          productId={product.id}
          quantity={getProductQuantity(shoppingCart, product.id)}
          showDescription={false}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
        />
      ))}
    </div>
  );
}
