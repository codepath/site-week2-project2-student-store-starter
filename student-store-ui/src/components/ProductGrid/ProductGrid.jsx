import * as React from "react"
import "./ProductGrid.css"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductGrid({searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, products, count, setCount, handleAdd, handleMinus, shoppingCart, setShoppingCart} ) {
    
    
    
    // creating products
    function createProduct(info, idx){
        return (
        <div className="product-card">
        <div className="product-media" key={idx}>
            <Link to={"products/" + info.id}>
            <img src={info.image}/>
            </Link>
        </div>
        <div className="product-info">
            <div className="main-info">
                <p>{info.name}</p>
                <p>${info.price.toFixed(2)}</p>
            </div>

            <div className="actions">

                <div className="buttons" >
                    <button className="add" onClick={(e)=>handleAdd(e, info.id, info)}>
                        <i className="material-icons">add</i>
                    </button>
                    <button className="remove" onClick={(e) => handleMinus(e,info.id,info)}>
                        <i className="material-icons">remove</i>
                    </button>
                </div>

                { count[info.id] ?
                <span className="quantity">
                <span className="amt">{count[info.id]}</span>
                </span> 
                :
                <></>
                }
             
            </div>
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

    <div id = "Buy" className="product-grid">
        <div className="content">
      {
        productFilter?.map((product, idx) => createProduct(product, idx))
      }
      </div>
    </div>
      )
}
