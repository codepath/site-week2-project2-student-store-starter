import { Link } from "react-router-dom"
import "./SubNavbar.css"
import React, { useState } from 'react';
export default function SubNavbar({handleSearch, searchValue, activeCategory, setActiveCategory}) {
    const [open, setOpen] = useState(true)
    const categories = [
        "All Categories","Clothing","Food","Accessories","Tech"]

    const toggleOpen = () => setOpen((isOpen) => setOpen(!isOpen))
    return ( <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <input type="text" name="search" 
            placeholder="Search" value={searchValue} onChange={handleSearch}/>
            
            
                        
                    </div>
                </div>
​
                <div className="row">
                </div>
​
                <ul className="category-menu">
            {["All Categories", "Clothing", "Food", "Accessories", "Tech"].map((cat) => (
              <li className={activeCategory === cat ? "is-active" : ""} key={cat}>
                <button onClick={() => setActiveCategory(cat)}>{cat}</button>
              </li>
            ))}
          </ul>
​
            </div>
        </nav>
    )
}










