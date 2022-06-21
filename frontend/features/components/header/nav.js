import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="session-links">
      <Link to="/login">Sign in </Link>
      <Link to="/signup">Try for free</Link>
    </nav>
  );

  const Greeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>
        Log Out
      </button>
    </hgroup>
  );

  return currentUser ? Greeting() : sessionLinks();
};

export default Nav;
