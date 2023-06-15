import CodePathLogo from "../../Assets/logo.svg";

export default function About(){
    return (
        <section className="about-container">
            <div className="about-us-text">
                <p></p>
            </div>
            <div className="media">
                <img src={CodePathLogo} alt="codepath logo" />
            </div>
        </section>
    )
}