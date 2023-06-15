import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemToCart,
  productQuantity,
}) => {
  return (
    <div>
      {products.map((product) => {
        <ProductCard
          key={product.id}
          productId={product.id}
          product={product}
          quantity={0}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemToCart={handleRemoveItemToCart}
          showDescription={false}
        />;
      })}
    </div>
  );
};

export default ProductGrid;
