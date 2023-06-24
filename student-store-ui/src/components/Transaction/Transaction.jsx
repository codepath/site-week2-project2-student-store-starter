import * as React from "react";
import "./Transaction.css";
import { useLocation } from 'react-router-dom'




export default function Transaction({transaction, products}) {
    // const location = useLocation()
// const { transaction } = location.state.transaction
// console.log(transaction)
  return (
   
    <>

        {console.log(transaction)}

      <h4 className="header">
        Showing all orders for {transaction.name}. Order receipt available at{" "}
        {transaction.email}:
      </h4>
      <ul className="purchase">
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
            
          </>
          
        ))}
              </ul>
        <p>
              After taxes and fees were applied, your total came out to{" "}
              {transaction.total}
            </p>

    </>
  );
}
