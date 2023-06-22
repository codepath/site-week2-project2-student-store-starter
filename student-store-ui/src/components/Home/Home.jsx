import * as React from "react"
import "./Home.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Search from "../Search/Search";

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