import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <div className="navbar-container">
      <div className="navbar-signed-out">
        <div className="info-links">
          <Link to="/" className="header-icon">
            <img src={window.slackicon} alt="slack-logo" />
          </Link>
          <ul>
            <li>
              <a href="">Portfolio</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="https://github.com/mikechendev">Github</a>
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
            <button>SIGN IN</button>
          </Link>
          <Link to="/signup">
            <button>TRY FOR FREE</button>
          </Link>
        </div>
      </div>
    </div>
  );

  const Greeting = () => (
    <div className="navbar-container">
      <div className="navbar-signed-in">
        <div className="info-links">
          <Link to="/" className="header-icon">
            <img src={window.slackicon} alt="slack-logo" />
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
          <Link to="/get-started">
            <button className="header-button">CREATE A NEW WORKSPACE</button>
          </Link>
          <button className="header-button" onClick={logout}>
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );

  return currentUser ? Greeting() : sessionLinks();
};

export default Nav;
