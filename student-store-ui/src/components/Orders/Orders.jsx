import * as React from "react"
import "./Orders.css"
import axios from "axios"
import {Link} from "react-router-dom"

export default function Orders(){
    const [orders, setOrders] = React.useState([])
    const [isFetching, setIsFetching] = React.useState(false)
    const [error, setError] = React.useState(null)
    const [searchInput, setSearchInput] = React.useState("")
    const [filterMode, setFilterMode] = React.useState("")

    let sortedOrders = orders
    if (orders) {
        if (filterMode === "date-desc") {
            sortedOrders = [...sortedOrders].reverse()
        } else if (filterMode === "total-asc") {
            sortedOrders = [...sortedOrders].sort((a, b) => (a.total > b.total ? 1 : -1))
        } else if (filterMode === "total-desc") {
            sortedOrders = [...sortedOrders].sort((a, b) => (a.total < b.total ? 1 : -1))
        } else if (filterMode === "alpha-desc") {
            sortedOrders = [...sortedOrders].sort((a, b) => (a.name > b.name ? -1 : 1))
        } else if (filterMode === "alpha-asc") {
            sortedOrders = [...sortedOrders].sort((a, b) => (a.name > b.name ? 1 : -1))
        } else if (filterMode === "quantity-desc") {
            sortedOrders = [...sortedOrders].sort((a, b) => (a.totalQuantity > b.totalQuantity ? 1 : -1))
        } else if (filterMode === "quantity-asc") {
            sortedOrders = [...sortedOrders].sort((a, b) => (a.totalQuantity < b.totalQuantity ? 1 : -1))
        }
    }
    const filteredOrder = searchInput ? sortedOrders?.filter((order) => order.email.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1) : sortedOrders

    React.useEffect(() => {
        const getOrders = async () => {
            setIsFetching(true)
            try {
                const res = await axios.get("http://localhost:3001/orders")
                const data = res.data
                if (data) {
                    setOrders(data.purchases)
                return;
                }
                else {
                    setError(new Error("Cannot fetch orders."))
                }
            } catch(err) {
                setError(err)
            } finally {
                setIsFetching(false)
            }
        }
        getOrders()
    
    }, [])

    if(isFetching) {
        return <h1 className="loading">Loading...</h1>
    }
    return  (
        
        <div className="content">
            <div className="orders-table">
            
                <h1>Order History</h1>
                <div className="utils-bar">
                    <div className="order-search-bar">
                        <input type="text" name="search" placeholder="Search for order" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <select className="dropdown" placeholder="Sort by" value={filterMode} onChange={(e) => setFilterMode(e.target.value)}>
                    <option value="default" hidden>
                        Sort by
                    </option>
                        <option value="date-asc">Date (Oldest first)</option>
                        <option value="date-desc">Date (Newest first)</option>
                        <option value="total-asc">Total (Lowest first)</option>
                        <option value="total-desc">Total (Highest first)</option>
                        <option value="alpha-asc">Name (A-Z)</option>
                        <option value="alpha-desc">Name (Z-A)</option>
                        <option value="quantity-asc">Quantity (Highest first)</option>
                        <option value="quantity-desc">Quantity (Lowest first)</option>
                    </select>
                </div>
                <ul className="header-row">
                    <li className="center">Name</li>
                    <li className="center">Email</li>
                    <li className="center">Purchased</li>
                    <li className="center">Total</li>
                    <li className="center">Date</li>
                </ul>
                {filteredOrder?.map((order,idx) => (
                    <OrderRow order={order} idx={idx} key={order.id}/>
                ))}
            </div>
            <div className="my-cart shopmore-btn orders-btn">
                Shop <i className="fa-solid fa-cart-shopping"></i>
            </div>
        </div>
    )
}

export function OrderRow(props){
    return (
        <Link className="order-link"to={`/orders/${props.order.id}`}>
            <ul className={"order-row " + (props.idx % 2 ? "odd" : "even")}>
                <li className="center">{props.order.name}</li>
                <li className="center">{props.order.email}</li>
                <li className="center">{props.order.totalQuantity} {props.order.totalQuantity > 1 ? "items" : "item"}</li>
                <li className="center">${props.order.total}</li>
                <li className="center">{(props.order.createdAt).substring(0,10)}</li>
            </ul>
        </Link>
    )
}