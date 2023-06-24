import * as React from "react";
import "./Orders.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Transaction from "../Transaction/Transaction";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Orders({
  products,
  allTransactions,
  totalOrderQuantity,
  transactionInput,
  handleTransactionInput,
  setPopupOpen,
  popupOpen,
}) {
  if (!allTransactions || allTransactions.length == 0) {
    return (
      <div className="no-orders">
        <section className="card-body">
          {" "}
          <h3>No orders found.</h3>
          <form className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={transactionInput}
              onChange={handleTransactionInput}
            ></input>
            <i className="material-icons">search</i>
          </form>
        </section>
      </div>
    );
  }

  return (
    <div className="orders">
      <section className="card-body">
        <h1>Your Previous Orders:</h1>

        <form className="search-bar">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={transactionInput}
            onChange={handleTransactionInput}
          ></input>
          <i className="material-icons">search</i>
        </form>

        {allTransactions?.map((transaction, i) => (
          <>
            <h4 className="order-header">
              Transaction #{i + 1}: {totalOrderQuantity[i]} Items
              {totalOrderQuantity[i] > 1 ? "s" : ""} ordered by{" "}
              {transaction.name}
            </h4>
            {/* <button className="see-transaction">
              <Link to="/orders/0" state={{ transaction: "transaction" }}>
                See Transaction Details
              </Link>
            </button> */}

            <Transaction
              transaction={transaction}
              products={products}
              setPopupOpen={setPopupOpen}
              popupOpen={popupOpen}
            ></Transaction>
          </>
        ))}
      </section>
    </div>
  );
}
