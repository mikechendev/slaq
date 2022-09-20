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
              <a href="https://mikechendev.github.io/">Portfolio</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/michael-chen-74b973117/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/mikechendev">Github</a>
            </li>
            <li>
              <a href="https://angel.co/u/michael-chen-157">AngelList</a>
            </li>
            <li></li>
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
              <a href="https://mikechendev.github.io/">Portfolio</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/michael-chen-74b973117/">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/mikechendev">Github</a>
            </li>
            <li>
              <a href="https://angel.co/u/michael-chen-157">Resources</a>
            </li>
            <li></li>
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
