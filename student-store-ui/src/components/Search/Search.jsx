import * as React from "react"
import "./Search.css"

export default function Search(props) {
   
    const handleSearchChange = (event) => {
        props.setSearchValue(event.target.value);
      }

   function handleSearchSubmit (event) {
    event.preventDefault();
   }

    return(
        <div className="search">
            <form action="search" id="search-form">
            <label htmlFor="search">Search Products</label>
            <input
            type="search"
            name="search"
            defaultValue={props.searchValue}
            onChange={handleSearchChange}
            id="search-input"
            placeholder="search for products"
            />
             <button 
                type="submit" 
                onClick={handleSearchSubmit}>
                    Search
                </button>
            </form>
        </div>
    )
}
