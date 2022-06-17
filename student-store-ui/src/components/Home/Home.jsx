import * as React from "react";
import Hero from "../Hero/Hero";
import ProductGrid from "../ProductGrid/ProductGrid";
import SearchInput from "../SearchBox/SearchInput";
import "./Home.css";

export default function Home({ products }) {
  var array = [];

  const [selectCategory, setselectedCategory] = React.useState([null]);

  function sortCategory(props) {
    console.log(props)
    array = products.filter((product) => product.category === props);
    setselectedCategory(array);
    console.log(selectCategory);
  }

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
              <li
                onClick={() => sortCategory("all categories")}
                key="All"
                className="category all"
              >
                <p>All Categories</p>
              </li>

              <li
                onClick={() => sortCategory("clothing")}
                key="Clothing"
                className="category clothing"
              >
                <p>Clothing</p>
              </li>
              <li
                onClick={() => sortCategory("food")}
                key="Food"
                className="category food"
              >
                <p>Food</p>
              </li>
              <li
                onClick={() => sortCategory("accessories")}
                key="Accessories"
                className="category accessories"
              >
                <p>Accessories</p>
              </li>
              <li
                onClick={() => sortCategory("tech")}
                key="tech"
                className="category tech"
              >
                <p>Tech</p>
              </li>
            </ul>
          </div>
        </div>
        <h3>Best Selling Products</h3>
      </div>
      <ProductGrid products={products} />
    </div>
  );
}
