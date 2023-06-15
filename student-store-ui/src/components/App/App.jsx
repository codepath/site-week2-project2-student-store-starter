import * as React from "react"
import { useEffect, useState } from "react"
import axios from "axios"



import { BrowserRouter, Router } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import Hero from "../Hero/Hero"
import Subnavbar from "../Subnavbar/Subnavbar"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"

export default function App() {

  const URL = "https://codepath-store-api.herokuapp.com/store";

  const [products, setProducts] = useState();
  const [sidebarState, setSidebar] = useState(false);

  useEffect(()=>{
    axios.get(URL)
    .then((response) => {
        setProducts(response.data.products);

      });
    
  })

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = [
    "All Categories",
    "Clothing",
    "Food",
    "Accessories",
    "Tech"
  ];
  
  const productFilter = products?.filter((product) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const lowercaseSelectedCategory = selectedCategory.toLowerCase() === "all categories" ? "" : selectedCategory.toLowerCase();
    const productName = product.name.toLowerCase();
    const matchesSearch = lowercaseSearchTerm === "" || productName.includes(lowercaseSearchTerm);
    const matchesCategory = lowercaseSelectedCategory === "" || product.category?.toLowerCase() === lowercaseSelectedCategory;
    return matchesSearch && matchesCategory;
  });


  return (
    <div className="app">
      <BrowserRouter>
        <main>
          {/* YOUR CODE HERE! */}
          <Navbar />
            <Hero/>
            <Sidebar isActive={sidebarState} handleClick={() => setSidebar(!sidebarState)}/>
            <Subnavbar category={selectedCategory} handleClick={()=> setSelectedCategory(categories)}/>
          <Home products={products}/>
          <About/>
          <Contact/>
          <Footer/>
        </main>
      </BrowserRouter>
    </div>
  )
}
