import * as React from "react";
import "./Subnavbar.css";

export default function Subnavbar({ category, handleClick }) {
  
  const allCategories = '';
  const clothing = '';
  const food = '';
  const accessories = '';
  const tech = '';
  
  
function handleClick(){
  if (category === "All Categories"){
    allCategories = "is-active";
  } else if ( category === "Clothing"){
    clothing = "is-active";
  } else if (category === "Food"){
    food = "is-active";
  } else if (category==="Accessories"){
    accessories = "is-active";
  } else {
    tech = "is-active";
  }
};

  
  return (
    <section className="subnavbar">
      <div className="container">

        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="🔍 Search..."
              value=""
            />
          </div>


          <div className="cart">
            <a href="/" >
              My Cart
              <i className="material-icons">shopping_cart</i>
            </a>
          </div>
        </div>

          <div className="row">
            <div className="menu">
            </div>
              <ul className="category-menu">
                <li className={allCategories}>
                  <button className="btn">All Categories</button>
                </li>
                <li className={clothing}>
                  <button className="btn">Clothing</button>
                </li>
                <li className={food}>
                  <button className="btn">Food</button>
                </li>
                <li className={accessories}>
                  <button className="btn">Accessories</button>
                </li>
                <li className={tech}>
                  <button className="btn"> Tech</button>
                </li>
              </ul>
          </div>

      </div>
    </section>
  );
}
