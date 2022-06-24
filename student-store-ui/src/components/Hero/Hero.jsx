import * as React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div className="hero">
      <div className="intro">
        <h1>Welcome!</h1>
        <h2>Find Your Merch!</h2>
        <p>
          We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.
        </p>
      </div>
      <div className="hero-img">
        <img src="/images/shopping.svg" alt="homeImage" />
      </div>
    </div >
  );
}
