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
            showDescription={props.showDescription}
            product={props.product}
            productId={props.productId}
          />
        </div>
      </div>
    </div>
  );
}
