import React from 'react';
import MessageForm from './message_form';
import Message from './message';
import { useState, useEffect, useRef, useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import {
  MessagesWrapper,
  MessagesFooterContainer,
} from '../styles/message.style';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectMessagesByChat } from '../../slices/messagesSlice';
import { ActionCableContext } from '../root';
import { fetchMessage, fetchMessages } from '../../../util/message_api_util';
import { receiveMessages } from '../../../actions/message_actions';
//
const Messages = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const channelId = props.currentChannel.id;
  const currentUserId = props.currentUser.id;
  const cable = useContext(ActionCableContext);
  const [channel, setChannel] = useState(null);
  const [messages, setMessages] = useState([]);
  // const msgs = useSelector((state) => selectMessagesByChat(state, channelId));
  const messagesEndRef = useRef(null);
  const msgs = useSelector((state) => state.entities.messages);

  useEffect(() => {
    fetchMessages(channelId).then((messages) => {
      console.log('useeffect', messages.data);
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

  console.log('msgs', msgs);

  const renderedMessages = Object.entries(msgs).map(([id, message]) => (
    <Message key={id} message={message} />
  ));

  console.log(renderedMessages);

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
      {/* <button className="load-button" onClick={loadChat}>
        Load Chat History
      </button> */}
      <div className="message-list">{renderedMessages}</div>
      <MessagesFooterContainer>
        <MessageForm sendMessage={sendMessage} />
      </MessagesFooterContainer>
    </div>
  );
};

export default Messages;
