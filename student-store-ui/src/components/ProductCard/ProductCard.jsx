import React from "react"
import { Link } from "react-router-dom"

function ProductCard({setCart, info, setQuantities, quantities}) {
    function addItemtoCart(){
        console.log('button', quantities)
        // console.log([...quantities].map(([id, quantity])=> info.id===id ? [id, quantity+=1] : [id, quantity]
        // ))

        setQuantities(() => [...quantities].map(([id, quantity])=> info.id===id ? [id, quantity+=1] : [id, quantity]
        ))
        // setCart(quantities.filter(([id, quantity]) => quantity > 0))
        
    }
    function RemoveItemfromCart(){
        console.log('button', quantities)

        setQuantities(() => [...quantities].map(([id, quantity])=> (info.id===id && quantity>0) ? [id, quantity-=1] : [id, quantity]
        ))

        // setCart()
    }
  
    return (
      <div className="product">
          <Link id="product-link" to={'products/' + info.id}>
        <div>
          <img src={info.image} />
          <p className="">{info.name}</p>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
          <p>${info.price.toFixed(2)}</p>
        </div>
      </Link>
      <button onClick={addItemtoCart}> + </button>
      <button onClick={RemoveItemfromCart}> - </button>
      <span>{quantities[info.id -1][1]}</span> 

      </div>
      
    )
  }

  export default ProductCard