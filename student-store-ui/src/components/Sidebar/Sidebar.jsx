import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import ShoppingList from "../ShoppingList/ShoppingList";

export default function Sidebar({ cart, setCart, products }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [checkedOut, setCheckedOut] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [taxesAndFees, setTaxesAndFees] = useState(0);
  const [total, setTotal] = useState(0);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleCheckout = () => {
    setCheckedOut(true);
    setCart({});
    // Calculate and store the receipt information
    const subTotal = Object.entries(cart).reduce((total, [id, quantity]) => {
      const product = products.find((product) => product.id === Number(id));
      return total + product.price * quantity;
    }, 0);
    const taxes = subTotal * 0.0875; // Assuming 8.75% tax
    const totalAmount = subTotal + taxes;
    setSubtotal(subTotal);
    setTaxesAndFees(taxes);
    setTotal(totalAmount);
  };

  // This effect will run whenever the cart changes
  useEffect(() => {
    // If the cart is not empty, set checkedOut to false
    if (Object.keys(cart).length > 0) {
      setCheckedOut(false);
    }
  }, [cart]);

  return (
    <section className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <button onClick={toggleSidebar}>
        {isCollapsed ? "Show Cart" : "Hide Cart"}
      </button>
      {!isCollapsed && (
        <>
          <ShoppingList 
            cart={cart}
            products={products}
            subtotal={subtotal}
            taxesAndFees={taxesAndFees} 
            total={total} />

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
          {checkedOut && (
            <div>
              <h2>Receipt</h2>
              {/* ... Render the receipt information */}
              <p>Subtotal: {subtotal}</p>
              <p>Taxes and Fees: {taxesAndFees}</p>
              <p>Total: {total}</p>
            </div>
          )}
        </>
      )}
    </section>
  );
}



