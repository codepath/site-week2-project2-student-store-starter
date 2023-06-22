import * as React from "react";
import "./Search.css";

export default function Search(props) {
  const handleChange = (event) => {
    props.setSearchValue(event.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="search">
        <form action="search" id="search-form">
          <label id="search-label" htmlFor="search">Search for Merch! 🛍️ </label> <br />
          <input
            type="search"
            name="search"
            defaultValue={props.searchValue}
            onChange={handleChange}
            id="search-input"
            placeholder="Search for an item..."
          />
          <button id="search-button" onClick={handleSubmit} type="submit">
            🔍
          </button>
        </form>
      </div>
    </>
  );
}
