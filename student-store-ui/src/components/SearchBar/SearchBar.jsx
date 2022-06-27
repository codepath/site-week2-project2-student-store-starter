import * as React from "react";
import "./SearchBar.css";

export default function SearchBar({ allProducts, setProducts }) {
    return (
        <form method="get" className="container">
            <div className="col-auto">
                <div className="input-group">
                    <input
                        type="search"
                        className="search-bar form-control"
                        id="searchBar"
                        placeholder="find an item here..."
                        onKeyUp={(e) => {
                            e.preventDefault();
                            setProducts(
                                allProducts.filter((product) =>
                                    product.name
                                        .toLowerCase()
                                        .includes(e.target.value.toLowerCase())
                                )
                            );
                        }}
                    />
                    <div className="input-group-text">
                        <i className="bi-search"></i>
                    </div>
                </div>
            </div>
        </form>
    );
}
