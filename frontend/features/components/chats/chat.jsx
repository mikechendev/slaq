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

const Chat = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const cable = useContext(ActionCableContext);

  let currentChannel = useSelector(
    (state) => state.entities.chats[match.params.channelId]
  );

  let chatUsers = useSelector((state) => Object.values(state.entities.users));

  useEffect(() => {
    fetchUsers(currentChannel.id).then((users) => {
      dispatch(receiveUsers(users));
    });
  }, []);

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
                    <HeaderText># {currentChannel.name}</HeaderText>
                  </HeaderTextContainer>
                </ChatHeadTextButton>
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
    </div>
  ) : (
    <div></div>
  );
};

export default Chat;
