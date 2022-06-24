import * as React from "react"
import axios from 'axios';

import {API_BASE_URL} from "../../constants"

import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
import NotFound from "../NotFound/NotFound";
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const checkoutFormInitState = {
    name: "",
    email: ""
  }

  const [products, setProducts] = React.useState([]);
  const [isFetching, setFetching] = React.useState(false);
  const [isCreating, setIsCreating] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, setCheckoutForm] = React.useState(checkoutFormInitState);

  React.useEffect(() => {
    const getProducts = async () => {
      setFetching(true);
      try {
        const response = await axios.get(`${API_BASE_URL}/store/`);
        if (response?.data?.products) {
          // set data if response is not undefined
          setProducts(response?.data?.products);
        }
      } catch (error) {
        console.log("fetch error: ", error);
      } finally {
        //set useState false after doing request
        setFetching(false);
      }
    }
    getProducts();
  }, []);

  const handleOnCheckoutFormChange = (change) => {
    console.log(change);
    setCheckoutForm((prevForm) => ({ 
      ...prevForm,
       [change.target.name]: change.target.value
      }))
  console.log(checkoutForm)
      
  }
  const handleOnSubmitCheckoutForm = async() => {
    setIsCreating(true);
    console.log("shopping cart: ", shoppingCart);
    console.log("user info: ", checkoutForm);

    const purchaseObject = {
      user: checkoutForm,
      shoppingCart: shoppingCart
    }

    await axios.post(`${API_BASE_URL}/store/`, {purchase:purchaseObject})
      .then((res) => {
        console.log("purchase order: ",res);
      }).catch((error) => {
        console.log("CREATING PURCHASE ORDER ERROR: ", error);
      })

    setIsCreating(false);
  }

  if (isFetching) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar 
            products={products}
            shoppingCart={shoppingCart} 
            checkoutForm={checkoutForm} 
            handleOnCheckoutFormChange={handleOnCheckoutFormChange} 
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}/>
          <Routes>
            <Route path="/" element={<Home isFetching={isFetching} products={products} setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />} />
            <Route path="/products/:productId" element={<ProductDetail products={products} setShoppingCart={setShoppingCart} shoppingCart={shoppingCart} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer></Footer>
        </main>
      </BrowserRouter>
    </div>
  )
}