import * as React from 'react';
import './ProductDetail.css';
import ProductCard from '../Home/ProductCard';

export default function ProductView({
  product, productId, quantity, handleAddItemToCart, handleRemoveItemFromCart,
}) {
  return (
    <div className="product-view">
      <h1 className="product-id">
        Product #
        {productId}
      </h1>
      <ProductCard
        product={product}
        key={product.id}
        productId={product.id}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        showDescription
        quantity={quantity}
      />
    </div>
  );
}
