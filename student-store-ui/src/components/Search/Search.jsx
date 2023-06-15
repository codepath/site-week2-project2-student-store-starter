import * as React from "react"
import "./Search.css"
import searchIcon from "../assets/search-icon.svg"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Search({products, searchedProducts, setSearchedProducts}){

    const handleChange = (event) => {
        return (
            setSearchedProducts(products.filter((product) => product.name.
                toLowerCase()
                .includes(event.target.value.toLowerCase())))
        )
    }

    const handleSubmit = () => {

    }

   return (
    <form className="search-form">
        <label htmlFor="Search"></label>
        <input 
            type="text" 
            placeholder="Search for items..." 
            className="search-input"
            onChange={handleChange}
        />
        <button className="search-button"><img src={searchIcon} className="search-icon"/></button>
        {/* <ProductGrid products={searchedProducts} /> */}
    </form>
   )
}