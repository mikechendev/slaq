import React from 'react';
import { useEffect, useState } from 'react';

const MessageForm = (props) => {
  const [state, setState] = useState({
    body: '',
  });

  const update = (field) => {
    return (e) => setState({ [field]: e.currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].speak({
      message: state.body,
    });
    setState({ body: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.body}
          onChange={update('body')}
          // placeholder={`Message # ${props.currentChannel.name}`}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MessageForm;
