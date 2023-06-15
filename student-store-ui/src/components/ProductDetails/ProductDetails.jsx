import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./ProductDetails.css"


export default function ProductDetails() {
  const mockBackend = "https://codepath-store-api.herokuapp.com/store"
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios.get(`${mockBackend}/${id}`)
      .then(response => {
        setProduct(response.data.product)
      })
  }, [])

  console.log(product)
    return (
       <div className="product-card-description">
          <img src={product.image}/>
          <div className="info-box">
            <b>{product.name}</b><br/>
            ${product.price}
            <p>{product.description}</p>
          </div>
        </div>
    )
}
