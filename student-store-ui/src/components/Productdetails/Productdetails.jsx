import react from "react"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"

export default function Productfacts(){
    const param = useParams()
    const [product, setProducts] = useState({})

    useEffect(() => {
        axios.get(`https://codepath-store-api.herokuapp.com/store/${param.id}`)
        .then(response => setProducts(response.data.product))
    }, [])

    return(
        <div className="facts">
            <img src={product.image} />
            <p>{product.description}</p>
        </div>
    )
}