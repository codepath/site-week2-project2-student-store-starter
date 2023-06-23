import React from "react";
import "./Receipt.css"

export default function Receipt({receipt}){
    let receiptElements = receipt.split("\n")
    return (
        <section className="receipt">
            <h1>{receiptElements[0]}</h1>
            <hr style={{padding: "0% 3%"}}/>
            <ul>
                {receiptElements.slice(1).map(e => (<li>{e}</li>))}
            </ul>
        </section>
    )
}