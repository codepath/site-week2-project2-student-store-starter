import * as React from "react";

import "./Home.css";
import { Link } from "react-router-dom";

export default function Home({ products, items }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(items)
  );

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
              <p>{product.name}</p>
              <div className="actions">
                <div className="buttons">
                  <button className="add">
                    <i className="material-icons">add</i>
                  </button>
                  <button className="remove">
                    <i className="material-icons">remove</i>
                  </button>
                </div>
              </div>
            </div>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
