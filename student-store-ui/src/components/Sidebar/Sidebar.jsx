import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({isActive = false, handleClick} ) {

  const sideBarClassName = isActive ? "sidebar open" : "sidebar closed";


  let openBar = 

  <div className="wrapper">
  <button className="toggle-button button open" onClick={handleClick}>
    <i className="material-icons md-48">arrow_backward</i>
  </button>

    <div className="shopping-cart">
      <div className="open">
        <h3 className="">Shopping Cart <span className="button">
          <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>

        <div className="notification">No items added to cart yet. Start shopping now!</div>
        
        <div className="checkout-form">
          <h3 className="">Payment Info <span className="button"><i className="material-icons md-48">monetization_on</i></span>
          </h3>
          
          <div className="input-field">
            <label className="label">Name</label>
            
            <div className="control ">
              <input name="name" className="checkout-form-input" type="text" placeholder="Student Name" value=""/>
            </div>
          </div>
          
          <div className="input-field">
            <label className="label">Email</label>
            <div className="control">
              <input name="email" className="checkout-form-input" type="email" placeholder="student@codepath.org" value=""/>
            </div>
          </div>
          
          <div className="field">
            <div className="control">
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
          <h3>Checkout Info <span className="icon button"><i className="material-icons md-48">fact_check</i></span>
          </h3>
          
          <div className="content">
            <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the
  order, it will be delivered to your dorm room.</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>;

  let closeBar = 

  <div className="wrapper">
  <button className="toggle-button button closed" onClick={handleClick}>


  <i className="material-icons md-48">arrow_forward</i><br/><br/><br/>


  <div className="shopping-cart">
      <span className="cart-icon icon button"><i className="material-icons md-48">add_shopping_cart</i></span><br/>
      <span className="cart-icon icon button"><i className="material-icons md-48">monetization_on</i></span><br/>
      <span className="cart-icon icon button"><i className="material-icons md-48">fact_check</i></span><br/>
  </div>
  </button>
</div>

  return (
    <section className={sideBarClassName}>
      
    {sideBarClassName==="sidebar open"?
     openBar
  
    :
      closeBar
    }

    </section>
  )
}
