import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart( {isOpen=false, products=[], shoppingCart=[]} ) {

  console.log(shoppingCart)

  // if shoppingCart is empty, render a notification
  if (shoppingCart.length == 0) {
    return (
      <div className="shopping-cart">
        <p className="notification">No items added to cart yet. Start shopping now!</p>
      </div>
    )
  }

  let subtotal = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    let item = products.find(item => item.id === shoppingCart[i].itemId)
    subtotal += shoppingCart[i].quantity * item.price
  }
  
  let tax = subtotal * 0.0875
  let total = subtotal + tax


  return (
    <div className="shopping-cart">
      <table className="shopping-cart-table">
        <thead>
          <th>Name</th>
          <th>Quantity</th>
          <th>Cost</th>
        </thead>
        {shoppingCart.map(item => 
          <tr className="cart-row" key={item.itemId}>
            <td className="cart-product-name">{(products.find(product => product.id === item.itemId)).name}</td>
            <td className="cart-product-quantity">{item.quantity}</td>
            <td className="cart-product-cost">{"$"+((products.find(product => product.id === item.itemId)).price * item.quantity).toFixed(2)}</td>
          </tr>
        )}
      </table>
      <table className="total-table">
        <tr className="total-table-row">
          <td className="total-table-label">Subtotal</td>
          <td className="total-table-value">{"$"+subtotal.toFixed(2)}</td>
        </tr>
        <tr className="total-table-row">
          <td className="total-table-label">Taxes and Fees</td>
          <td className="total-table-value">{"$"+tax.toFixed(2)}</td>
        </tr>
        <tr className="total-table-row">
          <td className="total-table-label">Total</td>
          <td className="total-table-value">{"$"+total.toFixed(2)}</td>
        </tr>
      </table>
    </div>
  )
}