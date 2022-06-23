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
