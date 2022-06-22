import { useState } from "react"
import { Link } from "react-router-dom"
import "./SubNavbar.css"

export default function SubNavbar({ category, setCategory, handleOnTextChange, handleOnToggle }) {
    const [openBar, setOpenBar] = useState(true)

    const toggleOpen = () => {
        setOpenBar((open) => setOpenBar(!open));
    };

    return (
        <nav className="SubNavbar">
            <div className="content">
                <div className="row">
                    <div className="search-bar">
                        <input type="text" name="search" placeholder="Search" onChange={handleOnTextChange}/>
                        <i className="material-icons">search</i>
                    </div>

                    <div className="links">
                        <span className="help">
                            <i className="material-icons">help</i>
                            Help
                        </span>
                        <span className="cart" onClick={handleOnToggle}>
                            <i className="material-icons">shopping_cart</i>
                        </span>
                    </div>
                </div>

                <div className="row">
                    <div className="hamburger-menu">
                        <i className="material-icons" onClick={() => toggleOpen()}>
                            menu
                        </i>
                    </div>

                    <ul className={`category-menu ${openBar ? "open" : "closed"}`}>
                        <li className={category === "" ? "is-active" : ""}>
                            <button onClick={() => setCategory("")}>All Categories</button>
                        </li>
                        <li className={category === "clothing" ? "is-active" : ""}>
                            <button onClick={() => setCategory("clothing")}>Clothing</button>
                        </li>
                        <li className={category === "food" ? "is-active" : ""}>
                            <button onClick={() => setCategory("food")}>Food</button>
                        </li>
                        <li className={category === "accessories" ? "is-active" : ""}>
                            <button onClick={() => setCategory("accessories")}>Accessories</button>
                        </li>
                        <li className={category === "tech" ? "is-active" : ""}>
                            <button onClick={() => setCategory("tech")}>Tech</button>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}