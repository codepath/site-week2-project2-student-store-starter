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

  const [products, setProducts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({
    email:'',
    name:''
  });

  // Handlers

  const handleOnToggle = () => {
    setIsOpen((prev) => !prev);
  }

  const handleAddItemToCart = (productId) => {

    const auxArray = [];
    let wasAdded = false;

    shoppingCart.map((item) => {

      if (item.itemId != productId) {
        auxArray.push(item);
      } else {
        auxArray.push({
          itemId: productId,
          quantity: item.quantity + 1,
        });
        wasAdded=true
      }

      if (!wasAdded) {
        auxArray.push( {
          itemId: productId,
          quantity: 1
        } )
      }
    })

    setShoppingCart(auxArray);

  }

  const handleRemoveItemFromCart = () => {
    let auxArray = [];
    shoppingCart.map((item) => {
      if (item.itemId != productId) {
        auxArray.push(item);
      } else {
        if (item.quantity - 1 > 0) {
          auxArray.push({
            itemId: productId,
            quantity: item.quantity - 1,
          });
        }
      }
    })
  }

  // Fetching

  useEffect(() => {  
    loadData();
  }, [])
  
  const loadData = async () => {
    setIsFetching(true);

    try{

      const response = await axios.get (
        "https://codepath-store-api.herokuapp.com/store"
      )
      
      setProducts(response.data.products);

      setIsFetching(false);

    } catch (error) {
      console.error('Server error')
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
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            products={products}
            checkoutForm={checkoutForm}
            />
          <Routes>
            <Route
              path="/"
              element={
                <Home 
                  products={products}
                  shoppingCart={shoppingCart}
                  handleAddItemToCart={handleAddItemToCart}
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                  />
              }
            />
            <Route
              path="/product/:productsId"
              element={
                <ProductDetail 
                  products={products}
                  shoppingCart={shoppingCart}
                  />
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
