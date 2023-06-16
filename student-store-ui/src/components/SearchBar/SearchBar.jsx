import "./SearchBar.css"

export default function SearchBar({ searchTerm, setSearchTerm }) {
  const handleChange = (event) => {
    event.preventDefault()
    setSearchTerm(event.target.value)
  }

  return (
    <form className="product-search" onSubmit={handleChange}>
      <label className="form-label" htmlFor="search">
        <b>Product Search: </b>
      </label>
      <input
        className="form-input"
        name="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search"
      />
      <button>🔍</button>
    </form>
  )
}
