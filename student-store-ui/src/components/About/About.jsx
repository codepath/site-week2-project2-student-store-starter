import CodePathLogo from "../../../Assets/logo.svg";
import "./About.css";
import "../../globals.css";

export default function About(){
    return (
        <section className="about-container" id="about">
            <div className="content">
                <h1 className="about-title title">About</h1>
                <div className="body-content">
                    <div className="about-us-text">
                        <p>The codepath student store offers great products at great prices from a great team and for a great cause.
                        </p>
                        <p>We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.</p>
                        <p>
                            All proceeds go towards bringing high quality CS education to college students around the country
                        </p>
                    </div>
                    <div className="media">
                        <img src={CodePathLogo} alt="codepath logo" />
                    </div>
                </div>
            </div>
        </section>
    )
}