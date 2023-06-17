import React from "react";
import "./ProductView.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductView({
  product,
  id,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  shoppingCart
}) {
  const findInShoppingCart = (currProduct) => {
    let i = -1;
    shoppingCart.forEach((e, idx) => {
      i = e.itemId === currProduct.id ? idx : i;
    });
    return i;
  };

  return (
    <div className="product-view">
      <h1 className="product-id">Product {id}</h1>
      <ProductCard
        product={product}
        productId={product.id}
        showDescription={true}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        quantity={shoppingCart[findInShoppingCart(product)]?.quantity}
      />
    </div>
  );
}
