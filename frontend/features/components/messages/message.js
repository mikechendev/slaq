import React from 'react';
import { useState, useEffect } from 'react';
import { MessageDiv, MessageBody } from '../styles/message.style';
import { useSelector } from 'react-redux';

const Message = (props) => {
  const users = useSelector((state) => state.entities.users);
  const usersArr = Object.values(users);
  const user = usersArr.find((user) => user.id === props.message.user_id);
  console.log(props.message.created_at);

  const messageDate = (timestamp) => {
    const timeStamp = timestamp.slice(0, 10).split('-');
    const year = timeStamp.shift();
    timeStamp.push(year);
    const date = timeStamp.join('/');
    return date;
  };

  return (
    <MessageDiv>
      <div style={{ fontWeight: '900' }}>{user.username}</div>
      <div>{messageDate(props.message.created_at)}</div>
      <MessageBody>{props.message.body}</MessageBody>
    </MessageDiv>
  );
};

export default Message;
