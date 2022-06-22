import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios"

// Components
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail";
import NotFound from "../NotFound/NotFound";

export default function App() {

  const [product, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    email:'',
    name:''
  });

  const API_URL = "https://codepath-store-api.herokuapp.com/store"

  // Handlers

  const handleOnToggle = () => {
    setIsOpen((prev) => !prev);
  }

  // Fetching

  useEffect(() => {  
    loadData();
  }, [])
  
  const loadData = async () => {
    setIsFetching(true);

    try{

      const response = await axios.get (
        API_URL
      )
      
      setProducts(response.data);

      setIsFetching(false);

    } catch (error) {
      console.log('Server error')
      setError("Server error");
    }

  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
          <Sidebar 
            handleOnToggle={handleOnToggle}
            />
          <Routes>
            <Route
              path="/"
              element={
                <Home />
              }
            />
            <Route
              path="/product/:productsId"
              element={
                <ProductDetail />
              }
            />
            <Route 
              path="*"
              element={
                <NotFound />
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}
