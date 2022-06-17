import * as React from 'react'
import "./ProductSettings.css"

export default function ProductSettings(props) {
    return (
        <div className="product-settings">
            <button id="food" onClick={() => {
                props.setCategory("all")
            }}>All</button>
            <button id="food" onClick={() => {
                props.setCategory("food")
            }}>Food</button>
            <button id="clothing" onClick={() => {
                props.setCategory("clothing")
            }}>Clothing</button>
            <button id="accessories" onClick={() => {
                props.setCategory("accessories")
            }}>Accessories</button>
            <button id="tech" onClick={() => {
                props.setCategory("tech")
            }}>Tech</button>
            
        </div>
    )
}