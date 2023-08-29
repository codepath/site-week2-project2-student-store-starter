import * as React from "react";
import "./Transaction.css";
// import { useLocation } from 'react-router-dom'
import { useState } from "react";
// import { setTimeout } from "timers/promises";

export default function Transaction({
  transaction,
  products,
  setPopupOpen,
  popupOpen,
}) {
  // const location = useLocation()
  // const { transaction } = location.state.transaction
  // console.log(transaction)
  function handlePopup(event) {
    console.log(event.target);
    setPopupOpen([...popupOpen, false]);
  }

  return (
    <>
      <h4 className="transaction-header">
        Showing all orders for {transaction.name}. Order receipt available at{" "}
        {transaction.email}:
      </h4>
      <ul className="transaction-purchase">
        {transaction.order.map((item) => (
          <>
            <li>
              {item.quantity}
              {" " +
                products.filter((product) => item.itemId === product.id)[0]
                  .name +
                " "}
              purchased at a cost of
              {" " +
                products
                  .filter((product) => item.itemId === product.id)[0]
                  .price.toLocaleString("us-EN", {
                    style: "currency",
                    currency: "USD",
                  }) +
                " "}
              for a total cost of
              {" $" +
                (
                  item.quantity *
                  products.filter((product) => item.itemId === product.id)[0]
                    .price
                ).toFixed(2)}
              <br></br>
              <img
                className="product-img"
                src={
                  products.filter((product) => item.itemId === product.id)[0]
                    .image
                }
                alt="product cover"
              ></img>
            </li>
          </>
        ))}
      </ul>
      <p>
        After taxes and fees were applied, your total came out to{" "}
        {transaction.total}
      </p>
      <>
        {popupOpen.includes(false) ? (
          <div>
            Your rating has been recorded. Thank you and shop again soon!
          </div>
        ) : (
          <div className = "rating-div">
            How would you rate your order?
            <button className="review-button" onClick={handlePopup}>
              1
            </button>
            <button className="review-button" onClick={handlePopup}>
              2
            </button>
            <button className="review-button" onClick={handlePopup}>
              3
            </button>
            <button className="review-button" onClick={handlePopup}>
              4
            </button>
            <button className="review-button" onClick={handlePopup}>
              5
            </button>
          </div>
        )}
      </>
    </>
  );
}
