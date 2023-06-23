import * as React from "react"
import "./Home.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Productgrid from "../Productcontainer/Productcontainer"
import About from "../About/About"
import Footer from "../Footer/Footer"

//Default Home function that takes in the param products
export default function Home({products, ShoppingList, SetShoppingList}) {

  //State variables for search and category
  const[search, setSearch] = useState("")
  const[category, setCategory] = useState("")

  //Array of categories
  const categories = ["All Categories", "Clothing", "Food", "Accessories", "Tech"]

  //Filter products based on search and category
  const Filter = products?.filter((product) => {
    //Convert searches to lowercase for case sensitive items
    const searchTerm = search.toLowerCase();
    const productCategory = category.toLowerCase() == "all categories" ? "" : category.toLowerCase()
    const productName = product.name.toLowerCase()

    //Check to see if the search term matches the category
    const matchesSearch = searchTerm === "" || productName.includes(searchTerm)
    const matchesCategory = productCategory === "" || product.category?.toLowerCase() === productCategory
    
    //Return true of the search matches category
    return matchesSearch && matchesCategory
  })

  return (
    //This is the Hero/Header section
    <div className="home">
      <div className="content">
        <div className="intro">
          <h1>Welcome!</h1>
          <h1>Find your item below!</h1>
          <p>We have all kinds of goodies.</p>
          <p>Click on any of the items to start filling up your shopping cart.</p>
          <p>Checkout whenever you're ready.</p>
        </div>
        <div className="media">
          <img src = {"https://static.vecteezy.com/system/resources/previews/010/916/011/original/online-shopping-concept-design-or-3d-online-shopping-or-shopping-promotional-design-free-png.png"}/>
        </div>
      </div>

      {/* Making a search container with an input field and category buttons */}
      <div className="search-container">
        <input type = "text" value = {search} onChange={(e) => setSearch(e.target.value)} placeholder = "Search..."/><br/><br/>
        {categories.map((filtercat, idx) => (
        <button key={idx} onClick={() => setCategory(filtercat)}>{filtercat}</button>
      ))}
      </div>

      {/* This is a title */}
      <div className="Purchase-header">
        <h1>Purchase</h1>
      </div>

      {/* This is the productgrid Component that is taking in Filter as a param */}
      <Productgrid productFilter={Filter} ShoppingList = {ShoppingList} SetShoppingList = {SetShoppingList}/>

      {/* Calling About Component */}
      <About />

      {/* This is the Contact section */}
      <div className="Contact-container">
        <div className="Contact">
          <h1>Contact Us</h1>
          <p>Email: code@path.org</p>
          <p>Phone: 1-800-CODEPATH</p>
          <p>Address: 123 Fake Street, San Francisco, CA</p>

          {/* Image container */}
          <div className="Contact-img">
                <img src = "https://cdni.iconscout.com/illustration/free/thumb/free-about-us-2061897-1740019.png"/>
          </div>
        </div>
      </div>

      {/* Called footer component */}
      <Footer/>
      
    </div>
  )
}