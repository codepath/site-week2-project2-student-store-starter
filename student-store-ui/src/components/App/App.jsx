import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import Footer from "../Footer/Footer"
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

// TODO:
// CREATE INDIVIDUAL PRODUCT PAGE
// stretch features!!

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
  // const[selectedCategory, setSelectedCategory] = useState(""); // used for category filtering - default should be "all categ.." ?
  const [filteredSearchArray, setFilteredSearchArray] = useState([])
  // const [filteredCategoryArray, setFilteredCategoryArray] = useState([])
  // const [haveFiltered, setHaveFiltered] = useState(false);

  useEffect(() => {
    axios.get(url).then((response) =>{
      setProducts(response.data.products)
      // console.log(response.data.products) // getting the food items
      // console.log(products)
    })

  }, []);

 // Update local state with current state of input element (render each keystroke)
 function handleInput(event) {
  // console.log("FILTERED???? ", haveFiltered);
    setFormData(event.target.value);
  //   if (haveFiltered){
  //     // setHaveFiltered(true);
  //     console.log("HAVE FILTERED, HERE IS THE FILTERED - SEARCH: " + `${filteredSearchArray}`);
  //     let filteredItems = filteredSearchArray?.filter((product) => {
  //       return product.name.toLowerCase().includes(event.target.value.toLowerCase());
  //       })
  //       setFilteredSearchArray(filteredItems);
  //   }
  //   // console.log(products)

  //  else {
    // setHaveFiltered(true);
    // if (filteredSearchArray == products){ // have altered original array already
      let filteredItems = products?.filter((product) => {
        return product.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setFilteredSearchArray(filteredItems);
      // }
      // setHaveFiltered(true);
    // } 
    // else { // haven't filtered array already
      // let filteredItems = filteredSearchArray?.filter((product) => {
      //   return product.name.toLowerCase().includes(event.target.value.toLowerCase());
      //   })
      //   setFilteredSearchArray(filteredItems);
      // }
     
 }


 function changeCategory(category){
  console.log(category);
  // console.log("FILTERED BEFORE ???? ", haveFiltered);
  // if (haveFiltered){
  //   // setHaveFiltered(true);
  //   console.log("HAVE FILTERED, HERE IS THE FILTERED - CATEOGRY: ", filteredSearchArray)
  //   let filteredItemsCategory = filteredSearchArray?.filter((product) => {
    
  //     return (product.category === category);
  //   })
  //   setFilteredSearchArray(filteredItemsCategory);
  // } else {

    // console.log("HAVE NOT FILTERED YET - CATEGORY")
  
    // setSelectedCategory(event.target.value);
    let filteredItemsCategory = (products?.filter((product) => {
    // console.log("SELECTED: " + `${selectedCategory}`)
   
    // console.log(products)
    // setProducts(filiteredCategoryArray)

    return (product.category === category);
  
}))
    setFilteredSearchArray(filteredItemsCategory);
// }
// setHaveFiltered(true);
// setFilteredSearchArray(filteredItemsCategory);
}; 

  return (
    <div className="app">
      <BrowserRouter>
        <main>
        {/* <About/> */}
        <Navbar />
        <Sidebar />
       
        <Routes>
          {/* <Route path= "" element={<Navbar />} > */}

          {/* <Route path= "" element={<Sidebar />}/>  */}
            <Route 
              path= "/" 
              element=
                {<Home 
                  changeCategory = {changeCategory} 
                  handleInput = {handleInput} 
                  formData = {formData} 
                  products = {filteredSearchArray.length === 0 ? products : filteredSearchArray} 
                  />}>           
              {/* <Route path="products/:id" element={<ProductDetail handleRoute/>} /> */}
              
              {/* <Route path="Contact" element={<Contact />}/> */}
          </Route>
          {/* <Route path = "*" element={<NotFound/>}/> */}
          {/* <Route path="Contact" element={<Contact />}/> */}
        </Routes>
     
          
        {/* ? to see if we actually have it  */}
        {/* map returns whole new array with those changes, unlike for loop */}
      <Footer />
      
          
        
          {/* <Home products = {filteredSearchArray.length === 0 ? products : filteredSearchArray} />  */}

        {/* <About></About> */}
        </main>
      
      </BrowserRouter>
    </div>
  )
}