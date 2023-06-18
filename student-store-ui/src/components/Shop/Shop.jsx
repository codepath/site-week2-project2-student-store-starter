import {useState, useEffect, useContext} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Shop.css";
import "./QueryBars.css";
import "./ProductGrid.css";
import Footer from "../Footer/Footer";
import { CheckoutCartContext, CheckoutCartDispatchContext } from "../CheckoutCartContext/CheckoutCartContext";

function ProductGrid({ products, filter }) {
    // Returns all products in grid style using CSS
    const dispatch = useContext(CheckoutCartDispatchContext);
    // const checkoutCart = useContext(CheckoutCartContext);
    const filteredProducts = products.filter((product) => {
        // filters products by search and category tag. 
        return (product.name.toLowerCase().includes(filter.search.toLowerCase())) &&
            (product.category.toLowerCase() === filter.category.toLowerCase() 
            || filter.category.toLowerCase() === "all");
    });
    function handleProductButtonOnClick(event, product) {
        // this handler will update the cart
        // after a user clicks the plus/minus sign

        event.preventDefault();
        let type = event.target.id + "ed"; // using id attribute to get dispatch type
        dispatch({
            productID: product.id,
            type : type,
            product : product
        });
    };

    return (
        <>
            <h1 className="products-title title">Best Selling Products</h1>
            <div className="product-grid">
                {/* // renders each product */}
                {filteredProducts.map((product) => {
                    

                    return (
                        <div className="product">
                            <Link to={`/products/${product.id}`}>
                                <img src={product.image} alt={"image of" + product.name} />
                                <p className="product-title">{product.name}</p>
                            </Link>
                            <div className="product-buttons">
                                <button type="button" id="increment" onClick={(e) => handleProductButtonOnClick(e, product)} className="add">
                                    <i id="increment" className="material-icons">add</i>
                                </button>
                                <button type="button" id="decrement" onClick={(e) => handleProductButtonOnClick(e, product)} className="remove">
                                    <i id="decrement" className="material-icons">remove</i>
                                </button>
                            </div>
                            <div className="prices"></div>
                            <p className="product-price">${product.price.toFixed(2)}</p>
                        </div>


                    )
                })}
            </div>
        </>

    )
}

function SearchBar({ updateQuery, search }) {
    return (
        <div className="search-bar-container">
            <label htmlFor="name"></label>
            <input
                type="text" name="search"
                value={search} onChange={updateQuery}
                label="Search" placeholder="Search Products"
                className="search-input" />
            <i className="material-icons">search</i>
        </div>
    )
}
function FilterBar({ updateQuery, activeCategory }) {
    const CATEGORIES = ["All", "Clothing", "Food", "Accessories", "Tech"];
    return (
        <div className="filter-tags-container" label="Categories">
            <nav className="filter-tags-content">
                <ul>
                    {CATEGORIES.map((category) => {
                        let isActive = category == activeCategory ? "active" : "";
                        return (
                            <li>
                                <button className={"category-button " + isActive} value={category} onClick={updateQuery}
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
    const URL_DB = "https://codepath-store-api.herokuapp.com/store";
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

