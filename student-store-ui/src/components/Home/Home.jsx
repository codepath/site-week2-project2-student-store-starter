import * as React from "react";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchInput from "../SearchBox/SearchInput";
import "./Home.css";

export default function Home({ products }) {


  const[category,setcategory]=React.useState("all category")

  const [filter_product, setfilter_product] = React.useState([]);




 


  
  function isCategory(value)
  {
    return value.category === category
  }
  let products_array = [...products].filter(isCategory)


  if (category == "all category")
  {
    products_array = products
  }
  
  console.log(products_array)
 

  return (
    <div className="home">
      <Hero className="Hero" />
      <div className="headlines">
        <SearchInput className="search" />
        <div className="content">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <div className="product-category">
            <ul className="cat">
              <li key="All" className="category all" onClick={()=>setcategory("all category")}>
                <p>All Categories</p>
                
              </li>

              <li key="Clothing" className="category clothing" onClick={()=>setcategory("clothing")}>
                <p>Clothing</p>
              </li>
              <li key="Food" className="category food" onClick={()=>setcategory("food")}>
                <p>Food</p>
              </li>
              <li key="Accessories" className="category accessories" onClick={()=>setcategory("accessories")}>
                <p>Accessories</p>
              </li>
              <li key="tech" className="category tech" onClick={()=>setcategory("tech")}>
                <p>Tech</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ProductGrid products={products_array} />
    </div>
  );
}

export function Headline() {
  return (
    <div>
      <Hero className="Hero" />
      <div className="headlines">
        <SearchInput className="search" />
        <div className="content">
          <div className="hamburger-menu">
            <i className="material-icons">menu</i>
          </div>
          <div className="product-category">
            <ul className="cat">
              <li key="All" className="category all">
                <p>All Categories</p>
              </li>

              <li key="Clothing" className="category clothing">
                <p>Clothing</p>
              </li>
              <li key="Food" className="category food">
                <p>Food</p>
              </li>
              <li key="Accessories" className="category accessories">
                <p>Accessories</p>
              </li>
              <li key="tech" className="category tech">
                <p>Tech</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
