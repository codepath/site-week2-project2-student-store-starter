import { useState, useEffect, useContext } from "react";
import "./CartItemsTable.css";
import { CheckoutCartContext } from "../CheckoutCartContext/CheckoutCartContext";
function CartProductTableRow({ product }){
    return (
      <div className="cart-product-row">
        <span>{product.name}</span>
        <span>{product.quantity}</span>
        <span>{product.price.toFixed(2)}</span>
        <span>{product.price.toFixed(2)}</span>
      </div>
    )
  }

export default function CartItemsTable({checkoutCart}){
    // const checkoutCart = useContext(CheckoutCartContext); // checkout cart context
    const [checkoutReceipt, setCheckoutReceipt] = useState([0, 0, 0]) // [subtotal, taxesAndFees, total]]

    const getCartTotals = () => {
        // helper function calculates the 
        // subtotals, taxes, and totals for a given
        // order
        let currentSubTotal = 0;
        for (const itemID of Object.keys(checkoutCart)){
            // for each item's price, add it to the currentSubtotal
            const item = checkoutCart[itemID];
            currentSubTotal += item.price;
        }
        // 
        let currentTaxesAndFees = currentSubTotal * 0.0875;
        let currentTotal = currentTaxesAndFees + currentSubTotal;
        setCheckoutReceipt([currentSubTotal, currentTaxesAndFees, currentTotal]) 
    }
    useEffect(() => {
        // calculate cart totals
        // everytime the checkout items are updated
        getCartTotals();
    }, [checkoutCart]);

    // display user checkout items and
    return (
      <div className="cart-summary-container">
        <div className="cart-products-table">
          <h1>Cart Summary <i className="material-icons">shopping_cart</i>  </h1>
          <div className="cart-table-header-row">
            <span>Name</span>
            <span>Quantity</span>
            <span>Unit Price</span>
            <span>Cost</span>
          </div>
          {Object.keys(checkoutCart).map((itemID) => {
            let item = checkoutCart[itemID];
            // display items only with quantities > 0
            return item.quantity > 0 ?  (
              <CartProductTableRow product={item} />
            ) : (<></>)
          })}
        </div>
        <div className="receipt-container">
          <div className="receipt-row">
            <span className="receipt-label">Subtotal</span>
            <span className="receipt-value">${checkoutReceipt[0].toFixed(2)}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Taxes and Fees</span>
            <span className="receipt-value">${checkoutReceipt[1].toFixed(2)}</span>
          </div>
          <div className="receipt-row">
            <span className="receipt-label">Total</span>
            <span className="receipt-value">${checkoutReceipt[2].toFixed(2)}</span>
            </div>
        </div>
      </div>
    )
  }