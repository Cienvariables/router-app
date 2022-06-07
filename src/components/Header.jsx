import React from 'react'
import { Link } from 'react-router-dom'
import LogoutButton from './LogoutButton';


export default function Header({ authenticated, logout }) {
  return (
    <header className="header">
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/about">
        <span>About</span>
      </Link>
      <Link to="/users">
        <span>Users</span>
      </Link>
      <Link to="/profile">
        <span>Profile</span>
      </Link>
      {authenticated ? (
        <LogoutButton logout={logout} />
      ) : (
        <Link to="/login">
          <button>Login</button>
        </Link>
      )}
    </header>
  )
}
