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
  const [shoppingCart, setShoppingCart] = useState([]);
    
  function handleAdd(e, cardId, info){
      if(cardId in count){
          const add = {...count, [cardId]: count[cardId] +1};
          setCount(add);
      }else{
          const create = {...count, [cardId]:1};
          setCount(create);
      }

      const cartItemm = shoppingCart?.find(item => item.id === cardId)

      if (cartItemm){

        const updateCart = shoppingCart?.map(item =>{
          if(item.id === cardId){
            return {...item, quantity:item.quantity+1}
          }
          return item
        })

        setShoppingCart(updateCart);
      } else{
        setShoppingCart( [...shoppingCart,{...info, quantity:1}])
      }

  }


  function handleMinus(e, cardId, info){
      if(cardId in count){
          if (count[cardId] > 0) { // Only subtract if quanitity greater than 0
              const minus = { ...count, [cardId]: count[cardId] - 1 };
              setCount(minus);
            }
      }else {
          setCount({ ...count, [cardId]: 0 });
      }
      const cartItem = shoppingCart?.find(item => item.id === cardId)

      if (cartItem){

        const updateCart = shoppingCart?.map(item =>{
          if(item.id === cardId){
            if (item.quantity > 0){ // Only substract if quantity greater than 0
            return {...item, quantity:item.quantity-1}
            }
          }
          return item
        })
        const filteredCart = updateCart.filter(item => item.quantity > 0);
        setShoppingCart(filteredCart);
      }


  }



  useEffect(()=>{
    axios.get(URL)
    .then((response) => {
        // console.log(response.data)
        setProducts(response.data.products);
      });
  }, [])


  return (
    <BrowserRouter>
    <div className="app">
        <main>
          <Navbar />
            <Sidebar  
            isActive={sidebarState} 
            handleClick={() => setSidebar(!sidebarState)} 
            shoppingCart = {shoppingCart} 
            setShoppingCart={setShoppingCart}
            count={count}
            setCount={setCount}
            />
          
          <Routes>
              <Route  
                path="/"
                element={<Home products={products} count={count} setCount={setCount} handleAdd={handleAdd} handleMinus={handleMinus} shoppingCart = {shoppingCart} setShoppingCart={setShoppingCart}/>}
              />

              <Route
                path="products/:id"
                element={<ProductDetails count={count} setCount={setCount} handleAdd={handleAdd} handleMinus={handleMinus} shoppingCart = {shoppingCart} setShoppingCart={setShoppingCart}/>}
                />
              <Route 
                path="/about" 
                element={<About/>}
              />
              <Route 
                path="/contact" 
                element={<Contact/>}
              />
            
          </Routes>
          
        </main>
    </div>
    </BrowserRouter>
  )
}
