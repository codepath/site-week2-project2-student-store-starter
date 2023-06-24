import { useState} from "react";
import { Link } from "react-router-dom";
import "./CheckoutCartForm.css";
import axios from "axios";
function PurchaseMessage({purchase}){
    // show message if loader is inactive
  return (
    <>
      <h1>Thanks for shoppping!</h1>
      <Link to={`/purchases/${purchase.id}`}>
        <button className="compact-button view-receipt-button">View Receipt</button>
      </Link>
    </>
  )
}
function Loader(){
  return (
    <h1>
      Loading...
    </h1>
  )
}
function ErrorMessage(){
  return (
    <h2 className="error-message">
      <span style={{"color": "red"}}>Uh oh! Something went wrong.</span> Make sure your cart isn't empty and try again!
    </h2>
  )
}
export default function CheckoutCartForm({ checkoutCart, dispatch }){
    
    const [formData, setFormData] = useState({ name: "", email: "", agreement: false });
    const [showPurchaseMessage, setShowPurchaseMessage] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [purchase, setPurchase] = useState({});
    const URL = "http://localhost:3001/store";
  
    function handleSubmit(event) {
      event.preventDefault();
      if (formData.name && formData.email && formData.agreement && Object.keys(checkoutCart).length){
        // if name, and email are inputted
        // checkout cart is non-empty, and agreement 
        // is checked, then post new purchase
        const newPurchase = {
          user: {
            name: formData.name,
            email: formData.email
          },
          shoppingCart: Object.values(checkoutCart)
        }
  
        setShowLoader(() => true);
        axios.post(URL, newPurchase)
          .then((response) => {
            setShowLoader(() => false);
            setPurchase(() => response.data);
            setShowPurchaseMessage(() => true);
            setFormData({ name: "", email: "", agreement: false});
            // dispatch({
            //     type: "cleared"
            //   });
          }).catch((error) => {
            setShowLoader(() => false);
            setShowErrorMessage(() => true);
          });
        // resets form and checkout cart
        // then show purchase message
        // 
      }
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
              value={formData.agreement}
              onChange={handleChange}
            />
          </div>
          <button className="buy-now-button compact-button">{ "Buy Now"}</button>
        </form>
        {showLoader && <Loader />}
        {showPurchaseMessage && <PurchaseMessage purchase={purchase} />}
        {showErrorMessage && <ErrorMessage />}
      </div>
    );
  }