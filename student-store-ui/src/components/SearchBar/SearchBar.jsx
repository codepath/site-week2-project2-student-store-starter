import React from 'react'
import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className='searchbar'>
        <form>
            <input type="text" placeholder='Search'/>
            <button type='submit'>Search</button>
        </form>
        <button id='cart'>My Cart</button>
    </div>
  )
}

export default SearchBar