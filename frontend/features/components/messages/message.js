import React from 'react';
import { useState, useEffect } from 'react';
import { MessageDiv, MessageBody } from '../styles/message.style';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';

const Message = (props) => {
  const users = useSelector((state) => state.entities.users);
  const usersArr = Object.values(users);
  const user = usersArr.find((user) => user.id === props.message.user_id);
  const time = parseISO(props.message.created_at);
  const messageTime = time.toLocaleTimeString('en-US');
  let username;

  if (user) {
    username = user.username;
  } else {
    username = <div></div>;
  }

  return (
    <MessageDiv>
      <div
        style={{
          display: 'flex',
          paddingBottom: '4px',
          alignContent: 'center',
        }}
      >
        <div
          style={{
            fontWeight: '900',
            flexDirection: 'flex-start',
            paddingRight: '5px',
          }}
        >
          {username}
        </div>
        <div
          style={{
            flexDirection: 'flex-start',
            paddingLeft: '5px',
            fontSize: '12px',
          }}
        >
          {messageTime}
        </div>
      </div>
      <MessageBody>{props.message.body}</MessageBody>
    </MessageDiv>
  );
};

export default Message;
