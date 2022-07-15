import "./Search.css"
import CategoryFilter from "../Categories/Categories"


export default function SearchBar(props) {
    return (
        <div className = "search-bar">
            <form className = "search-bar-form">
                <input className = "search-input" placeholder = "Search..." onChange = {props.handleOnSearchChange}/>
            </form>
            <CategoryFilter handleCategory = {props.handleCategory}/>
        </div>
    )
}