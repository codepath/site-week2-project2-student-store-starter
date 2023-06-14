import * as React from "react"
import axios from 'axios'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useEffect, useState } from "react"

import "./App.css"

import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Hero from "../Hero/Hero"
import SubNavbar from "../SubNavbar/SubNavbar"
import About from "../About/About"
import Contact from "../Contact/Contact"


export default function App() {

  const url = 'https://codepath-store-api.herokuapp.com/store'

  const [products, setProducts] = useState()

  useEffect (() => {
    axios.get(url).then((response) => {
      console.log(response.data.products)
      setProducts(response.data.products)
    })
  }, [])

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="app">
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/About" element={<About/>}/>
        </Routes> */}
        <main>
          <Navbar />
          <Sidebar 
            handleClick={() => setIsActive(!isActive)}
            isActive ={isActive} // not sure what to put here
          />
          <Hero />
          <SubNavbar />
          <Home products={products}/>
          <About />
          <Contact />
        </main>
      </BrowserRouter>
    </div>
  )
}
