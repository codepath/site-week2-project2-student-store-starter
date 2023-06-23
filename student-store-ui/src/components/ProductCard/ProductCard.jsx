import { Link } from "react-router-dom"

import "./ProductCard.css"

export default function ProductCard({ product, cart, setCart }) {
  const handleIncrement = () => {
    if (!cart || !cart.find(item => item.id === product.id)) {
      let newItem = {
        "id": product.id,
        "name": product.name,
        "price": product.price.toFixed(2),
        "quantity": 1
      }
      setCart([...cart, newItem])
    } else {
      let updatedCart = [...cart]
      let itemIndex = updatedCart.findIndex(item => item.id === product.id)
      updatedCart[itemIndex].quantity += 1
      setCart(updatedCart)
    }
  } 
  const handleDecrement = () => {
    if (cart.find(item => item.id === product.id)) {
      let updatedCart = [...cart]
      let itemIndex = updatedCart.findIndex(item => item.id === product.id)
      if (updatedCart[itemIndex].quantity == 1) {
        updatedCart.splice(itemIndex, 1)
      } else {
        updatedCart[itemIndex].quantity -= 1
      }
      setCart(updatedCart)
    }
  }

  let quantity = 0
  if (cart?.find(item => item.id === product.id)) {
    let itemIndex = cart.findIndex(item => item.id === product.id)
    quantity = cart[itemIndex].quantity
  }

  return (
    <div className="product-card">
      <Link key={product.id} to={`/product/${product.id}`}>
        <img src={product.image}/>
      </Link>
      <div className="info-box">
        <section className="info">
          <b>{product.name}</b><br/>
          ${product.price.toFixed(2)}
        </section>
        <section className="quantity">
          <div className="buttons">
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
          </div>
          <div className="counter">
            Qty. : {quantity}
          </div>
        </section>
      </div>
    </div>
  )
}
