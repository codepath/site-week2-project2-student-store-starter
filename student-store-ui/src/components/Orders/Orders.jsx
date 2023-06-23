import * as React from "react";
import "./Orders.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const gifToDisplay = "https://api.giphy.com/v1/gifs/search?q=shopping&limit=1&apiKey=RXqwRIzTKNCuE32A6fSJFG4kiYoob3hv"
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
  allOrders,
  allTransactions
}) {
    console.log("transaaction list: ", allTransactions);
  if (!allOrders || allOrders.length == 0) {
    return (
      <div className="orders">
        {" "}
        <h3>You have not placed any orders.</h3>
      </div>
    );
  }

  return (
    <div className="orders">
      <section className="card-body">
        <h1>Your Previous Orders:</h1>
        <h4 className="header">
          Showing all orders for {receiptName}. Order receipts available at{" "}
          {receiptEmail}:
        </h4>
        <ul className="purchase">
          {allOrders.map((item) => (
            <li>
              {item.quantity} total
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
                item.quantity *
                  products.filter((product) => item.itemId === product.id)[0]
                    .price}
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
          ))}
          <li>
            After taxes and fees were applied, the total comes out to{" "}
            {totalSpendings}
          </li>
        </ul>
      </section>
    </div>
  );
}
