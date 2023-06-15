import * as React from "react"
import axios from 'axios'
import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import About from "../About/About"
import Contact from "../Contact/Contact"
import AppOverlay from "./AppOverlay"
import BuyNow from "../BuyNow/BuyNow"




export default function App() {
  const url= 'https://codepath-store-api.herokuapp.com/store'

  const [products, setProducts] = useState([]);



  useEffect(()=> {
    axios.get(url).then((response) => {
      setProducts(response.data.products)
      // console.log('here',response.data.products)
    })
  })


  
  return (
    <div className="app">
      <BrowserRouter>
        

        <main>
        <AppOverlay/>
        <Routes>
          {/* <Route path='/' element={<AppOverlay/>} > */}
            <Route path='/' element={<Home className='home' products={products}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/buy-now' element={<BuyNow products={products}/>}/>
          {/* </Route> */}
          
       </Routes> 
          
          {/* YOUR CODE HERE! */}
          
          
          {/* <Home className='home' products={products}/> */}

        </main>
      </BrowserRouter>
    </div>
  )
}
