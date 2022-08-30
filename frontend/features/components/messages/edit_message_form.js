import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateMessage, deleteMessage } from '../../../util/message_api_util';
import {
  receiveMessage,
  removeMessage,
} from '../../../actions/message_actions';

const EditMessageForm = (props) => {
  const [state, setState] = useState({ body: props.message.body });
  const dispatch = useDispatch();

  const updateText = (e) => {
    setState({ body: e.target.value });
  };

  console.log(props);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let message = props.message;
    message.body = state.body;
    let updated = await updateMessage(message);
    dispatch(receiveMessage(updated.data));
  };

  const handleDelete = async (e) => {
    let messageId = props.message.id;
    let deleted = await deleteMessage(messageId);
    dispatch(removeMessage(deleted.data));
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={state.body} onChange={(e) => updateText(e)} />
      </form>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default EditMessageForm;
