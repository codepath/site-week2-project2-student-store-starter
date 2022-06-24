import "./ProductCard.css"
import { Link } from "react-router-dom"

export default function ProductCard({ shoppingCart, product, handleAddItemToCart, handleRemoveItemFromCart, showDescription}) {
    //
    
    const quantityOfItem = shoppingCart.find((prod) => {
        return prod.itemId == product.id
    })?.quantity;

    
    const showDesc  = showDescription ? "active" : "hidden";

    return (
        <div className="ProductCard">
            <div className="media">
                <Link to={`/products/${product.id}`}>
                    {<img src={product.image} alt="product-cover" />}
                </Link>
            </div>
            <div className="product-info">
                <div className="info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{`$${product.price}`}</p>
                    <div className={`desc ${showDesc}`}>
                        <p className="product-description">{product.description}</p>
                    </div>
                </div>
                <div className="actions">
                    <div className="buttons">
                        <button className="add" onClick={() => handleAddItemToCart(product.id)}>
                            <i className="material-icons">
                                add
                            </i>
                        </button>
                        <button className="remove" onClick={() => handleRemoveItemFromCart(product.id)}>
                            <i className="material-icons">
                                remove
                            </i>
                        </button>
                    </div>
                    <span className="quantity">
                        <span className="amt">{quantityOfItem}</span>
                    </span>
                </div>
            </div>
        </div>
    )
}