import * as React from "react"
import axios from 'axios';

import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
import NotFound from "../NotFound/NotFound";
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setFetching] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);

  React.useEffect(() => {
    const getProducts = async () => {
      setFetching(true);
      try {
        const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
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

  if (isFetching) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar shoppingCart={shoppingCart}/>
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