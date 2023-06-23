import React, { useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

function ProductCard({
  cart,
  setCart,
  product,
  showDescription,
  quantities,
  setQuantities,
}) {
  // const [amount, setAmount] = useState(0)

  // console.log('old', quantities)
  // console.log('new', {...quantities, [product.id]: quantities[product.id]+1})

  function handleAddItemToCart() {
    setQuantities({ ...quantities, [product.id]: quantities[product.id] + 1 });
    Object.entries({ ...quantities, [product.id]: quantities[product.id] + 1 })
      .filter(([id, quantity]) => quantity > 0)
      .forEach(([id, quantity]) =>
        {   const idx=cart.findIndex((prod)=> parseInt(prod.itemId)===parseInt(id))
            console.log('id', idx, cart)
            if (idx!==-1){
                cart[idx]={itemId: parseInt(id), quantity: quantity }
                setCart(() => cart)
            } else{
                setCart(() => [...cart, { itemId: parseInt(id), quantity: quantity }])
            }
        }
      );
    // const [cart, setCart] = useState([...shoppingCart]);
    //       setCart()
  }

  //   const shoppingCart = [];
  //   addedToCart.forEach(([id, quantity])=> shoppingCart.push({ itemId: parseInt(id), quantity: quantity }))
  //   const [cart, setCart] = useState([...shoppingCart]);
  //         setCart()
  //     }

  function handleRemoveItemToCart() {
    if (quantities[product.id] > 0) {
      setQuantities({
        ...quantities,
        [product.id]: quantities[product.id] - 1,
      });
      Object.entries({ ...quantities, [product.id]: quantities[product.id] - 1 })
      .filter(([id, quantity]) => quantity > 0)
      .forEach(([id, quantity]) =>
        {   const idx=cart.findIndex((prod)=> parseInt(prod.itemId)===parseInt(id))
            console.log('id', idx, cart)
            if (idx!==-1){
                cart[idx]={itemId: parseInt(id), quantity: quantity }
                setCart(() => cart)
            } else{
                setCart(() => [...cart, { itemId: parseInt(id), quantity: quantity }])
            }
        }
      );
    }
  }

  return (
    <div className="product-card">
      <Link to={"/product/" + product.id}>
        <img className="prod-image" src={product.image} />
        <div className="prod-details">
          <p className="prod-name"> {product.name} </p>
          <p className="prod-price"> {`$ ${product.price.toFixed(2)}`} </p>
        </div>
      </Link>

      <div className="amount-cont">
        <div className="buttons">
          <button onClick={handleAddItemToCart}> + </button>
          <button onClick={handleRemoveItemToCart}> - </button>
        </div>
        <p className="amount"> Amount: {quantities[product.id]} </p>
      </div>

      {showDescription && (
        <div className="prod-description">{product.description}</div>
      )}
    </div>
  );
}

export default ProductCard;
