import * as React from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar(props) {
  return (
    <section setIsOpen={props.setIsOpen} className={`sidebar ${props.isOpen ? `open` : `closed`}`}>
      <div className="sidebar-wrapper">
        <button className="toggle-button" onClick={props.handleOnToggle}>
          <i className={`fa-solid fa-arrow-right arrow ${props.isOpen ? `closed` : `open`}`}></i>
        </button>
        <ShoppingCart setIsOpen={props.setIsOpen} shopMore={props.shopMore} order={props.order} getReceipt={props.getReceipt} setGetReceipt={props.setGetReceipt} checkoutError={props.checkoutError} checkoutForm={props.checkoutForm} handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} handleOnSubmit={props.handleOnSubmitCheckoutForm} products={props.products} isOpen={props.isOpen} shoppingCart={props.shoppingCart}/>
      </div>
    </section>
  )
}
