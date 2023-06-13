import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({isActive = false, handleClick} ) {

  const sideBarClassName = isActive ? "sidebar open" : "sidebar closed";








  return (
    <section className={sideBarClassName}>
      
      <div className="wrapper">
        <button className="toggle-button button closed" onClick={handleClick}>

            {/* Conditional for sidebar icon */}
            {sideBarClassName==="sidebar open" ?
              <i className="material-icons md-48">arrow_backward</i>
            :
            <i className="material-icons md-48">arrow_forward</i>}

        </button>
        <div className="shopping-cart">
            <span className="cart-icon icon button"><i className="material-icons md-48">add_shopping_cart</i></span><br/>
            <span className="cart-icon icon button"><i className="material-icons md-48">monetization_on</i></span><br/>
            <span className="cart-icon icon button"><i className="material-icons md-48">fact_check</i></span><br/>
        </div>
    </div>
    </section>
  )
}
