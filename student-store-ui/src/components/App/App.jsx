import * as React from "react";
import {useEffect, useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import "./App.css";
import Footer from "../Footer/Footer";
import axios from "axios";

export default function App() {

  const URL_DB = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProduts] = useState([]);
  useEffect(() => {
    axios.get(URL_DB).then((response)=>{
      setProduts(() => response.data.products);
    })

  }, []);
  return (
    <div className="app-container">
      <BrowserRouter>
        <main className="app-content">
          <Navbar />
          <Sidebar />
          <Home products={products}/>
          <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
