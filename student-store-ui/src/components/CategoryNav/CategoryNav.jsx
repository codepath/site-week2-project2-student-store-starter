import * as React from "react"
import "./CategoryNav.css"

export default function CategoryNav(props) {
  return (
    
      
       <div className="categoryNav">
            <button className="category" onClick={() => props.handleCategoryChange("")}>All Categories</button>
            <button className="category"onClick={() => props.handleCategoryChange("clothing")}>Clothing</button>
        
            <button className="category" onClick={() => props.handleCategoryChange("food")}>Food</button>
       
            <button className="category"  onClick={() => props.handleCategoryChange("accessories")}>Accessories</button>
        
            <button className="category" onClick={() => props.handleCategoryChange("tech")}>Tech</button>
       </div>
          
        
        
      
      
    
  )
}
