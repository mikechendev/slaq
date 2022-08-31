import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMessage, deleteMessage } from '../../../util/message_api_util';
import {
  receiveUpdatedMessage,
  removeMessage,
} from '../../../actions/message_actions';

const EditMessageForm = (props) => {
  const [body, setBody] = useState(props.message.body);
  const dispatch = useDispatch();

  const updateText = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updated = await updateMessage(
      Object.assign({}, props.message, { body: body })
    );
    dispatch(receiveUpdatedMessage(updated.data));
    props.setMessageEdit(!props.messageEdit);
  };

  const handleDelete = async (e) => {
    let messageId = props.message.id;
    let deleted = await deleteMessage(messageId);
    dispatch(removeMessage(deleted.data));
  };

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          paddingBottom: '10%',
        }}
      >
        <input type="text" value={body} onChange={(e) => updateText(e)} />
      </form>
      <button
        onClick={handleDelete}
        style={{
          background: 'red',
          color: 'white',
          borderColor: 'red',
          boxShadow: 'none',
          borderRadius: '4px',
          fontSize: '15px',
          fontWeight: '500',
          height: '36px',
          minWidth: '80px',
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default EditMessageForm;
