import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const SessionForm = (props) => {
  const [session, setSession] = useState({
    email: '',
    username: '',
    password: '',
  });

  const update = (field) => {
    return (e) => setSession({ ...session, [field]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { ...session };
    props.processForm(user);
  };

  const renderErrors = () => {
    return (
      <ul>
        {props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  };

  let history = useHistory();

  const handleDemoUser = (e) => {
    e.preventDefault();
    const user = {
      email: 'demouser@demo.demo',
      username: 'demoUser',
      password: 'password',
    };
    setSession(user);
    props.login(user).then(() => history.push('/workspaces'));
  };

  const signUpFields =
    props.formType === 'Sign up' ? (
      <input
        className="session-form-field"
        type="text"
        onChange={update('username')}
        value={session.username}
        placeholder="Username"
      />
    ) : (
      <div></div>
    );

  let h1Header =
    props.formType === 'Sign up' ? 'Sign up for SlaQ' : 'Sign in to SlaQ';
  let navlinkHeader =
    props.formType === 'Sign up' ? 'Already using SlaQ?' : 'New to SlaQ?';

  return (
    <div className="session-form-container">
      <div className="session-form-box">
        <form className="session-form">
          <div className="session-icon-container">
            <Link to="/">
              <img src={window.slackicon} alt="slack-logo" />
            </Link>
          </div>
          <div className="session-form-header">
            <h1>{h1Header}</h1>
          </div>
          <div className="session-form-text">
            <p>
              We suggest using the{' '}
              <span className="bold-text">email address you use at work. </span>
            </p>
          </div>
          <div className="session-form-errors">{renderErrors()}</div>
          <input
            className="session-form-field"
            type="text"
            onChange={update('email')}
            value={session.email}
            placeholder="Email"
          />
          {signUpFields}
          <input
            className="session-form-field"
            type="password"
            onChange={update('password')}
            value={session.password}
            placeholder="Password"
          />
          <button
            className="session-form-button"
            type="submit"
            onClick={handleSubmit}
          >
            {props.formType}
          </button>
          <button
            className="session-form-button"
            type="submit"
            onClick={handleDemoUser}
          >
            Try as demo user
          </button>
          <div className="session-form-right">
            {navlinkHeader}
            <div className="session-form-right-navlink">{props.navLink}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SessionForm;
