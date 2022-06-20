import React, { useState } from 'react';
import { signup } from '../../actions/session_actions';

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
      
    </div>
  )
};

export default SessionForm;
