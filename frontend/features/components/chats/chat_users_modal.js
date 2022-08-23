import React from 'react';
import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createChat } from '../../../util/chat_api_util';
import { receiveChat } from '../../../actions/chat_actions';

const ChatUsersModal = (props) => {
  const users = props.users.map((user) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: '2%',
      }}
    >
      <li key={user.id}>{user.username}</li>
      <button style={{ marginRight: '2%' }}>Message</button>
    </div>
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
