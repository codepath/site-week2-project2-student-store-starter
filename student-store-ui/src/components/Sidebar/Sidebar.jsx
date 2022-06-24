import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({isOpen, shoppingCart, products, checkoutForm, handleCheckoutForm, handleSubmitCheckoutForm, handleToggle}) {
  return (
    <section className="sidebar">
      {isOpen == true
      ? <div className="cart-icons">
        <button class="toggle-button button open" onClick={handleToggle}>
          <i className="material-icons md-48">arrow_backward</i>
        </button>
          <span className="cart-icons icon button">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
          <span className="cart-icons icon button">
            <i className="material-icons md-48">monetization_on</i>
          </span>
          <span className="cart-icons icon button">
            <i className="material-icons md-48">fact_check</i>
          </span>
      </div>
      : <div>
        <button className="toggle-button button closed" onClick={handleToggle}>
            <i className="material-icons md-48">arrow_forward</i>
          </button>
      </div>
    }
    </section>
  )
}
