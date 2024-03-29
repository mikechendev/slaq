import React from 'react';
import { Link } from 'react-router-dom';
import { SetupSidebar } from '../styles/workspace.style';
import SelectWorkspaceModal from './select_workspace_modal';
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
  ChannelListItemContainer,
  ChannelListItemDiv,
  ChannelListPrefix,
  ChannelListItemName,
  DmListItemDiv,
} from '../styles/workspace_sidebar.style';
import { AiOutlineDown } from 'react-icons/ai';
import { BsPencilSquare, BsThreeDotsVertical } from 'react-icons/bs';
import { BiRightArrow } from 'react-icons/bi';
import { FiPlus } from 'react-icons/fi';
import ChannelModal from '../chats/channel_modal';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';

const WorkspaceSidebar = (props) => {
  const [wsModal, setWsModal] = useState({
    isOpen: false,
  });

  const openWsModal = () => {
    setWsModal({ isOpen: true });
  };

  const closeWsModal = () => {
    setWsModal({ isOpen: false });
  };

  const channels = useSelector((state) => Object.values(state.entities.chats));
  const channelsList = channels.filter((chat) => {
    return chat.chat_type == 'channel';
  });
  let channelList = channelsList.map((chat) => {
    return (
      <ChannelListItemDiv key={chat.id}>
        <ChannelListPrefix>#</ChannelListPrefix>
        <Link
          to={`/client/${props.currentWorkspace.id}/${chat.id}`}
          style={{ textDecoration: 'none' }}
        >
          <ChannelListItemName>{chat.name}</ChannelListItemName>
        </Link>
      </ChannelListItemDiv>
    );
  });

  const dmsList = channels.filter((chat) => {
    return chat.chat_type != 'channel';
  });

  const dmList = dmsList.map((dm) => {
    let recipient = dm.users.find((user) => user.id !== props.currentUser.id);
    return (
      <DmListItemDiv key={dm.id}>
        <Link
          to={`/client/${props.currentWorkspace.id}/${dm.id}`}
          style={{ textDecoration: 'none', top: '50px', position: 'relative' }}
        >
          <ChannelListItemName>{recipient.username}</ChannelListItemName>
        </Link>
      </DmListItemDiv>
    );
  });

  return (
    <SetupSidebar>
      <SideBarContainer>
        <SideBarHeaderContainer>
          <SideBarHeaderDiv>
            <div>
              <SideBarTeamName>
                <SideBarTeamNameText
                  onClick={openWsModal}
                  data-tip
                  data-for="editWorkspace"
                >
                  {props.currentWorkspace.name}
                  <ReactTooltip
                    id="editWorkspace"
                    place="bottom"
                    effect="solid"
                  >
                    Edit {props.currentWorkspace.name}
                  </ReactTooltip>
                </SideBarTeamNameText>
                {/* <div>
                  <AiOutlineDown
                    style={{
                      color: 'white',
                      width: '18px',
                      height: '18px',
                    }}
                  />
                </div> */}
              </SideBarTeamName>
            </div>
            <SideBarCompose data-tip data-for="composeMessage">
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
              <ReactTooltip id="composeMessage" place="bottom" effect="solid">
                To be updated!
              </ReactTooltip>
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
                              {/* <BrowseContainer>
                                <PageDrawer>
                                  <BsThreeDotsVertical
                                    stroke="white"
                                    fill="white"
                                    color="white"
                                  ></BsThreeDotsVertical>
                                </PageDrawer>
                                <BrowseText data-tip data-for="browseSlaq">
                                  Browse SlaQ
                                  <ReactTooltip
                                    id="browseSlaq"
                                    place="bottom"
                                    effect="solid"
                                  >
                                    To be updated!
                                  </ReactTooltip>
                                </BrowseText>
                              </BrowseContainer> */}
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
                                <ChannelListItemContainer>
                                  {channelList}
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
                                  <div
                                    style={{
                                      top: '50px',
                                      height: '32px',
                                      lineHeight: '28px',
                                      position: 'relative',
                                      padding: '0px 16px',
                                    }}
                                  >
                                    <ChannelExpand>
                                      <ChannelExpandIcon>
                                        <BiRightArrow color="white"></BiRightArrow>
                                      </ChannelExpandIcon>
                                      <ChannelHeaderTextContainer>
                                        <ChannelHeaderText>
                                          Direct messages
                                        </ChannelHeaderText>
                                      </ChannelHeaderTextContainer>
                                    </ChannelExpand>
                                  </div>
                                  {dmList}
                                </ChannelListItemContainer>
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
      <SelectWorkspaceModal
        isOpen={wsModal.isOpen}
        openModal={openWsModal}
        closeModal={closeWsModal}
      />
    </SetupSidebar>
  );
};

export default WorkspaceSidebar;
