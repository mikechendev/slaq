import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateMessage, deleteMessage } from '../../../util/message_api_util';
import {
  receiveUpdatedMessage,
  removeMessage,
} from '../../../actions/message_actions';
import { useHistory } from 'react-router-dom';

const EditMessageForm = (props) => {
  const [body, setBody] = useState(props.message.body);
  const dispatch = useDispatch();
  const history = useHistory();

  const updateText = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updated = await updateMessage(
      Object.assign({}, props.message, { body: body })
    );
    dispatch(receiveUpdatedMessage(updated.data));
    history.go(0);
  };

  const handleDelete = async (e) => {
    let messageId = props.message.id;
    let deleted = await deleteMessage(messageId);
    dispatch(removeMessage(deleted.data));
    history.go(0);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={body} onChange={(e) => updateText(e)} />
      </form>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
};

export default EditMessageForm;
