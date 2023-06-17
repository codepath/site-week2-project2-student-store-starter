import react from "react";
import { Link } from "react-router-dom";

//Default function that takes in a prop productFilter
export default function Productgrid({ productFilter }) {
    return(
        //Container/Grid to display the products
        <div className="product-container">
            {
                productFilter?.map(product => {
                    return(
                    <div className="product">
                        <Link className="link" to={"products/" + product.id}>
                            <img src = {product.image}/>
                        </Link>
                    <p>{product.name}</p>
                    <p>{"$"}{product.price.toFixed(2)}</p>
                    </div>)
                })
            }
        </div>
    )
}

