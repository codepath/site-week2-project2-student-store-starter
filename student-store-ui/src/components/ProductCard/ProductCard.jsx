import * as React from "react"
import {Link} from 'react-router-dom';
import "./ProductCard.css"


// Props = product, productId, shoppingCart, handleAddItemToCart, handleRemoveItemToCart, showDescription (T/F), selectedProduct, setSelectedProduct
export default function ProductCard(props) {
console.log("Selected product is " + props.selectedProductId)


const found = props.shoppingCart.find(obj => {
  return obj.id === props.product.id;
});



  return (
    <div className="product-card">
        {props.showDescription ? <div>{props.product.description}</div> : <></>}
        <Link to={`products/${props.product.id}`} className="media">
            <img src={props.product.image} className="product-image" onClick={props.setSelectedProductId(props.product.id)}></img>
        </Link>
        <div className="product-info">
          <div className="main-info">
            <p className="product-name">{props.productName}</p>

            <div class="stars">
              <svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" fill="none">
                <path d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z" fill="var(--star-color-filled)"></path></svg><svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" fill="none"><path d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z" fill="var(--star-color-filled)"></path></svg><svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" fill="none"><path d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z" fill="var(--star-color-filled)"></path></svg><svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" fill="none"><path d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z" fill="var(--star-color-filled)"></path></svg><svg x="0px" y="0px" width="32px" height="32px" viewBox="0 0 32 32" class="" fill="none"><path d="M14.5026 3.59429L11.102 10.4893L3.49358 11.5985C2.12917 11.7964 1.58236 13.4785 2.57182 14.4419L8.07635 19.8058L6.77443 27.383C6.54008 28.7526 7.98261 29.7785 9.19079 29.138L15.9972 25.5603L22.8037 29.138C24.0119 29.7733 25.4544 28.7526 25.2201 27.383L23.9181 19.8058L29.4227 14.4419C30.4121 13.4785 29.8653 11.7964 28.5009 11.5985L20.8925 10.4893L17.4919 3.59429C16.8826 2.36527 15.1171 2.34965 14.5026 3.59429Z" fill="var(--star-color-empty)"></path><path d="M16.0009 2.66666C15.407 2.66666 14.8132 2.97399 14.5059 3.59387L11.1044 10.4906L3.49395 11.595C2.12918 11.7929 1.58223 13.4754 2.57195 14.4391L8.07791 19.8044L6.77565 27.3836C6.54125 28.7431 7.97373 29.7797 9.19265 29.139L16.0009 25.5656V2.66666Z" fill="var(--star-color-filled)"></path>
              </svg>
      
            </div>

            <p className="product-price">${props.product.price.toFixed(2)}</p> {/* The price should formatted so that it starts with a $, and has at least one integer digit, along with exactly two decimal digits. */}
          </div>

          <div className="actions">
            <div className="buttons">
              <button className="add" onClick={() => props.handleAddItemToCart(props.productId)}>
                <i class="material-icons">add</i>  
              </button> {/* Add functionality to the buttons*/}
              <button className="remove" onClick={() => props.handleRemoveItemFromCart(props.productId)}>
                <i class="material-icons">remove</i>
              </button>
            </div>
            {found ? 
            <span class="quantity">
            <span class="amt">{found.quantity}</span>
          </span> : <></>
          }
            
          </div>
        </div>

    
     
        {/*  If item is added to cart, show quantity of the product. If not in cart, show nothing*/}
    </div>
  )
}
