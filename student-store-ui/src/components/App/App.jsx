import * as React from "react"
import axios from "axios"
import { useEffect, useState } from "react"

import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Hero from "../Hero/Hero"
import Category from "../Categories/Categories"
import AboutUs from "../AboutUs/AboutUs"
import ContactUs from "../ContactUs/ContactUs"

export default function App() {

  const url = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(()=>response.data.products);
    });
  }, [])


  return (
    <div className="app">
      <div>
        
      <BrowserRouter>
      <main>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          
          <Home  path="" products={products} />

          </>
        }/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path="products/:id" element={<Details/>}/>
        {/* <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} /> */}
        </Routes>
        {/* <AboutUs/> */}
        </main>
          {/* {products?.map( (product, index)=> <h1 key= {index + product.name} >{product.name}</h1>) } */}

          
          {/* <Hero /> */}
          {/* <Home products={products}/> */}
      </BrowserRouter>
      </div>
    </div>
  );
}

function Details(){


  const parms = useParams()
  let productID = parms.id

  const url = "https://codepath-store-api.herokuapp.com/store/"+ productID;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setProduct(()=>response.data.product);
    });
  }, [])
  // console.log(product.im)

  return (
    <div className="details">
      <h1>{product.name}</h1>
      <p>Product #{productID}</p>
      <img src={product.image}></img>
      <p>{product.description}</p>
      <p>⭐️⭐️⭐️⭐️⭐️</p>
      <p>${product.price}</p>
    </div>
    // <h1>{product.name}</h1>
    // <img>{product.img}</img>
  )
}