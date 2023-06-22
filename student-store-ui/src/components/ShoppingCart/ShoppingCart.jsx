import react, { useEffect, useState } from "react"
import './Shoppingcart.css'

export default function ShoppingCart({ShoppingList}){

    console.log(ShoppingList)
    const [FirstItem, SetFirstItem] = useState(false)
    useEffect(() =>{
        if(ShoppingList?.length > 0){
            SetFirstItem(true)
        }else{
            SetFirstItem(false)
        }
    })
    return(
        <div className="Shoppingcart">
            <h2>Shopping Cart</h2>
            <span className="Categories" style = {{display: (FirstItem ? "" : "none" )}}>
                <p>{"Product Name"}</p>
                <p>{"Quantity"}</p>
                <p>{"Unit Price"}</p>
                <p>{"Cost"}</p>
            </span>
            {ShoppingList?.length === 0 ? (<>
            No Items in cart
            </>) : (<>
            {ShoppingList?.map((item) =>{
                return (<span className="ShoppingCartSpan"> 
                    <p>{item?.name}</p> 
                    <p>{item?.quantity}</p> 
                    <p>{(item?.price).toFixed(2)}</p>
                    <p>{(item?.price * item.quantity).toFixed(2)}</p>
                    </span>)
            })}
            </>)}
        </div>
    )
}