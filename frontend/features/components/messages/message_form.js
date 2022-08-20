import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const MessageForm = (props) => {
  const [state, setState] = useState({
    body: '',
  });

  const currentChannel = useSelector(
    (state) => state.entities.chats[props.channelId]
  );

  const update = (field) => {
    return (e) => setState({ [field]: e.currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.sendMessage(state.body);
    setState({ body: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          style={{ width: '90%', alignContent: 'center' }}
          type="text"
          value={state.body}
          onChange={update('body')}
          placeholder={`Message # ${currentChannel.name}`}
        />
      </form>
    </div>
  );
};

export default MessageForm;
