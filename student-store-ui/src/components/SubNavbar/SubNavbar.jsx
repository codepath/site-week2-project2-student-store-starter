import * as React from "react"
import "./SubNavbar.css"
import { useState } from 'react';

// Props = products
export default function SubNavbar(props) {

const [enabledButton, setEnabledButton] = useState('');

function deactivateAll() {

}

function handleOnChange(evt) {
    props.setSearchFormContent(evt.target.value)
    console.log(props.searchFormContent)

    // let filteredProducts = props.setProducts( props.products.filter(product => product.name.includes(props.searchFormContent)) ) 

// props.setProducts( props.products.filter(product => product.name.includes(props.searchFormContent)) ) 

    // Have check for entire string you are typing in
    // Likely checking letters like r and thats why its getting confused
    // Reset back to empty string after deleting it
    // Try to write code that handles all possible events
    console.log("Products are: " + props.products)
}

function handleAllCategoriesButton(evt) {
    props.setSelectedCategory("all")
}

function handleClothingButton(evt) {
    props.setSelectedCategory("clothing")
}

function handleFoodButton(evt) {
    props.setSelectedCategory("food")
}

function handleAccessoriesButton(evt) {
    props.setSelectedCategory("accessories")
}

function handleTechButton(evt) {
    props.setSelectedCategory("tech")
}
// There is way to delete object (array)
// Try console log and delete whatever props
/*function handleOnDelete(evt) {
    console.log(delete searchFormContent(evt.target.value) ) // change obj.name. Delete keyword is what deletes the object. The object that is to be deleted is likely searchFormContent
    // Delete searchFormCVontent object

}*/
    

  return (
    <nav className="sub-navbar">
        <div className="content">
            <div className="row">
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search" value={props.searchFormContent} onChange={handleOnChange} ></input>
                    <i className="material-icons">search</i>
                </div>
            </div>
            <div className="row">
                <div className="hamburger-menu">
                    <i className="material-icons">menu</i>
                </div>
                <ul className="category-menu open">
                    <li id="all" className={props.selectedCategory == "all" ? "is-active" : ""}>
                        <button onClick={handleAllCategoriesButton}>All Categories</button>
                    </li>
                    <li id="clothing" className={props.selectedCategory == "clothing" ? "is-active" : ""}>
                        <button onClick={handleClothingButton}>Clothing</button>
                    </li>
                    <li id="food" className={props.selectedCategory == "food" ? "is-active" : ""}>
                        <button onClick={handleFoodButton}>Food</button>
                    </li>
                    <li id="accessories" className={props.selectedCategory == "accessories" ? "is-active" : ""}>
                        <button onClick={handleAccessoriesButton}>Accessories</button>
                    </li>
                    <li id="tech" className={props.selectedCategory == "tech" ? "is-active" : ""}>
                        <button onClick={handleTechButton}>Tech</button>
                    </li>
                </ul>
            </div>
        </div>

    </nav>
  )
}
