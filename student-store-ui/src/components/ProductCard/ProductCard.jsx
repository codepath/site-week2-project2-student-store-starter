import * as React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  return (
    <Link to={"products/" + props.product.id}>
      {props.createProduct(props.product)}
    </Link>
  );
}
