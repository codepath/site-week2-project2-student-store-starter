import React from "react";
import "./ProductCard.css";
import ProductDetail from "../ProductDetail/ProductDetail";
import { Link } from "react-router-dom";

const ProductCard = ({
  product,
  quantity,
  showDescription,
  handleAddItemToCart,
  handleRemoveItemFromCart,
}) => {
  return (
    <div className="product-card">
      <div className="media" title={`Go to ${product.name}`}>
        <Link to={`/products/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
      <h3 className="product-name">{product.name}</h3>
      <hr />
      <p className="product-price">{`$${product.price}`}</p>
      <hr />
      <ProductDetail
        product={product}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
      {quantity > 0 && (
        <div
          title={`You have ${quantity} ${product.name} in your shopping cart!`}
          className="product-quantity"
        >
          {`- ${quantity} -`}
        </div>
      )}
      {showDescription && (
        <div className="product-description">
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
