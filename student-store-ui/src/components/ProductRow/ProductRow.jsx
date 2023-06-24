import * as React from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductRow({item}) {
    
  function ProductRow() {
    return (
        <div class="product-row">
            hello I am a row
            <span class="flex-2 cart-product-name">
                {products[id].name}
            </span>
            <span class="center cart-product-quantity">
                item.quantity
            </span>
            <span class="center cart-product-price">
                {products[id].price}
            </span>
            <span class="center cart-product-subtotal">
                {cartItems[id].quantity * products[id].price}
            </span>
        </div>
    )}
}