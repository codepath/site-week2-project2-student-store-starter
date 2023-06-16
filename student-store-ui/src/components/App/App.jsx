import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import Shop from '../Shop/Shop';
import About from "../About/About";
import Contact from '../Contact/Contact';
import Footer from "../Footer/Footer";
import ProductDetails from '../ProductDetails/ProductDetails';

export default function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Overlay />}>
            <Route path="/" element={<Home />}/>
            <Route path="/Shop" element={<Shop />}/>
            <Route path="products/:id" element={<ProductDetails />} />
          </Route>
      </Routes>
      {/* <main className="app-content">
      </main> */}
      </BrowserRouter>
    </div>
  )
}

function Overlay() {
  const [checkoutCart, setCheckoutCart] = useState({
    products : []
  });
  // ensures nav bar and side bars
  // appear on almost all pages
  return (
    <>
      <Navbar />
      <Sidebar checkoutCart={checkoutCart} />
      <Footer />
      <Outlet />
    </>
  );
}