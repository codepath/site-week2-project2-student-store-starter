import * as React from "react"
import ShoppingCart from  "../ShoppingCart/ShoppingCart"
import "./Sidebar.css"

export default function Sidebar({
  isOpen, 
  shoppingCart, 
  products, 
  checkoutForm, 
  handleOnCheckoutFormChange, 
  handleOnSubmitCheckoutForm, 
  handleOnToggle,
  handleRemoveItemFromCart,
  handleAddItemToCart,
  handleGetQuantityOfItemInCart,
  getTotalItemsInCart}
  ) {
  return (
    <section className={`sidebar ${isOpen}`}>
      <div className="wrapper">
        <button className={`toggle-button button ${isOpen}`} onClick={handleOnToggle}>

          <img className="material-icons md-48" src="/src/assets/right-arrow.png"></img>
        </button>
        <ShoppingCart 
        isOpen={isOpen}
        products={products}
        shoppingCart={shoppingCart} 
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        handleAddItemToCart={handleAddItemToCart}
        handleGetQuantityOfItemInCart={handleGetQuantityOfItemInCart}
        getTotalItemsInCart={getTotalItemsInCart}
        handleOnToggle={handleOnToggle}
        
        />
      </div>
    </section>
  )
}
