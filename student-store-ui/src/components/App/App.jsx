import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail"
import NotFound from "../NotFound/NotFound"
import axios from "axios"
import { useState, useEffect } from "react"




export default function App() {
  const [products, setProducts] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(false);
  const [error, setError] = React.useState("");
  const [isOpen, setIsOpen] = React.useState(false);
  const [shoppingCart, setShoppingCart] = React.useState([]);
  const [checkoutForm, submitCheckoutForm] = React.useState({email: "", name: ""});
  var [quantity, setQuantity] = React.useState(0);
  const[email, setEmail] = React.useState("");
  const [receipt, setReceipt] = React.useState(false);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API

    const fetchProducts = async() => {
      setIsFetching(true)
      try {
        //const startingProducts = await axios.get("https://codepath-store-api.herokuapp.com/store")
        const startingProducts = await axios.get("http://localhost:3001/store")
        setProducts(startingProducts.data.products)
        console.log(products)
        //console.log(startingProducts.data.products)
      } catch (error) {
        setError(error)
      }
      finally{
        setIsFetching(false)
      }
    }
    fetchProducts()
  },[])

  const handleOnToggle = () => {
    if(isOpen == false){
      setIsOpen(true)
      console.log(isOpen)
    }
    else{
      setIsOpen(false)
      console.log(isOpen)
    }
    
   }
  function handleAddItemToCart(productId){
    var value = shoppingCart.find((item) => {
      if (item.itemId == productId) {
        return true
      }
      })
      if (value == undefined) {
      shoppingCart.push({ itemId: productId, quantity: 1 
      })}
      else {
        shoppingCart.map((item) => {
          if (item.itemId == productId) {
            item['quantity'] = item['quantity'] + 1
          }
      })
  }
}

  function handleRemoveItemFromCart(productId) {
    var value = shoppingCart.find((item) => {
      if (item.itemId == productId) {
        return true
      }
    })
    if (value != undefined) {
      shoppingCart.map((item) => {
        if (item.itemId == productId) {
          if (item['quantity'] > 0)
          {
            item['quantity'] = item['quantity'] - 1
          }
           if (item['quantity'] <= 0)
            {
              shoppingCart.pop(item)
            }
          }
        })
      }
    }
    function handleOnCheckoutFormChange(change) {
      const { name, value} = change.target
      submitCheckoutForm((prevForm) => ({
        ...prevForm,
        [name]: value
      }))
    }

    // const getData = async () => {
    //   let response = await axios.get("http://localhost:3001/store/");
    //   setProducts(response.data.products);
    //   setisFetching(false);
    // };
    function handleOnSubmitCheckoutForm() {
      //backend
      axios.post("http://localhost:3001/store", 
      {user: checkoutForm, shoppingCart: shoppingCart})
      .then(function(response) {
        setReceipt(true);
        setShoppingCart([]);
        submitCheckoutForm({email: "", name: ""});
        setSuccess(true);
        setError();
      }).catch(function(error) {
        setError(error.message);
        console.log(error);
      })
    }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {
            <Routes>
              <Route path="/" element={(
                <>
                  <Navbar />
                  <Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}
                   shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}/>
                  <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen} 
                  products={products} 
                  handleAddItemToCart={handleAddItemToCart} 
                  handleRemoveItemFromCart={handleRemoveItemFromCart}
                   shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}
                    checkoutForm={checkoutForm} submitCheckoutForm={submitCheckoutForm}
                    handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                    receipt={receipt} error={error} handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                    setEmail={setEmail} setIsOpen={setIsOpen} success={success}
                   />
                </>
              )}   
              />
              <Route path="/products/:productId" element={(
                <>
                  <Navbar />
                  <ProductDetail products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart}
                    shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} quantity={quantity}
                  />
                  <Sidebar handleOnToggle={handleOnToggle} isOpen={isOpen}
                    products={products} handleAddItemToCart={handleAddItemToCart} 
                    handleRemoveItemFromCart={handleRemoveItemFromCart}
                   shoppingCart={shoppingCart} setShoppingCart={setShoppingCart}
                   checkoutForm={checkoutForm} submitCheckoutForm={submitCheckoutForm}
                   handleOnCheckoutFormChange={handleOnCheckoutFormChange}
                   receipt={receipt} error={error}
                   handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
                   setEmail={setEmail} success={success}
                  />
                </>
              )}   
              />
              <Route path="*" element={(
                <>
                  <Navbar />
                  <NotFound />
                  <Sidebar />
                </>
              )}   
              />
            </Routes>
          }
        </main>
      </BrowserRouter>
    </div>
  )
}
