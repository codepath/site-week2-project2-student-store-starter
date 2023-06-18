import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { useState, useReducer } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import "./App.css";
import Shop from '../Shop/Shop';
import About from "../About/About";
import Contact from '../Contact/Contact';
import Footer from "../Footer/Footer";
import ProductDetails from '../ProductDetails/ProductDetails';
import { CheckoutCartContext, CheckoutCartDispatchContext } from '../CheckoutCartContext/CheckoutCartContext';
import CheckoutCartReducer from '../Reducer/CheckoutCartReducer';
export default function App() {
  const [checkoutCart, dispatch] = useReducer(CheckoutCartReducer, {});
  const Overlay = () => (
    <>
    <div className="app-container">

      <Navbar />
      <Sidebar />
      <Outlet />
    </div>

    </>
  )
  return (
    // <div className="app-container">

    <BrowserRouter>
      <CheckoutCartContext.Provider value={checkoutCart}>
        <CheckoutCartDispatchContext.Provider value={dispatch}>
          <Routes>
            <Route path="/" element={<Overlay />}>
              <Route path="/" element={<Home />} />
              <Route path="products/:id" element={<ProductDetails />} />
            </Route>
            <Route path='*' element={<> <Navbar /> <Outlet /> </>}>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          {/* <main className="app-content">
      </main> */}
        </CheckoutCartDispatchContext.Provider>
      </CheckoutCartContext.Provider>
    </BrowserRouter>

    

  )
}