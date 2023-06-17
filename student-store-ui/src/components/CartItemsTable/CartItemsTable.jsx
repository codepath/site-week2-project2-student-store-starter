import { useState, useEffect } from "react";

function CartProductTableRow({ product }){
    return (
      <div className="cart-product-row">
        <span>{product.name}</span>
        <span>{product.quantity}</span>
        <span>{product.price}</span>
        <span>{product.price}</span>
      </div>
    )
  }

export default function CartItemsTable({ checkoutItems }){
    
    let [subTotal, taxesAndFees, total] = [0, 0, 0]
    const getCartTotals = () => {
        let currentSubTotal = 0;
        for (const itemID of Object.keys(checkoutItems)){
            const item = checkoutItems[itemID];
            currentSubTotal += item.price
        }

        let currentTaxesAndFees = currentSubTotal * 0.0764
        let currentTotal = taxesAndFees + currentSubTotal;
        return [currentSubTotal, currentTaxesAndFees, currentTotal]
    }
    useEffect(() => {
        // calculate cart totals
        // everytime the checkout items are updated
      subTotal,taxesAndFees,total = getCartTotals();
    }, [checkoutItems]);

    // display user checkout items and
    return (
      <div className="cart-summary-container">
        <div className="cart-products-table">
          <h1>Cart Summary</h1>
          <div className="cart-table-header-row">
            <span>Name</span>
            <span>Quantity</span>
            <span>Unit Price</span>
            <span>Cost</span>
          </div>
          {Object.keys(checkoutItems).map((itemID) => {
            let item = checkoutItems[itemID];
            // display items only with quantities > 0
            item.quantity > 0 ?  (
              <CartProductTableRow product={item} />
            ) : <></>
          })}
        </div>
        <div className="receipt-container">
          <div className="receipt-row">
            <span className="receipt-label">Subtotal</span>
            <span className="receipt-value">${subTotal}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Taxes and Fees</span>
            <span className="receipt-value">${taxesAndFees}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Total</span>
            <span className="receipt-value">${total}</span>
            </div>
        </div>
      </div>
    )
  }