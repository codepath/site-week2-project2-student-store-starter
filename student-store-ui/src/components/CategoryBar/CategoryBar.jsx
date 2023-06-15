import * as React from "react"
import "./CategoryBar.css"
import Chip from "../Chip/Chip"

export default function CategoryBar({ categories, category, setCategory }) {
  return (
    <nav className="category-bar">
        {categories?.map((label, index) => {
            return (
            <Chip
                category={label}
                isActive={category === label}
                handleClick={() => setCategory(label)}
                key={String(index).concat("category")}
            />)
        })}
    </nav>
  )
}
