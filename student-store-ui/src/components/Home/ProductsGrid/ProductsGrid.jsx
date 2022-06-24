import "./ProductsGrid.css"
import * as React from "react"
import ProductCard from "./ProductCard/ProductCard"

export default function ProductsGrid({getQuantity, products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart, query, setQuery, handleOnSearch, setCategory}) {
    
    return (
        <div className="product-grid">
            <form action="" className="productsGrid"> 
                <input type="text" className="search-bar" onChange={event => setQuery(event.target.value)}/>
                <button type="submit" className="search-button" onClick = {() => handleOnSearch}>Search!</button>
            </form>

            <nav className="categoriesNav">
                <ul>
                    <li><button onClick = {() => setCategory("all")}>All</button></li>
                    <li><button onClick = {() => setCategory("clothing")}>Clothing</button></li>
                    <li><button onClick = {() => setCategory("food")}>Food</button></li>
                    <li><button onClick = {() => setCategory("accessories")}>Accessories</button></li>
                    <li><button onClick = {() => setCategory("tech")}>Tech</button></li>
                </ul>
            </nav>
            <div className="only-products">
                {products.map((product) => {
                    return(
                        <ProductCard product = {product} key = {product.id} productId ={product.id} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart} 
                        showDescription = {false} quantity = {getQuantity(product)}/>
                    )
                })}
            </div>
        </div>
    )
}