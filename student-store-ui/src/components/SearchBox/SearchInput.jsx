import Help from "../Help/Help";
import "./SearchInput.css";
export default function SearchInput() {
  return (
    <div className="form_wrapper">
      <form className="search-bar">
        <input className="search" placeholder="Search" name="search" />
      </form>
      <SearchIcon />
      <Help />
      <MyCart/>
    </div>
  );
}

export function SearchIcon() {
  return (
    <div className="search-icon">
      <i className="material-icons">search</i>
    </div>
  );
}

export function MyCart() {
  return (
    <div className="cart">
      <div className="writing">MyCart</div>
      <i className="material-icons">shopping_cart</i>
    </div>
  );
}
