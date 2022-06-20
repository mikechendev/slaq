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

  return (
    <div>
      <form>
        <label>
          Email:
          <input
            type="text"
            onChange={update('email')}
            value={session.email}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            onChange={update('password')}
            value={session.password}
          />
        </label>
        <button type="submit" onClick={handleSubmit}>
          {props.formType}
        </button>
      </form>
    </div>
  );
};

export default SessionForm;
