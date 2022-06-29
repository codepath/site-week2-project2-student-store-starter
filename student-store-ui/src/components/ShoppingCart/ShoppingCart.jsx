import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({products, shoppingCart}) {
   console.log(products)
  console.log(shoppingCart)
    let total = 0;
    let taxes = (total*0.0875).toFixed(2);
    let final = 0;
    return (
        <div>
        {shoppingCart.length > 0 ?
        <div className="shopping-cart">
        <h2 className="your-cart">Your Cart</h2>
        <ul className="shopping-cart-items">
        <li className="list-header">
            <div className="header-item">Name</div>
            <div className="header-item">Quantity</div>
            <div className="header-item">Unit Price</div>
            <div className="header-item">Total Price</div>
        </li>
        {shoppingCart.map((item) => {
          console.log(item)
            const itemDetails = products.find((product) => product.id === item.itemId);
            console.log(itemDetails)
            total += itemDetails.price*item.quantity;
            taxes = (total*0.0875).toFixed(2)
            final += total
            final += total*0.0875
            return(
                <li key={item.id} className="list-row">
                    <div className="cart-product-name">{itemDetails.name}</div>
                    <div className="cart-product-quantity">{item.quantity}</div>
                    <div className="cart-product-price">${itemDetails.price}</div>
                    <div className="cart-product-subtotal">${(itemDetails.price * item.quantity).toFixed(2)}</div>
                </li>
            )})}
        </ul>
        <ul className="totals">
            <li className="totals-row"><div className="total-left">Subtotal</div><div className="total-right">${total.toFixed(2)}</div></li>
            <li className="totals-row"><div className="total-left">Taxes and Fees</div><div className="total-right">${taxes}</div></li>
            <li className="totals-row"><div className="total-left">Total</div><div className="total-right">${final.toFixed(2)}</div></li>
        </ul> </div>
        : <div className="notification"><p>"No items added to cart yet. Start shopping now!"</p></div>}
        </div>
    );
}