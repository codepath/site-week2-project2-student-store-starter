import * as React from "react";
import "./Orders.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Transaction from "../Transaction/Transaction";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'


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
}) {
  if (!allTransactions || allTransactions.length == 0) {
    return (
      <div className="orders">
        {" "}
        <h3>You have not placed any orders.</h3>
      </div>
    );
  }
  console.log("after: ", totalOrderQuantity)


  return (
    <div className="orders">
      <section className="card-body">
        <h1>Your Previous Orders:</h1>
        {allTransactions?.map((transaction, i) => (
          <>
            <h4 className="header">
              {/* {console.log(transaction)} */}
              Transaction #{i + 1}: {totalOrderQuantity[i]} item
              {totalOrderQuantity[i] > 1 ? "s" : ""} ordered by{" "}
              {transaction.name}
            </h4>
            <button className="see-transaction">
              {/* {console.log(transaction)} */}
              {/* <Link to={{ pathname: "/orders/0", search:"hello", hash: "", state: { transaction } }}> */}
                <Link to="/orders/0" state={{ transaction: "transaction"}}>
                    See Transaction Details
                </Link>
            </button>
           
            <Transaction transaction={transaction} products={products}></Transaction>
          </>
        ))}
      </section>
    </div>
  );
}
