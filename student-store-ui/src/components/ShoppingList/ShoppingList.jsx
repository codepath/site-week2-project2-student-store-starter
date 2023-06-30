import { useState } from "react";
import ListItemForm from "../ListItemForm/ListItemForm";
import ListItem from "../ListItem/ListItem";
import "./ShoppingList.css";

function ShoppingList({cart, products, subtotal, taxesAndFees, total}) {

  return (
    <div className={`ShoppingList ${Object.keys(cart).length ? "list-full" : "list-empty"}`}>
      <h1 className="title">Shopping Cart 🛒</h1>

      {Object.keys(cart).length ?
        <div class="CartTable">
          <div class="header">
            <div class="header-row">
              <span class="flex-2">Name</span>
              <span class="center">Quantity</span>
              <span class="center">Unit Price</span>
              <span class="center">Cost</span>
            </div>
            {Object.entries(cart).map(([id, quantity]) => {
              const product = products.find(product => product.id === Number(id)); 
              return (
                <div class="product-row">
                  <span class="flex-2">{product.name}</span>
                  <span class="center">{quantity}</span>
                  <span class="center">{product.price}</span>
                  <span class="center">{product.price * quantity}</span>
                </div>
              );
            })}
          </div>
          <div class="receipt">
            <div class="receipt-subtotal">
              <span class="label">Subtotal</span>
              <span></span>
              <span></span>
              <span>{subtotal}</span>
            </div>
            <div class="receipt-taxes">
              <span class="label">Taxes and Fees</span>
              <span></span>
              <span></span>
              <span>{taxesAndFees}</span>
            </div>
            <div class="receipt-total">
              <span class="label">Total</span>
              <span></span>
              <span></span>
              <span>{total}</span>
            </div>
          </div>
        </div>
        :  
        <p>No items added to cart yet. Start shopping now!</p>
      }
    </div>
  );
}

export default ShoppingList;