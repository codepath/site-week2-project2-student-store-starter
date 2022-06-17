import * as React from 'react'
import "./ProductSettings.css"

export default function ProductSettings(props) {

    // const setCategoryByButton = (cat) => {
    //     props.setCategory()
    // }

    return (
        <div className="product-settings">
            <div className="product-categories">
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
                <button id="tech" onClick={(e) => {
                    props.setCategory("tech")
                }}>Tech</button>
            </div>
        </div>
    )
}