import { React, useState }from 'react'
import ShoppingCart from './ShoppingCart/ShoppingCart'

const shoppingCartHook = () => {
 const [ShoppingCart, setShoppingCart]= useState([])
  return {
    ShoppingCart,
    setShoppingCart
}
}

export default shoppingCartHook