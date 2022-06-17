import * as React from "react"
import "./SearchNavbar.css"

export default function SearchNavbar(props) {

  const setByButton = (event) => {
    props.setCategory(event)
  }

    return (
      <div className="sub-navbar">
        <div className="content">
        <label htmlFor="productSearch">Search</label>
            <input
                name="searching"
                type="text"
                placeholder="Serach Term"
                value={props.search}
                onChange={(e)=> props.setSearch(e.target.value)}
            />
    
            </div>
            <div className="product-categories">
                <button id ="all" onClick={(e) => {
                    setByButton(e.target.id);
                }}>All Categories</button>
                <button id ="food" onClick={(e) => {
                    setByButton(e.target.id);
                }}>Food</button>
                <button id ="clothing" onClick={(e) => {
                    setByButton(e.target.id);
                }}>Clothing</button>
                <button id ="accessories" onClick={(e) => {
                    setByButton(e.target.id);
                }}>Accessories</button>
                <button id ="tech" onClick={(e) => {
                    setByButton(e.target.id);
                }}>Tech</button>
            </div>
          </div>
  
        
      
    )
  }