import * as React from "react"
import {useParams} from "react-router-dom"

export default function ProjectDetail(props) {
    const {productId} = useParams()
    const thisProduct = props.products.find(prod => prod.id == productId)
    return (
        <div>
            <img className="modal-image" src={thisProduct.image} alt="Product cover" />
            <h1>Name:{thisProduct.name}</h1>
            <p>Category: {thisProduct.category}</p>
            <p>{thisProduct.description}</p>
            <p>Price: ${thisProduct.price}</p>
        </div>
    )
}

