import * as React from "react"
import "./Home.css"
import Subnavbar from "../Subnavbar/Subnavbar"
import {useState} from 'react'
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";

export default function Home({products, count, setCount, handleAdd, handleMinus}) {

  const [selectedCategory, setSelectedCategory] = useState('all categories');
  const [searchTerm, setSearchTerm] = useState('');


  return (


    <>
    
    <Hero/>


    <Subnavbar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
      />


    <div className="home">

    <ProductGrid 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm} 
        selectedCategory={selectedCategory} 
        setSelectedCategory={setSelectedCategory}
        products={products}
        count={count}
        setCount={setCount}
        handleAdd={handleAdd} 
        handleMinus={handleMinus}
    />

    </div>
    </>
  )
}
