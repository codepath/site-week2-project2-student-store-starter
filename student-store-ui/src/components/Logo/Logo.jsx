import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/" className="logo-link">
        <img title="Main Page" src="../public/logo.svg" alt="CodePath Logo" />
        <h1>Student Store</h1>
      </Link>
    </div>
  );
}