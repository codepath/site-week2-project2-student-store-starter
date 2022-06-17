import * as React from "react"
import { Link } from "react-router-dom"
import "./ProductDetail.css"

export default function ProductDetail(props) {

    let { productId } = useParams()

    useEffect(() => {
        const getProduct = async () => {
      
            try {
              
              const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
              const product = response.data.products[productId]
              console.log(product)
              setProduct(product)
              return <ProductView product={product} productId={productId} quantity={shoppingCart.quantity} handleAddItemToCart={props.handleAddItemToCart} handleRemoveItemFromCart={props.handleRemoveItemFromCart} />
            } catch(error) {
              return <NotFound />
            }
          }
          getProduct()  
    },[])
    
    return (
      <div className="product-detail">
        <p>Product Detail</p>
      </div>
    )
  }