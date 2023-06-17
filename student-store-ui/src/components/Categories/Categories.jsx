import * as React from "react"
import "./Categories.css"

export default function Categories(setCategory) {
  return (
<button className="navbar">
  <ul>
<li><a onClick={()=>setCategory("all categories")}>All Categories</a></li>
<li><a onClick={()=>setCategory("clothing")}>Clothing</a></li>
<li><a href="contact.asp">Food</a></li>
<li><a href="about.asp">Accesories</a></li>
</ul>
</button>
  )
}
