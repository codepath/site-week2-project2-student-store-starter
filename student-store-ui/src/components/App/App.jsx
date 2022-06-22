import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios"
import { API_URL } from "../../../utils/constants";

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

    // Usar un objeto de shopping cart, dentro otro objetos de cada producto, comparamos si el is del objeto existe y si existe agregamos una cantidad de uno

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

  const handleRemoveItemFromCart = (productId) => {
    const auxArray = [];
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

  const handleOnCheckoutFormChange = (name, value) => {
    const prev = checkoutForm;
    const _new = {
      ...prev,
      [name]: value,
    };

    setCheckoutForm(_new);
  }

  // Fetching

  useEffect(() => {  
    loadData();
  }, [])
  
  const loadData = async () => {
    setIsFetching(true);

    try{

      const response = await axios.get (
        `${API_URL}/store` 
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
            handleOnToggle={handleOnToggle}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
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
