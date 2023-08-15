import * as React from "react";
import "./ShoppingCart.css";
import { useEffect } from "react";

export default function ShoppingCart({
  subtotal,
  setSubtotal,
  total,
  setTotal,
  taxes,
  setTaxes,
  setShoppingCart,
  shoppingCart,
}) {
  useEffect(() => {
    const calculateSubtotal = () => {
      let newSubtotal = 0;
      shoppingCart?.forEach((cart) => {
        newSubtotal += cart.cost;
      });
      setSubtotal(newSubtotal);
    };

    const calculateTaxes = () => {
      const taxRate = 0.0875;
      const newTaxes = subtotal * taxRate;
      setTaxes(newTaxes);
    };

    const calculateTotal = () => {
      const newTotal = subtotal + taxes;
      setTotal(newTotal);
    };

    calculateSubtotal();
    calculateTaxes();
    calculateTotal();
  }, [shoppingCart, subtotal, taxes]);

  function emptyCart() {
    setShoppingCart([]);
  }

  return (
    <>
      {shoppingCart?.length === 0 ? (
        <span style={{ fontSize: "large" }}>
          No items added to cart yet. Start shopping now!
        </span>
      ) : (
        <>
          <table>
            <thead>
              <tr className="shoppingCartItems">
                <th className="sc-header">Name</th>
                <th className="sc-header">Quantity</th>
                <th className="sc-header">Unit Price</th>
                <th className="sc-header">Cost</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart?.map((cart) => {
                return (
                  <tr className="shoppingCartItems">
                    <td className="sc_item">{cart.product}</td>
                    <td className="sc_item">{cart.quantity}</td>
                    <td className="sc_item">${cart.unit_price.toFixed(2)}</td>
                    <td className="sc_item">${cart.cost.toFixed(2)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />
          <div id="checkout">
            <div
              style={{
                marginLeft: "8px",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            >
              Subtotal <span className="prices">${subtotal.toFixed(2)}</span>
            </div>
            <div style={{ marginLeft: "8px", marginBottom: "10px" }}>
              Taxes and Fees <span className="prices">${taxes.toFixed(2)}</span>
            </div>
            <div
              style={{ marginLeft: "8px", marginBottom: "10px" }}
              id="checkoutHeader"
            >
              {" "}
              Total <span className="prices">${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="sc-button" onClick={emptyCart}>
            Clear Cart
          </button>
        </>
      )}
    </>
  );
}
