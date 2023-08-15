import * as React from "react";
import "./Category.css";

export default function Category({ setCategory }) {
  function handleSubmit(e) {
    setCategory(e.target.name);
  }
  return (
    <div className="category">
      <button
        className="cat-button"
        name="all"
        onClick={handleSubmit}
        type="submit"
      >
        All Categories
      </button>
      <button
        className="cat-button"
        name="clothing"
        onClick={handleSubmit}
        type="submit"
      >
        Clothing
      </button>
      <button
        className="cat-button"
        name="food"
        onClick={handleSubmit}
        type="submit"
      >
        Food
      </button>
      <button
        className="cat-button"
        name="accessories"
        onClick={handleSubmit}
        type="submit"
      >
        Accessories
      </button>
      <button
        className="cat-button"
        name="tech"
        onClick={handleSubmit}
        type="submit"
      >
        Tech
      </button>
    </div>
  );
}
