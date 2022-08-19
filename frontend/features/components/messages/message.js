import React from 'react';
import { useState, useEffect } from 'react';
import { MessageDiv, MessageBody } from '../styles/message.style';

const Message = (props) => {
  return (
    <MessageDiv>
      <MessageBody>{props.message.body}</MessageBody>
    </MessageDiv>
  );
};

export default Message;
