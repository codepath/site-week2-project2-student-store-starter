import * as React from "react";
import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";
import {useState} from 'react';
import { Link } from "react-router-dom";



export default function ProductGrid(props) {
  let newProducts;

  if (props.catValue === "all") {
    newProducts = props.products;

    newProducts = props.products?.filter((product) =>
      product.name.toLowerCase().includes(props.searchValue.toLowerCase())
    );
  } else {
    newProducts = props.products?.filter((product) =>
      product.name.toLowerCase().includes(props.searchValue.toLowerCase())
    );

    newProducts = newProducts?.filter((product) =>
      product.category.toLowerCase().includes(props.catValue.toLowerCase())
    );
  }


//   const[quantity, setQuantity] = useState(0)
// console.log(quantity)


//   function addHandleQuantity (event) {
//     setQuantity((quantity) => 
//       quantity + 1)
//   }

//   function subHandleQuantity (event) {
//     setQuantity((quantity) => 
//       quantity - 1)
//   }

//   function createProduct(info) {

//     return (
//       <div className="product-name">
//         <Link to={"products/" + info.id}>
//         <img src={info.image} />
//         </Link>
//         <p>{info.name}</p>
//         <p>${info.price.toFixed(2)}</p>
//         <button onClick={addHandleQuantity}> + </button>
//       <button onClick={subHandleQuantity}> - </button> 
//       <p>{quantity}</p>
//       </div>
//     );
//   }

  return (
    <>
      <h2 id="buy-now" style={{ marginLeft: "50px", font: "large" }}>
        Best Selling Products
      </h2>
      <div className="productGrid">
        {newProducts?.length === 0 ? (
          <p className="gridP">Nun Here!</p>
        ) : (
          newProducts?.map((product) => (
            <ProductCard product={product}  />
          ))
        )}
      </div>
    </>
  );
}
