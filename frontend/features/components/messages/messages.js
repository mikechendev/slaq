import React from 'react';
import MessageForm from './message_form';
import Message from './message';
import { useState, useEffect, useRef, useContext } from 'react';
import { useDispatch } from 'react-redux';
import {
  MessagesWrapper,
  MessagesFooterContainer,
} from '../styles/message.style';
import { useSelector } from 'react-redux';
import { ActionCableContext } from '../root';
import { fetchMessages } from '../../../util/message_api_util';
import { receiveMessages } from '../../../actions/message_actions';
//
const Messages = (props) => {
  const dispatch = useDispatch();
  const channelId = props.currentChannel.id;
  const currentUserId = props.currentUser.id;
  const cable = useContext(ActionCableContext);
  const [channel, setChannel] = useState(null);
  const messagesEndRef = useRef(null);
  const msgs = useSelector((state) => state.entities.messages);

  useEffect(() => {
    fetchMessages(channelId).then((messages) => {
      dispatch(receiveMessages(messages));
    });
  }, []);

  useEffect(() => {
    if (messagesEndRef.current != null) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [msgs]);

  useEffect(() => {
    const channel = cable.subscriptions.create({
      channel: 'MessagesChannel',
      id: channelId,
    });

    setChannel(channel);

    return () => {
      channel.unsubscribe();
    };
  }, [channelId, dispatch, cable.subscriptions]);

  const sendMessage = (body) => {
    channel.send({
      type: 'message',
      chatId: channelId,
      userId: currentUserId,
      body,
    });
  };

  const renderedMessages = Object.entries(msgs).map(([id, message]) => (
    <Message key={id} message={message} />
  ));

  return (
    <div className="chatroom-container">
      <div className="message-list">
        {renderedMessages}
        <div ref={messagesEndRef} />
      </div>
      <MessagesFooterContainer>
        <MessageForm sendMessage={sendMessage} channelId={channelId}/>
      </MessagesFooterContainer>
    </div>
  );
};

export default Messages;
