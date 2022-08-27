import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import {
  receiveMessages,
  receiveMessage,
} from '../../../actions/message_actions';
import {
  ChatHeaderContainer,
  ChatHeadWrapper,
  ChatHeadTextButton,
  HeaderTextContainer,
  HeaderText,
  MessagesContainer,
} from '../styles/chat.style';
import Messages from '../messages/messages';
import { ActionCableContext } from '../root';
import { fetchUsers } from '../../../util/user_api_util';
import { receiveUsers } from '../../../actions/user_actions';
import ChatUsersModal from './chat_users_modal';

const Chat = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const cable = useContext(ActionCableContext);

  let currentChannel = useSelector(
    (state) => state.entities.chats[match.params.channelId]
  );

  const chatUsers = useSelector((state) => Object.values(state.entities.users));

  const recipient = chatUsers.find((user) => user.id !== props.currentUser.id);

  let channelName = () => {
    return currentChannel.chat_type == 'channel'
      ? currentChannel.name
      : recipient && recipient.username;
  };

  const [modal, setModal] = useState({
    isOpen: false,
  });

  const openModal = () => {
    setModal({ isOpen: true });
  };

  const closeModal = () => {
    setModal({ isOpen: false });
  };

  useEffect(() => {
    cable.subscriptions.create(
      { channel: 'MessagesChannel', id: currentChannel.id },
      {
        received: (data) => {
          dispatch(receiveMessage(data));
        },
      }
    );
  }, [currentChannel, cable.subscriptions, dispatch]);

  return currentChannel ? (
    <div>
      <div>
        <div>
          <ChatHeaderContainer>
            <ChatHeadWrapper>
              <div style={{ flex: '0 1 auto' }}>
                <ChatHeadTextButton>
                  <HeaderTextContainer>
                    <div
                      style={{
                        marginRight: '2px',
                        verticalAlign: 'text-bottom',
                      }}
                    >
                      <svg data-ddp="true" viewBox="0 0 20 20">
                        <path
                          fill="none"
                          stroke="black"
                          strokeLinecap="round"
                          strokeWidth="2"
                          d="M9 4 6.5 18m7.25-14-2.5 14M4 8h13M3 14.5h13"
                        ></path>
                      </svg>
                    </div>
                    <HeaderText># {channelName() && channelName()}</HeaderText>
                  </HeaderTextContainer>
                </ChatHeadTextButton>
              </div>
              <div>
                <p onClick={openModal}>Channel Members</p>
              </div>
            </ChatHeadWrapper>
          </ChatHeaderContainer>
          <MessagesContainer>
            <Messages
              currentChannel={currentChannel}
              currentUser={props.currentUser}
              currentWorkspace={props.currentWorkspace}
            />
          </MessagesContainer>
        </div>
      </div>
      <ChatUsersModal
        isOpen={modal.isOpen}
        openModal={openModal}
        closeModal={closeModal}
        users={chatUsers}
        currentWorkspace={props.currentWorkspace}
        currentUser={props.currentUser}
        currentChannel={currentChannel}
      ></ChatUsersModal>
    </div>
  ) : (
    <div></div>
  );
};

export default Chat;
