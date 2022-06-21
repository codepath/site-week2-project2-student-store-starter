import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export const Logo = () => {
  return (
    <div className='logo'>
      <Link to="/">
        <img src="./codepath.f1b3e41a.svg" alt="codepath logo"/>
      </Link>
    </div>
  )
}
