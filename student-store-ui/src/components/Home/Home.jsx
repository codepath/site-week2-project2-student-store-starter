import * as React from "react"
import "./Home.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Productgrid from "../Productcontainer/Productcontainer"
import About from "../About/About"
import Footer from "../Footer/Footer"

export default function Home({products}) {
  const[search, setSearch] = useState("")
  const[category, setCategory] = useState("")
  const categories = ["All Categories", "Clothing", "Food", "Accessories", "Tech"]

  const Filter = products?.filter((product) => {
    const searchTerm = search.toLowerCase();
    const productCategory = category.toLowerCase() == "all categories" ? "" : category.toLowerCase()
    const productName = product.name.toLowerCase()
    const matchesSearch = searchTerm === "" || productName.includes(searchTerm)
    const matchesCategory = productCategory === "" || product.category?.toLowerCase() === productCategory
    return matchesSearch && matchesCategory
  })

  return (
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
      <div className="search-container">
        <input type = "text" value = {search} onChange={(e) => setSearch(e.target.value)} placeholder = "Search for Cool Items!"/><br/><br/>
        {categories.map((filtercat, idx) => (
        <button key={idx} onClick={() => setCategory(filtercat)}>{filtercat}</button>
      ))}
      </div>
      <div className="Purchase-header">
        <h1>Purchase</h1>
      </div>
      <Productgrid productFilter={Filter}/>
      <About />
      <div className="Contact-container">
        <div className="Contact">
          <h1>Contact Us</h1>
          <p>Email: code@path.org</p>
          <p>Phone: 1-800-CODEPATH</p>
          <p>Address: 123 Fake Street, San Francisco, CA</p>
          <div className="Contact-img">
                <img src = "https://cdni.iconscout.com/illustration/free/thumb/free-about-us-2061897-1740019.png"/>
          </div>
        </div>
      </div>
      <Footer/>
      
    </div>
  )
}
