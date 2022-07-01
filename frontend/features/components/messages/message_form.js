import React from 'react';
import { useEffect, useState } from 'react';
import App from '../app';

const MessageForm = (props) => {
  const [state, setState] = useState({
    body: '',
    user_id: props.currentUser.id,
    chat_id: props.currentChannel.id,
  });

  const update = (field) => {
    return (e) =>
      setState({
        [field]: e.currentTarget.value,
        chat_id: props.currentChannelId,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // let currentMessages;
    // for (let i = 0; i < App.cable.subscriptions.subscriptions.length; i++) {
    //   if (
    //     JSON.parse(App.cable.subscriptions.subscriptions[i].identifier)
    //       .chat_id === props.currentChannel.id
    //   ) {
    //     currentMessages = i;
    //   }
    App.cable.subscriptions.subscriptions[0].speak({
      message: state.body,
    });
    setState({ body: '' });
    // }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={state.body}
          onChange={update('body')}
          placeholder={`Message # ${props.currentChannel.name}`}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default MessageForm;
