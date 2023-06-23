// YOUR CODE HERE
// const express = require("express");
// const app = express();

// app.use(express.json());

// // Endpoint for handling checkout and generating a receipt
// app.post("/checkout", (req, res) => {
//   const cartItems = req.body.cartItems;

//   // Calculate subtotal
//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.count,
//     0
//   );

//   // Calculate tax
//   const taxRate = 0.0875; // Assuming tax rate of 10%
//   const tax = subtotal * taxRate;

//   // Calculate total
//   const total = subtotal + tax;

//   // Generate receipt data
//   const receipt = {
//     cartItems,
//     subtotal,
//     tax,
//     total,
//     timestamp: new Date().toLocaleString(),
//   };

//   // Implement your logic to send the receipt, save the purchase details, etc.
//   // Here, we'll just send the receipt as the response.
//   res.json(receipt);
// });




// module.exports = app;
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Endpoint for handling checkout and generating a receipt
// app.post("/checkout", (req, res) => {
//   const cartItems = req.body.cartItems;

//   // Calculate subtotal
//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.count,
//     0
//   );

//   // Calculate tax
//   const taxRate = 0.0875; // Assuming tax rate of 10%
//   const tax = subtotal * taxRate;

//   // Calculate total
//   const total = subtotal + tax;

//   // Generate receipt data
//   const receipt = {
//     cartItems,
//     subtotal,
//     tax,
//     total,
//     timestamp: new Date().toLocaleString(),
//   };

//   // Implement your logic to send the receipt, save the purchase details, etc.
//   // Here, we'll just send the receipt as the response.
//   res.json(receipt);
// });

// app.listen(port, () => {
//   console.log(`🚀 Server listening on port ${port}`);
// });
