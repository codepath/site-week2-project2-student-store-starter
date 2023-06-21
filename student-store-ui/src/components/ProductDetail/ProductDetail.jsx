import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductView from "../ProductView/ProductView";

const ProductDetail = () => {
  //puts in the setProduct and stores it in product
  const [product, setProduct] = useState("");
  //helps with the routing
  const { productId } = useParams();
  useEffect(() => {
    axios
      .get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
      .then((response) => {
        //not sure
        console.log("product ....", response.data.product);
        setProduct(response.data.product);
        console.log(product.id);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [productId]);
  if (!ProductDetail) {
    return <h1 className="loading">Loading......</h1>;
  }
  console.log("product id ..." + product.id);

  return (
    <div className="product-detail">
      <ProductView
        product={product}
        productId={product.id}
        quantity={0}
        // handleAddItemToCart={handleAddItemToCart}
        // handleRemoveItemToCart={handleRemoveItemToCart}
      />
      {/* product, productId, quantity, handleAddItemToCart, handleRemoveItemToCart */}
    </div>
  );
};

export default ProductDetail;
