import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <Link to="*" className="not-found-link">
      <div className="not-found">
        <h1 className="not-found-text">
          <span className="error-num">404</span>
          <br />
          Nothing to see here
        </h1>
      </div>
    </Link>
  );
}
