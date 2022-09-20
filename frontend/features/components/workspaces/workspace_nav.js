import React from 'react';
import { Link } from 'react-router-dom';
import { TopNav } from '../styles/workspace.style';
import {
  LeftDiv,
  CenterDiv,
  RightDiv,
  ClockContainer,
  TopNavSearch,
  TopNavSearchText,
  TopNavSearchFilter,
  ToolTipContainer,
  ToolTipButton,
  UserButton,
} from '../styles/workspace_navbar.style';

const WorkspaceNav = (props) => {
  return (
    <TopNav>
      <LeftDiv>
        {/* <ClockContainer>
          <svg data-ddp="true" viewBox="0 0 20 20">
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="10" cy="10" r="8.25"></circle>
              <path strokeLinecap="round" d="M10 5.75v4.75h3.75"></path>
            </g>
          </svg>
        </ClockContainer> */}
      </LeftDiv>
      <CenterDiv>
        {/* <TopNavSearch>
          <div>
            <svg data-ddp="true" viewBox="0 0 20 20">
              <path
                fill="white"
                d="M17.22 18.28a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM15 9a6 6 0 0 1-6 6v1.5A7.5 7.5 0 0 0 16.5 9H15Zm-6 6a6 6 0 0 1-6-6H1.5A7.5 7.5 0 0 0 9 16.5V15ZM3 9a6 6 0 0 1 6-6V1.5A7.5 7.5 0 0 0 1.5 9H3Zm6-6a6 6 0 0 1 6 6h1.5A7.5 7.5 0 0 0 9 1.5V3Zm4.47 11.53 3.75 3.75 1.06-1.06-3.75-3.75-1.06 1.06Z"
              ></path>
            </svg>
          </div>
          <TopNavSearchText>
            Search {props.currentWorkspace.name}
          </TopNavSearchText>
        </TopNavSearch>
        <TopNavSearchFilter>
          <svg data-ddp="true" viewBox="0 0 20 20">
            <path
              fill="none"
              stroke="white"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M15.25 4.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm0 0h2.5m-15.5 0h9m3 11.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm0 0h3.5m-15.5 0h8m-2-5.75a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm0 0h9.5M4.5 10H2.25"
            ></path>
          </svg>
        </TopNavSearchFilter> */}
      </CenterDiv>
      <RightDiv>
        <div>
          {/* <ToolTipContainer>
            <ToolTipButton>
              <svg data-ddp="true" viewBox="0 0 20 20">
                <g fill="none">
                  <circle
                    cx="10"
                    cy="10"
                    r="8.25"
                    stroke="white"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    fill="white"
                    d="m10.5 10.478.07.747-.07-.747ZM7 8.25a.75.75 0 0 0 1.5 0H7ZM10 7c.502 0 .95.148 1.258.396.29.233.492.58.492 1.104h1.5c0-.977-.408-1.754-1.05-2.271-.623-.502-1.424-.729-2.2-.729V7Zm-.75 4v1h1.5v-1h-1.5Zm2.5-2.5c0 .494-.146.739-.307.884-.186.166-.506.3-1.014.347l.14 1.494c.675-.064 1.355-.26 1.874-.724.543-.486.807-1.174.807-2.001h-1.5ZM8.5 8.25c0-.414.154-.703.383-.898C9.124 7.146 9.503 7 10 7V5.5c-.78 0-1.527.23-2.09.71C7.332 6.704 7 7.415 7 8.25h1.5ZM10.75 11a.244.244 0 0 1-.066.169.182.182 0 0 1-.114.056l-.14-1.494c-.614.058-1.18.56-1.18 1.269h1.5Z"
                  ></path>
                  <circle cx="10" cy="14" r="1" fill="white"></circle>
                </g>
              </svg>
            </ToolTipButton>
          </ToolTipContainer> */}
        </div>
        <UserButton>
          <img src={window.user} width={'26px'} height={'26px'} />
        </UserButton>
      </RightDiv>
    </TopNav>
  );
};

export default WorkspaceNav;
