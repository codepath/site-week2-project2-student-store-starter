import { useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import "./ProductDetails.css"

export default function ProductDetails() {
  const [productToDisplay, setProductToDisplay] = useState({})

  const { id } = useParams()
  const storeURL = "http://localhost:3001/store"
  useEffect(() => {
    axios.get(`${storeURL}/${id}`)
      .then(response => {
        setProductToDisplay(response.data)
      })
  }, [])

  return (
    <div className="product-card-description">
      <img src={productToDisplay.image}/>
      <div className="info-box">
        <b>{productToDisplay.name}</b><br/>
        ${productToDisplay.price}
        <p>{productToDisplay.description}</p>
      </div>
    </div>
  )
}
