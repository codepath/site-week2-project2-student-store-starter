import React, { useState } from "react";
import "./Categories.css";

function Categories({
  setCategories,
  originalProducts,
  setProducts,
}) {
  

  function handleClick(selectedCategory, allCat = false) {
    if (allCat){
        setProducts(originalProducts);
    }
    else{
        setProducts(
            originalProducts
              .filter((product) => product.category === selectedCategory)
              
          )
    }
        
    setCategories(selectedCategory);
   
  }

  

  return (
    <nav className="categories">
      <ul>
        <li className="links"
            onClick={() => {
              handleClick("", true);
            }}>
            All Categories
        </li>
        <li
          
            className="links"
            onClick={() => {
              handleClick("clothing");
            }}>
          
            Clothing
          
        </li>
        <li
          
            className="links"
            onClick={() => {
              handleClick("food");
            }}>
          
            
            Food
         
        </li>
        <li
          
            className="links"
            onClick={() => {
              handleClick("accessories");
            }}>
          
            Accessories
          
        </li>
        <li
          
          className="links"
            onClick={() => {
              handleClick("tech");
            }}>
          
            
            Tech
          
        </li>
      </ul>
    </nav>
  );
}

export default Categories;
