import * as React from "react"
import "./SubNavbar.css"

// Props = products
export default function SubNavbar(props) {
function handleOnChange(evt) {
    props.setSearchFormContent(evt.target.value)
    console.log(props.searchFormContent)

    // let filteredProducts = props.setProducts( props.products.filter(product => product.name.includes(props.searchFormContent)) ) 
    props.setProducts( props.products.filter(product => product.name.includes(props.searchFormContent)) ) 
    // Have check for entire string you are typing in
    // Likely checking letters like r and thats why its getting confused
    // Reset back to empty string after deleting it
    // Try to write code that handles all possible events
    console.log("Products are: " + props.products)
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
            <div className="row"></div>
        </div>

    </nav>
  )
}
