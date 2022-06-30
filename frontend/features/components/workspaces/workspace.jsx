import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import WorkspaceNav from './workspace_nav';
import {
  SetupWorkspaceContainer,
  SetupGrid,
  Div,
} from '../styles/workspace.style';
import WorkspaceSidebar from './workspace_sidebar';
import {
  fetchWorkspaces,
  fetchWorkspace,
} from '../../../util/workspace_api_util';
import { receiveWorkspaces } from '../../../actions/workspace_actions';
import ChannelModal from '../chats/channel_modal';
import Chat from '../chats/chat';
import { fetchChats, fetchChat } from '../../../util/chat_api_util';
import { receiveChats, receiveChat } from '../../../actions/chat_actions';
import { useRouteMatch } from 'react-router-dom';

const Workspace = (props) => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState({
    isOpen: false,
  });

  useEffect(() => {
    fetchWorkspaces().then((res) => {
      dispatch(receiveWorkspaces(res.data));
    });
  }, []);

  const match = useRouteMatch();

  let currentWorkspace = useSelector(
    (state) => state.entities.workspaces[props.match.params.workspaceId]
  );

  let currentUser = useSelector(
    (state) => state.entities.users[state.session.id]
  );

  const openModal = () => {
    setModal({ isOpen: true });
  };

  const closeModal = () => {
    setModal({ isOpen: false });
  };

  return currentWorkspace ? (
    <SetupWorkspaceContainer>
      <WorkspaceNav
        currentWorkspace={currentWorkspace}
        currentUser={currentUser}
      />
      <SetupGrid>
        <WorkspaceSidebar
          currentWorkspace={currentWorkspace}
          currentUser={currentUser}
          isOpen={modal.isOpen}
          closeModal={closeModal}
          openModal={openModal}
        />
        <Chat
          currentWorkspace={currentWorkspace}
          currentUser={currentUser}
          isOpen={modal.isOpen}
          closeModal={closeModal}
          openModal={openModal}
        />
        <ChannelModal
          currentUser={currentUser}
          currentWorkspace={currentWorkspace}
          isOpen={modal.isOpen}
          closeModal={closeModal}
        />
      </SetupGrid>
    </SetupWorkspaceContainer>
  ) : (
    <div />
  );
};

export default Workspace;
