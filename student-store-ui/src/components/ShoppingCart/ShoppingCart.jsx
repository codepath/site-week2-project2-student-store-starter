/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import * as React from 'react';
import formatPrice from '../currency';
import './ShoppingCart.css';

// constant, tax rate
const taxRate = 0.0875;

// helper function; gets info of specific product given id and products list
function getProductFromProducts(productId, products) {
  return products.find((product) => product.id === productId);
}

// helper function; calculates total price of shopping cart
function calculateTotal(shoppingCart, products) {
  let sum = 0;
  shoppingCart.forEach((item) => {
    console.log('shopping cart', shoppingCart);
    console.log('item', item);
    const itemPrice = getProductFromProducts(item.itemId, products).price;
    const itemQuantity = item.quantity;
    sum += itemPrice * itemQuantity;
  });
  const tax = sum * taxRate;
  return {
    subtotal: formatPrice(sum),
    tax: formatPrice(tax),
    total: formatPrice(sum + tax),
  };
}

export default function ShoppingCart({ isOpen, products, shoppingCart }) {
  // if sidebar is open
  if (isOpen) {
    // if no items in shopping cart
    if (shoppingCart.length === 0) {
      return (
        <h1 className="notification">No items added to cart yet. Start shopping now!</h1>
      );
    }
    const priceInfo = calculateTotal(shoppingCart, products);
    // else, shopping cart has items to render
    return (
      <div className="shopping-cart">
        <table className="cart-breakdown">
          <th className="cart-product-name header">Name</th>
          <th className="cart-product-quantity header">Quantity</th>
          <th className="cart-product-unit-pric header">Unit Price</th>
          <th className="cart-product-price header">Cost</th>
          {shoppingCart.map((item) => {
            const product = getProductFromProducts(item.itemId, products);
            return (
              <tr key={item.itemId} className="item-row">
                <td className="cart-product-name">{product.name}</td>
                <td className="cart-product-quantity">{item.quantity}</td>
                <td className="cart-product-unit-price">{formatPrice(product.price)}</td>
                <td className="cart-product-price">{formatPrice(product.price * item.quantity)}</td>
              </tr>
            );
          })}
        </table>
        <p className="subtotal">
          Subtotal:
          {' '}
          {priceInfo.subtotal}
        </p>
        <p className="tax">
          Taxes and fees:
          {' '}
          {priceInfo.tax}
        </p>
        <p className="total">
          Total:
          {' '}
          {priceInfo.total}
        </p>
      </div>
    );
  }
}
