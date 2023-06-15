import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";
import "./Hero.css";
import "./ProductGrid.css";
import "./QueryBars.css";
import cartPNG from "../../../Assets/cart_logo.png";

function Hero() {
  // displays hero banner
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="cta-text">
          <h1>CodePath</h1>
          <h1>Collectibles</h1>
          <p>Shop all things <b>CodePath Univeristy</b>. From Clothes, Food, and everything in between!</p>
        </div>
        <div className="hero-media">
          <img src={cartPNG} alt="shopping art logo" />
        </div>
      </div>
    </div>
  )
}
function ProductGrid({ products, filter }) {
  // Returns all products in grid style using CSS
const filterProducts = products.filter((product)=> {
  // filters products by search and category tag. 
  return (product.name.toLowerCase().includes(filter.search.toLowerCase()) || filter.search === "") &&
  (product.category.toLowerCase() === filter.category.toLowerCase() || filter.category.toLowerCase() === "all");
});
  
  return (
    <>
      <h1 className="products-title">Best Selling Products</h1>
      <div className="product-grid">
        {/* // rendering products */}
        {filterProducts.map((product) => (

          <div className="product">
            <img src={product.image} alt={"image of" + product.name} />
            <p className="product-title">{product.name}</p>
            <div className="product-buttons">
              <button onClick={()=> console.log("button click")} className="add">
                <i className="material-icons">add</i>
              </button>
              <button onClick={()=> console.log("button click")} className="remove">
                <i className="material-icons">remove</i>
              </button>
            </div>
            <div className="prices"></div>
            <p className="product-price">${product.price.toFixed(2)}</p>
          </div>

        ))}

      </div>
    </>
  )
}

function SearchBar({ updateQuery, search }){
  return (
    <div className="search-bar-container">
      <label htmlFor="name"></label>
      <input
        type="text" name="search"
        value={search} onChange={updateQuery}
        label="Search" placeholder="Search Products"
        className="search-input" />
      <i className="material-icons">search</i>
    </div>
  )
}
function FilterBar({ updateQuery, activeCategory }) {
  const CATEGORIES = ["All", "Clothing", "Food", "Accessories", "Tech"];
  return (
    <div className="filter-tags-container" label="Categories">
      <nav className="filter-tags-content">
        <ul>
          {CATEGORIES.map((category) => {
            let isActive = category == activeCategory ? "active" : "";
            return (
              <li>
                <button className={"category-button " + isActive} value={category} onClick={updateQuery}
                  name="category">{category}</button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default function Home() {
  const URL_DB = "https://codepath-store-api.herokuapp.com/store";
  const [products, setProduts] = useState([]);
  const [query, setQuery] = useState({
    category: "All",
    search: ""
  });
  // data fetching
  useEffect(() => {
    axios.get(URL_DB).then((response) => {
      console.log("fetching data...");
      setProduts(() => response.data.products);
    })
  }, []);
  function queryUpdateHandler(event) {
    // updates query object for Filter and Search Bar 
    // componenets
    let name = event.target.name;
    let value = event.target.value;
    setQuery(() => ({
      ...query,
      [name]: value
    }))
  }

  return (
    <div className="home">
      <Hero />
      <div className="query-bar-container">
        <SearchBar updateQuery={queryUpdateHandler} search={query.search} />
        <FilterBar updateQuery={queryUpdateHandler} activeCategory={query.category} />
      </div>
      <ProductGrid products={products} filter={query} />
    </div>
  )
}
