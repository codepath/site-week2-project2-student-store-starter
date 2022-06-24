import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import axios from "axios";
import "./ShoppingCart.css";

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  const getProductName = (productId) => {
    return products.find((product) => product.id == productId).name;
  };

  const getProductPrice = (productId) => {
    return products.find((product) => product.id == productId).price;
  };

  const calculateCost = (quantity, productId) => {
    const newCost = quantity * getProductPrice(productId);
    return newCost;
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      subtotal += calculateCost(
        shoppingCart[i].quantity,
        shoppingCart[i].itemId
      );
      console.log(subtotal);
    }
    return subtotal;
  };

  const calculateTaxes = () => {
    return 0.1 * calculateSubtotal();
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTaxes();
  };

  return (
    <div className="shopping-cart">
      {isOpen && (
        <div className="cart-table">
          <div className="open">
            <h3>Shopping Cart</h3>
          </div>
          <div className="header">
            <span>Name</span>
            <span>Quantity</span>
            <span>Unit Price</span>
            <span>Cost</span>
          </div>
          {shoppingCart?.map((item, index) => (
            <div className="product-row" key={index}>
              <div className="values">
                <span className="cart-product-name">
                  {getProductName(item.itemId)}
                </span>
                <span className="cart-product-quantity">{item.quantity}</span>
                <span className="cart-product-unit-price">
                  {getProductPrice(item.itemId).toFixed(2)}
                </span>
                <span className="cart-product-cost">
                  {calculateCost(item.quantity, item.itemId).toFixed(2)}
                </span>
              </div>
            </div>
          ))}
          <div className="receipt">
            <div className="receipt-subtotal">
              <span className="label">Subtotal</span>
              <span></span>
              <span></span>
              <span className="subtotal">{calculateSubtotal().toFixed(2)}</span>
            </div>
            <div className="receipt-taxes">
              <span className="label">Taxes and Fees</span>
              <span></span>
              <span></span>
              <span className="taxes-and-fees">
                {calculateTaxes().toFixed(2)}
              </span>
            </div>
            <div className="receipt-total">
              <span className="label">Total</span>
              <span></span>
              <span></span>
              <span className="total-price">{calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
