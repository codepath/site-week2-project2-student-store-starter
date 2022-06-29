import * as React from 'react';
import './Sidebar.css';

export default function Sidebar({
  isOpen, shoppingCart, products, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, handleOnToggle, error, checkoutFormIsSubmitted, findQuantity,
}) {
  const sidebarClassName = isOpen ? 'sidebar sidebar-open' : 'sidebar sidebar-closed';
  const buttonText = !isOpen ? 'Open Sidebar' : 'Close Sidebar';
  return (
    <section className={sidebarClassName}>
      <button className="button is-dark is-outlined toggle-button" onClick={handleOnToggle}>{buttonText}</button>
      {isOpen ? (
        <div>
          <ShoppingCart isOpen={isOpen} products={products} shoppingCart={shoppingCart} findQuantity={findQuantity} />

          <CheckoutForm isOpen={isOpen} shoppingCart={shoppingCart} checkoutForm={checkoutForm} handleOnCheckoutFormChange={handleOnCheckoutFormChange} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm} error={error} checkoutFormIsSubmitted={checkoutFormIsSubmitted} />
        </div>
      ) : null}

    </section>
  );
}

function ShoppingCart({
  isOpen, products, shoppingCart, findQuantity,
}) {
  // Calculate Prices
  let subtotal = 0;
  products.map((product) => {
    const quantity = findQuantity(product);
    subtotal += quantity * product.price;
  });
  const total = 1.0875 * subtotal;

  if (shoppingCart.length !== 0) {
    return (
      <div className="shopping-cart">
        {
      products.map((product) => {
        const quantity = findQuantity(product);
        if (quantity === 0) return null;
        return (
          <div>
            <div className="cart-product-name">{product.name}</div>
            <div className="cart-product-quantity">{quantity}</div>
          </div>
        );
      })
      }

        <div className="subtotal">
          Subtotal: $
          {subtotal.toFixed(2)}
        </div>
        <div className="total-price">
          Total after tax: $
          {total.toFixed(2)}
        </div>
      </div>
    );
  }
  return (
    <div className="shopping-cart">
      <div className="notification">No items added to cart yet. Start shopping now!</div>
    </div>
  );
}

function CheckoutForm({
  isOpen, shoppingCart, checkoutForm, handleOnCheckoutFormChange, handleOnSubmitCheckoutForm, error, checkoutFormIsSubmitted,
}) {
  return (

    <div className="checkout-form">
      <input
        className="checkout-form-input"
        type="email"
        name="email"
        placeholder="student@codepath.org"
        value={checkoutForm.email}
        onChange={(e) => handleOnCheckoutFormChange('email', e.target.value)}
      />
      <input
        className="checkout-form-input"
        type="text"
        name="name"
        placeholder="Student Name"
        value={checkoutForm.name}
        onChange={(e) => handleOnCheckoutFormChange('name', e.target.value)}
      />
      <button type="button" className="checkout-button" onClick={() => handleOnSubmitCheckoutForm(checkoutForm, shoppingCart)}>Checkout</button>
      {error ? <div className="error">{error}</div>
        : checkoutFormIsSubmitted ? <div className="success">Success!</div>
          : null}
    </div>
  );
}
