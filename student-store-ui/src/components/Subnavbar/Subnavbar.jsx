import * as React from "react";
import "./Subnavbar.css";
import {useState} from 'react';

export default function Subnavbar({currState}) {
  
  const [selectedCategory, setSelectedCategory] = useState({ 'categories' : 'all categories'});

  

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
                <li className=''>
                  <button className={selectedCategory.category === 'all categories' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory({...selectedCategory, 'category': 'all categories'})} >All Categories</button>
                </li>
                <li className=''>
                  <button className={selectedCategory.category === 'clothing' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory({...selectedCategory, 'category': 'clothing'})}>Clothing</button>
                </li>
                <li className=''>
                  <button className={selectedCategory.category === 'food' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory({...selectedCategory, 'category': 'food'})}>Food</button>
                </li>
                <li className=''>
                  <button className={selectedCategory.category === 'accessories' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory({...selectedCategory, 'category': 'accessories'})}>Accessories</button>
                </li>
                <li className=''>
                  <button className={selectedCategory.category === 'tech' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory({...selectedCategory, 'category': 'tech'})}> Tech</button>
                </li>
              </ul>
          </div>

      </div>
    </section>
  );
}
