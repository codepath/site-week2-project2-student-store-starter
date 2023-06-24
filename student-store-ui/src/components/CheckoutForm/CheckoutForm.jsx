import React from "react";
import "./CheckoutForm.css";

const CheckoutForm = ({
  isOpen,
  shoppingCart,
  checkoutForm,
  handleOnCheckoutForm,
  handleOnSubmitCheckoutForm,
  handleNameChange,
  handleEmailChange,
  subplustaxesAndFees,
  ftotal,
  sendSubTotal,
  products,
  checkOutRecipt,
  buyerEmail,
  buyerName,
}) => {
  console.log("buyerEmail", buyerEmail);
  console.log("checkout", checkOutRecipt);
  return (
    <div className="checkout-form">
      {/* {shoppingCart.splice(0, shoppingCart.length)} */}
      {"Showing receipt for " + buyerName + " available at " + buyerEmail + ":"}

      <ul>
        {checkOutRecipt.map((product) => {
          return (
            <li>
              {"-->" +
                product.quantity +
                " total " +
                products[product.itemId - 1].name +
                " purshased at a cost of $4.99 for a total cost of $4.99"}
            </li>
          );
        })}
        <li className="subtotalb4taxes">
          {"Before taxes, the subtotal was $" + sendSubTotal}
        </li>
        <li>
          {"After taxes and fees were applied, the total comes out to $" +
            (Math.round(ftotal * 100) / 100).toFixed(2)}
        </li>
      </ul>
    </div>
  );
};

export default CheckoutForm;
