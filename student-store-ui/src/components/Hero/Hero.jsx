import * as React from "react";
import "./Hero.css";

export default function Hero() {
    return (
        <div className="hero mb-3 p-5 text-white rounded">
            <h1 className="display-4">Welcome to the student store!</h1>
            <p className="lead">
            We have all kinds of goodies. Click on any of the items to start filling up your shopping cart.
            </p>
            <hr className="my-4" />
            <p>
            Checkout whenever you're ready.
            </p>
            <p className="lead">
                <a className="btn btn-lg start-buying" href="#buy-now" role="button">
                    Start buying
                </a>
            </p>
        </div>
    );
}
