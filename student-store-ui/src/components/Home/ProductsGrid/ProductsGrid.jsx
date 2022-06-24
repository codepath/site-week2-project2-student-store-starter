import "./ProductsGrid.css"
import * as React from "react"
import ProductCard from "./ProductCard/ProductCard"

export default function ProductsGrid({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart, query, setQuery, handleOnSearch}) {
    
    function getQuantity(product){
        for (let j = 0; j < shoppingCart.length; j++){
            if (shoppingCart[j].itemId == product.id){
                
                return shoppingCart[j].quantity}
        }
        return 0
    }
    
    return (
        <div className="product-grid">
            <form action="" className="productsGrid"> 
                <input type="text" className="search-bar" onChange={event => setQuery(event.target.value)}/>
                <button type="submit" className="search-button" onClick = {() => handleOnSearch(products, query)}>Search!</button>
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