import React from "react";
import "./ShoppingCart.css"

function ShoppingCart({ cartItems,setcartItems }) {
  // Calculate subtotal
  const subtotal = cartItems?.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

    console.log("shopping cart items", cartItems)

  // Calculate tax
  const taxRate = 0.0875; // Assuming tax rate of 10%
  const tax = subtotal * taxRate;

  // Calculate total
  const total = subtotal + tax;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.count}</td>
              <td>
                {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
              <td>
                {(item.price * item.count).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td>Subtotal:</td>
            <td>
              {subtotal?.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Tax:</td>
            <td>
              {tax.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>Total:</td>
            <td>
              {total.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ShoppingCart;
