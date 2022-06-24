import * as React from "react"
import "./Receipt.css"


export default function Receipt(props) {




    let beforeTaxes =  props.receipt.purchase.total - (props.receipt.purchase.total * 0.0875)


    return (
       
        <div className = "receipt">
            {props.checkoutSuccess ? <h4 className = "post-condition">Success!</h4> : <h4 className = "postCondition">Unsuccessful</h4>}
            <h4 className = "receipt-title">Receipt</h4>
            <h5 className = "receipt-for">Showing receipt for {props.receipt.purchase.name} available at {props.receipt.purchase.email}</h5>
            {props.receipt.purchase.order.map((item) => {

                let matchingProduct = props.products.find((product) => product.id === item.itemId)
                let unitPrice = matchingProduct.price
                let name = matchingProduct.name
                let cost = unitPrice * item.quantity



                
                return(
                    <ul className = "receipt-item-list">
                        <li className = "receipt-item" key = {matchingProduct.id}>{item.quantity} total {name} purchased at a cost of ${unitPrice.toFixed(2)} for a total cost of ${cost.toFixed(2)}</li>  
                    </ul>
                )
            })}
            <ul className ="receipt-item-list">
                <li className = "receipt-subtotal-info">Before taxes, the subtotal was ${beforeTaxes.toFixed(2)}</li>
                <li className = "receipt-subtotal-info">After taxes and fees were applied, the total comes out to ${props.receipt.purchase.total.toFixed(2)}</li>
            </ul>
            <button className = "exit-btn" onClick = {() => {props.setShowReceipt(false)}}>Exit</button>

            
        </div>

  )
}
