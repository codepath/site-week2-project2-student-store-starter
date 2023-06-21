import * as React from "react"
import "./SubnavBar.css"

export default function SubnavBar({formData, handleSearch, handleCategoryFilter}){
    // export default function SubnavBar({formData, handleInput}){

    return (
        <nav className="sub-navbar">
        <div className="content">
        <div className="row">
            <form 
            className="search-bar">
            <input type="text" name="search" placeholder="Search" value={formData} onChange={handleSearch}></input>
                <i className="material-icons">search</i>
            </form>
            <div className="links">
            <span className="help">
                <i className="material-icons">help</i>
            Help</span>
            <div className="cart">
                <a href="/">My Cart<i className="material-icons">shopping_cart</i></a>
            </div>
            </div>
        </div>
        <div className="row">
            <div className="hamburger-menu">
            <i className="material-icons">menu</i>
            </div>
            <ul className="category-menu open">
            <li className="is-active">
                <button onClick={handleCategoryFilter} value="">All Categories</button>
            </li>
            <li className="is-active">
                <button onClick={handleCategoryFilter} value="Clothing"> Clothing</button> 
            </li>
            <li className="is-active">
                <button onClick={handleCategoryFilter} value="Food">Food</button>
                </li>
            <li className="is-active">
                <button onClick={handleCategoryFilter} value="Accessories">Accessories</button>
            </li>
            <li className="is-active">
                <button onClick={handleCategoryFilter} value="Tech">Tech</button>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    )
}