import * as React from "react"
import "./CategoryBar.css"
import Chip from "../Chip/Chip"

export default function CategoryBar({categories}) {
  return (
    <nav className="category-bar">
        {categories.categories?.map((label) => {
            return (
            <Chip
                category={label}
                isActive={categories.category === label}
                handleClick={() => categories.setCategory(label)}
            />)
        })}
    </nav>
  )
}
