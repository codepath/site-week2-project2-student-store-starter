import * as React from "react"
import "./Sidebar.css"
import { useState } from "react"
import ShoppingCart from "../ShoppingCart/ShoppingCart"


export default function Sidebar({clearCart, cart, setCart, originalProducts, setQuantities, quantities}) {
  const [open, setOpen] = useState(false)
  // const addedToCart = Object.entries(quantities).filter(
  //   ([id, quantity]) => quantity > 0
  // );

  // const shoppingCart = [];
  // addedToCart.forEach(([id, quantity])=> shoppingCart.push({ itemId: parseInt(id), quantity: quantity }))
  // const [cart, setCart] = useState([...shoppingCart]);

  function openSidebar(){
    console.log('clicked!')
    setOpen(() => true)
  }

  function closeSideBar(){
    setOpen(() => false)
  }

  return (
    <section  >
      
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

        {
          open ? (
            <div className="open-sidebar">
              <div className='m'>
                <i onClick= {closeSideBar} className="material-icons md-36">arrow_backward</i>
              </div>
              <ShoppingCart clearCart={clearCart} cart={cart} setCart={setCart} setQuantities={setQuantities} quantities={quantities} originalProducts={originalProducts}/>
          </div>
          ) : 
          (
            <div className="sidebar">
              <div className='m'>
                <i onClick= {openSidebar} className="material-icons md-36">arrow_forward</i>
              </div>
              <div >
                <i onClick= {openSidebar} className="material-icons md-36">add_shopping_cart</i>
              </div>
              <div>
                <i onClick= {openSidebar} className="material-icons md-36">monetization_on</i>
              </div>
              <div>
                <i onClick= {openSidebar} className="material-icons md-36">fact_check</i>
              </div>
            </div>
          )

        }
    
       

    </section>
  )
}
