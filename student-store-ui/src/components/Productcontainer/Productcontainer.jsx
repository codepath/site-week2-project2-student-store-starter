import react from "react";
import { Link } from "react-router-dom";

export default function Productgrid({ productFilter }) {
    return(
        <div className="product-container">
            {
                productFilter?.map(product => {
                    return(
                    <div className="product">
                        <Link to={"products/" + product.id}>
                            <img src = {product.image}/>
                        </Link>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    </div>)
                })
            }
        </div>
    )
}

