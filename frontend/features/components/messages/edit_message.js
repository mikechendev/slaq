import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateMessage, removeMessage } from '../../../util/message_api_util';

const EditMessage = (props) => {
  const [state, setState] = useState({ body: props.message.body });
  const dispatch = useDispatch();

  const updateText = (e) => {
    setState({ body: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let message = props.message;
    dispatch(updateMessage(message));
  };

  return {};
};

export default EditMessage;
