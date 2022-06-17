import React from 'react';
import { Link } from 'react-router-dom';
import "./Logo.css"

export default function Logo() {
    return (
        <Link to='/'><img className="logo" src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg"/></Link>
    )
}