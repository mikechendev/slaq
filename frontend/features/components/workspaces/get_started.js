import React from 'react';
import { Link } from 'react-router-dom';
import {
  MainContainer,
  HeaderContainer,
  EmailPill,
  CenterAlign,
  FlexEnd,
  HeaderImg,
  BoldText,
  LandingViewTop,
  LandingViewTopWrapper,
  DisplayFlex,
  FlexDirectionCol,
  TitleText,
  SubtitleText,
  PurpleButton,
  PictureContainer,
  PillLink,
  GettingStartedTerms,
  LandingViewBottom,
  LandingViewBottomWrapper,
  GetStartedWorkspacesContainer,
  OrDividerContainer,
  OrDivider,
  GSWorkspacesTitle,
  GSWorkspacesListContainer,
  WorkspacesListPanel,
  WorkspacesListPanelTitle,
  WorkspacesListPanelTitleText,
  ExpandingWorkspacesList,
  ExpandingWorkspacesListItem,
  GSFooterContainer,
  GSFooterText,
  MediumButton,
} from '../styles/getstarted.style';
import { connect } from 'react-redux';
import { logout } from '../../../actions/session_actions';
import { useHistory } from 'react-router-dom';
import { createWorkspace } from '../../../util/workspace_api_util';
import { useDispatch } from 'react-redux';
import { receiveWorkspace } from '../../../actions/workspace_actions';

const GetStarted = (props) => {
  let workspaceListItems = Object.values(props.currentUser.workspaces).map(
    (workspace) => {
      return (
        <li className="workspace-list-items" key={workspace.id}>
          <div className="workspace-item-container">
            <div className="workspace-item-name">{workspace.name}</div>
            <div className="workspace-item-member-count">{workspace.users}</div>
          </div>
          <div className="workspace-item-button">
            <Link to={`/client/${workspace.id}`}>
              <button>LAUNCH SLAQ</button>
            </Link>
          </div>
        </li>
      );
    }
  );

  let history = useHistory();
  let dispatch = useDispatch();

  const handleCreate = async () => {
    let response = await createWorkspace({
      name: 'New Workspace',
      adminId: props.currentUserId,
    });
    let res = dispatch(receiveWorkspace(response.data));
    return history.push(`/client/${res.payload.id}/setup-workspace`);
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <div></div>
        <CenterAlign>
          <Link to="/">
            <HeaderImg src={window.slackicon} />
          </Link>
        </CenterAlign>
        <FlexEnd>
          <EmailPill>
            Confirmed as <BoldText>{props.currentUser.email}</BoldText>{' '}
            <PillLink onClick={props.logout}>Change</PillLink>
          </EmailPill>
        </FlexEnd>
      </HeaderContainer>
      <LandingViewTop>
        <LandingViewTopWrapper>
          <DisplayFlex>
            <FlexDirectionCol>
              <TitleText>Create a new SlaQ workspace</TitleText>
              <SubtitleText>
                Slack gives your team a home — a place where they can talk and
                work together. To create a new workspace, click the button
                below.
              </SubtitleText>
              <PurpleButton onClick={handleCreate}>
                Create a Workspace
              </PurpleButton>
              <GettingStartedTerms>
                By continuing, you’re agreeing to our Customer Terms of Service,
                User Terms of Service, Privacy Policy, and Cookie Policy.
              </GettingStartedTerms>
            </FlexDirectionCol>
            <PictureContainer>
              <img src={window.getstarted} />
            </PictureContainer>
          </DisplayFlex>
        </LandingViewTopWrapper>
      </LandingViewTop>
      <LandingViewBottom>
        <LandingViewBottomWrapper>
          <GetStartedWorkspacesContainer>
            <OrDividerContainer>
              <OrDivider>OR</OrDivider>
            </OrDividerContainer>
            <GSWorkspacesTitle>Open a workspace</GSWorkspacesTitle>
            <div>
              <GSWorkspacesListContainer>
                <WorkspacesListPanel>
                  <WorkspacesListPanelTitle>
                    <WorkspacesListPanelTitleText>
                      Workspaces for <strong>{props.currentUser.email}</strong>
                    </WorkspacesListPanelTitleText>
                  </WorkspacesListPanelTitle>
                  <ExpandingWorkspacesList>
                    <ExpandingWorkspacesListItem>
                      {workspaceListItems}
                    </ExpandingWorkspacesListItem>
                  </ExpandingWorkspacesList>
                </WorkspacesListPanel>
              </GSWorkspacesListContainer>
            </div>
            <GSFooterContainer>
              <div>
                <GSFooterText>Not seeing your workspace?</GSFooterText>
              </div>
              <MediumButton onClick={props.logout}>
                Try a Different Email
              </MediumButton>
            </GSFooterContainer>
          </GetStartedWorkspacesContainer>
        </LandingViewBottomWrapper>
      </LandingViewBottom>
    </MainContainer>
  );
};

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  currentUserId: state.entities.users[state.session.id].id,
  workspaces: Object.values(state.entities.workspaces),
});

const mDTP = (dispatch) => ({
  createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
  logout: () => dispatch(logout()),
});

export default connect(mSTP, mDTP)(GetStarted);
