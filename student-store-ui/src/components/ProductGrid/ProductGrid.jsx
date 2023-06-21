import * as React from "react"
import "./ProductGrid.css"
import { Link } from "react-router-dom"
import ProductCard from "../ProductCard/ProductCard"

export default function ProductGrid({ products }) {
  return (
    <div className="product-grid">
      <h3 className="best-sellers">Best Sellers</h3>
      <div className="grid-content">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
