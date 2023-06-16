import * as React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductDetail from "../ProductDetail/ProductDetail"



export default function App() {

  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState([]);
  const [sidebar, setSideBar] = useState(false);


  useEffect(() => {

    axios.get(url).then((response) => {

      setProducts(response.data.products)
    });

  }, []);



  return (

    <div className="app">
      <BrowserRouter>
        <main>

          <Navbar />
          <Sidebar isActive={sidebar} handleOnClick={() => setSideBar(!sidebar)} />

          <Routes>
            <Route path="/" element={<Home products={products} setProducts={setProducts} />} />
            <Route path="products/:id" element={<ProductDetail />} />

          </Routes>


        </main>
      </BrowserRouter>
    </div>
  )
}
