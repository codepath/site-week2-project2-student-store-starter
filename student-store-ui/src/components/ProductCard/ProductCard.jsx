import * as React from "react"
import { Link } from "react-router-dom";
import './ProductCard.css'

export default function ProductCard(props) {
  const [isSelected, setSelected] = React.useState(false);

  const handleAddItemToCart = (toAdd) => {
    let newProduct = props.product;

    if ((!props.shoppingCart.find((cartProduct) => cartProduct.id === props.product.id))) {

      newProduct.count = 1;
      props.setShoppingCart((prevCart) => [...prevCart, newProduct]);
      console.log(`item:${newProduct.name} incremented ${newProduct.count}`);
    } else {
      //if cart product exists:
      //find cart product and get previous count + 1 
      let cartProduct = props.shoppingCart.find((cartProduct) => cartProduct.id === props.product.id);
      newProduct.count = cartProduct.count + toAdd;

      //get all the elements except new
      let shoppingCartNew = props.shoppingCart.filter((e) => {
        return e.id !== newProduct.id;
      })

      props.setShoppingCart([...shoppingCartNew, newProduct])
      console.log(`item:${newProduct.name} incremented ${newProduct.count}`);
    }
  }
  //TODO: fix spaghetti code
  const handleRemoveItemFromCart = (toAdd) => {
    let newProduct = props.product;
    let findProduct = props.shoppingCart.find((cartProduct) => cartProduct.id === props.product.id);
    if (findProduct) {

      if (findProduct.count > 0) {
        newProduct.count = findProduct.count + toAdd;
      }
      //get all the elements except new
      let shoppingCartNew = props.shoppingCart.filter((e) => {
        return e.id !== newProduct.id;
      })

      props.setShoppingCart([...shoppingCartNew, newProduct])
      console.log(`item:${newProduct.name} decremented ${newProduct.count}`);
    }
  }


  const getCardFooter = () => {
    // if (!isSelected && (props.class === 'product-card')) {
    return (
      <div className="product-card-footer">

        <div className="section">
          {(props.product.count > 0 && props.product.count) ? <span className="amount">{props.product.count}</span> : null}

        </div>

        <div className="section right">
          <p>${(props.product.price).toFixed(2)}</p>

        </div>
      </div>
    )
  }

  return (
    <div onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
      className={props.class}>

      {(props.class == 'product-card') ?
        <Link className="product-link" to={"store/" + props.product.id}>
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
            <button onClick={(e) => handleRemoveItemFromCart(-1)} className="btn right">-</button>
            <button onClick={(e) => handleAddItemToCart(1)} className="btn right">+</button>
            {/* <p className="shopping-cart-count">{props.product.count || 0}</p> */}
          </div>
        </div>

        <span className="material-icons product-rating">star star star star star</span>
        {(props.class != "product-card") ?
          <span className="product-description">{props.product.description}</span> : null}

      </div>
      {getCardFooter()}
    </div>)
}