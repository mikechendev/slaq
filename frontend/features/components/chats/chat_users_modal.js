import React from 'react';
import ReactModal from 'react-modal';

const ChatUsersModal = (props) => {
  return (
    <ReactModa
      className="chat-users-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeMS={100}
      ariaHideApp={false}
    ></ReactModa>
  );
};

export default ChatUsersModal;
