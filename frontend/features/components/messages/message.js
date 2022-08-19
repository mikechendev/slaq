import React from 'react';
import { useState, useEffect } from 'react';
import { MessageDiv, MessageBody } from '../styles/message.style';
import { useSelector } from 'react-redux';

const Message = (props) => {
  const users = useSelector((state) => state.entities.users);
  const usersArr = Object.values(users);
  const user = usersArr.find((user) => user.id === props.message.user_id);
  console.log(user);

  return (
    <MessageDiv>
      <p>{user.username}</p>
      <MessageBody>{props.message.body}</MessageBody>
    </MessageDiv>
  );
};

export default Message;
