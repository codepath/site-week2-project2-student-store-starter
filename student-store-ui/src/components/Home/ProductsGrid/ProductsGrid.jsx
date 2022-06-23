import "./ProductsGrid.css"
import * as React from "react"

export default function ProductsGrid({products, handleAddItemToCart, handleRemoveItemFromCart}) {
    {products.map((product) => {
        return(
            <ProductCard showDescription = {false}/>
        )
    })}

    return (
        <div className="product-grid">
            <form action="" className="productsGrid">
                <input type="text" />
                <button type="submit">Search!</button>
            </form>
            <nav className="categoriesNav">
                <ul>
                    <li><a href="">All</a></li>
                    <li><a href="">Clothing</a></li>
                    <li><a href="">Food</a></li>
                    <li><a href="">Accessories</a></li>
                    <li><a href="">Tech</a></li>
                </ul>
            </nav>
        </div>
    )
}