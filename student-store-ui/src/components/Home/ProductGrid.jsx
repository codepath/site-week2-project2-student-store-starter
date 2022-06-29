import * as React from 'react';
import './Home.css';
import ProductCard from './ProductCard';

export default function ProductGrid({
  products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart, error, findQuantity,
}) {
  return (
    <div className="product-grid">
      {products.length === 0
        ? (
          <div className="error">
            {error}
            Nothing found
          </div>
        ) : null}

      {
        products.map((product) => {
          const quantity = findQuantity(product);

          return (
            <ProductCard
              product={product}
              key={product.id}
              productId={product.id}
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemFromCart={handleRemoveItemFromCart}
              showDescription={false}
              quantity={quantity}
            />
          );
        })
}

    </div>

  );
}
