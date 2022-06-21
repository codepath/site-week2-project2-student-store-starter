import * as React from 'react';
import './Home.css';
import Hero from '../Hero/Hero';
import ProductGrid from '../ProductGrid/ProductGrid';

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <ProductGrid />
    </div>
  );
}
