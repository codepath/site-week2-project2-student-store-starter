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
import { useState } from "react";

export default function ProductGrid(props) {

//state variables
const [searchedActive, setSearchedActive] = useState(false);
const [searchInput, setSearchInput] = useState("");
const [filteredData, setFilteredData] = useState([]);
//prop variables
const {products} = props;
const {searched} = props;    
console.log(props)
//const {searched} = props;
const handleOnChange = (e) => {
    console.log(12,e.target.value);
    setSearchInput(e.target.value);
    getFilteredItems(searchInput, products);
    console.log(35, filteredData);
    if (e.target.value==''){
        setSearchedActive(false);
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
    console.log(16,filteredData);
    console.log(30,products.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase())));
    return filteredData;
}

const returnProducts = () => {
    console.log(111,searchedActive);
    if (searchedActive === false) {
        console.log("does this work?");
        return(props.products.map((product, i) => { 
            return (<ProductCard className="productCard" key={i} name={product.name}
            price={product.price} pic={product.image}/> )
        }))
    }else if (searchedActive === true){
        console.log(1113,"does this work?");
        return(filteredData.map((product, i) => { 
            return (<ProductCard className="productCard" key={i} name={product.name}
            price={product.price} pic={product.image}/> )
        }))
    }
}
  
    return (
      <div className="productGrid" id="buy">
      <div className="search-input">
      <input type="text" placeholder="Search products" onChange={handleOnChange} value={searchInput} className="textbox" />
      </div>
      <div className="content"><h1>Best Selling Products</h1>
        {console.log(props.products)}
        <div className="grid" >
        {returnProducts()}
        </div>
        </div>
      </div>
    )
}