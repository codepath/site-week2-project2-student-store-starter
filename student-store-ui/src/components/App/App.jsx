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

  const URL = "http://localhost:3001";

  const [products, setProducts] = useState();
  const [sidebarState, setSidebar] = useState(false);
  const [count, setCount] = useState({});
    
  function handleAdd(e, cardId){
      if(cardId in count){
          const add = {...count, [cardId]: count[cardId] +1};
          setCount(add);
      }else{
          const create = {...count, [cardId]:1};
          setCount(create);
      }
  }

  function handleMinus(e, cardId){
      if(cardId in count){
          if (count[cardId] > 0) { // Check if count is already greater than 0
              const minus = { ...count, [cardId]: count[cardId] - 1 };
              setCount(minus);
            }
      }else {
          setCount({ ...count, [cardId]: 0 });
      }
  }

  useEffect(()=>{
    axios.get(URL)
    .then((response) => {
        console.log(response.data)
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
                element={<Home products={products} count={count} setCount={setCount} handleAdd={handleAdd} handleMinus={handleMinus}/>}
              />

              <Route
                path="products/:id"
                element={<ProductDetails count={count} setCount={setCount} handleAdd={handleAdd} handleMinus={handleMinus}/>}
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
