import * as React from "react";
import "./Search.css";
import Home from "../Home/Home";


export default function Search(props) {
    console.log(props.searchValue)
    console.log(props.products)
    console.log(props.handleChange)
 
    // let filtered = props.products?.filter((product => product.name.includes(props.searchValue)))

    // console.log(filtered)
  return (
    <div className="search">
      <form action="search" id="search-form">
        <input
          type="search"
          defaultValue={props.searchValue}
          onChange={props.handleChange}
          id="search-input"
          placeholder="Search for item..."
        />
        <button onClick={(event) => {
            event.preventDefault()
            // console.log(props.searchValue)
            // console.log(props.products)
            // console.log(props.handleChange)
            // console.log(props.products?.filter((product) => product.name.includes(props.searchValue)));
            const products = props.products?.filter((product) => product.name.includes(props.searchValue));
            let productGrid = document.querySelector(".productGrid");
            productGrid.innerHTML = '';
            <Home products={products}/>
        }} type="submit">🔍</button>
      </form>

    </div>
  )
}
