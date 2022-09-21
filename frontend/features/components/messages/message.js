import React from 'react';
import EditMessageForm from './edit_message_form';
import { useState, useEffect } from 'react';
import { MessageDiv, MessageBody } from '../styles/message.style';
import { useSelector } from 'react-redux';
import { parseISO } from 'date-fns';
import { useDispatch } from 'react-redux';

const Message = (props) => {
  const users = useSelector((state) => state.entities.users);
  const usersArr = Object.values(users);
  const user = usersArr.find((user) => user.id === props.message.user_id);
  const time = parseISO(props.message.created_at);
  const messageTime = time.toLocaleTimeString('en-US');
  let username;

  if (user) {
    username = user.username;
  } else {
    username = <div></div>;
  }

  const [isHovering, setIsHovering] = useState(false);
  const [messageEdit, setMessageEdit] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const editOrEditing = () => {
    return messageEdit ? 'Editing' : 'Edit';
  };

  return (
    <MessageDiv onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <div
        style={{
          display: 'flex',
          paddingBottom: '4px',
          alignContent: 'center',
        }}
      >
        <div
          style={{
            fontWeight: '900',
            flexDirection: 'flex-start',
            paddingRight: '5px',
          }}
        >
          {username}
        </div>
        <div
          style={{
            flexDirection: 'flex-start',
            paddingLeft: '5px',
            fontSize: '12px',
          }}
        >
          {messageTime}
        </div>
      </div>
      <MessageBody>
        {messageEdit ? (
          <EditMessageForm
            message={props.message}
            currentChannel={props.currentChannel}
            setMessageEdit={setMessageEdit}
            messageEdit={messageEdit}
          />
        ) : (
          props.message.body
        )}
        {isHovering && props.currentUser.id === props.message.user_id && (
          <div
            onClick={() => setMessageEdit(!messageEdit)}
            style={{
              marginRight: '4%',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            {editOrEditing()}
          </div>
        )}
      </MessageBody>
    </MessageDiv>
  );
};

export default Message;
