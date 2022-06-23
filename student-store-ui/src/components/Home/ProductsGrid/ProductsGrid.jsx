import "./ProductsGrid.css"
import * as React from "react"
import ProductCard from "./ProductCard/ProductCard"

export default function ProductsGrid({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
    console.log('handleAddItemToCart: ', handleAddItemToCart);
    
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
            {products.map((product) => {
                for (let j = 0; j < shoppingCart.length; j++){
                    if (shoppingCart[j].itemId = product.id){
                        const quantity = shoppingCart[j].quantity}
                }
        
                return(
                    //add quantity
                    <ProductCard product = {product} productId ={product.id} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart} 
                    showDescription = {false}/>
                )
            })}
        </div>
    )
}