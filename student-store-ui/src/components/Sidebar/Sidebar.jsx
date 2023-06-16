import * as React from "react";
import { useState } from "react";
import "./Sidebar.css";
import ListItemForm from "./ListItemForm/ListItemForm";
import ShoppingList from "./ShoppingList/ShoppingList";

function CartDetails({ checkoutItems }){
  function CartProductTableRow({ product }){
    return (
      <div className="cart-product-row">
        <span>{product.name}</span>
        <span>{product.quantity}</span>
        <span>{product.price}</span>
        <span>{product.price}</span>
      </div>

    )
  }
  // used to display user checkout items and
  // calculate user checkout total
  return (
    <div className="cart-summary-container">
      <div className="cart-products-table">
        <h1>Cart Summary</h1>
        <div className="cart-table-header-row">
          <span>Name</span>
          <span>Quantity</span>
          <span>Unit Price</span>
          <span>Cost</span>
        </div>
        {checkoutItems.map((item) => {
          // display items only with quantities > 0
          item.quantity > 0 ?  (
            <CartProductTableRow product={item} />
          ) : <></>
        })
        
        }

      </div>
    </div>
  )
}
function CartCheckout(){
  // form to handle user checkout credentials
  return (
    <>
    <p>hellow cart checkout</p>
    </>
  )
}

export default function Sidebar({ checkoutCart }) {  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={"sidebar-container " + (isOpen ? "open" : "")}>
      <button onClick={() => setIsOpen((open) => !open)} className={"sidebar-toggle-button" + (isOpen ? "open" : "")}>
        <i className="material-symbols-outlined">{isOpen ? "arrow_back_ios" : "shopping_cart"}</i>
      </button>
      {isOpen && (
        <>
          <CartDetails checkoutItems={checkoutCart.products} />
          <CartCheckout />
        </>
      )}
    </section>
  )
}
