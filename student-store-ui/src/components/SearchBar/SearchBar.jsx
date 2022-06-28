import * as React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
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
                            props.onChange(e.target.value.toLowerCase());
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
