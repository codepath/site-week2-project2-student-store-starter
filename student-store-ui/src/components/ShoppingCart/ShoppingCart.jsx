import { useEffect, useState } from "react";
import Checkout from "../Checkout/Checkout";
import Receipt from "../Receipt/Receipt";
import "./ShoppingCart.css";
export default function ShoppingCart({
  isOpen,
  setisOpen,
  shoppingCart,
  setshoppingCart,
  products,
  handleOnSubmitCheckoutForm,
  handleOnCheckOutFormChange,
  lastReceipt,
  checkoutForm
}) {
  var classNames = `shhopping-cart${isOpen ? "-active" : ""}`;
  

  const purchase = [];

  const [clicked, setClicked] = useState(false);
 
 
  const [show, setShow] = useState(false);
  const [warning, setWarning] = useState("")
  const [noProduct, setNoProduct] = useState("")
  const [submit,setsubmit]= useState(false)


  
      console.log("HI",checkoutForm)
  

  // const handleChange = (event) => {
  //   if (event.target.checked) {
  //     SetChecked(true);
  //   }
  //   else {
  //     SetChecked(false)
  //   }
  // };
  function handleOnclicked() {

    if (checkoutForm.name.length > 1 && checkoutForm.email.length > 1)
    {
      console.log("Working")
      handleOnSubmitCheckoutForm()
     
    }
    

    
  }

  if (purchase.length > 1)
  {
    setNoProduct("")
    console.log(warning)
  }
   var newShoppingCart =[...shoppingCart]
  for (var i = 0; i < newShoppingCart.length; i++) {
    products.map((element) => {
      if (element.id == newShoppingCart[i].itemId) {
        purchase.push({
          name: element.name,
          price: element.price,
          quantity: newShoppingCart[i].quantity,
        });
      }
    });
  }

  console.log("New",lastReceipt)
 
  return (
    <div className={classNames}>
      <div className="open">
        <button className="back">
          <i
            className="material-icons md-58"
            onClick={() => setisOpen(!isOpen)}
          >
            arrow_backward
          </i>
        </button>
        <h3 className="shop_writing">
          Shopping Cart{" "}
          <span className="button">
            <i className="material-icons md-48">add_shopping_cart</i>
          </span>
        </h3>
        {newShoppingCart.length <= 0 ? (
          <div className="notification">
            No items added to cart yet. Start shopping now! Hhs
          </div>
        ) : (
          <div>
              <Receipt  purchase={purchase} shoppingCart={newShoppingCart} clicked={clicked} submit={submit} />
          </div>
        )}

        <div className="checkout-form">
          <h3 className="payment_info">
            {" "}
            Payment Info{" "}
            <span className="button">
              <i className="material-icons md-48">monetization_on</i>
            </span>
          </h3>
          <div className="input-field">
            <label className="label"></label>
            <div className="control ">
              <input
                name="name"
                className="checkout-form-input"
                type="text"
                value={checkoutForm?.name}
                placeholder="Student Name"
                onChange={(e) =>  handleOnCheckOutFormChange(e)}
              />
            </div>
          </div>
          <div className="input-field">
            <label className="label">Email</label>
            <div className="control">
              <input
                name="email"
                value={checkoutForm?.email}
                className="checkout-form-input"
                type="email"
                onChange={(e) => handleOnCheckOutFormChange(e)}
                placeholder="student@codepath.org"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="checkbox">
                <input
                  name="termsAndConditions"
                  type="checkbox"

               //   onChange={handleChange}
                />
                <span className="label">
                  I agree to the{" "}
                  <a href="#terms-and-conditions">terms and conditions</a>
                </span>
              </label>
            </div>
          </div>
          <p className="is-danger"></p>
          <div className="field">
            <div className="control">
              <button
                className="button checkout-button"
                onClick={handleOnclicked}
              >
                Checkout
              </button> 
            </div>
           
          </div>
           <h3 className="warning">{warning} </h3>
              <h3 className="warning">{noProduct}</h3>
        </div>
        <div className="checkout-success">
          <h3 className="check-info">
            Checkout Info{" "}
            <span className="icon button">
              <i className="material-icons md-48">fact_check</i>
            </span>
          </h3>
          {lastReceipt.purchase?
            <Checkout
             
             products={products}
           
              purchase={purchase}
              newShoppingCart={newShoppingCart}
              isOpen={isOpen}
              setshoppingCart={setshoppingCart}
              clicked={clicked}
              lastReceipt={lastReceipt}
              
            /> : ""
          }
          
          
        

          <div className="content">
            <p>
              A confirmation email will be sent to you so that you can confirm
              this order. Once you have confirmed the order, it will be
              delivered to your dorm room.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
