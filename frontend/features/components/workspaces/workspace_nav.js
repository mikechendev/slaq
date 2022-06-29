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
import { AiOutlineClockCircle } from 'react-icons/ai';
import { FiSearch, FiFilter, FiUser } from 'react-icons/fi';
import { VscQuestion } from 'react-icons/vsc';

const WorkspaceNav = (props) => {
  return (
    <TopNav>
      <LeftDiv>
        <ClockContainer>
          <AiOutlineClockCircle
            color="white"
            style={{ width: '20px', height: '20px' }}
          />
        </ClockContainer>
      </LeftDiv>
      <CenterDiv>
        <TopNavSearch>
          <div>
            <FiSearch color="white" style={{ width: '15px', height: '15px' }} />
          </div>
          <TopNavSearchText>
            Search {props.currentWorkspace.name}
          </TopNavSearchText>
        </TopNavSearch>
        <TopNavSearchFilter>
          <FiFilter color="white" style={{ width: '16px', height: '16px' }} />
        </TopNavSearchFilter>
      </CenterDiv>
      <RightDiv>
        <div>
          <ToolTipContainer>
            <ToolTipButton>
              <VscQuestion
                color="white"
                style={{ width: '20px', height: '20px' }}
              />
            </ToolTipButton>
          </ToolTipContainer>
        </div>
        <UserButton>
          <FiUser color="white" style={{ width: '26px', height: '26px' }} />
        </UserButton>
      </RightDiv>
    </TopNav>
  );
};

export default WorkspaceNav;
