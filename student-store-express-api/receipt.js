function receiptCalculation(cartItems, products, taxRate) {
  let subtotal = 0;
  let taxes = 0;
  let total = 0;

  Object.keys(cartItems).forEach((id) => {
    products.map((product) => 
    product.id === +id ? 
    (subtotal += (product.price * cartItems[product.id])) : console.log('err'));

    taxes = subtotal * +taxRate
    total = (subtotal + taxes).toFixed(2)
  });

  return { subtotal, taxes, total };
}


module.exports = receiptCalculation;
