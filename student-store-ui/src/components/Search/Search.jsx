import * as React from "react";
import "./Search.css";
import Home from "../Home/Home";


export default function Search(props) {

    function handleSearch(searchValue){
        {
            props.products?.filter((product => props.products.name.includes(searchValue)))
        }
    }
    let filtered = handleSearch(props.searchValue)
    console.log(filtered)
//   return (
//     <div className="search">
//       <form action="search" id="search-form">
//         <input
//           type="search"
//           defaultValue={props.searchValue}
//           onChange={props.handleSearchChange}
//           id="search-input"
//           placeholder="Search for item..."
//         />
//         <button type="submit">🔍</button>
//       </form>

//     </div>
//   )
}
