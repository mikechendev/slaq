import React from 'react';
import MessageForm from './message_form';
import { useState, useEffect, useRef } from 'react';
import {
  MessagesWrapper,
  MessagesFooterContainer,
} from '../styles/message.style';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMessagesByChat } from '../../slices/messagesSlice';

const Messages = (props) => {
  const { channelId } = useParams();
  const currentUserId = useSelector((state) => state.session.id);

  useEffect(() => {
    const channel = cable.subscriptions.create({
      channel: 'MessagesChannel',
      id: channelId,
    });

    setChannel(channel);

    return () => {
      channel.unsubscribe();
    };
  }, [channelId]);

  const sendMessage = (content) => {
    const data = { channelId, currentUserId, body };
    channel.send('new_message', data);
  };

  const msgs = useSelector((state) => selectMessagesByChat(state, channelId));
  // const [state, setState] = useState({
  //   messages: [],
  // });

  // let bottom = useRef();

  // useEffect(() => {
  //   App.cable.subscriptions.create(
  //     { channel: 'ChatChannel' },
  //     {
  //       received: (data) => {
  //         switch (data.type) {
  //           case 'message':
  //             setState({
  //               messages: state.messages.concat(data.message),
  //             });
  //             break;
  //           case 'messages':
  //             setState({ ...state, messages: data.messages });
  //             break;
  //         }
  //       },
  //       speak: function (data) {
  //         return this.perform('speak', data);
  //       },
  //       load: function () {
  //         return this.perform('load');
  //       },
  //     }
  //   );
  // }, []);

  // const loadChat = (e) => {
  //   e.preventDefault();
  //   App.cable.subscriptions.subscriptions[0].load();
  // };

  // const messageList = state.messages.map((message) => {
  //   return (
  //     <li key={message.id}>
  //       {message}
  //       <div ref={bottom} />
  //     </li>
  //   );
  // });

  // console.log(bottom);

  return (
    <div className="chatroom-container">
      <button className="load-button" onClick={loadChat}>
        Load Chat History
      </button>
      <div className="message-list">{messageList}</div>
      {/* <MessagesFooterContainer>
        <MessageForm />
      </MessagesFooterContainer> */}
    </div>
  );
};

export default Messages;
