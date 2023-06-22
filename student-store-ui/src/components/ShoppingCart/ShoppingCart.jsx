import react, { useEffect, useState } from "react"
import './Shoppingcart.css'

export default function ShoppingCart({ShoppingList}){

    console.log(ShoppingList)
    const [FirstItem, SetFirstItem] = useState(false)
    const [SubTotal, SetSubTotal] = useState(0)

    useEffect(() =>{
        if(ShoppingList?.length > 0){
            SetFirstItem(true)
        }else{
            SetFirstItem(false)
        }
    })

    useEffect(() => {
        let itemTotal = 0
        ShoppingList?.map((item) => {
            itemTotal += item.price * item.quantity
        })
        SetSubTotal(itemTotal)
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
            <span className="subTotal" style={{display: FirstItem ? "" : "none"}}>
                <p>{"Subtotal : $"}{SubTotal.toFixed(2)}</p>
                <p>{"Taxes and Fees : $"}{(SubTotal.toFixed(2) * 0.0875).toFixed(2)}</p>
                <p>{"Total : $"}{(+SubTotal.toFixed(2) + +(SubTotal.toFixed(2) * 0.0875).toFixed(2)).toFixed(2)}</p>
            </span>
        </div>
    )
}