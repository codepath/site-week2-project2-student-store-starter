import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"

export default function Sidebar(props) {
  
  let displayCart;
  if (props.isOpen == true) {
    displayCart = "open"
  } else {
    displayCart = "closed"
  }

  let closeBar = () => {
    
    props.setIsOpen(false)
    
  }

  
  return (
    <section className="sidebar">
      
      <div className = "wrapper">
        
        <div className= {displayCart}>
          <img className="forwardBtn"alt="back button" src="https://cdn-icons.flaticon.com/png/512/2805/premium/2805303.png?token=exp=1656016431~hmac=fea31959488e580b5e09929f4dffd65f" onClick={closeBar}/>
          <h2>
          Shopping Cart
          </h2>
          <ShoppingCart/>
          <h2>
            No items added to cart yet. Start shopping now!
          </h2>

          <h2>
            Payment Info
          </h2>

          <label>Name</label> <input className="bar" name="name" type="text" placeholder="Full Name"/>
          <br/>
          <label>Student Email</label><input className="bar" name="email" type="text" placeholder="student@codepath.org" />
          <button className="btn submit">Checkout</button>
          
          <h2>
            Checkout
          </h2>

          <h4>
            A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.
          </h4>
        </div>
        

      </div>
    
    </section>
  )
}
