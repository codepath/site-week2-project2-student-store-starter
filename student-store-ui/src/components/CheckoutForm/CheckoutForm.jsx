import * as React from "react"
import "./CheckoutForm.css"

export default function CheckoutForm({checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm}) {
    return (<div className="checkout-form">
        <h2>Payment Info</h2>
        <input type="email" name="email" placeholder="student@codepath.org" value={checkoutForm.email} onChange={(event) => {handleOnCheckoutFormChange(event)}} />
        <input type="text" name="name" placeholder="Student Name" value={checkoutForm.name} onChange={(event) => {handleOnCheckoutFormChange(event)}} />
        <button type="submit" onClick={handleOnSubmitCheckoutForm}>Checkout</button>
    </div>);
}
//import * as React from "react"
////import "./CheckoutForm.css"

//export default function CheckoutForm(props) {
    //console.log(props)
    //return (<div className="checkout-form">
        //<h2>Payment Info</h2>
        //<input type="email" name="email" placeholder="student@codepath.org" value={props.checkoutForm.email} 
        //onChange={(event) => {props.handleOnCheckoutFormChange(event)}} />
        //<input type="text" name="name" placeholder="Student Name" value={props.checkoutForm.name} 
        //onChange={(event) => {props.handleOnCheckoutFormChange(event)}} />
        //<button type="submit" onClick={props.handleOnSubmitCheckoutForm}>Checkout</button>
    //</div>);
//}