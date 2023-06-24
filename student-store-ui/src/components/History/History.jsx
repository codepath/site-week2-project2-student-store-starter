import React, { useEffect, useState } from "react";
import "./History.css";
import axios from "axios";
import Receipt from "../Receipt/Receipt";

export default function History(shoppingCart) {
    const [orders, setOrders] = useState([])
    const [currReceipt, setCurrReceipt] = useState("")

    useEffect(() => {
        axios.get("http://localhost:3001/orders")
    .then(response => setOrders(response.data.orders))
    .catch(error => setOrders([]))
    }, [shoppingCart])

const handleOnClick= (event) => {setCurrReceipt(event.target.getAttribute("details"))}
  return (<div className="history">
    <div className="history-list">
        {orders.map(order => (<div className="order-card"
        details={order.receipt} onClick={handleOnClick}>
            <p className="card-text" item={order}>{`Name: ${order.name}`}</p>
            <p className="card-text" item={order}>{`Total: $${order.total}`}</p>
        </div>))}
    </div>
    <div className="history-detail">
        {currReceipt.length === 0 ? <></> : <Receipt receipt={currReceipt} />}
    </div>
  </div>)
}
