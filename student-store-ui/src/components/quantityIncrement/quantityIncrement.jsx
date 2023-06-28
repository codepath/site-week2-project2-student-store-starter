import {React, useState } from 'react'
import shoppingCartHook from '../shoppingCartHook'
const quantityIncrement = () => {
    const [quantity, setQuantity]= useState(0)
    const {ShoppingCart, setShoppingCart } = shoppingCartHook()

    const increment = () => {
        setQuantity(quantity + 1)
    }
  return (
    <div>quantityIncrement</div>

  )
}

export default quantityIncrement