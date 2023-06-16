import * as React from "react"
import "./ProductGrid.css"
import ProductCard from '../ProductCard/ProductCard'

export default function ProductGrid({products}) {

return (
    
    <div id="Buy" className = "product-grid">
        <div className="content">
        
          <h3>Best Selling Products</h3>

          <div className="grid">
            {/* {selectedCategory != "All Categories" ? */}
            {/* {products?.filter((item) => {
              return ((selectedCategory == "All Categories") || (item.category === selectedCategory));
            })}; */}

          
            {console.log("Home component products",products)}
        
            {products?.map((product, index) => {
            // have to put additional return bc => has implicit return
            // const currentMenuItems = data.filter((item) => {
            //   return item.food_category === selectedCategory && item.restaurant === selectedRestaraunt;
            // });
            
            
             return <ProductCard product={product} index = {index} />})}
          </div>
        </div>
    </div>
)}