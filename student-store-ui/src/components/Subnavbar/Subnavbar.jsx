import * as React from "react"
import "./Subnavbar.css"
import CategoryBar from "../CategoryBar/CategoryBar"
import SearchBar from "../Searchbar/Searchbar"

export default function Subnavbar({ categories, category, setCategory, searchTerm, setSearchTerm }) {
  return (
    <div className="subnav-wrap" id="subnavbar">
      <section className="subnavbar">
        {/* search bar props="search-term"
            use .filter to create functionality*/}
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm} />
        <CategoryBar
          categories={categories}
          category={category}
          setCategory={setCategory} />
      </section>
    </div>
  )
}