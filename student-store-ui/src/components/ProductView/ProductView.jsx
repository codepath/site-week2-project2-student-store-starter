import ProductCard from "../ProductCard/ProductCard";
import { Headline } from "../Home/Home";
import "./ProductView.css";

export default function ProductView(props) {
  return (
    <div>
      <Headline />
      <div className="product-view">
        <div className="product-view-card">
          <ProductCard
            quantity={props.quantity}
            showDescription={props.showDescription}
            product={props.product}
            productId={props.productId}
            shoppingCart={props.shoppingCart}
            setshoppingCart= {props.setshoppingCart}
          />
        </div>
      </div>
    </div>
  );
}
