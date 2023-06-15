import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from '../Contact/Contact';
import "./App.css";
import Footer from "../Footer/Footer";

export default function App() {

  return (
    <div className="app-container">
      <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
        {/* <main className="app-content"> */}
          {/* <Navbar /> */}
          {/* <Sidebar /> */}
          {/* <Home /> */}
          {/* <Footer /> */}
        {/* </main> */}
      </BrowserRouter>
    </div>
  )
}
function ProductDetails(){
  let productID = useParams().id;
  return (
    <p>product details display here</p>
  )
}