import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateMessage, removeMessage } from '../../../util/message_api_util';

const EditMessage = (props) => {
  const [body, setBody] = useState(props.message.body);
  const dispatch = useDispatch();

  return {};
};

export default EditMessage;
