import * as React from "react"
import "./ProductCard.css"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function ProductCard({ product, handleAddItemToCart, handleRemoveItemToCart, shoppingCart, setShoppingCart }) {

   const [quantity, setQuantity] = useState(null)

   // adds product and quantities to cart
   function handleAddQuantity(product) {

      const cartItem = shoppingCart?.find(item => item.id === product.id) // evaluates if the given product is already at the shoppingCart array or not

      if(cartItem) {

         // we need to increment 

         const updateCart = shoppingCart?.map(item => {

            if(item.id === product.id){

               return {...item, quantity: item.quantity + 1}
            }

            return item
         })

         setShoppingCart(updateCart)
      }

      else{

         setShoppingCart ([...shoppingCart, {...product, quantity: 1}])
      }

   }
     
   function handleSubstractQuantity(product) {

      const cartItem = shoppingCart?.find(item => item.id === product.id) // evaluates if the given product is already at the shoppingCart array or not

      if(cartItem) {

         // we need to decrement 

         const updateCart = shoppingCart?.map(item => {

            if((item.id === product.id) && item.quantity > 0 ){

               return {...item, quantity: item.quantity - 1}
            }

            return item
         })
         const updatedCart = updateCart.filter((item) => item.quantity > 0); 
         setShoppingCart(updatedCart)
      }
      
   }
   



   function getQuantity(product){

      // compare current product with products in shopping cart
      // if exists get quantity from shopping cart
      // else quantity = 0

      return shoppingCart?.map(item => {

         if(item.id === product.id){

            return item.quantity
         }

      })

   }
   

   return (

      <div className="product-card">
         <div className="media">
            <Link to={"products/" + product.id}>
               <img src={product.image} alt="product cover" loading="lazy" />
            </Link>
         </div>
         <div className="product-info">
            <div className="main-info">
               <p className="product-name">{product.name}</p>
               <div className="stars">
                  <svg className="stars-svg" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero" /></svg>
                  <svg className="stars-svg" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero" /></svg>
                  <svg className="stars-svg" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero" /></svg>
                  <svg className="stars-svg" clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.322 2.923c.126-.259.39-.423.678-.423.289 0 .552.164.678.423.974 1.998 2.65 5.44 2.65 5.44s3.811.524 6.022.829c.403.055.65.396.65.747 0 .19-.072.383-.231.536-1.61 1.538-4.382 4.191-4.382 4.191s.677 3.767 1.069 5.952c.083.462-.275.882-.742.882-.122 0-.244-.029-.355-.089-1.968-1.048-5.359-2.851-5.359-2.851s-3.391 1.803-5.359 2.851c-.111.06-.234.089-.356.089-.465 0-.825-.421-.741-.882.393-2.185 1.07-5.952 1.07-5.952s-2.773-2.653-4.382-4.191c-.16-.153-.232-.346-.232-.535 0-.352.249-.694.651-.748 2.211-.305 6.021-.829 6.021-.829s1.677-3.442 2.65-5.44z" fillRule="nonzero" /></svg>
               </div>
               <p className="product-price">${product.price.toFixed(2)}</p>
            </div>
            <div className="actions">
               <div className="buttons">
                  <button className="add" onClick={()=> handleAddQuantity(product)}><i className="material-icons">add</i></button>
                  <button className="remove" onClick={()=>handleSubstractQuantity(product)}><i className="material-icons">remove</i></button></div>
               <span className="quantity"><span className="amt">{getQuantity(product)}</span></span>
            </div>
         </div>
      </div>
   )
}


