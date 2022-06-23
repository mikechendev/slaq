import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="navbar-signed-out">
      <div className="info-links">
        <Link to="/" className="header-app">
          <h1>SlaQ</h1>
        </Link>
        <ul>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">LinkedIn</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">Resources</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="session-links">
        <Link to="/login">
          <button>Sign in</button>
        </Link>
        <Link to="/signup">
          <button>Try for free</button>
        </Link>
      </div>
    </div>
  );

  const Greeting = () => (
    <div className="navbar-signed-in">
      <div className="info-links">
        <Link to="/" className="header-app">
          <img src="../../../assets/images/slack.png" alt="slack-logo" />
          <h1>SlaQ</h1>
        </Link>
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
      </div>
      <div className="header-group">
        <h2 className="header-name">Hi, {currentUser.email}!</h2>
        <button className="header-button" onClick={logout}>
          Log Out
        </button>
      </div>
    </div>
  );

  return currentUser ? Greeting() : sessionLinks();
};

export default Nav;
