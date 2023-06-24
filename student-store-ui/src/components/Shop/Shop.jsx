import {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddToCartButtton from "../AddToCartButton/AddToCartButton";
import SearchBar from "./SearchBar";
import "./Shop.css";
import "./QueryBars.css";
import "./ProductGrid.css";

function ProductGrid({ products, filter }) {
    // Returns all products in grid style using CSS
    const filteredProducts = products.filter((product) => {
        // filters products by search and category tag. 
        return (product.name.toLowerCase().includes(filter.search.toLowerCase())) &&
            (product.category.toLowerCase() === filter.category.toLowerCase() 
            || filter.category.toLowerCase() === "all");
    });

    return (
        <>
            <h1 className="products-title title">Best Selling Products</h1>
            <div className="product-grid">
                {/* // renders each product */}
                {filteredProducts.map((product) => {
                    return (
                        <div className="product" key={product.id}>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.image} alt={"image of" + product.name} />
                                <div className="product-header">
                                    <p className="product-title">{product.name}</p>
                                    <p className="product-price">${product.price.toFixed(2)}</p>
                                </div>
                            </Link>
                            <AddToCartButtton product={product} />
                        </div>


                    )
                })}
            </div>
        </>

    )
}

function FilterBar({ updateQuery, activeCategory }) {
    const CATEGORIES = ["All", "Clothing", "Food", "Accessories", "Tech"];
    return (
        <div className="filter-tags-container" label="Categories">
            <nav className="filter-tags-content">
                <ul>
                    {CATEGORIES.map((category, index) => {
                        let isActive = category == activeCategory ? "active" : "";
                        return (
                            <li key={index} >
                                <button key={index} className={"category-button " + isActive} value={category} onClick={updateQuery}
                                    name="category">{category}</button>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
export default function Shop() {
    // Component displays product grids
    // with search/filter bars
    const URL_DB = "http://localhost:3001/store";
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState({
        category: "All",
        search: ""
    });
    // data fetching
    useEffect(() => {
        axios.get(URL_DB).then((response) => {
            console.log("fetching data...");
            setProducts(() => response.data.products);
        }).catch((e) => {
            console.log("Error: ", e)
        })
    }, []);
    function queryUpdateHandler(event) {
        // updates query object for Filter and Search Bar 
        // componenets
        let name = event.target.name;
        let value = event.target.value;
        setQuery(() => ({
            ...query,
            [name]: value
        }))
    }
    return (
            <div className="shop-container">
                <div className="query-bar-container">
                    <SearchBar updateQuery={queryUpdateHandler} search={query.search} />
                    <FilterBar updateQuery={queryUpdateHandler} activeCategory={query.category} />
                </div>
                <ProductGrid products={products} filter={query} />
            </div>
    )
}

