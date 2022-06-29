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
import { fetchWorkspaces } from '../../../util/workspace_api_util';
import { receiveWorkspaces } from '../../../actions/workspace_actions';

const Workspace = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchWorkspaces().then((res) => {
      dispatch(receiveWorkspaces(res.data));
    });
  }, []);

  let currentWorkspace = useSelector(
    (state) => state.entities.workspaces[props.match.params.workspaceId]
  );

  return currentWorkspace ? (
    <SetupWorkspaceContainer>
      <WorkspaceNav currentWorkspace={currentWorkspace} />
      <SetupGrid>
        <WorkspaceSidebar currentWorkspace={currentWorkspace} />
      </SetupGrid>
    </SetupWorkspaceContainer>
  ) : (
    <div />
  );
};

export default Workspace;
