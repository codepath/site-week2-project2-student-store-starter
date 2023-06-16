import * as React from "react"
import "./Subnavbar.css"
import { useEffect, useState } from "react"

export default function Subnavbar({ activeCategory, setActiveCategory, products, setProducts, setSearchResults }) {


    //HANDLE SEARCH INPUT

    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(query => query = e.target.value)

        setSearchResults(e.target.value)

    }


    // HANDLE CATEGORY SELECTION 

    function handleCategoryClick(category) {

        setActiveCategory(category);
    }


    return (


        <nav className="sub-navbar">
            <div className="content">
                <div className="row">
                    <div className="search-bar"><input id="search-input" type="text" name="search" placeholder="Search" value={query} onChange={handleChange} /><i className="material-icons">search</i></div>
                    <div className="links">
                        <span className="help"><i className="material-icons">help</i>Help</span>
                        <div className="cart"><a href="/">My Cart<i class="material-icons">shopping_cart</i></a></div>
                    </div>
                </div>
                <div className="row">
                    <div className="hamburger-menu"><i className="material-icons">menu</i></div>
                    <ul className="category-menu open">
                        <li className={activeCategory === "All Categories" ? "isActive" : ""}>

                            <button onClick={() => handleCategoryClick("All Categories")}>All Categories</button>
                        </li>
                        <li className={activeCategory === "Clothing" ? "isActive" : ""}>
                            <button onClick={() => handleCategoryClick("Clothing")}>Clothing</button>
                        </li>
                        <li className={activeCategory === "Food" ? "isActive" : ""}>
                            <button onClick={() => handleCategoryClick("Food")}>Food</button>
                        </li >
                        <li className={activeCategory === "Accessories" ? "isActive" : ""}>
                            <button onClick={() => handleCategoryClick("Accessories")}>Accessories</button>
                        </li>
                        <li className={activeCategory === "Tech" ? "isActive" : ""}>
                            <button onClick={() => handleCategoryClick("Tech")}>Tech</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>






    )
}

