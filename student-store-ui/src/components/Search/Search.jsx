import * as React from "react"
import "./Search.css"
import searchIcon from "../assets/search-icon.svg"

export default function Search({filterFunction}){
    
    const handleSubmit = (event) => {
        event.preventDefault()
    }

   return (
    <form className="search-form">
        <label htmlFor="Search"></label>
        <input 
            type="text" 
            placeholder="Search for items..." 
            className="search-input"
            onChange={filterFunction}
        />
        <button
            className="search-button"
            onClick={handleSubmit}
            type="submit"
            ><img src={searchIcon} className="search-icon"/>
        </button>
    </form>
   )
}