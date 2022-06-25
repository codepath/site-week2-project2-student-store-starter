import * as React from "react"
import "./Sidebar.css"
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsFillCartPlusFill, BsFillInfoCircleFill } from "react-icons/bs"
import { MdPayment } from "react-icons/md"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"

export default function Sidebar(props) {
  if(!props.isOpen){
    return (
      <section className="sidebar closed" id="sidebar">
        <div className="wrapper">
          <button className="toggle-button button closed" onClick={props.handleOnToggle}><i className="material-icons"><BsFillArrowRightCircleFill /></i></button>
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
  else if(props.isOpen)
  return (
    <section className="sidebar open" id="sidebar">
      <div className="wrapper">
        <button className="toggle-button button open" onClick={props.handleOnToggle}><i className="material-icons"><BsFillArrowLeftCircleFill /></i></button>
        <ShoppingCart isOpen={props.isOpen} products={props.products} shoppingCart={props.shoppingCart}/>
        <label className="checkbox">
        <input id="termsAndConditions" type="checkbox"/>
        <span className="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a></span>
        </label>
        <CheckoutForm isOpen={props.isOpen} shoppingCart={props.shoppingCart} 
        checkoutForm={props.checkoutForm}  submitCheckoutForm={props.submitCheckoutForm}
        handleOnCheckoutFormChange={props.handleOnCheckoutFormChange} 
        handleOnSubmitCheckoutForm={props.handleOnSubmitCheckoutForm} />
        
        </div>
      
    </section>
  )
}
