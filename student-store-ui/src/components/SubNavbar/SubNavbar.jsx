import * as React from "react"
import "./SubNavbar.css"

export default function ShopNavbar(props) {
    const [closed, setClosed] = React.useState(false)

    const toggleShopNavbar = () => setClosed((prevState) => !prevState)
return (
    <nav className="shop-navbar">
        <div className="content">
            <div className="row search-bar-wrapper">
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search for item" value={props.searchInput} onChange={props.handleOnSearch}/>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <div className="help-cart">
                    <div className="help">
                        <i className="fa-solid fa-circle-question"></i>
                        <span>Help</span>
                    </div>
                    <div className="my-cart" onClick={() => props.setIsOpen(true)}>
                        My Cart <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </div>
            <div className="row menu-wrapper" >
                <div className={`subnav-icon ${closed ? `closed` : `open`}`} onClick={toggleShopNavbar}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="menu">
                    {["All Categories", "Clothing", "Food", "Accessories", "Tech"].map((category) => (
                        <li className={`${closed ? `closed` : `open`} ${props.activeCategory === category ? `active` : ` ` }`} onClick={()=>props.setActiveCategory(category)} key={category}>{category}</li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
)
}
