import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import axios from "axios";
import About from "../About/About";
import Contact from "../Contact/Contact";
import { useState } from "react";

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

      </Routes>
      
      <Sidebar isOpen={sidebarOpen} toggleSidebar={handleSidebarToggle} />
        <footer>
        <p>Author: Marley Burrows</p>
        <p><a href="mailto:mburrows@salesforce.com">mburrows@salesforce.com</a></p>
      </footer>
      </main>
      </BrowserRouter>
    </div>
  );
}


