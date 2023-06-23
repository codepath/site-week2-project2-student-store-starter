import React, { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import Categories from "../Categories/Categories";
import Hero from "../Hero/Hero";
import "./BuyNow.css";

function BuyNow({ products, setProducts, originalProducts, quantities, setQuantities }) {
  const [searchTerm, setSearchTerm] = useState();
  const [categories, setCategories] = useState();



  function handleSearchProduct(e) {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm)
    
    
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    let filterProd
    if (categories==='all'){
      if (searchTerm.length>0) {
        filterProd= originalProducts.filter((product) => {
          return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      } else{
        filterProd = originalProducts
      }
     
    }
    
     else {
      if (searchTerm.length>0) {
        filterProd= originalProducts.filter((product) => {
          return product.name.toLowerCase().includes(searchTerm.toLowerCase());
        }).filter(product => product.category === categories )
      } else {
        filterProd = originalProducts.filter(product => product.category === categories )
      }
      
    }
    
    setProducts(
      filterProd
    );
    setSearchTerm('')
  }

  return (
    <div className="buy-now">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
      <Hero/>
      <Categories
        originalProducts={originalProducts}
        setProducts={setProducts}
        setCategories={setCategories}
      />
    <div className="search-bar">
        
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="product" />
            <input
              className="search-input"
              type="text"
              name="product"
              placeholder="    enter product"
              onChange={handleSearchProduct}
              value= {searchTerm}
              
            />
            <button onClick= {handleSubmit}> Search </button>
          </div>
        
      </form>

    </div>
    <h1> Best Selling Products</h1>

      
      

      <ProductGrid products={products} quantities={quantities} setQuantities={setQuantities}/>
    </div>
  );
}

export default BuyNow;
