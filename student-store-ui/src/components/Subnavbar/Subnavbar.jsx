import * as React from "react";
import "./Subnavbar.css";
import {useState} from 'react';

export default function Subnavbar({searchTerm, setSearchTerm, selectedCategory, setSelectedCategory}) {
  
  // handle input
  function handleInput(event){
    setSearchTerm(event.target.value);
  }


  return (
    <section className="subnavbar">
      <div className="container">

        <div className="row">
          <div className="search-bar">
            <input
              type="text"
              name="search"
              placeholder="🔍 Search..."
              value={searchTerm}
              onChange={handleInput}
            />
          </div>

          <a href="/" >
          <div className="cart">
              My Cart
              <i className="material-icons">shopping_cart</i>
          </div>
          </a>
        </div>

          <div className="row">
            <div className="menu">
            </div>
              <ul className="category-menu">
                <li className=''>
                  <button className={selectedCategory === 'all categories' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory('all categories')} >All Categories</button>
                </li>
                <li className=''>
                  <button className={selectedCategory === 'clothing' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory('clothing')}>Clothing</button>
                </li>
                <li className=''>
                  <button className={selectedCategory === 'food' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory('food')}>Food</button>
                </li>
                <li className=''>
                  <button className={selectedCategory === 'accessories' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory('accessories')}>Accessories</button>
                </li>
                <li className=''>
                  <button className={selectedCategory === 'tech' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory('tech')}> Tech</button>
                </li>
              </ul>
          </div>

      </div>
    </section>
  );
}
