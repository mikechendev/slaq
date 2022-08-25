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
import { useRouteMatch } from 'react-router-dom';
import { fetchChats } from '../../../util/chat_api_util';
import { receiveChats } from '../../../actions/chat_actions';
import ChatUsersModal from '../chats/chat_users_modal';
import { fetchUsers } from '../../../util/user_api_util';
import { receiveUsers } from '../../../actions/user_actions';

const Workspace = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const [modal, setModal] = useState({
    isOpen: false,
  });

  useEffect(() => {
    fetchData();
  }, [match.params.channelId]);

  const fetchData = async () => {
    let chats = await fetchChats();
    dispatch(receiveChats(chats.data));
    let workspaces = await fetchWorkspaces();
    dispatch(receiveWorkspaces(workspaces.data));
    let chatUsers = await fetchUsers(match.params.channelId);
    console.log(chatUsers);
    dispatch(receiveUsers(chatUsers.data));
  };

  let currentUser = useSelector(
    (state) => state.entities.users[state.session.id]
  );

  let currentWorkspace = useSelector(
    (state) => state.entities.workspaces[match.params.workspaceId]
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
          openModal={openModal}
          closeModal={closeModal}
        />
      </SetupGrid>
    </SetupWorkspaceContainer>
  ) : (
    <div />
  );
};

export default Workspace;
