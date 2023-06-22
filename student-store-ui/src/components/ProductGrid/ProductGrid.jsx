import * as React from "react";
import { Link } from "react-router-dom";
import "./ProductGrid.css";

export default function ProductGrid({ products, searchTerm, category }) {
  const filteredProducts = products.filter(product => {
    if (category && product.category !== category) {
      return false;
    }
    if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    return true;
  });

  return (
    <div className="prodgrid">
      {filteredProducts.map((product) => 
        <section className="products-grid" key={product.id}>
          <Link to={`/product/${product.id}`}>
            <div className="product-card">
              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </div>
          </Link>
        </section>
      )}
    </div>
  );
}