function receiptCalculation(cartItems, products) {
  let subtotal = 0;
  let taxes = 0;
  let total = 0;

  Object.keys(cartItems).forEach((id) => {
    products.map((product) => 
    product.id === +id ? 
    (subtotal += (product.price * cartItems[product.id])) : console.log(product));

    taxes = subtotal * 0.0875
    total = subtotal + taxes
  });
  return { subtotal, taxes, total };
}


module.exports = receiptCalculation;
