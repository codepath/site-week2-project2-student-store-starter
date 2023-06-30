import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { useReducer } from "react";
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
import Purchases from '../Purchases/Purchases';
import PurchaseDetails from '../PurchaseDetails/PurchaseDetails';
export default function App() {
  const [checkoutCart, dispatch] = useReducer(CheckoutCartReducer, {});
  
  const Overlay = () => (
    <>
    <div className="app-container">

      <Navbar />
      <Sidebar checkoutCart={checkoutCart} dispatch={dispatch} />
      <Outlet />
      {/* <Footer /> */}
    </div>

    </>
  )
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Overlay />}>
              <Route path="/" element={<Home checkoutCart={checkoutCart} dispatch={dispatch} />} />
              <Route path="products/:id" element={<ProductDetails checkoutCart={checkoutCart} dispatch={dispatch} />} />
              <Route path="purchases" element={<Purchases />} />
              <Route path="purchases/:id" element={<PurchaseDetails />} />
              <Route path="*" element={<NotFound />} />
            </Route>
            <Route path='*' element={<> <Navbar /> <Outlet /> </>}>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
  )
}