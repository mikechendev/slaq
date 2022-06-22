import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="session-links">
      <Link to="/login">
        <button>Sign in</button>
      </Link>
      <Link to="/signup">
        <button>Try for free</button>
      </Link>
    </nav>
  );

  const Greeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.email}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? Greeting() : sessionLinks();
};

export default Nav;

{/* <Link to="/" className="header-app">
        <h1>SlaQ</h1>
      </Link>
      <nav className="info-links">
        <ul>
          <li>
            <Link to="/">Products </Link>
          </li>
          <li>
            <Link to="/">Solutions </Link>
          </li>
          <li>
            <Link to="/">Enterprise </Link>
          </li>
          <li>
            <Link to="/">Resources </Link>
          </li>
          <li>
            <Link to="/">Pricing </Link>
          </li>
        </ul>
      </nav> */}