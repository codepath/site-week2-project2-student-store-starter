import "./Hero.css";

export default function Hero({ products }) {
  return (
    <div className="hero">
      <div className="content">
        <div className="intro">
          <h1 className="h1">Welcome!</h1>
          <h1 className="h1">Find your Merch!</h1>
          <p>
            We have all kinds of goodies. Click on any of the items to start
            filling up your shopping cart. Checkout whenever you're ready.
          </p>
        </div>
        <div className="media">
          <img
            src="student_store_icon.18e5d61a.svg"
            width={300}
            alt="hero-icon"
            className="hero-img"
          />
        </div>
      </div>
    </div>
  );
}
