import * as React from "react"
import { useEffect, useState } from "react"
import axios from "axios"



import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Hero from "../Hero/Hero"

export default function App() {

  const URL = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState();
  const [sidebarState, setSidebar] = useState(false);

  useEffect(()=>{
    axios.get(URL)
    .then((response) => {
        setProducts(response.data.products);

      });
    
  })


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
            <Hero/>
            <Sidebar isActive={sidebarState} handleClick={() => setSidebar(!sidebarState)}/>
          <Home products={products}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
