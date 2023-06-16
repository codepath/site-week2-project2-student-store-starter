import React from "react";
import "./CategoryCard.css"
import filter from "../assets/filter.svg"

export default function CategoryCard({products, catOptions, searchedProducts, setCatResults}){
    const handleClick = (event) => {
        let currCategory = event.target.value
        setCatResults(currCategory === "all categories"
        ? [...searchedProducts]
        : searchedProducts.filter(product => product.category === currCategory))
    }
    return (
    <nav className="cat-nav-bar">
        <button className="filter-button">
            <img className="filter-image" src={filter}/>
        </button>
        <button 
            className="filter-option" 
            value="all categories"
            onClick={handleClick}>
                All Categories
        </button>
        {catOptions.map(option => (
            <button 
            className="filter-option" 
            onClick={handleClick}
            value={option}>
                {option}
            </button>))}
    </nav>
    )
}