import * as React from "react"
import "./Sidebar.css"
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsFillCartPlusFill, BsFillInfoCircleFill } from "react-icons/bs"
import { MdPayment } from "react-icons/md"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import Receipt from "../Receipt/Receipt"

export default function Sidebar({receipt, isOpen, setReceipt, error, success, checkoutForm, products, setEmail,  handleOnCheckoutFormChange,  handleOnSubmitCheckoutForm, handleOnToggle, setIsOpen,shoppingCart,setShoppingCart}) {
  console.log(receipt)
  if(!isOpen){
    return (
      <section className="sidebar closed" id="sidebar">
        <div className="wrapper">
          <button className="toggle-button button closed" onClick={handleOnToggle}><i className="material-icons"><BsFillArrowRightCircleFill /></i></button>
          <div className="shopping-cart">
            <div className="cart-icons">
              <span className="cart-icon icon button">
                <i className="material-icons" ><BsFillCartPlusFill /></i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons"><MdPayment /></i>
              </span>
              <span className="cart-icon icon button">
                <i className="material-icons"><BsFillInfoCircleFill /></i>
              </span>
            </div>
          </div>
        </div>
      </section>
    )
  }
  else if(isOpen)
  return (
    <section className="sidebar open" id="sidebar">
      <div className="wrapper">
        <button className="toggle-button button open" onClick={handleOnToggle}><i className="material-icons"><BsFillArrowLeftCircleFill /></i></button>
        {isOpen ? <div><ShoppingCart isOpen={isOpen} products={products} shoppingCart={shoppingCart}/>
        <CheckoutForm isOpen={isOpen} shoppingCart={shoppingCart} checkoutForm={checkoutForm}
         handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          />{error ?<h4 className="error">{error}: Missing Cart Information</h4>: success && shoppingCart.length == 0 ? 
          <div> 
          <Receipt receipt={receipt} setReceipt={setReceipt}/></div> : null}</div> : null}
        </div>
    </section>
  ) 
}
