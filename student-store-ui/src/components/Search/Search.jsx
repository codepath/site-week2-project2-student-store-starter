import * as React from "react"
import "./Search.css"

export default function Search(props) {
   
    const handleSearchChange = (event) => {
        props.setSearchValue(event.target.value);

        props.setSearchCatValue('search') 
      }

   function handleSearchSubmit (event) {
    event.preventDefault();
   }

   function handleCatSubmit (event) {
    // props.setSearchCatValue('category')
    props.setCatValue(event.target.name)
   }
   

    return(
        <>
        <div className="search">
            <form action="search" id="search-form">
            <label htmlFor="search"></label>
            <input
            type="search"
            name="search"
            defaultValue={props.searchValue}
            onChange={handleSearchChange}
            id="search-input"
            placeholder="Search ..."
            />
             <button 
                type="submit" 
                onClick={handleSearchSubmit}>
                    Search
                </button>
            </form>
        </div>
        
        <div className="categories">
            <button className="cat-button" name="all" onClick={handleCatSubmit}>All Categories</button>
            <button className="cat-button" name="clothing" onClick={handleCatSubmit}>Clothing</button>
            <button className="cat-button" name="food"  onClick={handleCatSubmit}>Food</button>
            <button className="cat-button" name="accessories" onClick={handleCatSubmit}>Accessories</button>
            <button className="cat-button" name="tech"  onClick={handleCatSubmit}>Tech</button>

        </div>
        </>
    )
}
