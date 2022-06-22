/* eslint-disable react/prop-types */
import * as React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductView.css';

export default function ProductView({
  product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart,
}) {
  return (
    <div className="productView">
      <h1 className="product-id">
        Product #
        {productId}
      </h1>
      <ProductCard
        key={productId}
        product={product}
        productId={productId}
        quantity={quantity}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </div>
  );
}
