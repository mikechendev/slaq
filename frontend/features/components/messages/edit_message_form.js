import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateMessage, removeMessage } from '../../../util/message_api_util';
import { receiveMessage } from '../../../actions/message_actions';

const EditMessageForm = (props) => {
  const [state, setState] = useState({ body: props.message.body });
  const dispatch = useDispatch();

  const updateText = (e) => {
    setState({ body: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let message = props.message;
    message.body = state.body;
    let updated = await updateMessage(message);
    console.log(updated);
    dispatch(receiveMessage(updated.data));
  };

  const handleDelete = async (e) => {
    let message = props.message;
    dispatch(removeMessage(message));
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
