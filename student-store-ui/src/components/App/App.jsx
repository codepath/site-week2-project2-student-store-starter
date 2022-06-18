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
  const [checkoutForm, setCheckoutForm] = React.useState()
  const [shoppingCartTotal, setShoppingCartTotal] = React.useState(0)

  let productsInShoppingCart = shoppingCart.map(product => product.id)

  // remove console.logs later

  const getData = async () => {
    setIsFetching(true)
    try {
      const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
      setProducts(response.data.products);
      console.log(response.data.products);
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
    // if (productId in productsInShoppingCart) {
    //   shoppingCart[productId] += 1;
    // } else {
    //   setShoppingCart(shoppingCart.concat({"itemId": {productId}, "quantity": 1}))
    // }
    // setShoppingCartTotal(3)
  }

  function handleRemoveItemFromCart(productId) {

  }

  function handleOnCheckoutFormChange(name, value) {
    setCheckoutForm([name, value])
  }

  return (
    <div className="app">
      <BrowserRouter>
        <main>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={
            <Home
              products={products}
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemFromCart={handleRemoveItemFromCart} />} />
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
            <NotFound
              handleAddItemToCart={handleAddItemToCart}
              handleRemoveItemToCart={handleRemoveItemFromCart}/>} />
        </Routes>
        <Footer />
        </main>
      </BrowserRouter>
    </div>
  )
}
