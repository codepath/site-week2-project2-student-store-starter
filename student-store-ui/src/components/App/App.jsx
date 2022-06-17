import * as React from "react"
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ProjectDetail from "../ProjectDetail/ProjectDetail"
import axios from 'axios';
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import "./App.css"


export default function App() {

  let [products, setProducts] = useState([]);



  useEffect(async () => {
      try {
        const response = await axios.get('https://codepath-store-api.herokuapp.com/store');
        setProducts(response.data.products)
      } catch (error) {
        console.error(error);
      }
  });
  
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home products={products}/>} />
        <Route path="/products/:productId" element={<ProjectDetail products={products}/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
