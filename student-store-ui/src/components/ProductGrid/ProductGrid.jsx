import * as React from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";

export default function ProductGrid({ products, searchTerm, category }) {
  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) {
      return false;
    }
    if (
      searchTerm &&
      !product.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <section className="product-card" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="product-info">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </Link>
        </section>
      ))}
    </div>
  );
}
