import React from 'react';
import { useState, useEffect } from 'react';

const Message = (props) => {
  return (
    <div>
      <p>{props.message.body}</p>
    </div>
  );
};
