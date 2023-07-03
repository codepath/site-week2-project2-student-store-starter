import * as React from "react";
import "./SubNavbar.css";

import { useState } from "react";

export default function SubNavbar({ products,  setItems,  category = '' , setCategory}) {
  const [formData, setFormData] = useState({
    productName: '',
  });


  // const classState = isCategActive ? "is-active" : "";

  function handleInput(event){
    setFormData({
        ...formData,
        [event.target.name] : event.target.value
        
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    setItems(formData.productName)
  }


  return (
    <nav className="sub-navbar">
      <div className="content">
        <div className="row">
          <div className="search-bar">
            <form>
              <input
                type="text"
                name="productName"
                placeholder="Search"
                onChange={handleInput}
                value={formData.productName}
              />
              <button onClick={handleSubmit}>
                <i className="material-icons">search</i>
              </button>
              
            </form>
          </div>
          <div className="links">
            <span className="help">
              <i className="material-icons">help</i>
              Help
            </span>
            <div className="cart">
              <a href="/">
                My Cart
                <i className="material-icons">shopping_cart</i>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <ul className="category-menu open">
            <li className={category === 'All Categories' ? 'is-active' : ''}>
              <button 
                onClick={() => setCategory('')}>All Categories</button>
            </li>
            <li className={category === 'Clothing' ? 'is-active' : ''}>
              <button 
                onClick={() => setCategory('clothing')}>
                Clothing</button>
            </li>
            <li className={category === 'Food' ? 'is-active' : ''}>
              <button 
                onClick={() => setCategory('food')}>Food</button>
            </li>
            <li className={category === 'Acessories' ? 'is-active' : ''}>
              <button 
                onClick={() => setCategory('accessories')}
              >Accessories</button>
            </li>
            <li>
              <button 
                onClick={() => setCategory('tech')}>Tech</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
