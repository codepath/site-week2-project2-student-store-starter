import React, { useEffect, useState } from "react";
import "./History.css";
import axios from "axios";
import Receipt from "../Receipt/Receipt";
import Search from "../Search/Search";

export default function History(shoppingCart) {
  const [orders, setOrders] = useState([]);
  const [currReceipt, setCurrReceipt] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/orders")
      .then((response) => {
        setOrders(response.data.orders);
        setSearchResult(response.data.orders);
      })
      .catch((error) => setOrders([]));
  }, [shoppingCart]);

  const handleOnClick = (event) => {
    setCurrReceipt(event.target.getAttribute("details"));
  };

  const filterFunction = (event) => {
    setSearchResult(
      orders.filter((result) =>
        result?.email.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className="history">
      <Search filterFunction={filterFunction} />
      <div className="history-data">
        <div className="history-list">
          {searchResult.map((order) => (
            <div
              className="order-card"
              details={order.receipt}
              onClick={handleOnClick}
            >
              <p
                details={order.receipt}
                onClick={handleOnClick}
                className="card-text"
                item={order}
              >{`Name: ${order.name}`}</p>
              <p
                details={order.receipt}
                onClick={handleOnClick}
                className="card-text"
                item={order}
              >{`Total: $${order.total}`}</p>
            </div>
          ))}
        </div>
        <div className="history-detail">
          {!currReceipt || currReceipt.length === 0 ? (
            <></>
          ) : (
            <Receipt receipt={currReceipt} />
          )}
        </div>
      </div>
    </div>
  );
}
