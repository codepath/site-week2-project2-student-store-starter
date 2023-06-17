import * as React from "react"
import "./ProductGrid.css"
import ProductCard from "../ProductCard/ProductCard";

export default function ProductGrid({ products, searchInput, currentCategory }) {
    return (
      <div id="Buy" className="product-grid">
        <div className="content">
          <div className="grid">
            {products
            .filter(product => product.name.toLowerCase().includes(searchInput.toLowerCase()))
            .filter(product => currentCategory ? product.category.toLowerCase() === currentCategory.toLowerCase() : true)
            .map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))
            }
          </div>
        </div>
      </div>
    );
  }