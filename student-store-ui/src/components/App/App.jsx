import * as React from "react"
import { useEffect, useState } from "react"
import axios from "axios"



import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import ProductDetails from "../ProductDetails/ProductDetails"

export default function App() {

  const URL = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState();
  const [sidebarState, setSidebar] = useState(false);

  useEffect(()=>{
    axios.get(URL)
    .then((response) => {
        setProducts(response.data.products);
      });
  }, [])


  return (
    <BrowserRouter>
    <div className="app">
        <main>
          <Navbar />
            <Sidebar isActive={sidebarState} handleClick={() => setSidebar(!sidebarState)}/>
          <Routes>
              <Route  
                path="/"
                element={<Home products={products}/>}
              />

              <Route
                path="products/:id"
                element={<ProductDetails/>}
                />
              <Route 
                path="/about" 
                element={<About/>}
              />
                
            
          </Routes>
          <About/>
          <Contact/>
          <Footer/>
        </main>
    </div>
    </BrowserRouter>
  )
}
