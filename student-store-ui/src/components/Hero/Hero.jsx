import "./Hero.css";
export default function Hero() {
  return (
    <div className="banner-wrapper">
      <div className="banner-content">
        <div className="banner-writing">
          <h2>
            Welcome! <br /> Find Your Merch
          </h2>
          <h4>
            We have all kinds of goodies. Click on any of the items to start
            filling up your<br/> shopping cart. Checkout whenever you're ready
          </h4>
        </div>
        <div className="hero-img">
          <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" />
        </div>
      </div>
    </div>
  );
}
