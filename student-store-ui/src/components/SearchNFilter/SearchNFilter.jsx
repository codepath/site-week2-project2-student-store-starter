import * as React from "react"
import { useState } from "react";
import "./SearchNFilter.css"

export default function SearchNFilter({products}) {


  return (
      <div className="wrapper">
        <div className="search-wrapper">
          <label htmlFor="search-form">
            <input
              type="search"
              name="search-form"
              id="search-form"
              className="search-input"
              placeholder="Search for..."
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className="sr-only">Search products here</span>
          </label>
        </div>
        </div>

  )
}
