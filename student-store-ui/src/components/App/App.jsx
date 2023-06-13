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
        <Sidebar isOpen={sidebarOpen} toggleSidebar={handleSidebarToggle} />
          <Navbar />
          <Hero />
          <Home products={products}/>
        </main>
      </BrowserRouter>
    </div>
  );
}


