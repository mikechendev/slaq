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
} from '../styles/getstarted.style';
import { connect } from 'react-redux';
import { createWorkspace } from '../../../actions/workspace_actions';

const GetStarted = (props) => {
  console.log(props);
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
            Confirmed as <BoldText>{props.currentUser.email}</BoldText>
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
              <PurpleButton>Create a Workspace</PurpleButton>
            </FlexDirectionCol>
          </DisplayFlex>
        </LandingViewTopWrapper>
      </LandingViewTop>
    </MainContainer>
  );
};

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id],
  workspaces: Object.values(state.entities.workspaces),
});

const mDTP = (dispatch) => ({
  createWorkspace: (workspace) => dispatch(createWorkspace(workspace)),
});

export default connect(mSTP, mDTP)(GetStarted);
