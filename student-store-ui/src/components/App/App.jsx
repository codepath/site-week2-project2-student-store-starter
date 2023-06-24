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

  // const url = "https://codepath-store-api.herokuapp.com/store";
  const url = "http://localhost:3001/"

  const {id} = useParams();
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([])
  const [quantities, setQuantities] = useState([])
  const [cart, setCart] = React.useState(quantities.filter(([id, quantity]) => quantity > 0))

  

  useEffect(() => {
    axios.get(url).then((response) => {
      setProducts(()=>response.data.products);
      setOriginalProducts(()=> response.data.products)
       const initQuantities=[]
  for (const product of response.data.products){
    initQuantities.push([product.id,0])
  }
      setQuantities(initQuantities)

    });
  }, [])

  
  //console.log('q',quantities)
 
 // console.log('iq',initQuantities)

  

  return (
    <div className="app">
      <div>
        
      <BrowserRouter>
      <main>
      <Sidebar cart={cart} setQuantities={setQuantities} quantities={quantities} originalProducts={originalProducts}/>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
          
          <Home  path="" products={products} quantities={quantities} setQuantities={setQuantities}/>

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

function Details() {


  const { id } = useParams()
  let productID = id
  console.log(id) 

  const url = "http://localhost:3001/products/"+ productID.toString();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log('yo',response.data)
      setProduct(response.data);
    });
  }, [])
  console.log(product)

  return (
    <div className="details">
      <h1>{product[0]?.name}</h1>
      <p>Product #{productID}</p>
      <img src={product[0]?.image}></img>
      <p>{product[0]?.description}</p>
      <p>⭐️⭐️⭐️⭐️⭐️</p>
      <p>${product[0]?.price}</p>
    </div>
    // <h1>{product.name}</h1>
    // <img>{product.img}</img>
  )
}