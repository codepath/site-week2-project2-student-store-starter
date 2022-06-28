import * as React from "react"
import "./ShoppingCart.css"

export default function ShoppingCart({products, shoppingCart}) {
    //console.log("ShoppingCArt", products)
    let totalCost = 0;
    let taxes = (totalCost*0.0875)
    let finalCost = 0;

    return (
        <div>
            {shoppingCart.length > 0 ?
            <div className="header">
                <div className="cart-items">
                <li className="header-row"></li>

                {shoppingCart.map((item) => {
                    let iteminfo = products.find(element => element.id === item.id);
                    totalCost += iteminfo.price*item.quantity;
                    taxes = (totalCost*0.0875).toFixed(2)
                    finalCost+=totalCost
                    finalCost+=totalCost*0.0875
                    
                    finalCost + totalCost*(8.75/100).toFixed(2)

                    return(
                        <table className="shopping-cart">
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Unit Price</th>
                                <th>Cost</th>
                            </tr>
                            
                            <tr key={item.id}  id="cart-product">
                                <td className="cart-product-name">{iteminfo.name} </td>
                                <td className="cart-product-quantity">{item.quantity}</td>
                                <td>${iteminfo.price}</td>
                                <td>${iteminfo.price * item.quantity}</td>
                            </tr>
                        </table>

                    )})}

                </div>
                <ul className="receipt">
                    <span>Subtotal:     ${totalCost.toFixed(2)}</span><br></br>
                    <span>Taxes and Fees:    ${taxes}</span><br></br>
                    <span>Total$:     {finalCost.toFixed(2)}</span>
                </ul> 
            </div>
            : <div className="empty">No items in the cart</div>}
        </div>
    );
}