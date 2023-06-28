import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import ShoppingList from "../ShoppingList/ShoppingList"; 

export default function Sidebar({cart, products}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <section className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button onClick={toggleSidebar}>
        {isCollapsed ? "Show Cart" : "Hide Cart"}
      </button>
      {!isCollapsed && (
        <>
          <ShoppingList cart={cart} products={products} />

          <div>
            <h2>Payment Info 💳</h2>
            <div class="checkout-form">
              <div class="input-field">
                <label class="label">Name</label>
                <div class="control ">
                  <input name="name" class="checkout-form-input" type="text" placeholder="Student Name" value="" />
                </div>
              </div>
              <div class="input-field">
                <label class="label">Email</label>
                <div class="control">
                  <input name="email" class="checkout-form-input" type="email" placeholder="student@codepath.org" value="" />
                </div>
              </div>
              <div class="field">
                <div class="control">
                  <label class="checkbox"/>
                    <input name="termsAndConditions" type="checkbox" /><span class="label">I agree to the <a href="#terms-and-conditions">terms and conditions</a></span>
                </div>
              </div>
              <p class="is-danger"></p>
              <div class="field">
                <div class="control">
                  <button class="button checkout-button">Checkout</button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Checkout Info 📄</h2>
            <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
          </div>
        </>
      )}
    </section>
  );
}
