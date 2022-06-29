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
  WorkspaceChannelSidebarGroup,
  WSChannelSidebarNav,
  ChannelListContainer,
  ScrollbarHider,
  ScrollContainer,
  ScrollMenu,
  BrowseContainer,
  PageDrawer,
  BrowseText,
  BrowseDivider,
  ChannelList,
  ChannelHeaderContainer,
  ChannelExpand,
  ChannelExpandIcon,
  ChannelHeaderTextContainer,
  ChannelHeaderText,
  CreateChannelContainer,
  CreateChannelDiv,
  CreateChannelText,
} from '../styles/workspace_sidebar.style';
import { AiOutlineDown } from 'react-icons/ai';
import { BsPencilSquare, BsThreeDotsVertical } from 'react-icons/bs';
import { BiRightArrow } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
import ChannelModal from '../chats/channel_modal';

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
              <svg data-ddp="true" viewBox="0 0 20 20">
                <g fill="none">
                  <path
                    fill="#3f0e40"
                    d="M9.75 4a.75.75 0 0 0 0-1.5V4Zm7.75 6.25a.75.75 0 0 0-1.5 0h1.5ZM13.75 17h-8.5v1.5h8.5V17ZM3 14.75v-8.5H1.5v8.5H3ZM5.25 4h4.5V2.5h-4.5V4ZM16 10.25v4.5h1.5v-4.5H16ZM5.25 17A2.25 2.25 0 0 1 3 14.75H1.5a3.75 3.75 0 0 0 3.75 3.75V17Zm8.5 1.5a3.75 3.75 0 0 0 3.75-3.75H16A2.25 2.25 0 0 1 13.75 17v1.5ZM3 6.25A2.25 2.25 0 0 1 5.25 4V2.5A3.75 3.75 0 0 0 1.5 6.25H3Z"
                  ></path>
                  <path
                    stroke="#3f0e40"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="m8 9.5-.75 3.25L10.5 12l6.763-6.763a1.75 1.75 0 0 0 0-2.474l-.026-.026a1.75 1.75 0 0 0-2.474 0L8 9.5ZM14 4l2 2"
                  ></path>
                </g>
              </svg>
            </SideBarCompose>
          </SideBarHeaderDiv>
        </SideBarHeaderContainer>
        <div>
          <WorkspaceChannelSidebarGroup>
            <WSChannelSidebarNav>
              <div>
                <div style={{ height: '652px' }}>
                  <div>
                    <ChannelListContainer>
                      <ScrollbarHider>
                        <div style={{ width: '260px', height: '652px' }}>
                          <ScrollContainer>
                            <ScrollMenu>
                              <BrowseContainer>
                                <PageDrawer>
                                  <BsThreeDotsVertical
                                    stroke="white"
                                    fill="white"
                                    color="white"
                                  ></BsThreeDotsVertical>
                                </PageDrawer>
                                <BrowseText>Browse SlaQ</BrowseText>
                              </BrowseContainer>
                              <BrowseDivider></BrowseDivider>
                              <ChannelList>
                                <ChannelHeaderContainer>
                                  <ChannelExpand>
                                    <ChannelExpandIcon>
                                      <BiRightArrow color="white"></BiRightArrow>
                                    </ChannelExpandIcon>
                                    <ChannelHeaderTextContainer>
                                      <ChannelHeaderText>
                                        Channels
                                      </ChannelHeaderText>
                                    </ChannelHeaderTextContainer>
                                  </ChannelExpand>
                                </ChannelHeaderContainer>
                                <CreateChannelContainer>
                                  <div style={{ position: 'relative' }}>
                                    <div style={{ position: 'relative' }}>
                                      <CreateChannelDiv
                                        onClick={props.openModal}
                                      >
                                        <i className="plus-icon">+</i>
                                        <br />
                                        <CreateChannelText>
                                          Add Channels
                                        </CreateChannelText>
                                      </CreateChannelDiv>
                                    </div>
                                  </div>
                                </CreateChannelContainer>
                              </ChannelList>
                            </ScrollMenu>
                          </ScrollContainer>
                        </div>
                      </ScrollbarHider>
                    </ChannelListContainer>
                  </div>
                </div>
              </div>
            </WSChannelSidebarNav>
          </WorkspaceChannelSidebarGroup>
        </div>
      </SideBarContainer>
    </SetupSidebar>
  );
};

export default WorkspaceSidebar;
