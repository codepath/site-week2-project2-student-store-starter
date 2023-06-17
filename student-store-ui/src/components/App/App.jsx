import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { useState } from "react";
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

export default function App() {
  const [checkoutCart, setCheckoutCart] = useState({});
  const Overlay = () => (
    <>
      <Navbar />
      <Sidebar
        setCheckoutCart={setCheckoutCart}
        checkoutCart={checkoutCart} />
      <Outlet />
    </>
  )
  return (
    <div className="app-container">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Overlay />}>
            <Route path="/" element={<Home />}/>
            <Route path="products/:id" element={<ProductDetails />} />
          </Route>
          <Route path='*' element={<> <Navbar/> <Outlet/> </>}>
            <Route path="*" element={<NotFound />}/>
          </Route>
      </Routes>
      {/* <main className="app-content">
      </main> */}
      </BrowserRouter>
    </div>
  )
}