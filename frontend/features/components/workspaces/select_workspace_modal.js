import React from 'react';
import ReactModal from 'react-modal';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';
import { CreateButton, DeleteButton } from '../styles/modal.style';
import { deleteWorkspace } from '../../../util/workspace_api_util';
import { removeWorkspace } from '../../../actions/workspace_actions';
import { useDispatch } from 'react-redux';
import { CloseButton } from '../styles/modal.style';

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

  const currentUser = useSelector(
    (state) => state.entities.users[state.session.id]
  );

  const handleEdit = () => {
    return history.push(`/client/${currentWorkspace.id}/setup-workspace`);
  };

  const handleDelete = async (e) => {
    let deleted = await deleteWorkspace(currentWorkspace.id);
    dispatch(removeWorkspace(deleted.data));
    return history.push('/');
  };

  const editDeleteButtons = () => {
    return currentUser.id === currentWorkspace.admin_id ? (
      <div
        style={{
          justifyContent: 'flex-end',
        }}
      >
        <CreateButton onClick={handleEdit}>Edit</CreateButton>
        <DeleteButton onClick={handleDelete}>DELETE</DeleteButton>
      </div>
    ) : (
      <div></div>
    );
  };

  const workspacesList = otherWorkspaces.map((workspace) => {
    let wsLink = () => {
      props.closeModal();
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
        <li style={{ listStyleType: 'none' }}>{workspace.name}</li>
        <button onClick={wsLink}>Switch</button>
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          padding: '20px 28px',
        }}
      >
        <div
          style={{
            fontSize: '28px',
            fontWeight: '900',
            lineHeight: '1.2143',
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
            fontWeight: '600',
            marginBottom: '5px',
            borderBottom: '1px solid',
          }}
        >
          workspaces
        </div>
        <div
          style={{
            padding: '2% 2% 2% 2%',
            minHeight: '225px',
          }}
        >
          <ul>{workspacesList}</ul>
        </div>
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <div></div>
          {editDeleteButtons() && editDeleteButtons()}
        </div>
        <CloseButton onClick={props.closeModal}>
          <svg data-q98="true" viewBox="0 0 20 20" className="">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="m5.227 5.227 9.546 9.546m0-9.546-9.546 9.546"
            ></path>
          </svg>
        </CloseButton>
      </div>
    </ReactModal>
  );
};

export default SelectWorkspaceModal;
