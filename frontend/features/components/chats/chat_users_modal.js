import React from 'react';
import ReactModal from 'react-modal';

const ChatUsersModal = (props) => {
  return (
    <ReactModal
      className="chat-users-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeMS={100}
      ariaHideApp={false}
    ></ReactModal>
  );
};

export default ChatUsersModal;
