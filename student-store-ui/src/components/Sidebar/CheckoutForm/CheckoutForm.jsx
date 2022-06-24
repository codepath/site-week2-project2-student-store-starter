import "./CheckoutForm.css"
// import Link from "react"
import { Link } from "react-router-dom"

export default function CheckoutForm({isOpen, checkoutForm, shoppingCart, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}){
    
    return(
        <div className="shopping-cart">
            <input type="text" className="checkout-form-input" />
            <input type="text" className="checkout-form-input" />

        </div>
    )
}