import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useState } from "react";

const ProductGrid = ({
  products,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart,
}) => {
  return (
    //returns the grid where the product cards will be displayed
    <div
      id="AllCategories"
      style={{
        width: "100%",
        minHeight: "20vh",
        display: "flex",
        flexWrap: "wrap",
        marginTop: "5px",
      }}
    >
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            productId={product.id}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            shoppingCart={shoppingCart}
          />
        );
      })}
    </div>
  );
};

export default ProductGrid;
