import * as React from "react";
import "./Sidebar.css";
import { useState } from "react";
import ShoppingList from "../ShoppingList/ShoppingList"; 

export default function Sidebar({cart, setCart, products}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [checkedOut, setCheckedOut] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleCheckout = () => {
    setCheckedOut(true);
    setCart({});
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
                  <button class="button checkout-button" onClick={handleCheckout}>Checkout</button>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div>
            <h2>Checkout Info 📄</h2>
            <p>A confirmation email will be sent to you so that you can confirm this order. Once you have confirmed the order, it will be delivered to your dorm room.</p>
          </div>
          {Object.keys(cart).length > 0 && (
            <div>
              <h2>Receipt</h2>
              {Object.entries(cart).map(([id, quantity]) => {
                const product = products.find(product => product.id === Number(id)); 
                const subtotal = product.price * quantity;
                const taxesAndFees = Number((subtotal * 0.0875).toFixed(2)); // Assuming 8.75% tax
                const total = (subtotal + taxesAndFees).toFixed(2);
                return (
                  <>
                    <p>{quantity} total {product.name} purchased at a cost of ${product.price} for a total cost of ${subtotal}.</p>
                    <p>Before taxes, the subtotal was ${subtotal}</p>
                    <p>After taxes and fees were applied, the total comes out to ${total}</p>
                  </>
                );
              })}
            </div>
          )}
        </>
      )}
    </section>
  );
}






