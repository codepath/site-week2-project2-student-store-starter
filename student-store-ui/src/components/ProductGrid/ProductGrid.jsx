import * as React from "react";
import "./ProductGrid.css";
import { Link } from "react-router-dom";

export default function ProductGrid({ products, searchTerm, category }) {
  function createProduct(info) {
    return (
      <>
        <div className="product" id = "Buy">
          <Link to={"/products/" + info.id}>
            <img className="test" src={info.image} />
          </Link>

          <p>{info.name}</p>
          <p>
            {info.price.toLocaleString("us-EN", {
              style: "currency",
              currency: "USD",
            })}
          </p>
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
      </>
    );
  }

  const filteredByCategory = products.filter((product) => {
    return product.category == category.toLowerCase();
  });

  const returnItems =
    category == "All Categories" ? products : filteredByCategory;

  const searchFiltered = returnItems.filter((item) => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
   
    <div className="Samtest">
      {searchTerm == ""
        ? returnItems.map((p) => createProduct(p))
        : searchFiltered.map((p) => createProduct(p))}
    </div>

   
  );
}
