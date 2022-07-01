import React from 'react';
import MessageForm from './message_form';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { createConsumer } from '@rails/actioncable';
import {
  MessagesWrapper,
  MessagesFooterContainer,
} from '../styles/message.style';

const Messages = (props) => {
  const [messages, setMessages] = useState([]);
  const params = useParams();
  const cable = useRef();

  useEffect(() => {
    if (!cable.current) {
      cable.current = createConsumer();
    }

    const paramsToSend = {
      channel: 'ChatChannel',
      id: params.id,
    };

    const handlers = {
      received(data) {
        setMessages([...messages, data]);
      },
      connected() {
        console.log('connected');
      },
      disconnected() {
        console.log('disconnected');
        cable.current = null;
      },
    };

    const subscription = cable.current.subscriptions.create(
      paramsToSend,
      handlers
    );
    return function cleanup() {
      console.log('unsubscribed from', params.id);
      cable.current = null;
      subscription.unsubscribe();
    };
  }, [params.id, messages]);

  const messageList = messages.map((message) => {
    return (
      <li key={message.id}>
        {message}
        <div ref={bottom} />
      </li>
    );
  });

  return (
    <div className="chatroom-container">
      {/* <button className="load-button" onClick={loadChat}>
        Load Chat History
      </button> */}
      <div className="message-list">{messageList}</div>
      {/* <MessagesFooterContainer>
        <MessageForm />
      </MessagesFooterContainer> */}
    </div>
  );
};

export default Messages;
