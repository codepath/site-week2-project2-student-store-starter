import * as React from "react"
import "./Subnavbar.css"

export default function Subnavbar({searchInput, setSearchInput, setCurrentCategory}) {

  const handleCategory = (category) => {
    setCurrentCategory(category);
  };
  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="subnavbar">
      <i className="material-icons">menu</i>
                <li className="is-active"><button onClick={() => handleCategory("")}>All Categories</button></li>
                <li className=""><button onClick={() => handleCategory("clothing")}>clothing</button></li>
                <li className=""><button onClick={() => handleCategory("food")}>food</button></li>
                <li className=""><button onClick={() => handleCategory("accessories")}>accessories</button></li>
                <li className=""><button onClick={() => handleCategory("tech")}>tech</button>
                </li>
            <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={searchInput}
              onChange={handleSearchChange}
            ></input>
          </div>
    </div>
  )
}
