import React from 'react';
import ReactModal from 'react-modal';

const WorkspaceModal = (props) => {
  return (
    <ReactModal
      className="workspace-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeMS={100}
      ariaHideApp={false}
    ></ReactModal>
  );
};
