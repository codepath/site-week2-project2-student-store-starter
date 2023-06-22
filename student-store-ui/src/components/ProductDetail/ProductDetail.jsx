import * as React from "react";
import "./ProductDetail.css";
import ProductView from "../ProductView/ProductView";

export default function ProductDetail({shoppingCart, handleAddItemToCart, handleRemoveItemToCart}) {
  return (
    <div id="Buy" className="product-grid">
      <ProductView shoppingCart={shoppingCart} handleAddItemToCart={handleAddItemToCart} handleRemoveItemToCart={handleRemoveItemToCart} />
    </div>
  );
}
