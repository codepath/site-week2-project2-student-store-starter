import * as React from "react";
import "./ShoppingCart.css";
import { useState, useEffect } from "react";

export default function ShoppingCart(props) {
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [taxes, setTaxes] = useState(0);

  useEffect(() => {
    const calculateSubtotal = () => {
        let newSubtotal = 0;
        props.shoppingCart?.forEach((cart) => {
          newSubtotal += cart.price * cart.quantity;
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
    }, [props.shoppingCart, subtotal, taxes]);

    function emptyCart (){
        props.setShoppingCart([])
    }
 
  return (
    <>
      {props.shoppingCart?.length === 0 ? (
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
              {props.shoppingCart?.map((cart) => {
                return (
                  <tr className="shoppingCartItems">
                    <td className="sc_item">{cart.product}</td>
                    <td className="sc_item">{cart.quantity}</td>
                    <td className="sc_item">${cart.price.toFixed(2)}</td>
                    <td className="sc_item">
                      ${(cart.price * cart.quantity).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br />
          <div id="checkout">
            <div style={{marginLeft: "8px", marginTop: "10px", marginBottom: "10px"}}>Subtotal <span className="prices">${(subtotal).toFixed(2)}</span></div>
            <div style={{ marginLeft: "8px",marginBottom: "10px"}} >Taxes and Fees <span className="prices">${(taxes).toFixed(2)}</span></div>
            <div style={{ marginLeft: "8px",marginBottom: "10px"}} id="checkoutHeader"> Total <span className="prices">${(total).toFixed(2)}</span></div>
          </div>
          <button id="sc-button" onClick={emptyCart}>Clear Cart</button>
        </>
      )}
    </>
  );
}
