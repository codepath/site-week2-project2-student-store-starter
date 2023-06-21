import * as React from "react"
import "./ShoppingCart.css"
import { useState } from "react"

export default function ShoppingCart() {
    
    const [itemsStatus, setItemsStatus] = useState(true)


    let shoppingCartEmpty = 
    <>
    <div className="open">
                <h3 className="">Shopping Cart <span className="button"><i className="material-icons md-48">add_shopping_cart</i></span></h3>
                <div className="notification">No items added to cart yet. Start shopping now!</div>
    </div>

    
    </>

    let shoppingCartFull = 

    <>
            <div className="open">
                <h3 className="">Shopping Cart <span className="button"><i className="material-icons md-48">add_shopping_cart</i></span></h3>
               
            </div>
            <div class="CartTable">
                <div class="header">
                    <div class="header-row"><span class="flex-2">Name</span><span class="center">Quantity</span><span class="center">Unit Price</span><span class="center">Cost</span></div>
                    <div class="product-row"><span class="flex-2 cart-product-name">Cinnamon Rolls</span><span class="center cart-product-quantity">1</span><span class="center cart-product-price">$2.99</span><span class="center cart-product-subtotal">$2.99</span></div>
                </div>
                <div class="receipt">
                    <div class="receipt-subtotal"><span class="label">Subtotal</span><span></span><span></span><span class="center subtotal">$2.99</span></div>
                    <div class="receipt-taxes"><span class="label">Taxes and Fees</span><span></span><span></span><span class="center">$0.26</span></div>
                    <div class="receipt-total"><span class="label">Total</span><span></span><span></span><span class="center total-price">$3.25</span></div>
                </div>
            </div>

    
    </>
    
    
    return (
        <div className="shopping-cart">

        {itemsStatus ? shoppingCartFull : shoppingCartEmpty}  

            
        </div>
    )
}