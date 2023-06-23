import * as React from "react"
import "./ShoppingCart.css"
import { useState, useEffect } from "react"

export default function ShoppingCart({shoppingCart }) {

    function subtotal(shoppingCart){
        return shoppingCart.reduce((sum, item) => {
            return (sum + (item.price * item.quantity))
          }, 0);

    }
    
    const [itemsInCart, setItemsInCart] = useState(false)

    useEffect(() => {
        // Update the itemsInCart state based on the shoppingCart array length
        setItemsInCart(shoppingCart.length > 0);
    }, [shoppingCart]); // useEffects is activated whenever shoppingCart Changes

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
      <h3 className="">
        Shopping Cart
        <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
        </span>
      </h3>
    </div>
  
    <div className="CartTable">
      <div className="header">
        <div className="header-row">
          <span className="flex-2">Name</span>
          <span className="center">Quantity</span>
          <span className="center">Unit Price</span>
          <span className="center">Cost</span>
        </div>
      
  
        {shoppingCart?.map((item) => {
      if (item.quantity > 0) {
        return (
          <div className="product-row" key={item.name}>
            <span className="flex-2 cart-product-name">{item.name}</span>
            <span className="center cart-product-quantity">{item.quantity}</span>
            <span className="center cart-product-price">${item.price.toFixed(2)}</span>
            <span className="center cart-product-subtotal">
            ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        );
      }

    })}
      </div>
  
      <div className="receipt">
        <div className="receipt-subtotal">
          <span className="label">Subtotal</span>
          <span className="center subtotal">${subtotal(shoppingCart).toFixed(2)}</span>
        </div>
        <div className="receipt-taxes">
          <span className="label">Taxes and Fees</span>
          <span className="center">${(subtotal(shoppingCart) * 0.08).toFixed(2)}</span>
        </div>
        <div className="receipt-total">
          <span className="label">Total</span>
          <span className="center total-price">${(subtotal(shoppingCart) + subtotal(shoppingCart) * 0.08).toFixed(2)}</span>
        </div>
      </div>
    </div>
  </>
  
    return (
        <>
        <div className="shopping-cart">
            {itemsInCart ? shoppingCartFull : shoppingCartEmpty}
        </div>
        </>
    )
}