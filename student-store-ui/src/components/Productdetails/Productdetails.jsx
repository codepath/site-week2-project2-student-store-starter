import react from "react"
import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"

//Default function names Prodictfacts
export default function Productfacts(){
    //Route paramater
    const param = useParams()
    //State varible to store the product in
    const [product, setProducts] = useState({})

    //Fetch product data from API
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