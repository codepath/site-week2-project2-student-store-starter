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
import ProductDetail from "../ProductDetail/ProductDetail"
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
// shopping cart update
// add for product details as well
// math.round(price x 100)/100 => tofixed (2)

export const appInfo ={
  title: "Welcome! Find Your Merch!",
  tagline: "We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.",
  img_src: "./student-store-express-api/data/images.png"

}

const url = "https://codepath-store-api.herokuapp.com/store"
export default function App() {
  const [products, setProducts] = useState();
  const[formData, setFormData] = useState(); // used for search
  const [selectedCategory, setSelectedCategory] = useState(); // used for category filtering
  const[filteredCategoryArray, setFilteredCategoryArray] = useState(); // used for category filtering - default should be "all categ.." ?
  const [filteredSearchArray, setFilteredSearchArray] = useState()
  // const [filteredCategoryArray, setFilteredCategoryArray] = useState([])
  // const [haveFiltered, setHaveFiltered] = useState(false);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    axios.get(url).then((response) =>{
      setProducts(response.data.products)
    })

  }, []);


//  Update local state with current state of input element (render each keystroke)
 function handleSearch(event) {
    setFormData(event.target.value);
      let filteredItems = products?.filter((product) => {
        return product.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setFilteredSearchArray(filteredItems);
 };
 


 function changeCategory(event){
  setSelectedCategory(event.target.value);
    let filteredItemsCategory = (products?.filter((product) => {
    return (product.category.toLowerCase() === event.target.value.toLowerCase());
    // return product.category.includes(!category ? "" : category)
  
})) 
  setFilteredCategoryArray(filteredItemsCategory);

}; 

// function to make search and filter by category work together, also handles initial loading case
function getFilteredProducts(){
   // initial page load
  if (!formData && !selectedCategory){
    return products; 
  }

  let filteredItems = products;
  if (formData){
    filteredItems = filteredItems.filter((product) => product.name.toLowerCase().includes(formData.toLowerCase()));
  }
  if (selectedCategory){
    filteredItems = filteredItems.filter((product) => 
    product.category.toLowerCase().includes(selectedCategory.toLowerCase()));
  }
  return filteredItems;

}


  return (
    <div className="app">
      <BrowserRouter>
        <main>
        {/* <About/> */}
        {/* <Navbar /> */}
        <Sidebar />
       
        <Routes>

          <Route path= "" element={<Navbar />} >

          {/* <Route path= "" element={<Sidebar />}/>  */}
            <Route 
          
              path= "/" 
              element=
                {<Home 
                  // handleInput={handleInput}
                  changeCategory = {changeCategory} 
                  handleSearch = {handleSearch} 
                  formData = {formData} 
                  // products = {filteredSearchArray.length === 0 ? products : filteredSearchArray}
                  products = {getFilteredProducts()}
                  />}>     
            </Route>    
              
            <Route path="products/:id" element={<ProductDetail/>} />

            {/* <Route path="products/:id" element={<ProductDetail quantity={quantity}/>} /> */}

              {/* <Route path="Contact" element={<Contact />}/> */}
         
          
          <Route path = "" element = {<Footer />} />

          
          </Route>
          
          {/* <Route path = "*" element={<NotFound/>}/> */}
          {/* <Route path="Contact" element={<Contact />}/> */}
        </Routes>
     
          
        {/* ? to see if we actually have it  */}
        {/* map returns whole new array with those changes, unlike for loop */}
     
      
          
        
          {/* <Home products = {filteredSearchArray.length === 0 ? products : filteredSearchArray} />  */}

        {/* <About></About> */}
        </main>
      
      </BrowserRouter>
    </div>
  )
}