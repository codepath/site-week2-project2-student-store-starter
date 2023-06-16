import * as React from 'react';
import axios from "axios";
import { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

export default function ProductDetails(){
    const [product, setProduct] = useState({});
    const url = "https://codepath-store-api.herokuapp.com/store/";

    const {id} = useParams();

    useEffect(() => {
        axios.get(url + id).then((response) => {
            setProduct(response.data.product);
        })
    },[]
    );



    return(
        <div className="product-detail">
            <h1>{product.name}</h1>
        </div>

    )
}
