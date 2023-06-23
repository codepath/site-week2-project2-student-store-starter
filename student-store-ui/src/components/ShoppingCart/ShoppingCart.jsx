// import React from "react";
// import "./ShoppingCart.css"

// function ShoppingCart({ cartItems,setcartItems }) {
//   // Calculate subtotal
//   const subtotal = cartItems?.reduce(
//     (total, item) => total + item.price * item.count,
//     0
//   );

//     console.log("shopping cart items", cartItems)

//   // Calculate tax
//   const taxRate = 0.0875; // Assuming tax rate of 10%
//   const tax = subtotal * taxRate;

//   // Calculate total
//   const total = subtotal + tax;

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Subtotal</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems?.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.count}</td>
//               <td>
//                 {item.price.toLocaleString("en-US", {
//                   style: "currency",
//                   currency: "USD",
//                 })}
//               </td>
//               <td>
//                 {(item.price * item.count).toLocaleString("en-US", {
//                   style: "currency",
//                   currency: "USD",
//                 })}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td></td>
//             <td></td>
//             <td>Subtotal:</td>
//             <td>
//               {subtotal?.toLocaleString("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               })}
//             </td>
//           </tr>
//           <tr>
//             <td></td>
//             <td></td>
//             <td>Tax:</td>
//             <td>
//               {tax.toLocaleString("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               })}
//             </td>
//           </tr>
//           <tr>
//             <td></td>
//             <td></td>
//             <td>Total:</td>
//             <td>
//               {total.toLocaleString("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               })}
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// }

// export default ShoppingCart;


// import React, { useState } from "react";
// import axios from "axios";
// import "./ShoppingCart.css";

// function ShoppingCart({ cartItems, setCartItems }) {
//   const [receipt, setReceipt] = useState(null);

//   // Calculate subtotal
//   const subtotal = cartItems?.reduce(
//     (total, item) => total + item.price * item.count,
//     0
//   );

//   // Calculate tax
//   const taxRate = 0.0875; // Assuming tax rate of 10%
//   const tax = subtotal * taxRate;

//   // Calculate total
//   const total = subtotal + tax;

//   // Function to handle checkout
//   const handleCheckout = async () => {
//     try {
//       const response = await axios.post("/checkout", { cartItems });

//       // Set the receipt received from the server
//       setReceipt(response.data);
//       // Clear the cart items
//       setCartItems([]);
//     } catch (error) {
//       console.error("Error during checkout:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Product</th>
//             <th>Quantity</th>
//             <th>Price</th>
//             <th>Subtotal</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems?.map((item) => (
//             <tr key={item.id}>
//               <td>{item.name}</td>
//               <td>{item.count}</td>
//               <td>
//                 {item.price.toLocaleString("en-US", {
//                   style: "currency",
//                   currency: "USD",
//                 })}
//               </td>
//               <td>
//                 {(item.price * item.count).toLocaleString("en-US", {
//                   style: "currency",
//                   currency: "USD",
//                 })}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <tfoot>
//           <tr>
//             <td></td>
//             <td></td>
//             <td>Subtotal:</td>
//             <td>
//               {subtotal?.toLocaleString("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               })}
//             </td>
//           </tr>
//           <tr>
//             <td></td>
//             <td></td>
//             <td>Tax:</td>
//             <td>
//               {tax.toLocaleString("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               })}
//             </td>
//           </tr>
//           <tr>
//             <td></td>
//             <td></td>
//             <td>Total:</td>
//             <td>
//               {total.toLocaleString("en-US", {
//                 style: "currency",
//                 currency: "USD",
//               })}
//             </td>
//           </tr>
//         </tfoot>
//       </table>
//       <button onClick={handleCheckout}>Checkout</button>
//       {receipt && (
//         <div>
//           <h3>Receipt</h3>
//           <p>Timestamp: {receipt.timestamp}</p>
//           {/* Display other receipt details */}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ShoppingCart;
import React, { useState } from "react";
import "./ShoppingCart.css";

function ShoppingCart({ cartItems, setCartItems }) {
  const [receipt, setReceipt] = useState(null);

  // Calculate subtotal
  const subtotal = cartItems?.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  // Calculate tax
  const taxRate = 0.0875; // Assuming tax rate of 10%
  const tax = subtotal * taxRate;

  // Calculate total
  const total = subtotal + tax;

  // Function to handle checkout
  const handleCheckout = () => {
    // Simulating receipt data
    const receiptData = {
      timestamp: new Date().toLocaleString(),
      items: cartItems,
      subtotal: subtotal,
      tax: tax,
      total: total,
    };

    // Set the receipt data
    setReceipt(receiptData);

    // Clear the cart items
    setCartItems([]);
  };

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
      <button onClick={handleCheckout}>Checkout</button>
      {receipt && (
        <div>
          <h3>Receipt</h3>
          <p>Timestamp: {receipt.timestamp}</p>
          <h4>Items:</h4>
          <ul>
            {receipt.items.map((item) => (
              <li key={item.id}>
                {item.name} - {item.count} x {item.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </li>
            ))}
          </ul>
          <p>Subtotal: {receipt.subtotal.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</p>
          <p>Tax: {receipt.tax.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</p>
          <p>Total: {receipt.total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}</p>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;

