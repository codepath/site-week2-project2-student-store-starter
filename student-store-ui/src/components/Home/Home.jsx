import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Search from "../Search/Search";
import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

export default function Home({products, selectedCategory, searchTerm, setSearchTerm}) {
    return (
        <div className="home">
            <Search setSearchTerm={setSearchTerm} />
            <div className="product-grid">
                <ProductGrid products={products} selectedCategory={selectedCategory} searchTerm={searchTerm}/>
            </div>
            <div className="about">
                About
            </div>
            <div className="Contact">
                Contact
            </div>
            <div className="Footer">
                Footer
            </div>
        </div>
    )
}

{products.map((product) => (
    <ProductCard
      key={product.id}
      id={product.id}
      name={product.name}
      image={product.image}
      price={product.price}
    />
  ))}