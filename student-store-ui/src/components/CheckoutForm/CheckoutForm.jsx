import * as React from 'react';
import './CheckoutForm.css';

export default function CheckoutForm() {
  return (
    <div className="checkout-form">
      <form>
        <input type="input" label="name" />
        <br />
        <input type="input" label="email" />
      </form>
    </div>
  );
}
