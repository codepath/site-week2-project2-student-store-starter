import "./Chip.css"

export default function Chip({category, isActive = false, handleClick}) {
  let buttonClassName = isActive ? "chip active" : "chip"

  return (
    <button className={buttonClassName} onClick={handleClick}>
        {category}
    </button>
  )
}
