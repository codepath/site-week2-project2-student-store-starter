import ProductCard from "../ProductCard/ProductCard";
import "./ProductView.css";

export default function ProductView(props) {
  return (
    <div>
      <div className="product-view">
        <div className="product-view-card">
          <ProductCard
            showDescription={props.showDescription}
            description={props.product.product.description}
            name={props.product.product.name}
            price={props.product.product.price}
            image={props.product.product.image}
            productId={props.productId}
            shoppingCart={props.shoppingCart}
            setshoppingCart= {props.setshoppingCart}
            handleRemoveItemFromCart={props.handleRemoveItemFromCart} 
            handleAddItemToCart={props.handleAddItemToCart} 
          />
        </div>
      </div>
    </div>
  );
}