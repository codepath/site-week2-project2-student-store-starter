import React, { useState } from "react";
import ProductGrid from "../ProductGrid/ProductGrid";
import Categories from "../Categories/Categories";
import "./BuyNow.css";

function BuyNow({ products, setProducts, originalProducts }) {
  const [searchTerm, setSearchTerm] = useState();
  const [categories, setCategories] = useState();



  function handleSearchProduct(e) {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm)
    let filterProd
    if (categories==='all'){
     filterProd= originalProducts.filter((product) => {
      return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    }
     else {
      filterProd= originalProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
      }).filter(product => product.category === categories )
    }
    
    setProducts(
      filterProd
    );
    
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm('')
  }

  return (
    <div className="buy-now">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    
    <div className="search-bar">
      <h1> Best Selling Products</h1>

        <form onSubmit={handleSubmit}>
        <label htmlFor="product" />
        <input
          className="search-input"
          type="text"
          name="product"
          placeholder="    enter product"
          onChange={handleSearchProduct}
          
        />
      </form>

    </div>
      
      <Categories
        originalProducts={originalProducts}
        setProducts={setProducts}
        setCategories={setCategories}
      />

      <ProductGrid products={products} />
    </div>
  );
}

export default BuyNow;
