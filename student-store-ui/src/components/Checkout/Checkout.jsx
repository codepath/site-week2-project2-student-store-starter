import react, { useState } from "react"
import "./Checkout.css"

export default function Checkout({ShoppingList,SubTotal,Name,Email}){
    const[Checkout, SetCheckOut] = useState(true)
    return(
        <div className="WholeCheckout">
            <div className="buttonCheckout">
                <button className="CheckoutButton" onClick={() => SetCheckOut(!Checkout)}>Checkout</button>
            </div>
            <div className="BeforeCheckout" style = {{display: Checkout ? "" : "none"}}>
                <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
            </div>
            <div className="AfterCheckout" style = {{display: Checkout ? "none" : ""}}>
                <p>Recipt</p>
                <p>Showing recipt for {Name} available at {Email}</p>
                {ShoppingList.map((item) => {
                    return(
                        <p>{item.quantity} total {item.name} purchased at a cost of ${item.price} for a total cost of ${item.price * item.quantity}</p>
                    )
                })}
                <p>Before taxes the subtotal was ${SubTotal}</p>
                <p>After taxes and fees were applied the total comes out to be ${(+SubTotal.toFixed(2) + +(SubTotal.toFixed(2) * 0.0875).toFixed(2)).toFixed(2)}</p>
                <button className="ContinueShopping" onClick={() => SetCheckOut(!Checkout)}>Continue Shopping</button>
            </div>
        </div>
    )
}