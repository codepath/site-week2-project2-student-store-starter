import * as React from "react"
import "./SubnavBar.css"

export default function SubnavBar({formData, handleInput, changeCategory, handleSubmit}){

    return (
        <nav className="sub-navbar">
        <div className="content">
        <div className="row">
            <form 
            // onSubmit={handleSubmit} 
            className="search-bar">
            <input type="text" name="search" placeholder="Search" value={formData} onChange={handleInput}></input>
                <i className="material-icons">search</i>
            {/* <button onClick={(event) => handleSubmit(event)} > Search </button> */}
            {/* TODO: add accessibility line */}
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
                {/* EXCEPT CHANGECATEGORY IS A FUNCTION DECLARED IN HOME! */}
                <button onClick={() => changeCategory("")}>All Categories</button>
            </li>
            <li className="is-active">
                <button onClick={() => changeCategory("clothing")}> Clothing</button> 

                {/* <button>Clothing</button> */}
            </li>
            <li className="is-active">
                <button onClick={() => changeCategory("food")}>Food</button>
            </li>
            <li className="is-active">
                <button onClick={() => changeCategory("accessories")}>Accessories</button>
            </li>
            <li className="is-active">
                <button onClick={() => changeCategory("tech")}>Tech</button>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    )
}