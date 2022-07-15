import "./Categories.css"


export default function CategoryFilter(props) {
    return (
        <div className = "categories">
            <button className = "category" onClick = {() => props.handleCategory("")}> All </button>
            <button className = "category" onClick = {() => props.handleCategory("clothing")}> Clothing </button>
            <button className = "category" onClick = {() => props.handleCategory("food")}> Food </button>
            <button className = "category" onClick = {() => props.handleCategory("accessories")}> Accessories </button>
            <button className = "category" onClick = {() => props.handleCategory("tech")}> Tech </button>
        </div>
    )
}