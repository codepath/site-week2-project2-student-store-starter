import * as React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-message">This page was not found.</h1>
      <h2 className="home-link">
        <Link to="/">
          Return home?
        </Link>
      </h2>
    </div>
  );
}
