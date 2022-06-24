import React, { useState } from 'react';

const SessionForm = (props) => {
  const [session, setSession] = useState({
    email: '',
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

  const handleDemoUser = (e) => {
    e.preventDefault();
    const user = {
      email: 'demouser@demo.demo',
      password: 'password',
    };
    setSession(user);
    props.login(user);
  };

  return (
    <div className="session-form-container">
      <div className="session-form-box">
        <form className="session-form">
          <div className="session-icon-container">
            <img src={window.slackicon} alt="slack-logo" />
          </div>
          <div className="session-form-header">
            <h1>{props.formType} to SlaQ</h1>
          </div>
          <div className="session-form-text">
            <p>
              We suggest using the{' '}
              <span className="bold-text">email address you use at work. </span>
            </p>
          </div>
          {renderErrors()}
          <label>
            Email:
            <input
              className="form-email"
              type="text"
              onChange={update('email')}
              value={session.email}
            />
          </label>
          <label>
            Password:
            <input
              className="form-password"
              type="password"
              onChange={update('password')}
              value={session.password}
            />
          </label>
          <button type="submit" onClick={handleSubmit}>
            {props.formType}
          </button>
          <button type="submit" onClick={handleDemoUser}>
            Try as demo user
          </button>
        </form>
      </div>
    </div>
  );
};

export default SessionForm;
