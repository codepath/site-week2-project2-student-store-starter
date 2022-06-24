import {Link} from 'react-router-dom';
import './Logo.css';

export default function Logo() {
    return (
        <div className="logo">
            <Link to="/" className="logo-link">
                <img src="/images/codepath.svg"></img>
            </Link>
        </div>
    )
}