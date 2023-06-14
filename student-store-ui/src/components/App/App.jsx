import * as React from "react"
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import { useState } from "react"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Home/>}/>
          <Route path = "/about" element={<About/>}/>
        </Routes>
        <main>
          <Sidebar />
        </main>
      </BrowserRouter>
    </div>
  )
}
