export default function SearchBar({ updateQuery, search }) {
    return (
        <div className="search-bar-container">
            <label htmlFor="name"></label>
            <input
                type="text" name="search"
                value={search} onChange={updateQuery}
                label="Search" placeholder="Search Products"
                className="search-input" />
            <i className="material-icons">help</i>
        </div>
    )
}