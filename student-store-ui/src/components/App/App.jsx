import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail"
import Footer from "../Footer/Footer"
import NotFound from "../NotFound/NotFound"
import axios from "axios"
import "./App.css"

export default function App() {
  
  // state variables
  const [products, setProducts] = React.useState([])
  const [isFetching, setIsFetching] = React.useState()
  const [error, setError] = React.useState("")
  const [isOpen, setIsOpen] = React.useState(false)
  const [shoppingCart, setShoppingCart] = React.useState([])
  const [checkoutForm, setCheckoutForm] = React.useState({email:"", name:""})
  const [checkoutMessage, setCheckoutMessage] = React.useState("")
  const [purchaseOrder, setPurchaseOrder] = React.useState(null)

  const getData = async () => {
    setIsFetching(true)
    try {
      // const response = await axios.get("https://codepath-store-api.herokuapp.com/store");
      const response = await axios.get("http://localhost:3001/store");
      
      // throw error if there are no products found in the response
      if ((!response.data.products) || response?.data?.products.length == 0 ) {
        throw new Error("No products found")
      }
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

  // HANDLER FUNCTIONS

  function handleOnToggle() {
    setIsOpen(!(isOpen));
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

  async function handleOnSubmitCheckoutForm() {
    // check if shopping cart is full and user has inputted the fields
    if (!shoppingCart || shoppingCart.length === 0) {
      setCheckoutMessage("Your shopping cart is empty!")
      return null;
    } else if (!checkoutForm || !checkoutForm.name || !checkoutForm.email) {
      setCheckoutMessage("Missing name or email. Please enter to continue checking out.")
      return null;
    }

    // if everything is there, attempt to make the API call
    setIsFetching(true)

    console.log("before api call:", JSON.stringify({user: checkoutForm, shoppingCart: shoppingCart}))

    axios.post("http://localhost:3001/store", {user: checkoutForm, shoppingCart: shoppingCart} )
      .then((res) => {
        console.log(111, res.data.purchase)
        setCheckoutMessage("Success!")
        setPurchaseOrder(res.data.purchase)
        setShoppingCart([])
        setCheckoutForm({email:"", name:""})
      })
      .catch((err) => {
        console.log(err)
        setError(err)
      })
      .finally(() => {
        setIsFetching(false)
      })
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
          handleOnToggle={handleOnToggle}
          checkoutMessage={checkoutMessage}
          purchaseOrder={purchaseOrder}
          setPurchaseOrder={setPurchaseOrder} />
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
