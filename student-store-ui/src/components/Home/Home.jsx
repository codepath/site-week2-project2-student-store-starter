import React from "react";
import "./Home.css";
import Hero from "../Hero/Hero";

export default function Home({ products }) {
  return (
    <div className="home">
      <Hero />
      <div className="Menu-bar ">

       <p>I will add seach and the filter thing here </p> 
       <div className="Row-for-Seach-and-Cart-icon">
        <div className="Search-Bar">
          <input type="text" name="search" placeholder="Search"></input>
          <br />
          <button>Cart</button>//I will open the cart from here

        </div>
        </div>
        <div className="Menu-bar-button-fliter">
          <button>All Categories</button>
          <button>Food</button>
          <button>Clothing</button>
          <button>Accessories</button>
          <button>Tech</button>

        </div>
      </div>

      <div className="product-container">
        {products?.map((product) => {
          return (
            <div className="product">
              <img src={product.image} />
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          );
        })}
      </div>
      <div className="hero">
          <h1 >About ME! </h1>
          <h1>Find Your Merch!</h1>
          <p>I will be adding cool facts about me </p>
      </div>
    </div>
  );
}

