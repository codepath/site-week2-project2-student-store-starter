import * as React from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import ProductView from "../ProductView/ProductView"
import NotFound from "../NotFound/NotFound"
import "./ProductDetail.css"

export default function ProductDetail(props) {

  const [product, setProduct] = React.useState(null)
  const { productId } = useParams()

  const getProductData = async () => {
    props.setIsFetching(true)
    try {
      // const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
      const response = await axios.get(`http://localhost:3001/store/${productId}`);
      if (response?.data?.product) {
        setProduct(response.data.product);
      } else {
        props.setError("Cannot find product")
      }
      console.log("received this product data:", response.data.product);
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

  if (props.isFetching) {
    return (
      <h1 className="loading">Loading...</h1>
    )
  }
  
  let productQuantity = 0
  if (product) {
  const targetProduct = props.shoppingCart.find((productObj) => productObj.itemId == product.id)
  if (targetProduct) {
    productQuantity = targetProduct.quantity
  }}

  return (
      <div className="product-detail">
        {!(product)
        ? <NotFound />
        : <ProductView
            product={product}
            productId={productId}
            quantity={productQuantity}
            handleAddItemToCart={props.handleAddItemToCart}
            handleRemoveItemFromCart={props.handleRemoveItemFromCart}
            shoppingCart={props.shoppingCart}
          />
        }
      </div>
    )
}
