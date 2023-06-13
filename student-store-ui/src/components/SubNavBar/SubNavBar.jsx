import * as React from "react"
import "./SubNavBar.css"

export default function SubNavBar() {
    return (
        <div className="SubNavBar">
            <div className="content">

                <div className="row">

                    <div className="search-bar">

                        <input type="text" name="search" placeholder="Search" value="" />
                        <i className="material-icons">search</i>
                    </div>

                    <div className="icons">
                        <span className="help"><i className="material-icons">help</i>Help</span>
                        <span className="cart">
                            <a href="/">My Cart<i className="material-icons">shopping_cart</i></a>
                        </span>
                    </div>

                </div>
                <div className="row">
                    <div className="menu">
                    <i className="material-icons">menu</i>
                    </div>
                    <ul class = "menu open">
                        <li>

                            <button>All Categories</button>
                        </li>
                        <li>
                            <button>Clothing</button>
                        </li>
                        <li>
                            <button>Food</button>
                        </li>
                        <li>
                            <button>Accesories</button>
                        </li>
                        <li>
                            <button>Tech</button>
                        </li>
                    </ul>




                </div>


            </div>


        </div>
    )
}