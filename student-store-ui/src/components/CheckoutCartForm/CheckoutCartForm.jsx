import { useState, useEffect } from "react";
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
export default function CheckoutCartForm({ setCheckoutCart }){
    // form to handle user checkout credentials
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
      setCheckoutCart({});
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
      <>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="name"></label>
        <input
          type="text"
          className="form-input"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label className="form-label" htmlFor="email"></label>
        <input
          className="form-input"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button>{ "Buy Now"}</button>
      </form>
      {hasPurchased && <PurchaseMessage />}
      </>
    );
  }