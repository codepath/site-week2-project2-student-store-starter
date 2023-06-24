import React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({
  products,
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) {
  const findInShoppingCart = (currProduct) => {
    let i = -1;
    shoppingCart.forEach((e, idx) => {
      i = e.itemId === currProduct.id ? idx : i;
    });
    return i;
  };

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          product={product}
          productId={product.id}
          quantity={shoppingCart[findInShoppingCart(product)]?.quantity}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          shoppingCart={shoppingCart}
        />
      ))}
    </div>
  );
}
