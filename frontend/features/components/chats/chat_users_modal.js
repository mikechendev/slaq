import React from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

const ChatUsersModal = (props) => {
  const users = props.users.map((user) => (
    <li key={user.id}>{user.username}</li>
  ));

  return (
    <ReactModal
      className="chat-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeMS={100}
      ariaHideApp={false}
    >
      <div>
        <div
          style={{
            fontSize: '22px',
            fontWeight: '900',
            lineHeight: '1.36365',
            padding: '2% 2% 2% 2%',
          }}
        >{`${props.currentChannel.name}`}</div>
        <div
          style={{
            paddingLeft: '5%',
          }}
        >
          <ul>{users}</ul>
        </div>
      </div>
    </ReactModal>
  );
};

export default ChatUsersModal;
