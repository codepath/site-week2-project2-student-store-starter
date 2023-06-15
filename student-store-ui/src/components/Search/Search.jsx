import * as React from "react";
import "./Search.css";


export default function Search(props) {

  console.log(props.products)
    const handleChange = (event) => {
      props.setSearchValue(event.target.value)
    }
 
    function handleSubmit(e) {
        e.preventDefault()
    }
    
  return (
    <>
    <div className="search">
      <form action="search" id="search-form">
        <label htmlFor="search">Search for Merch! 🛍️ </label> <br />
        <input
          type="search"
          name="search"
          defaultValue={props.searchValue}
          onChange={handleChange}
          id="search-input"
          placeholder="Search for an item..."
          />
        <button onClick={handleSubmit} type="submit">🔍</button>
      </form>
    </div>
    <div className="category">
      <button onClick={handleSubmit} type="submit">All Categories</button>
      <button onClick={handleSubmit} type="submit">Clothing</button>
      <button onClick={handleSubmit} type="submit">Food</button>
      <button onClick={handleSubmit} type="submit">Accesories</button>
      <button onClick={handleSubmit} type="submit">Tech</button>
    </div>
    </>
  )
}

