import React, { useEffect, useState } from "react";
import { Link, Router, useParams } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import ProductGrid from "../ProductGrid/ProductGrid";
import "./Subnavbar.css";

ProductGrid;

const Subnavbar = ({
  products,
  shoppingCart,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) => {
  //
  //   const { category } = useParams();

  const [filteredData, setFilteredData] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);

    setFilteredData(
      products.filter((product) =>
        product.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleClick = (event) => {
    // console.log(event.target.value);
    setFilteredData(
      products.filter((product) =>
        product.category
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div>
      <div>
        <form>
          <input
            type="text"
            id="searchTerm"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>

      <div className="links">
        <ul>
          <li>
            <button value="clothing" onClick={handleClick}>
              Clothing
            </button>
          </li>
          <li>
            <button value="food" onClick={handleClick}>
              Food
            </button>
          </li>
          <li>
            <button value="accessories" onClick={handleClick}>
              Accessories
            </button>
          </li>
          <li>
            <button value="tech" onClick={handleClick}>
              Tech
            </button>
          </li>
          <li>
            <button value="" onClick={handleClick}>
              All Categories
            </button>
          </li>
        </ul>

        {filteredData ? (
          <ProductGrid
            products={filteredData}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            shoppingCart={shoppingCart}
          />
        ) : (
          <ProductGrid
            products={products}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            shoppingCart={shoppingCart}
          />
        )}
      </div>
    </div>
  );
};

export default Subnavbar;
