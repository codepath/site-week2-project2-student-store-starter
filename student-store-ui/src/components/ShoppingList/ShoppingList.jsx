import React from "react";
import "./ShoppingList.css";

function ShoppingList({ cart, products }) {
  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  const calculateCost = (id, quantity) => {
    const product = getProductById(id);
    return Number((product.price * quantity).toFixed(2));
  };

  const subtotal = Object.entries(cart).reduce(
    (total, [id, quantity]) => total + calculateCost(Number(id), quantity),
    0
  );

  // Calculate taxes and fees
  const taxesAndFees = subtotal * 0.0875; // Assuming 8.75% tax

  // Calculate total
  const total = subtotal + taxesAndFees;

  return (
    <div className={`ShoppingList ${Object.keys(cart).length ? "list-full" : "list-empty"}`}>
      <h1 className="title">Shopping Cart 🛒</h1>

      {Object.keys(cart).length ? (
        <div className="CartTable">
          <div className="header">
            <div className="header-row">
              <span className="flex-2">Name</span>
              <span className="center">Quantity</span>
              <span className="center">Unit Price</span>
              <span className="center">Cost</span>
            </div>
            {Object.entries(cart).map(([id, quantity]) => {
              const product = getProductById(Number(id));
              const cost = calculateCost(Number(id), quantity);
              return (
                <div className="product-row" key={id}>
                  <span className="flex-2">{product.name}</span>
                  <span className="center">{quantity}</span>
                  <span className="center">{product.price}</span>
                  <span className="center">{cost}</span>
                </div>
              );
            })}
          </div>
          <div className="receipt">
            <div className="receipt-subtotal">
              <span className="label">Subtotal</span>
              <span></span>
              <span></span>
              <span>{subtotal.toFixed(2)}</span>
            </div>
            <div className="receipt-taxes">
              <span className="label">Taxes and Fees</span>
              <span></span>
              <span></span>
              <span>{taxesAndFees.toFixed(2)}</span>
            </div>
            <div className="receipt-total">
              <span className="label">Total</span>
              <span></span>
              <span></span>
              <span>{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ) : (
        <p>No items added to cart yet. Start shopping now!</p>
      )}
    </div>
  );
}

export default ShoppingList;
