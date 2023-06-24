import * as React from "react";
import "./Orders.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Transaction from "../Transaction/Transaction";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const gifToDisplay =
  "https://api.giphy.com/v1/gifs/search?q=shopping&limit=1&apiKey=RXqwRIzTKNCuE32A6fSJFG4kiYoob3hv";
// function displayResults(results) {
//     let gifsHTMLString = ""
//     for (let gif of results) {
//       gifsHTMLString += generateGifHTML(gif?.images?.original?.url ?? "")
//     }
//   console.log(resultsEl.innerHTML)
//     resultsEl.innerHTML += gifsHTMLString
//   }
/** Render div element for a single GIF. */
// function generateGifHTML(url) {
//     return `
//       <div class="gif">
//           <img src="${url}" />
//       </div>
//   `
//   }

export default function Orders({
  products,
  receiptName,
  receiptEmail,
  totalSpendings,
  allTransactions,
  totalOrderQuantity,
  setTotalOrderQuantity,
  setAllTransactions,
  filteredTransactions,
  transactionInput,
  handleTransactionInput,
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
              Transaction #{i + 1}: {totalOrderQuantity[i]} item
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
            ></Transaction>
          </>
        ))}
      </section>
    </div>
  );
}
