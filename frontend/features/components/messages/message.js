import React from 'react';
import { useState, useEffect } from 'react';
import { MessageDiv } from '../styles/message.style';

const Message = (props) => {
  console.log(props.message);
  return (
    <MessageDiv>
      <p>{props.message.body}</p>
    </MessageDiv>
  );
};

export default Message;
