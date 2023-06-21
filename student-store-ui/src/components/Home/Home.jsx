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

    {/* Subnavbar component*/}

    <Subnavbar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
      />

    {/* Home component*/}

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
