import React from 'react';
import { useState, useEffect } from 'react';
import { MessageDiv, MessageBody } from '../styles/message.style';
import { useSelector } from 'react-redux';
import { isAfter, parseISO, subYears } from 'date-fns';

const Message = (props) => {
  const users = useSelector((state) => state.entities.users);
  const usersArr = Object.values(users);
  const user = usersArr.find((user) => user.id === props.message.user_id);
  const time = parseISO(props.message.created_at);
  const messageTime = time.toLocaleTimeString('en-US');

  const messageDate = (timestamp) => {
    const timeStamp = timestamp.slice(0, 10).split('-');
    const year = timeStamp.shift();
    timeStamp.push(year);
    const date = timeStamp.join('/');
    return date;
  };

  return (
    <MessageDiv>
      <div style={{ display: 'flex', paddingBottom: '4px' }}>
        <div
          style={{
            fontWeight: '900',
            flexDirection: 'flex-start',
            paddingRight: '5px',
          }}
        >
          {user.username}
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
