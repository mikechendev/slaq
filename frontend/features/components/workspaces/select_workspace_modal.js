import React from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';

const SelectWorkspaceModal = (props) => {
  const history = useHistory();
  const match = useRouteMatch();
  const workspaces = useSelector((state) =>
    Object.values(state.entities.workspaces)
  );
  const currentWorkspace = useSelector(
    (state) => state.entities.workspaces[match.params.workspaceId]
  );

  return (
    <ReactModal
      className="chat-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeMS={100}
      ariaHideApp={false}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}></div>
    </ReactModal>
  );
};

export default SelectWorkspaceModal;
