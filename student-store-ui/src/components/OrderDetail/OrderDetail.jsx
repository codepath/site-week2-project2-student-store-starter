import * as React from "react"
import "./OrderDetail.css"
import NotFound from "../NotFound/NotFound"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios"

export default function ProductDetail(props) {
    const [order, setOrder] = React.useState(null)
    let args = useParams()
    React.useEffect(() => {        
        const getOrder = async () => {
            props.setIsFetching(true)
        try {
            const res = await axios.get(`http://localhost:3001/orders/${args?.purchaseId}`)
            const data = res.data //maybe need to add question mark
            if (data) {
                setOrder(data.purchase)
            }
            else {
                props.setError("Cannot fetch order.")
            }
        } catch(err) {
            props.setError(err)
        } finally {
            props.setIsFetching(false)
        }
        }
        getOrder()
    
    }, [])
    if(props.isFetching) return (
        <h1 className="loading">
        Loading...
        </h1>
    )
    return (
        <div className="content">
            <div className="order-detail">
                <h1>Order #{args?.purchaseId}</h1>
                <ul className="order-header">
                    <li className="first-row">Product</li>
                    <li className="first-row">Total</li>
                </ul>
                {order?.order.map((o, idx) => (
                    <ul className="order-row" key={o.itemId}>
                        <li> <Link to={`/products/${o.itemId}`}>{order.itemNames[idx]}</Link> &nbsp;{` x ${o?.quantity}`}</li>
                        <li>${(order.itemPrices[idx]).toFixed(2)}</li>
                    </ul>
                ))}
                <ul className="order-header">
                    <li>Subtotal</li>
                    <li>${order?.subtotal}</li>
                </ul>
                <ul className="order-header">
                    <li>Taxes and Fees</li>
                    <li>${(order?.subtotal * 0.0875).toFixed(2)}</li>
                </ul>
                <ul className="order-header">
                    <li>Total</li>
                    <li>${order?.total}</li>
                </ul>
            </div>
            <div className="my-cart shopmore-btn">
                Shop <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
        
    )
}

