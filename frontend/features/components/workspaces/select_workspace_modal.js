import React from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';
import { CreateButton, DeleteButton } from '../styles/modal.style';
import { deleteWorkspace } from '../../../util/workspace_api_util';
import { removeWorkspace } from '../../../actions/workspace_actions';
import { useDispatch } from 'react-redux';

const SelectWorkspaceModal = (props) => {
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const workspaces = useSelector((state) =>
    Object.values(state.entities.workspaces)
  );

  const currentWorkspace = useSelector(
    (state) => state.entities.workspaces[match.params.workspaceId]
  );

  const otherWorkspaces = workspaces.filter(
    (workspace) => workspace.id !== currentWorkspace.id
  );

  const handleEdit = () => {
    return history.push(`/client/${currentWorkspace.id}/setup-workspace`);
  };

  const handleDelete = async (e) => {
    let deleted = await deleteWorkspace(currentWorkspace.id);
    dispatch(removeWorkspace(deleted.data));
    return history.push('/');
  };

  const workspacesList = otherWorkspaces.map((workspace) => {
    let wsLink = () => {
      return history.push(`/client/${workspace.id}/${workspace.chats[0].id}`);
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
          <div>
            <CreateButton onClick={handleEdit}>Edit</CreateButton>
            <DeleteButton onClick={handleDelete}>DELETE</DeleteButton>
          </div>
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
