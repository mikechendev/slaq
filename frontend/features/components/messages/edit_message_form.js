import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateMessage, deleteMessage } from '../../../util/message_api_util';
import {
  receiveUpdatedMessage,
  removeMessage,
} from '../../../actions/message_actions';
import { useRouteMatch } from 'react-router-dom';
import { EditMessageFormField } from '../styles/message.style';
import { fetchMessages } from '../../../util/message_api_util';
import { receiveMessages } from '../../../actions/message_actions';

const EditMessageForm = (props) => {
  const [body, setBody] = useState(props.message.body);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  let currentWorkspace = useSelector(
    (state) => state.entities.workspaces[match.params.workspaceId]
  );

  let currentChannel = useSelector(
    (state) => state.entities.chats[match.params.channelId]
  );

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
    props.setMessageEdit(!props.messageEdit);
    fetchMessages(currentChannel.id).then((messages) => {
      dispatch(receiveMessages(messages));
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '90%',
      }}
    >
      <form
        onSubmit={(e) => handleSubmit(e)}
        style={{
          paddingBottom: '10px',
          paddingTop: '10px',
        }}
      >
        <EditMessageFormField
          type="text"
          value={body}
          onChange={(e) => updateText(e)}
        />
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
          fontWeight: '800',
          height: '36px',
          maxWidth: '80px',
        }}
      >
        DELETE
      </button>
    </div>
  );
};

export default EditMessageForm;
