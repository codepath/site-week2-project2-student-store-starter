import * as React from "react"
import axios from 'axios';

import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
import "./App.css"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  const [products, setProducts] = React.useState({});
  const [isFetching, setFetching] = React.useState(true);

  async function getProducts() {
    const response = axios.get("https://codepath-store-api.herokuapp.com/store")
      .then(function (response) {
        setProducts(response.data.products);
        setFetching(false);
      })
      .catch(function (error) {
        console.error(error);
      })
  }

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home products={products} isFetching={isFetching} setFetching={setFetching} />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
          </Routes>
          {/* <NotFound></NotFound> */}
          <Footer></Footer>
        </main>
      </BrowserRouter>
    </div>
  )
}