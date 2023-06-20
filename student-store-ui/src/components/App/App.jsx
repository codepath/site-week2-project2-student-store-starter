import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import axios from "axios";
import About from "../About/About";
import Contact from "../Contact/Contact";
import ProductDetails from "../ProductDetails/ProductDetails"
import { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function App() {
  // Toggle sidebar
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Pull products from API
  const [products, setProducts] = React.useState();
  const url = 'https://codepath-store-api.herokuapp.com/store'
  React.useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(response.data.products)
  });
}, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Routes>

          <Route path="/" element={<Home products={products}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="product/:id" element={<ProductDetails props={products}/>} />
      </Routes>
      
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleSidebarToggle} />
        {/* <footer>
        <p>Author: Marley Burrows</p>
        <p><a href="mailto:mburrows@salesforce.com">mburrows@salesforce.com</a></p>
      </footer> */}

      <footer class="footer">
        <div class="content">
          <div class="top">
            <div class="links">
              <div class="link-column">
                <h4>Categories</h4>
                <ul>
                  <li>All Categories</li>
                <li>Clothing</li>
                <li>Food</li>
                <li>Accessories</li>
                <li>Tech</li>
                </ul>
                </div>
              <div class="link-column">
                <h4>Company</h4>
                <ul>
                  <li>About Us</li>
                  <li>Find a Store</li>
                  <li>Terms</li><li>Sitemap</li>
                  <li>Careers</li>
                </ul>
                </div>
              <div class="link-column">
                <h4>Support</h4>
                <ul>
                  <li>Contact Us</li>
                  <li>Money Refund</li>
                  <li>Order Status</li>
                  <li>Shipping Info</li>
                  <li>Open Dispute</li>
                  </ul>
                </div>
              <div class="link-column">
                <h4>Account</h4>
                <ul><li>Login</li>
                <li>Register</li>
                <li>Account Setting</li>
                <li>My Orders</li>
                </ul>
                </div>
              <div class="link-column">
                <h4>Socials</h4>
                <ul>
                  <li>Facebook</li>
                  <li>Twitter</li>
                  <li>LinkedIn</li>
                  <li>Instagram</li>
                  <li>YouTube</li>
                  </ul>
                </div>
              <div class="link-column">
                <h4>Our App</h4>
                <ul>
                  <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1200px-Download_on_the_App_Store_Badge.svg.png" alt="app store"></img></li>
                  <li><img src="https://swanlibraries.net/wp-content/uploads/2019/03/google-play_modified-1024x301.png" alt="google play store"></img></li>
                  </ul>
                </div>
              </div>
            </div>
            <p>Author: Marley Burrows <a href="mailto:mburrows@salesforce.com">mburrows@salesforce.com</a></p>
                </div>
      </footer>




      </main>
      </BrowserRouter>
    </div>
  );
}


