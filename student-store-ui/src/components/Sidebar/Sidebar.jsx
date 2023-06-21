import * as React from "react"
import "./Sidebar.css"
import {useEffect, useState} from "react"
import ShoppingCart from '../ShoppingCart/ShoppingCart'

// export default function Sidebar(products, onToggle, sidebarOpen) {
  export default function Sidebar({products, onToggle, sidebarOpen, handleOnCheckoutFormChange, shoppingCart, handleOnSubmitCheckoutForm}) {
   console.log(shoppingCart)
    // // console.log(changing)
    // // console.log(products.onToggle)
//     // console.log(sidebarOpen)
// // console.log(onToggle)
// // console.log(sidebarOpen)
const [nameTerm, setNameTerm] = useState("")
const [emailTerm, setEmailTerm] = useState("")

  function handleNameChange(event){
    setNameTerm(event.target.value)
  }
  function handleEmailChange(event){
    setEmailTerm(event.target.value)
  }


  if (sidebarOpen){
    // console.log("sidebar is now open")
    return(
    <section className="sidebar open">
          {/* <p>Sidebar</p> */}
          <div className="wrapper">
            <button className="toggle-button button open" onClick={() => onToggle(!sidebarOpen)}>
              <i className="material-icons md-48">arrow_forward</i>
            </button>
            <div className="shopping-cart">

              <div className="open">
                <h3 className="">Shopping Cart 
                  <span className="button">
                    <i className="material-icons md-48">add_shopping_cart</i>
                  </span>
                </h3>
                
                <ShoppingCart sidebarOpen = {sidebarOpen} products={products} shoppingCart={shoppingCart}></ShoppingCart>
                



                <div className="checkout-form">
                  <h3 className="">Payment Info 
                    <span className="button">
                      <i className="material-icons md-48">monetization_on</i>
                    </span>
                  </h3>
                  <div className="input-field">
                    <label className="label">Name</label>
                    <div className="control ">
                      <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value={nameTerm} onChange = {handleNameChange} onSubmit = {handleOnSubmitCheckoutForm}></input>
                    </div>
                  </div>
                  <div className="input-field">
                    <label className="label">Email</label>
                      <div className="control">
                        <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value={emailTerm} onChange={handleEmailChange}></input>
                      </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label className="checkbox">
                        <input name="termsAndConditions" type="checkbox"></input>
                          <span className="label">I agree to the <a href="#terms-and-conditions" id ="terms-and-conditions">terms and conditions</a></span>
                      </label>
                    </div>
                  </div>
                  <p className="is-danger"></p>
                  <div className="field">
                    <div className="control">
                      <button className="button checkout-button">Checkout</button>
                    </div>
                  </div>
                </div>
                <div className="checkout-success">
                  <h3>Checkout Info 
                    <span className="icon button">
                      <i className="material-icons md-48">fact_check</i>
                    </span>
                  </h3>
                  <div className="content">
                    <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
                  </div>
                </div>
              </div>


              {/* <div className="cart-icons">
                <span className="cart-icon icon button">
                  <i className="material-icons md-48">add_shopping_cart</i>
                </span>
                <span className="cart-icon icon button">
                  <i className="material-icons md-48">monetization_on</i>
                </span>
                <span className="cart-icon icon button">
                  <i className="material-icons md-48">fact_check</i>
                </span>
              </div> */}
            </div>
          </div>
        </section>
    )
  } else {
    // console.log("sidebar is now closed");
  return (
   
    <section className="sidebar closed">
      {/* <p>Sidebar</p> */}
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={onToggle}>
          <i className="material-icons md-48">arrow_forward</i>
        </button>
        <div className="shopping-cart">
          <div className="cart-icons">
            <span className="cart-icon icon button">
              <i className="material-icons md-48" onClick={() => onToggle(!sidebarOpen)} > add_shopping_cart</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48" onClick={() => onToggle(!sidebarOpen)} > monetization_on</i>
            </span>
            <span className="cart-icon icon button">
              <i className="material-icons md-48" onClick={() => onToggle(!sidebarOpen)} > fact_check</i>
            </span>
          </div>
        </div>
      </div>
    </section>
 
  )
  }
}