import * as React from "react"
import "./Checkout.css"

export default function Checkout({setQuantities, setCart, cart, setCheckout, name, email, quantities, originalProducts, taxes, total, subtotal}){
    let filterdata = quantities.filter(([id, quantity]) => quantity > 0)
  
    function handleExit (){
        setCheckout(false);
    }
    
    return(
        <>
        <div className="checkout-receipt">
        <h3> Receipt</h3> 
        <span>Showing receipt for {name} available at {email}</span>
        {filterdata.map(([id, quantity]) => {
        
        // {filterdata.map(([id, quantity]) => {
          const product = originalProducts.find(product => product.id === id)
          return(
            <p>
                &bull; {quantity} total {product.name} purchased at a cost of {product.price} for a total cost of {product.price * quantity}
            </p>
          )
          })} 
           <p>
            &bull; Before taxes, the subtotal was {subtotal}
          </p>
          <p>
            &bull; After taxes and fees were applied, the total comes out to {total}
          </p>
          </div>
          <p className="exitbt">
          <button onClick={handleExit} >Exit</button>
          </p>
          <button onClick={handleExit} >Shop More</button>
          
        
        </>
    )
}