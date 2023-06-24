import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PurchaseDetails.css"
export default function PurchaseDetails(){
    const [purchase, setPurchase] = useState({});
    const params = useParams();
    const URL = `http://localhost:3001/store/purchases/${params.id}`;

    useEffect(() => {
        axios.get(URL).then((response) => {
            setPurchase(() => response.data.purchase);  
        })
    }, []);
    console.log(purchase.order);

    return (
        <div className="purchase-container">
            <div className="purchase-content">
                <div className="header-content">
                    <div className="purchase-summary">
                        <h1 className="purchase-id">Purchase ID: {purchase.id}</h1>
                        <p className="purchase-customer-name"> Name: {purchase.name}</p>
                        <p className="purchase-customer-email">Email: {purchase.email}</p>
                    </div>

                </div>
                <div className="sub-header-content">
                    <h1 className="description-container">
                        Receipt Summary
                    </h1>
                    <div className="purchase-receipt">
                        <div className="purchase-cart">
                            {purchase.order?.map((item) => {
                                return (
                                <div className="purchase-cart-row">
                                    <span>{item.name}</span>
                                    <span>{item.quantity}x</span>
                                    <span>{(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                                )
                            })}
                        </div>
                        <p className="purchase-taxes">Taxes: {purchase.receipt?.taxes.toFixed(2)}</p>
                        <p className="purchase-subtotal">Subtotal: {purchase.receipt?.subtotal.toFixed(2)}</p>
                        <p className="purchase-total">Total: {purchase.total?.toFixed(2)}</p>

                    </div>
                </div>
            </div>
        </div>
    )
}