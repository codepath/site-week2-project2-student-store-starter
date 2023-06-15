import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import {useEffect, useState} from "react"
import axios from "axios"
import About from "../About/About"
// usually put external dependencies at the top

// //import react pro sidebar components
// import {
//   ProSidebar,
//   Menu,
//   MenuItem,
//   SidebarHeader,
//   SidebarFooter,
//   SidebarContent,
// } from "react-pro-sidebar";

// import 


export const appInfo ={
  title: "Welcome! Find Your Merch!",
  tagline: "We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.",
  img_src: "./student-store-express-api/data/images.png"

}

const url = "https://codepath-store-api.herokuapp.com/store"
export default function App() {
  const [products, setProducts] = useState();
  // useEffect(setup, dependencies)
  // if you pass in an empty dependency aray, it will run only once
  const[formData, setFormData] = useState(); // used for search
  const[selectedCategory, setSelectedCategory] = useState(""); // used for category filtering - default should be "all categ.." ?

  useEffect(() => {
    axios.get(url).then((response) =>{
      setProducts(response.data.products)
      // console.log(response.data.products) // getting the food items
      // console.log(products)
    })

  }, []);
  // console.log(products);

 // Update local state with current state of input element (render each keystroke)
 function handleInput(event) {
    setFormData(event.target.value);
    
    // console.log("search product is: " + `${formData}`);
    products?.filter((product) => {
      (product.name).includes(formData);
      console.log("product is: " + `${product.name}`)
      // console.log("PRODUCT CATEGORY: " + `${product.category}`)
      console.log(products)})
 }
 
 console.log("search input: " + `${formData}`);


 function changeCategory(event){
  
  setSelectedCategory(products?.filter((product) => {
    (product.category === selectedCategory);
    console.log("SELECTED: " + `${selectedCategory}`)
    console.log("PRODUCT CATEGORY: " + `${product.category}`)
    console.log(products)
    // console.log("EVENT" + `${event.target.value}`)
}))};
// console.log(products)
console.log({products})

 console.log(formData); // this is what is generated in the search bar when you type
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* <Route path= "/" element={<Home products = {products}/>}> </Route> */}
          {/* <Route path= "about" element={<About/>}> </Route> */}
          {/* <Route path= "about" element={<About/>}> </Route> */}
          {/* <Route path= "about" element={<About/>}> </Route> */}

        </Routes>
        <main>
          
        {/* ? to see if we actually have it  */}
        {/* map returns whole new array with those changes, unlike for loop */}

        <Navbar />
        <Sidebar />
          
        
      <nav className="sub-navbar">
        <div className="content">
          <div className="row">
            <form 
            // onSubmit={handleSubmit} 
            className="search-bar">
              <input type="text" name="search" placeholder="Search" value={formData} onChange={handleInput}></input>
                <i className="material-icons">search</i>
           
            </form>
            <div className="links">
              <span className="help">
                <i className="material-icons">help</i>
              Help</span>
              <div className="cart">
                <a href="/">My Cart<i className="material-icons">shopping_cart</i></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="hamburger-menu">
              <i className="material-icons">menu</i>
            </div>
            <ul className="category-menu open">
              <li className="is-active">
                {/* EXCEPT CHANGECATEGORY IS A FUNCTION DECLARED IN HOME! */}
                <button>All Categories</button>
              </li>
              <li className="">
                <button onClick={changeCategory}>Clothing</button> 

                {/* <button>Clothing</button> */}
              </li>
              <li className="">
                <button>Food</button>
              </li>
              <li className="">
                <button>Accessories</button>
              </li>
              <li className="">
                <button>Tech</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>


          <Home products = {products} /> 
        {/* need to make a usestate for the home bc changing when we type? */}
        {/* {products?.map((product, index) => <p key={index}> {product.name}</p>)} */}

        <About></About>
        </main>
      
      </BrowserRouter>
    </div>
  )
}
