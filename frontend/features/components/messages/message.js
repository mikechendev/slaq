import React from 'react';
import { useState, useEffect } from 'react';

const Message = (props) => {
  console.log(props.message);
  return (
    <div>
      <p>{props.message.body}</p>
    </div>
  );
};

export default Message;
