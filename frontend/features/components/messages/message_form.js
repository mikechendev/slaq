import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MessageFormField } from '../styles/message.style';

const MessageForm = (props) => {
  const [state, setState] = useState({
    body: '',
  });

  const currentChannel = useSelector(
    (state) => state.entities.chats[props.channelId]
  );

  const chatUsers = useSelector((state) => Object.values(state.entities.users));

  const recipient = chatUsers.find((user) => user.id !== props.currentUser.id);

  let channelName = () => {
    return currentChannel.chat_type == 'channel'
      ? currentChannel.name
      : recipient && recipient.username;
  };

  const update = (field) => {
    return (e) => setState({ [field]: e.currentTarget.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.sendMessage(state.body);
    setState({ body: '' });
  };

  return (
    <div style={{ marginLeft: '5%' }}>
      <form onSubmit={handleSubmit}>
        <MessageFormField
          type="text"
          value={state.body}
          onChange={update('body')}
          placeholder={`Message # ${channelName() && channelName()}`}
        />
      </form>
    </div>
  );
};

export default MessageForm;
