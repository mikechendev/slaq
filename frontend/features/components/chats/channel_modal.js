import React from 'react';
import ReactModal from 'react-modal';
import { CreateChannelForm } from './create_channel_form';

const ChannelModal = (props) => {
  return (
    <ReactModal
      className="chat-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeMS={100}
      ariaHideApp={false}
    >
      <CreateChannelForm
        currentUser={props.currentUser}
        currentWorkspace={props.currentWorkspace}
        isOpen={props.isOpen}
        closeModal={props.closeModal}
      />
    </ReactModal>
  );
};

export default ChannelModal;
