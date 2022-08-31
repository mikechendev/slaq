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
  const otherWorkspaces = workspaces.filter(
    (workspace) => workspace.id !== currentWorkspace.id
  );

  const workspacesList = otherWorkspaces.map((workspace) => {
    let wsChats = Object.values(workspace.chats);
    let wsLink = () => {
      return history.go(`/client/${workspace.id}/${wsChats[0].id}`);
    };
    return (
      <div
        key={workspace.id}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingBottom: '2%',
          fontSize: '18px',
        }}
      >
        <li>{workspace.name}</li>
        <button style={{ marginRight: '2%' }} onClick={wsLink}>
          Switch
        </button>
      </div>
    );
  });

  return (
    <ReactModal
      className="chat-modal"
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      closetimeMS={100}
      ariaHideApp={false}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div
          style={{
            fontSize: '22px',
            fontWeight: '900',
            lineHeight: '1.36365',
            padding: '2% 2% 3% 2%',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {currentWorkspace.name}
        </div>
        <div
          style={{
            padding: '2% 2% 2% 2%',
            fontSize: '15px',
            fontWeight: '800',
          }}
        >
          workspaces
        </div>
        <div
          style={{
            paddingLeft: '5%',
          }}
        >
          <ul>{workspacesList}</ul>
        </div>
      </div>
    </ReactModal>
  );
};

export default SelectWorkspaceModal;
