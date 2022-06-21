import * as React from 'react'
import "./ProductSettings.css"

export default function ProductSettings(props) {

    const setCategoryByButton = (cat) => {
        props.setCategory(cat);
    }

    return (
        <div className="product-settings">
            <div className="container">
                <div className="search-input">
                    <input
                        name="movieTitle"
                        type="text"
                        placeholder="Search..."
                        value={props.searchQuery}
                        onChange={(e) => props.setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="product-categories">
                    <button id="all" onClick={(e) => {
                        setCategoryByButton(e.target.id);
                    }}>All</button>
                    <button id="food" onClick={(e) => {
                        setCategoryByButton(e.target.id);
                    }}>Food</button>
                    <button id="clothing" onClick={(e) => {
                        setCategoryByButton(e.target.id);
                    }}>Clothing</button>
                    <button id="accessories" onClick={(e) => {
                        setCategoryByButton(e.target.id);
                    }}>Accessories</button>
                    <button id="tech" onClick={(e) => {
                        setCategoryByButton(e.target.id);
                    }}>Tech</button>
                </div>
            </div>
        </div>
    )
}