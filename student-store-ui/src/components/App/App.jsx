import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
import NotFound from "../NotFound/NotFound"
import axios from 'axios'
import "./App.css"

export default function App() {
  
  // state variables
  const [products, setProducts] = React.useState([])
  const [isFetching, setIsFetching] = React.useState()
  const [error, setError] = React.useState("")
  const [isOpen, setIsOpen] = React.useState(false)
  const [shoppingCart, setShoppingCart] = React.useState([])
  const [checkoutForm, setCheckoutForm] = React.useState({email:"", name:""})

  // remove console.logs later

  const getData = async () => {
    setIsFetching(true)
    try {
      const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
      setProducts(response.data.products);
      console.log("received this data:", response.data.products);
    } catch (error) {
      console.log(error);
      setError(error)
    } finally {
      setIsFetching(false)
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  // handler functions

  function handleOnToggle() {
    setIsOpen(!(isOpen));
    // toggled the open/closed state of the sidebar
  }

  function handleAddItemToCart(productId) {
    let targetIndex = shoppingCart.findIndex(item => item.itemId === productId)
    // checking if item is already in cart; findIndex returns -1 if it doesn't find a match
    if (!(targetIndex==-1)) {
      // making a copy and because of how status objects update
      let newShoppingCart = shoppingCart
      newShoppingCart[targetIndex].quantity += 1
      setShoppingCart([...newShoppingCart])
    } else {
      setShoppingCart([...shoppingCart, {itemId: productId, quantity: 1}])
    }
  }

  function handleRemoveItemFromCart(productId) {
    let targetIndex = shoppingCart.findIndex(item => item.itemId === productId)
    if (!(targetIndex==-1)) {
      let newShoppingCart = shoppingCart
      newShoppingCart[targetIndex].quantity -= 1
      // removing the item if the new quantity is now 0
      if (newShoppingCart[targetIndex].quantity == 0) {
        newShoppingCart.splice(targetIndex, 1)
      }
      setShoppingCart([...newShoppingCart])
    }
  }

  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm({...checkoutForm, [name]: value })
  }

  function handleOnSubmitCheckoutForm() {

  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Navbar />
        <Sidebar
          isOpen={isOpen}
          shoppingCart={shoppingCart}
          products={products}
          checkoutForm={checkoutForm}
          handleOnCheckoutFormChange={handleOnCheckoutFormChange}
          handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          handleOnToggle={handleOnToggle} />
        <Routes>
          <Route path="/" element={
            <Home
              products={products}
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemFromCart={handleRemoveItemFromCart}
              shoppingCart={shoppingCart}/>} />
          <Route path="/products/:productId" element={
            <ProductDetail 
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemFromCart={handleRemoveItemFromCart}
              error={error}
              setError={setError}
              isFetching={isFetching}
              setIsFetching={setIsFetching}
              shoppingCart={shoppingCart}/>} />
          <Route path="*" element={
            <NotFound />} />
        </Routes>
        <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
