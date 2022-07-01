import React from 'react';
import MessageForm from './message_form';
import { useState, useEffect } from 'react';

const Messages = (props) => {
  const [state, setState] = useState({
    messages: [],
  });

  let bottom;

  useEffect(() => {
    App.cable.subscriptions.create(
      { channel: 'ChatChannel' },
      {
        received: (data) => {
          switch (data.type) {
            case 'message':
              setState({
                messages: state.messages.concat(data.message),
              });
              break;
            case 'messages':
              setState({ messages: data.messages });
              break;
          }
        },
        speak: function (data) {
          return this.perform('speak', data);
        },
        load: function () {
          return this.perform('load');
        },
      }
    );
    bottom = React.createRef();
  }, []);

  const loadChat = (e) => {
    e.preventDefault();
    App.cable.subscriptions.subscriptions[0].load();
  };

  const messageList = state.messages.map((message) => {
    return (
      <li key={message.id}>
        {message}
        <div ref={bottom} />
      </li>
    );
  });

  return (
    <div className="chatroom-container">
      <button className="load-button" onClick={loadChat}>
        Load Chat History
      </button>
      <div className="message-list">{messageList}</div>
      <MessageForm />
    </div>
  );
};

export default Messages;
