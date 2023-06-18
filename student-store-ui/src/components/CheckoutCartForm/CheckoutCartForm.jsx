import { useState, useEffect, useContext } from "react";
import { CheckoutCartDispatchContext } from "../CheckoutCartContext/CheckoutCartContext";
import "./CheckoutCartForm.css";
function PurchaseMessage(){
    const [showLoader, setShowLoader] = useState(true); // used to display activiy loader
    useEffect(() => {
        const timer = setTimeout(() => {
            // loader will be removed after 1 second
            setShowLoader((initial) => !initial);
            console.log("showing checkout messge")
        }, 500);
        return () => clearTimeout(timer);
    }, []);
    // show message if loader is inactive
    return (
        <>
            {showLoader ?
                <p> Loading... </p>
                :
                <h1>Thanks for shoppping!</h1>
            }
        </>
    )
}
export default function CheckoutCartForm(){
    // form to handle user checkout credentials
    const dispatch = useContext(CheckoutCartDispatchContext);
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [hasPurchased, setHasPurchased] = useState(false);
    // check if empty
    let customerName = "";
    let customerEmail = "";
  
    function handleSubmit(event) {
      event.preventDefault();
      // update customer name and email 
      // for the purchase method
      customerName = formData.name;
      customerEmail = formData.email;

      // resets form and checkout cart
      // then show purchase message
      setHasPurchased(true);
      setFormData({ name: "", email: "" });
      dispatch({
        type: "cleared"
      });
    }
  
    // Update local state with current state of input element (render each keystroke)
   function handleChange(event) {
      const value = event.target.value;
      const name = event.target.name;
  
      setFormData(initialData => ({
        ...initialData,
        [name]: value
      }));
    }
  
    return (
      <div className="cart-payment-form-container">
        <h1>Payment<i className="material-symbols-outlined">attach_money</i></h1>
        <form className="cart-payment-form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="name">Name</label>
          <input
            type="text"
            className="form-input"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          <label className="form-label" htmlFor="email">Email</label>
          <input
            className="form-input"
            type="text"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
          />
          <div className="form-checkbox-container">
            <label className="form-label form-checkbox-label" htmlFor="agreement">I agree to CodePath Collectible's Terms of Service</label>
            <input
              className="form-checkbox"
              type="checkbox"
              name="agreement"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <button>{ "Buy Now"}</button>
        </form>
        {hasPurchased && <PurchaseMessage />}
      </div>
    );
  }