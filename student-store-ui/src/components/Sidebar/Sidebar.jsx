import * as React from "react"
import "./Sidebar.css"

export default function Sidebar({isActive = false, handleOnClick}) {

  const divClass = isActive ? "sidebar open" : "sidebar closed";


  let closedSideBar = <div className="shoppingCart">
    <span className="cart-icon icon button"><i className="material-icons md-48">add_shopping_cart</i></span>
    <span className="cart-icon icon button"><i className="material-icons md-48">monetization_on</i></span>
    <span className="cart-icon icon button"><i className="material-icons md-48">fact_check</i></span>
  </div>


  let openSideBar = <h1>Sidebar</h1>




  return (
    <section className="sidebar">

      <div className={divClass}>


        <button onClick={handleOnClick}><i className="material-icons md-48">arrow_forward</i></button>
        <div className="wrapper">

          {isActive ? openSideBar : closedSideBar}

          




        </div>





      </div>


      {/* <div className="sidebar opened">


      </div> */}
    </section>
  )
}
