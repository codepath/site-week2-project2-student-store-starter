import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import { useEffect, useState } from "react"
import axios from "axios"



export default function App() {
  
  const url = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProducts] = useState();
  const [sidebar, setSideBar] = useState(false);
  
  
  useEffect (() => {
    
    axios.get(url).then((response) => {

      // do stuff here

      console.log(response.data.products);
      setProducts(response.data.products)
    });

  }, []);  


  
  
  return (
    
    <div className="app">
      <BrowserRouter>
        <main>
          {/* {products?.map((product,index)=> <h1>{product.name}</h1>)}  */}

          <Navbar />
          <Sidebar isActive = {sidebar} handleOnClick = {() => setSideBar(!sidebar)}/>
          <Home products = {products}/>
        </main>
      </BrowserRouter>
    </div>
  )
}
