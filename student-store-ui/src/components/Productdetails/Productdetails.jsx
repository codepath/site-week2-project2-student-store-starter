import react from "react"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

export default function Productfacts(){
    const param = useParams()
    const [product, setProducts] = useState({})

    useEffect(() => {
        axios.get(`https://codepath-store-api.herokuapp.com/store/${param.id}`)
        .then(response => setProducts(response.data.product))
    }, [])

    return(
        <div className="facts">
            <Navbar />
            <img src={product.image} />
            <p>{product.description}</p>
            <Link to="/">
                <p className="Back-button">Return Back</p>
            </Link>
        </div>
    )
}