import * as React from "react"
import "./Home.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import Productgrid from "../Productcontainer/Productcontainer"

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
      <h1>Purchase</h1>
      <Productgrid productFilter={Filter}/>
      <div className="About-container">
        <div className="About">
          <h1>About</h1>
          <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
          <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
          <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
        </div>
      </div>
      
    </div>
  )
}
