import * as React from "react";
import "./Orders.css";
import { useParams } from "react-router-dom";

export default function Orders({
  products,
//   order,
  receiptName,
  receiptEmail,
  receiptTotalPrice,
  receiptSubtotal,
  allOrders
}) {
  console.log("ALL ORDER: ", allOrders);
//   if (!order || order.length == 0) {
    if (!allOrders || allOrders.length == 0) {
        return (
      <div className="orders">
        {" "}
        <h3>You have not placed any orders.</h3>
      </div>
    );
  }
//   shoppingCart.forEach((i) => {
//     let specificItemId = i.itemId;
//     let specificItemQuantity = i.quantity;
//     subtotalCalc +=
//       products.filter((product) => specificItemId === product.id)[0].price *
//       specificItemQuantity;
//   });

  return (
    <div className="orders">
      {/* {order} */}
      <section className="card-body">
        <h1>Your Orders:</h1>
        <h4 className="header">
          Showing receipt for {receiptName} available at {receiptEmail}:
        </h4>
        <ul className="purchase">
          {allOrders.map((order) => (
            
            order.map((item) => (
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
                    <img className="product-img"
                  src={
                    products.filter((product) => item.itemId === product.id)[0]
                      .image}
                  alt="product cover"
                ></img>
            </li>
          )))
          
          )}
          <li>
            Before taxes, the subtotal was{" "}
            {receiptSubtotal.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD",
            })}
          </li>
          <li>
            After taxes and fees were applied, the total comes out to{" "}
            {receiptTotalPrice}
          </li>
          
        </ul>
      </section>
    </div>
  );
}
