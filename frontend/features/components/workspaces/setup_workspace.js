import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchWorkspaces } from '../../../util/workspace_api_util';
import {
  receiveWorkspaces,
  receiveWorkspace,
} from '../../../actions/workspace_actions';
import { updateWorkspace } from '../../../util/workspace_api_util';
import {
  FontContainer,
  Div,
  SetupWorkspaceContainer,
  TopNav,
  SetupGrid,
  SetupSidebar,
  SetupSidebarHeader,
  SidebarButton,
  Dragbar,
  FormContainer,
  TitleFont,
  BodyText,
  RelativeDiv,
  FormField,
  SubmitButton,
  TeamName,
} from '../styles/workspace.style';
import { useRouteMatch } from 'react-router-dom';
import { fetchChats } from '../../../util/chat_api_util';
import { receiveChats } from '../../../actions/chat_actions';
import { fetchUsers } from '../../../util/user_api_util';
import { receiveUsers } from '../../../actions/user_actions';

const SetupWorkspace = (props) => {
  const [workspace, setWorkspace] = useState({ name: '' });
  const match = useRouteMatch();
  const dispatch = useDispatch();

  const fetchData = async () => {
    let chats = await fetchChats(match.params.workspaceId);
    dispatch(receiveChats(chats.data));
    let workspaces = await fetchWorkspaces();
    dispatch(receiveWorkspaces(workspaces.data));
  };

  useEffect(() => {
    fetchData();
  }, [match.params, dispatch]);

  let currentWorkspace = useSelector(
    (state) => state.entities.workspaces[match.params.workspaceId]
  );

  const update = (field) => {
    return (e) => setWorkspace({ [field]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    let updated = { ...currentWorkspace, name: workspace.name };
    let res = await updateWorkspace(updated);
    let result = dispatch(receiveWorkspace(res.data));
    return props.history.push(
      `/client/${result.payload.id}/${currentWorkspace.chats[0].id}`
    );
  };

  return (
    <FontContainer>
      <Div>
        <SetupWorkspaceContainer>
          <TopNav></TopNav>
          <SetupGrid>
            <SetupSidebar>
              <SetupSidebarHeader>
                {workspace.name === '' ? (
                  <SidebarButton />
                ) : (
                  <TeamName>{workspace.name}</TeamName>
                )}
              </SetupSidebarHeader>
            </SetupSidebar>
            <Dragbar></Dragbar>
            <FormContainer>
              <TitleFont>What’s the name of your company or team?</TitleFont>
              <BodyText>
                This will be the name of your SlaQ workspace — choose something
                that your team will recognize.
              </BodyText>
              <div>
                <RelativeDiv>
                  <FormField
                    type="text"
                    placeholder="Ex: Acme Marketing or Acme Co"
                    value={workspace.name}
                    onChange={update('name')}
                  ></FormField>
                </RelativeDiv>
              </div>
              <SubmitButton onClick={handleUpdate}>Next</SubmitButton>
            </FormContainer>
          </SetupGrid>
        </SetupWorkspaceContainer>
      </Div>
    </FontContainer>
  );
};

export default SetupWorkspace;
