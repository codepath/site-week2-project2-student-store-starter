// import * as React from "react"
// import ProductCard from "../ProductCard/ProductCard"
// import "./ProductGrid.css"
// import { useState } from "react"

// export default function productGrid(props) {
//   const [showDescription, setShowDescription] = React.useState(false);
//     return (
//       <div className="productGrid" id="buy">
//       <div className="content"><h1>Best Selling Products</h1>
//         {console.log(props.products)}
//         <div className="grid">
//         {props.products.map((product, i) => {
//           return (<ProductCard className="productCard" key={i} name={product.name}
//           price={product.price} pic={product.image} showDescription={showDescription} id={product.id}/> )
//         })}
//         </div>
//         </div>
//       </div>
//     )
// }\

import * as React from "react"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductGrid.css"
import { useState, useEffect } from "react";

export default function ProductGrid(props) {
//console.log(props)
//state variables
const [searchedActive, setSearchedActive] = useState(false);
const [searchInput, setSearchInput] = useState("");
const [filteredData, setFilteredData] = useState([]);
const [quantity, setQuantity] = React.useState(0);
const [filteredCategory, setFilteredCategory] = useState([]);
const [filterActive, setFilterActive] = useState(false);

//prop variables
const {products} = props;
//console.log(products)
//const {searched} = props;    
//const {searched} = props;

useEffect(()=>{
    setFilteredCategory(products);
}, []);

const handleCategories = (e) =>{
    let typeCategory = e.target.value;
    typeCategory != "all categories" ? setFilteredCategory(products.filter((product) =>{
        if (typeCategory == product.category){
            return product;
        }
    })) : setFilteredCategory(products);
    setFilterActive(true);
}

const handleOnChange = (e) => {
    setSearchInput(e.target.value);
    getFilteredItems(searchInput, products);
    if (e.target.value==''){
        setSearchedActive(false);
        setcategory("all items")
    }else{
        setSearchedActive(true);
    }
    
}
const getFilteredItems = (searchInput, products) => {
    if (!searchInput){
        return products;
    }
    const data = products.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase()));
    console.log(15, data);
    setFilteredData(data);
    // setSearched(true);
    //console.log(16,filteredData);
    //console.log(30,products.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase())));
    return filteredData;
}

const returnProducts = () => {
    //console.log(111,searchedActive);
    if (searchedActive === false) {
        if(filterActive){
            return(filteredCategory.map((product, i) => { 
                return (<ProductCard className="productCard"  key={product.id} name={product.name}
                price={product.price} image={product.image} quantity={quantity} setQuantity={setQuantity}
                productId={product.id} showDescription={false} handleAddItemToCart={props.handleAddItemToCart} 
                    handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                    setshoppingCart={props.setshoppingCart}/> )
            }))
            }
            else{
        return(props.products.map((product, i) => { 
            return (<ProductCard className="productCard" key={product.id} name={product.name}
            price={product.price} image={product.image} quantity={quantity} setQuantity={setQuantity}
            productId={product.id} showDescription={false} handleAddItemToCart={props.handleAddItemToCart} 
                handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                setshoppingCart={props.setshoppingCart}
            /> )
        }))
    }
    }else if (searchedActive === true){
        return(filteredData.map((product, i) => { 
            return (<ProductCard className="productCard" key={product.id} name={product.name}
            price={product.price} image={product.image} quantity={quantity} 
            setQuantity={setQuantity} productId={product.id}
                showDescription={false} handleAddItemToCart={props.handleAddItemToCart} 
                    handleRemoveItemFromCart={props.handleRemoveItemFromCart}
                    setshoppingCart={props.setshoppingCart}
            /> )
        }))
    }
}
  
    return (
      <div className="productGrid" id="buy">
      <div className="search-input">
      <input type="text" placeholder="Search products" onChange={handleOnChange} value={searchInput} className="textbox" />
      </div>
      <div className="categories">
        <li className="active-btn">
            <button id="all" value="all categories" onClick={handleCategories}>All Categories</button>
            <button id="clothing" value="clothing" onClick={handleCategories}>Clothing</button>
            <button id="food" value ="food" onClick={handleCategories}>Food</button>
            <button id="acc" value="accessories" onClick={handleCategories}>Accessories</button>
            <button id="tech" value="tech" onClick={handleCategories}>Tech</button>
        </li>
      </div>
      <div className="content"><h1>Best Selling Products</h1>
        <div className="grid" >
        {returnProducts()}
        </div>
        </div>
      </div>
    )
}