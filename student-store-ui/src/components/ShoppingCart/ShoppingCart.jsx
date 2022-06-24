import * as React from "react"
import "./ShoppingCart.css"
import ProductGrid from "../ProductGrid/ProductGrid"
import Hero from "../Hero/Hero"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
export default function ShoppingCart({isOpen, products, shoppingCart}) {

    const findProduct = (productId) => {
        
        if( productId != null){
            const foundProduct = products.find(
                (product)=> product.id === productId.itemId
            )
            console.log("found product", foundProduct)
            console.log("productId: ", productId)

            return foundProduct;
        
        }
        else{
            return
        }
        // console.log("product.id: ", product.id)
    }
    const calculateSubTotal =(shoppingCart) =>{
        let total = 0;
        for (let i = 0; i < shoppingCart.length; i++) {
            total += findProduct(shoppingCart[i])?.price
          }
        return total;

    }
    const calculateTaxes =(subtotal) =>{
        let taxes = subtotal*0.875;
        return taxes;
    }
    const calculateTotal= (subtotal, taxes ) =>{
        let total = subtotal + taxes;
        return total;
    }
  return (
    <div className="shopping-cart">
        {shoppingCart != null
        ? shoppingCart
          .map((productId, idx) => {
console.log(findProduct(productId))

            return(
                <>
            <p className="cart-product-name">{findProduct(productId).name}</p>
            <p className="cart-product-quantity">{productId.quantity}</p>
            <p className="total-price">Subtotal: {calculateSubTotal(shoppingCart)}</p>
            <p className="total-price">Taxes: {calculateTaxes(calculateSubTotal(shoppingCart))}</p>
            <p className="total-price">Taxes: {calculateTotal(calculateSubTotal(shoppingCart), calculateTaxes(calculateSubTotal(shoppingCart))) }</p>
           
           </>
            
          )})
        : <p className="notification">No items added to cart yet. Start shopping now!</p>
        }
    </div>
 )
}