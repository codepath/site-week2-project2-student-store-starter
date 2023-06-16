import * as React from "react"
import "./Home.css"
import Subnavbar from "../Subnavbar/Subnavbar"
import {useState} from 'react'
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";

export default function Home({products}) {

  const [selectedCategory, setSelectedCategory] = useState('all categories');
  const [searchTerm, setSearchTerm] = useState('');


  // creating products
  function createProduct(info, idx){
    return (
      <div className="grid">
      <div className="product" key={idx}>
        <Link to={"products/" + info.id}>
        <img src={info.image}/>
        </Link>
        <p>{info.name}</p>
        <p>${info.price}</p>
      </div>
      </div>
    )
  }
  
  // handle input
  function handleInput(event){
    setSearchTerm(event.target.value);
  }

  // search and filter products
  const productFilter = products?.filter((product) => {
    const lowercaseSearchTerm = searchTerm.toLowerCase();
    const lowercaseSelectedCategory = selectedCategory.toLowerCase() === "all categories" ? "" : selectedCategory.toLowerCase();
    const productName = product.name.toLowerCase();
    const matchesSearch = lowercaseSearchTerm === "" || productName.includes(lowercaseSearchTerm);
    const matchesCategory = lowercaseSelectedCategory === "" || product.category?.toLowerCase() === lowercaseSelectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (


    <>
    
    <Hero/>

    {/* Subnavbar "component"*/}


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
    
    {/* Home "component"*/}

    <div className="home">
      <div id = "Buy" className="product-grid">
        <div className="content">
      {
        productFilter?.map((product, idx) => createProduct(product, idx))
      }
      </div>
      </div>
    </div>
    </>
  )
}
