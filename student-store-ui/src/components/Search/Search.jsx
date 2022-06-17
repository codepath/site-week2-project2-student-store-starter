import * as React from "react";
import "./Search.css";

export default function Search({searchValue, onSearchChange, onFilterClick, filter}) {

    return(
        <div className="search-container">
            <div className="search-row">
                <div className="search-bar">
                    <input className="search-input" type="text" name="search" placeholder="Search" value={searchValue} onChange={(evt) => {
                        console.log(evt.target.value);
                        onSearchChange(evt);
                    }}/>
                    <span className="material-symbols-outlined">search</span>
                </div>
                <div className="cart">
                    <h4>My Cart &#128722;</h4>
                </div>
            </div>
            
            <div className="filters">
                <h4 className={filter === "All Categories" ? "active" : null} onClick={onFilterClick}>All Categories</h4>
                <h4 className={filter === "Clothing" ? "active" : null} onClick={onFilterClick}>Clothing</h4>
                <h4 className={filter === "Food" ? "active" : null} onClick={onFilterClick}>Food</h4>
                <h4 className={filter === "Accessories" ? "active" : null} onClick={onFilterClick}>Accessories</h4>
                <h4 className={filter === "Tech" ? "active" : null} onClick={onFilterClick}>Tech</h4>
            </div>
        </div>
    );
}