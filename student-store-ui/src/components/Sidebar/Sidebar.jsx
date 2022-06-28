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
        {props.error ?<h4 className="error">{props.error}: Missing Cart Information</h4>
        : props.shoppingCart.length == 0 ? 
        <div><Receipt receipt={props.receipt}/></div> : null}
        
        </div>
      
    </section>
  )
  
}

function Receipt(props) {
  console.log("reciept made")
  return(
    <div className="receipt">
      <p>Showing receipt for {props.receipt.user.name} available at {props.receipt.user.email}:</p>
      <ul>
        {props.receipt.items.map((item)=> {
          return(
            <li key={item.name}>{item.quantity} total {item.name} at a cost of ${item.price} for a total cost of ${item.totalPrice}</li>
          )
        })}
      </ul>
    </div>
  )
      }
