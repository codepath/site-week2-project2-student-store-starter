import * as React from "react"
import "./CategoryNav.css"

export default function CategoryNav(props) {
  return (
    
      
       <div>
            <button onClick={() => props.handleCategoryChange("")}>All Categories</button>
            <button onClick={() => props.handleCategoryChange("clothing")}>Clothing</button>
        
            <button onClick={() => props.handleCategoryChange("food")}>Food</button>
       
            <button onClick={() => props.handleCategoryChange("accessories")}>Accessories</button>
        
            <button onClick={() => props.handleCategoryChange("tech")}>Tech</button>
       </div>
          
        
        
      
      
    
  )
}
