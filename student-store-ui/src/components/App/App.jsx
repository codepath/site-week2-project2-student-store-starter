import * as React from "react"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Footer from "../Footer/Footer"
import ProductDetail from "../ProductDetail/ProductDetail"
import SubNavbar from "../SubNavbar/SubNavbar"
import "./App.css"
import { BrowserRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react'
import axios from 'axios';

/* An array of product objects that is initially empty.
const [products, setProducts] = useState([])

// A boolean value representing whether or not the App is currently fetching the products from the API.
const [isFetching, setIsFetching] = useState(false)

// A variable used to display a message when something goes wrong with the API requests.
const [error, setError] = useState("")

// A boolean value representing whether or not the Sidebar.jsx is in the open or closed state.
const [isOpen, setIsOpen] = useState(false)

// Should store state for the active user's shopping cart (items they want to purchase and the quantity of each item)
// When passed down to other components as a prop, it should formatted as an array of objects.
const [shoppingCart, setShoppingCart] = useState([])

// The user's information that will be sent to the API when they checkout.
const [checkoutForm, setCheckoutForm] = useState("") */


export default function App() {



// An array of product objects that is initially empty.
const [products, setProducts] = useState([])

// A boolean value representing whether or not the App is currently fetching the products from the API.
const [isFetching, setIsFetching] = useState(false)

// A variable used to display a message when something goes wrong with the API requests.
const [error, setError] = useState("")

// A boolean value representing whether or not the Sidebar.jsx is in the open or closed state.
const [isOpen, setIsOpen] = useState(false)

// Should store state for the active user's shopping cart (items they want to purchase and the quantity of each item)
// When passed down to other components as a prop, it should formatted as an array of objects.
const [shoppingCart, setShoppingCart] = useState([])

// The user's information that will be sent to the API when they checkout.
const [checkoutForm, setCheckoutForm] = useState("") 

const [searchFormContent, setSearchFormContent] = useState("");

const [selectedCategory, setSelectedCategory] = useState("all")

const [selectedProductId, setSelectedProductId] = useState(0)

const [subTotal, setSubTotal] = useState(0)

const [nameFormContent, setNameFormContent] = useState("");

const [emailFormContent, setEmailFormContent] = useState("");

const [checkedOut, setCheckedOut] = useState(false)

const [checkoutProducts, setCheckoutProducts] = useState([])

const [checkoutSubtotal, setCheckoutSubtotal] = useState(0)

const [checkoutName, setCheckoutName] = useState("")

const [checkoutEmail, setCheckoutEmail] = useState("")



// API Call
const getData = async () => {
  const { data } = await axios.get(`https://codepath-store-api.herokuapp.com/store`);
  console.log(data.products.length)
  console.log(data.products);

  if (data.products.length > 0) {
    console.log("Set the data!")
    setProducts(data.products);
  }
  else {
    setError("API call failure!")
  }
};

useEffect(() => {
  getData();
}, []);


// Toggle the open/closed state of the sidebar
function handleOnToggle() {
  if (isOpen == false) {
    console.log("Sidebar open")
    setIsOpen(true);
  }
  else {
    console.log("Sidebar closed")
    setIsOpen(false);
  }
}

function handleAddItemToCart(productId) {
  // If shoppingcart contains the element with the given id
  if (shoppingCart.findIndex(el => el.id == productId) !== -1) {
  //if (shoppingCart.filter(item => item.id === {productId}).length > 0) {
    // setShoppingCart(...) Use the ... to add it without deleting everything prior
    // Made copy of old shopping cart. Found index where item id = product id. In copy of original cart,
    // increamented the quantity and set to copy
    // setShoppingCart(...{})
    let copyCart = shoppingCart
    let index = shoppingCart.findIndex(el => el.id == productId)

    let itemQuantity = copyCart[index].quantity
    //copyCart[index].quantity += 1;

    itemQuantity += 1;
    copyCart[index].quantity = itemQuantity

    setShoppingCart(copyCart)
    

  }
  else {
    //setState((prevState) ...prevState, newObj)

    // Gathers the actual product item based on the productID
    const product = products.find(product => {
      return product.id == productId;
    });

    setShoppingCart(state => [...state, {id: productId, quantity: 1, name: product.name, price: product.price,}]) // (If you want to have only id and quantity, u can access the other 2 pieces of info elsewhere using the following:) props.products[item.itemId - 1].name



    //setShoppingCart(...{id: productId, quantity: 1})
   
  }

  const product = products.find(product => {
    return product.id == productId;
  });
  setSubTotal(subTotal + product.price)

  console.log(shoppingCart)
}

function handleRemoveItemFromCart(productId) {
  // If shoppingcart contains the element with the given id
  if (shoppingCart.findIndex(el => el.id == productId) !== -1) {
  //if (shoppingCart.filter(item => item.id === {productId}).length > 0) {
    let copyCart = shoppingCart
    let index = shoppingCart.findIndex(el => el.id == productId)
    copyCart[index].quantity -= 1;
    if (copyCart[index].quantity <= 0) {
      console.log("Remove product")
      //copyCart = copyCart.filter((_, idx)=>idx !== index)
      //copyCart = copyCart.splice(index, 1);
      //copyCart = copyCart.filter(product => product.id == productId)
      setShoppingCart(shoppingCart.filter((_, idx)=>idx !== index))
      
    }
    else {
      setShoppingCart(copyCart)
    }
    
  }

  const product = products.find(product => {
    return product.id == productId;
  });
  setSubTotal(subTotal - product.price)

  console.log(shoppingCart)
}

function handleOnCheckoutFormChange(name, value) {

}

function handleOnSubmitCheckoutForm() {
  if (nameFormContent.length > 0 && emailFormContent.length > 0) {
    setCheckoutProducts(shoppingCart)
    setCheckoutSubtotal(subTotal)
    setCheckoutName(nameFormContent)
    setCheckoutEmail(emailFormContent)
    setNameFormContent("")
    setEmailFormContent("")
    setShoppingCart([])
    setCheckedOut(true)

    /*
    axios.post("http://localhost:3001/store/", {user:checkoutForm, shoppingCart:shoppingCart})
    .then((res) => {
      setReceipt(res.data.purchase.receipt)
    })
    .catch((err) => {
      setError(err)
      setSuccess(false)
    }) */
    console.log("Checkout successful!")
  }
  else {
    console.log("Checkout Unsuccessful")
  }
}


// Create and pass onchange function to search bar

  return (
    <div className="app">
      <BrowserRouter>
        <main>
          <Navbar> {/* All routes*/}
           
          </Navbar>
            
          <Sidebar 
          subTotal={subTotal} 
          shoppingCart={shoppingCart} 
          setShoppingCart={setShoppingCart} 
          isOpen={isOpen} 
          handleOnToggle={() => handleOnToggle}
          nameFormContent={nameFormContent}
          setNameFormContent={setNameFormContent}
          emailFormContent={emailFormContent}
          setEmailFormContent={setEmailFormContent}
          handleOnSubmitCheckoutForm={() => handleOnSubmitCheckoutForm}
          checkoutProducts={checkoutProducts}
          setCheckoutProducts={setCheckoutProducts}
          checkoutSubtotal={checkoutSubtotal}
          setCheckoutSubtotal={setCheckoutSubtotal}
          checkoutName={checkoutName}
          checkoutEmail={checkoutEmail}
          checkedOut={checkedOut}
          setCheckedOut={setCheckedOut}
          > {/* All routes */}
  
          </Sidebar>

          <Routes>


   
            <Route 
            path="/" 
            element={<Home 
              products={products} 
              setProducts={setProducts}
              handleAddItemToCart={handleAddItemToCart} 
              handleRemoveItemFromCart={handleRemoveItemFromCart}
              searchFormContent={searchFormContent} 
              setSearchFormContent={setSearchFormContent}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedProductId={selectedProductId}
              setSelectedProductId={setSelectedProductId}
              shoppingCart={shoppingCart}
              />}
            ></Route>

            
      

            <Route
            path="/products/:productId"
            element={<ProductDetail 
              selectedProductId={selectedProductId}
              products={products}
            ></ProductDetail>} />

            {/* All other routes that don't match */}
            <Route 
              path="*" 
              render={() => <NotFound /* possible prop injection */ />}
            />
          </Routes>



          

        </main>
      </BrowserRouter>
    </div>
  )
}
