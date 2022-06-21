import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import Sidebar from '../Sidebar/Sidebar';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import Home from '../Home/Home';
import ProductDetail from '../ProductDetail/ProductDetail';
import NotFound from '../NotFound/NotFound';
import './App.css';

export default function App() {
  return (
    <div className="app">
      <main>
        <Navbar>
          <Logo />
        </Navbar>
        <Sidebar>
          <ShoppingCart />
          <CheckoutForm />
        </Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <footer />
      </main>
    </div>
  );
}
