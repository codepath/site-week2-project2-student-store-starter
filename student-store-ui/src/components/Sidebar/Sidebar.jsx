import * as React from 'react';
import './Sidebar.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

export default function Sidebar() {
  return (
    <section className="sidebar">
      <ShoppingCart />
      <CheckoutForm />
    </section>
  );
}
