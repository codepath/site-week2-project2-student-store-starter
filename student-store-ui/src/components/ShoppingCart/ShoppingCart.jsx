import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart(props) {
  return (
    <div className="shoppingCart">
        <div className = "cartList">
            <div className="headerRow">
                <span>Name</span>
                <span>Quantity</span>
                <span>Unit Price</span>
                <span>Cost</span>
            </div>
            <div className="productRow">
                <span className="cart-product-name">Cinnamon Rolls</span>
                <span className="cart-product-quantity">1</span>
                <span className="cart-product-price">$2.99</span>
                <span className="cart-product-subtotal">$2.99</span>
            </div>
        </div>
        <div className = "totals">
            
                <span>Subtotal</span> <span>$2.99</span>
                <br/>
                <span>Taxes and Fees</span><span>$0.26</span>
                <br/>
                <span>Total</span><span>$3.25</span>
                <br/>
            
            
        </div>
        
    </div>
  )
}