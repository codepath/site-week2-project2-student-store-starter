import * as React from "react"
import "./Subnavbar.css"
import { useEffect, useState } from "react"

export default function Subnavbar({ activeCategory, setActiveCategory, products, createProduct=false, setProducts, setSearchResults }) {

    // const [isActive, setIsActive] = useState("All Categories");

    //HANDLE SEARCH INPUT

    const [query, setQuery] = useState('')

    const handleChange = (e) => {
        setQuery(query => query = e.target.value)
        // searchFilter(products, query);
        setSearchResults(e.target.value)

    }
    // // console.log(query);

    // // console.log(query);

    // function searchFilter(products, query) {
       
    //     console.log(query)
    //     let searchProducts =  products.filter(
    //         (product) => product.name.toLowerCase().includes(query.toLowerCase())
    //     );
    //     // setProducts(searchProducts);
    //     console.log(searchProducts);
    //     // createProduct(searchProducts);
    // }











// HANDLE CATEGORY SELECTION 

function handleCategoryClick(category) {

    setActiveCategory(category);
}


return (
    <div className="Subnavbar">
        <div className="content">

            <div className="row">

                <div className="search-bar">

                    <form id="search-form">
                        <label htmlFor="search"></label>
                        <input id="search-input" type="text" name="search" placeholder="Search" value={query} onChange={handleChange} />


                    </form>
                    <i className="material-icons">search</i>

                </div>


                <div className="icons">
                    <span className="help"><i className="material-icons">help</i>Help</span>
                    <span className="cart">
                        <a href="/">My Cart<i className="material-icons">shopping_cart</i></a>
                    </span>
                </div>

            </div>
            <div className="row">
                <div className="menu">
                    <i className="material-icons">menu</i>
                </div>
                <ul className="menu-open">
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


    </div>
)
}