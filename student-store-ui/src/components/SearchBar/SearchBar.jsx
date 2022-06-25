import * as React from "react"
import "./SearchBar.css"

export default function SearchBar({ allProducts, setProducts }) {
    return (
        <form method="get">
            <input type="search" name="search-bar" id="searchBar" placeholder="find an item here..." onKeyUp={(e) => {
                e.preventDefault()
                setProducts(allProducts.filter((product) => product.name.toLowerCase().includes(e.target.value.toLowerCase())))
            }} />
        </form>
    )
}