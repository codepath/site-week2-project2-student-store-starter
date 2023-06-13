import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import axios from "axios";
import ProductGrid from "../ProductGrid/ProductGrid";
import Hero from "../Hero/Hero";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };


  const url = 'https://codepath-store-api.herokuapp.com/store'
  axios.get(url)
  .then((products) => {
    products.generateCards()
  })

  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Sidebar isOpen={sidebarOpen} toggleSidebar={handleSidebarToggle} />
          {/* <Navbar /> */}
          {/* <Home /> */}
          <Hero />
          <ProductGrid />
        </main>
      </BrowserRouter>
    </div>
  );
}


