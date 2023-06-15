import * as React from "react"
import "./Home.css"
import Subnavbar from "../Subnavbar/Subnavbar"
import {useState} from 'react'

export default function Home({products}) {

  const [selectedCategory, setSelectedCategory] = useState('all categories');



  function createProduct(info, idx){
    return (
      <div className="grid">
      <div className="product" key={idx}>
        <img src={info.image}/>
        <p>{info.name}</p>
        <p>{info.price}</p>
      </div>
      </div>
    )
  }
  

    const filtered = products?.filter(product => {
      return product.category === selectedCategory.toLowerCase();
    });

  const returnItems = selectedCategory === 'all categories' ? products : filtered;

  //const filterCategory = filterCategory();

  console.log(selectedCategory)
  

  return (


    <>
    

    {/* Subnavbar "component"*/}


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
                  <button className={selectedCategory.category === 'all categories' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory('all categories')} >All Categories</button>
                </li>
                <li className=''>
                  <button className={selectedCategory.category === 'clothing' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory('clothing')}>Clothing</button>
                </li>
                <li className=''>
                  <button className={selectedCategory.category === 'food' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory('food')}>Food</button>
                </li>
                <li className=''>
                  <button className={selectedCategory.category === 'accessories' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory('accessories')}>Accessories</button>
                </li>
                <li className=''>
                  <button className={selectedCategory.category === 'tech' ? 'btn is-active' : 'btn'} onClick={()=> setSelectedCategory('tech')}> Tech</button>
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
        returnItems?.map((product, idx) => createProduct(product, idx))
      }
      </div>
      </div>
    </div>
    </>
  )
}
