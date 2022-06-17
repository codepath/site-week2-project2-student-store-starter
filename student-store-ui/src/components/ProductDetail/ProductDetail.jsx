import * as React from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"
import "./ProductDetail.css"

export default function ProductDetail(props) {

  const [product, setProduct] = React.useState([])
  const { productId } = useParams()

  const getProductData = async () => {
    props.setIsFetching(true)
    try {
      const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
      setProduct(response.data.product);
      console.log(response.data.product);
    } catch (error) {
      props.setError(error)
      console.log(props.error);
    } finally {
      props.setIsFetching(false)
    }
  }


  React.useEffect(() => {
    getProductData();
  }, []);

  return (
      <div className="product-detail">
        {/* need to update so that it shows not found */}

        <ProductView
          product={product}
          productId={productId}
          // need to figure out shopping cart obj to get quantity
          quantity={0}
          handleAddItemToCart={props.handleAddItemToCart}
          handleRemoveItemFromCart={props.handleRemoveItemFromCart}
          shoppingCart={props.shoppingCart}
        />
      </div>
    )
}