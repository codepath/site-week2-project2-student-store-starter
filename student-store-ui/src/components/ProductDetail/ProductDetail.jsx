import * as React from "react"
import { useParams } from "react-router-dom"
import "./ProductDetail.css"

export default function ProductDetail(props) {
    const { productId } = useParams();

    return (
        <h1>Product detail: { productId }</h1>
    )
}