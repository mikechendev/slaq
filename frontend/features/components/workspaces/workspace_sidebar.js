import React from 'react';
import { Link } from 'react-router-dom';
import { SetupSidebar } from '../styles/workspace.style';
import {
  SideBarContainer,
  SideBarHeaderContainer,
  SideBarHeaderDiv,
  SideBarTeamName,
  SideBarTeamNameText,
  SideBarCompose,
} from '../styles/workspace_sidebar.style';
import { AiOutlineDown } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';

const WorkspaceSidebar = (props) => {
  return (
    <SetupSidebar>
      <SideBarContainer>
        <SideBarHeaderContainer>
          <SideBarHeaderDiv>
            <div>
              <SideBarTeamName>
                <SideBarTeamNameText>
                  {props.currentWorkspace.name}
                </SideBarTeamNameText>
                <div>
                  <AiOutlineDown
                    style={{
                      color: 'white',
                      width: '18px',
                      height: '18px',
                    }}
                  />
                </div>
              </SideBarTeamName>
            </div>
            <SideBarCompose>
              <BsPencilSquare
                style={{ color: '#3f0e40', width: '18px', height: '18px' }}
              />
            </SideBarCompose>
          </SideBarHeaderDiv>
        </SideBarHeaderContainer>
      </SideBarContainer>
    </SetupSidebar>
  );
};

export default WorkspaceSidebar;
