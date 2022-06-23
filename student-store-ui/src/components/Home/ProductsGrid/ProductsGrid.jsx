import "./ProductsGrid.css"
import * as React from "react"
import ProductCard from "./ProductCard/ProductCard"

export default function ProductsGrid({products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart}) {
    console.log('handleAddItemToCart: ', handleAddItemToCart);

    function getQuantity(product){
        if (shoppingCart == undefined){
            return 0
        }
        else{
            for (let j = 0; j < shoppingCart.length; j++){
                if (shoppingCart[j].itemId = product.id){
                    return shoppingCart[j].quantity}
            }
        }
    }
    
    
    
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
                
        
                return(
                    //add quantity
                    <ProductCard product = {product} key = {product.id} productId ={product.id} handleAddItemToCart = {handleAddItemToCart} handleRemoveItemFromCart = {handleRemoveItemFromCart} 
                    showDescription = {false} quantity = {getQuantity(product)}/>
                )
            })}
        </div>
    )
}