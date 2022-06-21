import React from 'react'
import "./SubNavBar.css"

export const SubNavBar = ({setSearch, setType}) => {
  return (
    <nav className="sub-navbar">
        <div className="content">
            <div className="row">
                <div className="search-bar">
                    <input type="text" name="search" placeholder='Search' onChange={(e) => {
                        setSearch(e.target.value.toLowerCase())
                    }}/>
                </div>
            </div>
            <div className="row">
                <ul className="category-menu">
                    <li>
                        <button onClick={() => setType('')}>All Categories</button>
                    </li>
                    <li>
                        <button onClick={() => setType("clothing")}>Clothing</button>
                    </li>
                    <li>
                        <button onClick={() => setType("food")}>Food</button>
                    </li>
                    <li>
                        <button onClick={() => setType("accessories")}>Accessories</button>
                    </li>
                    <li>
                        <button onClick={() => setType("tech")}>Tech</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
