import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({products, shoppingCart}) {
    //console.log("ShoppingCArt", products)
    let totalCost = 0;
    let taxes = ((totalCost*8.75)/100)
    let finalCost = 0;

    return (
        <div>
            {shoppingCart.length > 0 ?
            <div className="header">
                <div className="cart-items">
                <li className="header-row"></li>

                {shoppingCart.map((item) => {
                    let iteminfo = products.find(element => element.id === item.id);
                    totalCost += iteminfo.price*item.quantity;
                    taxes = (totalCost*0.0875).toFixed(2)
                    finalCost + totalCost*(8.75/100).toFixed(2)

                    return(
                        <div key={item.id} className="product-row">
                            <span className="product-name">{iteminfo.name}</span>
                            <span className="product-quantity">{item.quantity}</span>
                            <span className="product-price">${iteminfo.price}</span>
                            <span className="product-subtotal">${iteminfo.price * item.quantity}</span>
                        </div>
                    )})}

                </div>
                <ul className="reciept">
                    <span>Subtotal<div>${totalCost}</div></span>
                    <span>Taxes and Fees<div>${taxes}</div></span>
                    <span>Total<div>${finalCost}</div></span>
                </ul> 
            </div>
            : <div className="empty">No items in the cart</div>}
        </div>
    );
}