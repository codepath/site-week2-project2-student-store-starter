import * as React from "react"
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart";

export default function Sidebar({isActive = false, handleClick, shoppingCart, setShoppingCart, count, setCount }) {

  const sideBarClassName = isActive ? "sidebar open" : "sidebar closed";


  let openBar = 
    <ShoppingCart handleClick={handleClick} shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} count={count} setCount={setCount}/>

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
