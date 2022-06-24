import * as React from "react"
import { Link } from "react-router-dom";
import './ProductCard.css'

export default function ProductCard(props) {
  const [isSelected, setSelected] = React.useState(false);

  const handleAddItemToCart = (product) => {
    let newProduct = {
      itemId: 0,
      quantity: 0
    };
    newProduct.itemId = product.id;

    if ((!props.shoppingCart.find((cartProduct) => cartProduct.itemId === product.id))) {
      console.log("didnt exist")
      newProduct.quantity = 1;
      props.setShoppingCart((prevCart) => [...prevCart, newProduct]);

      console.log(`item:${newProduct.name} incremented ${newProduct.count}`);
    } else {
      console.log("did exist")
      //if cart product exists:
      //find cart product and get previous count
      let existingProduct = props.shoppingCart.find((cartProduct) => cartProduct.itemId === product.id);
      newProduct.quantity = existingProduct.quantity + 1;
      //get all the elements except new
      let shoppingCartNew = props.shoppingCart.filter((e) => {
        return e.itemId !== newProduct.itemId;
      })

      props.setShoppingCart([...shoppingCartNew, newProduct]);
      console.log(`item:${newProduct.itemId} incremented ${newProduct.quantity}`);
    }
    console.log(111, `${newProduct}`);
    console.log(222, props.shoppingCart);
  }
  //TODO: fix spaghetti code
  const handleRemoveItemFromCart = (product) => {
    let newProduct = {
      itemId: 0,
      quantity: 0
    };
    newProduct.itemId = product.id;

    let findProduct = props.shoppingCart.find((cartProduct) => cartProduct.itemId === product.id);
    // check if product exists
    if (findProduct) {
      //if the count is greater than one, decrease by one
      if (findProduct.quantity > 0) {
        newProduct.quantity = findProduct.quantity - 1;
      }
      //get all the elements except new
      let shoppingCartNew = props.shoppingCart.filter((e) => {
        return e.itemId !== newProduct.itemId;
      })

      props.setShoppingCart([...shoppingCartNew, newProduct])
      console.log(`item:${newProduct.itemId} decremented ${newProduct.quantity}`);
    }
  }

  return (
    <div onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className={props.class}>

      {(props.class == 'product-card') ?
        <Link className="product-link" to={"products/" + props.product.id}>
          <img className="product-image" src={props.product.image} />
        </Link>
        :
        <img className="product-image" src={props.product.image} />
      }

      <div className="product-card-overview">


        <div className="product-card-header">
          <div className="section">
            <h1 className="title">{props.product.name}</h1>
          </div>
          <div className="section">
            <button onClick={(e) => handleRemoveItemFromCart(props.product)} className="btn right">-</button>
            <button onClick={(e) => handleAddItemToCart(props.product)} className="btn right">+</button>
            {/* <p className="shopping-cart-count">{props.product.count || 0}</p> */}
          </div>
        </div>

        <span className="material-icons product-rating">star star star star star</span>
        {(props.class != "product-card") ?
          <span className="product-description">{props.product.description}</span> : null}

      </div>
      <CardFooter amount={props.product.amount} count={props.product.count} price={props.product.price} />
    </div>)
}

export function CardFooter(props) {
  return (
    <div className="product-card-footer">

      <div className="section">
        {(props.count > 0 && props.count) ? <span className="amount">{props.count}</span> : null}

      </div>

      <div className="section right">
        <p>${(props?.price).toFixed(2)}</p>

      </div>
    </div>
  )
}