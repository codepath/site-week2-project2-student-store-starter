import * as React from "react";
import { useState } from "react";

import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ products, items, category }) {
  const [count, setCount] = useState(0);

  const filteredProducts = products.filter((product) => {
    const matchSearch =
      items === "" || product.name.toLowerCase().includes(items);
    const matchCategory =
      category.toLowerCase() === "" ||
      product.category?.toLowerCase() === category.toLowerCase();
    return matchSearch && matchCategory;
  });

  function teste(event, value){
    const haha = event.value
    console.log(value)
  }

  return (
    <div className="home" id="Buy">
      <h3>Best Selling Products</h3>

      <div className="product-grid">
        {filteredProducts?.map((product) => (
          <div className="product">
            <Link to={"/" + product.id}>
              <img src={product.image} alt="" />
            </Link>
            <div className="description-line">
              <div>
                <p>{product.name}</p>
                <p>${product.price}</p>
              </div>

              <div className="actions">
                <div className="buttons">
                  <button value={product.id} className="add" onClick={event => {setCount(count+1)
                  teste(event, event.value)}}>
                    <i className="material-icons">add</i>
                  </button>
                  <button className="remove" onClick={() => {
                    count > 0 ?
                    setCount(count-1) : setCount(0)}}>
                    <i className="material-icons">remove</i>
                  </button>
                  <button></button>
                </div>
                <span class="quantity">
                  <span class="amt">{count}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
