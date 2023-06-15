import * as React from "react"
import { useState } from "react"
import "./Home.css"
// import Banner from "../Hero/Hero"
import About from "../About/About"
import Categories from "../Categories/Categories"
import Hero from "../Hero/Hero"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({products}) {
  const [category, setCategory] = useState()


  console.log('there',products)
  const createProd= (product) => {
        console.log('hi',product.name)
        return (<div className="product"> 
          <img src={product.image}/> 
          <p className="prod-name"> {product.name} </p>
          <p className="prod-price"> {`$ ${product.price}`} </p>
        </div>)
  }

  // filter
  function updateCategory(e) {
    const newCategory = e.target.value
    setCategory(()=> newCategory)
      {products.filter((product)=> product.category===newCategory).map(product => 
        createProd(product))
      }
  }

  return (
    <div className="home">
      <div> <Hero/> </div>
      <ProductGrid products={products}/>
      
      {/* <Categories handleClick={}/> */}
      {/* <form>
        <input placeholder="Enter item name" required/>
        <button id="search-button" type="submit" class="search-btn">Search</button>
      </form>
      <div className="products-list">
        {products.map(product => 
          createProd(product))
        }
      </div>
     <About/>
      <p>Home</p> */}
    </div>
  )
}
