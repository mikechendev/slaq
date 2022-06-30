import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { fetchChats, fetchChat } from '../../../util/chat_api_util';
import { receiveChats } from '../../../actions/chat_actions';
import {
  ChatHeaderContainer,
  ChatHeadWrapper,
  ChatHeadTextButton,
  HeaderTextContainer,
  HeaderText,
} from '../styles/chat.style';

const Chat = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  useEffect(() => {
    fetchChats().then((res) => {
      dispatch(receiveChats(res.data));
    });
  }, []);

  const currentChannel = useSelector((state) => {
    return state.entities.chats[match.params.channelId];
  });

  if (currentChannel) console.log(currentChannel);

  return (
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
                    <HeaderText>Hello</HeaderText>
                  </HeaderTextContainer>
                </ChatHeadTextButton>
              </div>
            </ChatHeadWrapper>
          </ChatHeaderContainer>
        </div>
      </div>
    </div>
  );
};

export default Chat;
