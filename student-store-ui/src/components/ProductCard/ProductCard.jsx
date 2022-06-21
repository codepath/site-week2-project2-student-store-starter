import { Link } from 'react-router-dom'
import './ProductCard.css'
export default function ProductCard({product, productId,shoppingCart,handleAddItemToCart,handleRemoveItemFromCart,showDescription,quantity
})
{
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  let linkAddress = '/products/' + productId

  shoppingCart.map((element) => {
    if (element.itemId === productId)
    {
      quantity = element.quantity
    }
  })


  return (
    <div className="card">
      <div className="image-border">
        <Link to={linkAddress}>
          <img className="product-image" src={product.image} />
        </Link>
      </div>
      <div className="container">
        <h5 className="product-name">
          <b>{product.name}</b>
          <div className="pro-buttons">
            <button className="pro-add" onClick={() => handleAddItemToCart(productId)}>
              <i className="material-icons">add</i>
              {quantity <= 0 ? '' : <p>{quantity}</p>}
            </button>
       
            <button className="pro-remove" onClick={() =>handleRemoveItemFromCart (productId)}>
              <i className="material-icons">remove</i>
            </button>
          </div>
        </h5>
        <p> &#11088;&#11088;&#11088;&#11088;</p>
        <p></p>
        <p>{formatter.format(product.price)}</p>
        {!showDescription ? '' : <h5>{product.description}</h5>}
      </div>
    </div>
  )
}


