import React from "react";

export default function Menu({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}) {
  return (
    <div className="Menu-bar">
      <div className="Search-bar-and-filter">
        <input
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search!"
        />
        <br></br>
        <br></br>
        {categories.map((cat, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "selected" : ""}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
