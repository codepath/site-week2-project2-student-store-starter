import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "../Purchases/Purchases.css";
import SearchBar from "../Shop/SearchBar";
import axios from "axios";

function PurchaseTableRow({ purchase }) {
    return (
        <div className="cart-purchase-row">
        <span>{purchase.name}</span>
        <span>{purchase.email}</span>
        <span>{purchase.total.toFixed(2)}</span>
        <span>{purchase.createdAt.split(",")[0]}</span>
        <span>{purchase.id}</span>
    </div>
    )
    
}

export default function Purchases() {
    const URL = "http://localhost:3001/store/purchases";
    const [purchases, setPurchases ] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const handleInputValue = (event) => {
        setInputValue(() => (event.target.value));
    }
    useEffect(() => {
        axios.get(URL).then((response) => {
            setPurchases(() => response.data.purchases)
        })
    }, []);
    const queryFilter = (query, criteria) => {
        return criteria.toLowerCase().includes(query.toLowerCase());
    }

    return (
        <>
            <div className="purchases-container">
                <SearchBar search={inputValue} updateQuery={handleInputValue} />

                <div className="purchases-table">
                    <h1>Past Orders<i className="material-icons">history</i></h1>
                    <div className="cart-table-header-row">
                        <span>Name</span>
                        <span>Email</span>
                        <span>Total</span>
                        <span>Date</span>
                        <span>Purchase ID</span>
                    </div>
                    {Object.values(purchases).map((purchase) => {
                        // display items only with quantities > 0

                        return (queryFilter(inputValue, purchase.name) || queryFilter(inputValue, purchase.email)) ? (
                            <Link className="cart-purchase-row-container" to={`/purchases/${purchase.id}`}>
                                <PurchaseTableRow purchase={purchase} />
                            </Link> 
                        ) : (<></>)
                    })}
                </div>
            </div>
        </>
    )
}