import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from "react"
import axios from 'axios'


export default function App() {

  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts]=useState([]);


  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.products);
      setProducts(response.data.products)
    });
  }, []);



  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */
          // products?.map((product, index) => <h1 key={index}>{product.name}</h1>)
          }
          <Navbar />
          <Sidebar />
          <Home products={products}/>
           {/* YOUR CODE HERE! */}
        </main>
      </BrowserRouter>
    </div>
  )
}
