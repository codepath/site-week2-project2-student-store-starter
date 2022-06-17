import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart() {
    return (
        <div className="shopping-cart">
            <div className="open">
                <h3>Shopping Cart
                    <span className="cart-icon">
                        {/* cart icon here */}
                    </span>
                </h3>
            </div>
        </div>
    )
}
