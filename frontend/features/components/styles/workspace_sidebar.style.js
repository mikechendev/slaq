import styled from 'styled-components';

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
`;

export const SideBarHeaderContainer = styled.div`
  font-size: 18px;
  font-weight: 900;
  height: 50px;
  line-height: 1.33334;
  color: white;
  align-items: stretch;
  display: flex;
  position: relative;
`;

export const SideBarHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: initial;
  border-color: rgb(82, 38, 83);
  align-items: center;
  background-clip: padding-box;
  border-bottom: 1px solid #0000001a;
  flex: 1;
  flex-direction: rows;
  min-width: 0;
  padding: 0 19px 0 16px;
  position: relative;
  transition-duration: 80ms;
  transition-property: background-color, border-color;
  transition-timing-function: cubic-bezier(0.36, 0.19, 0.29, 1);
  z-index: 1;
  border-top: none;
  border-left: none;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

export const SideBarTeamName = styled.button`
  align-items: center;
  display: flex;
  margin-left: -4px;
  max-width: 100%;
  padding-left: 4px;
  background-color: transparent;
  border: none;
  &:hover {
    transform: none;
  }
`;

export const SideBarTeamNameText = styled.div`
  display: flex;
  font-weight: 900;
  min-width: 0;
  /* overflow: hidden; */
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  font-size: 16px;
  line-height: 1.33334;
  margin-right: 8px;
`;

export const SideBarCompose = styled.button`
  box-shadow: 0 1px 3px #00000014;
  transition-duration: 80ms;
  transition-property: box-shadow, transform, background-color;
  transition-timing-function: cubic-bezier(0.175, 0.875, 0.5, 1.5);
  height: 34px;
  top: 8px;
  width: 34px;
  border: none;
  border-radius: 50%;
  align-items: center;
  &:hover {
    transform: none;
  }
`;

export const WorkspaceChannelSidebarGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 652px;
`;

export const WSChannelSidebarNav = styled.div`
  height: auto;
  min-height: 0;
  width: 100%;
  font-size: 15px;
  contain: strict;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0;
  position: relative;
`;

export const ChannelListContainer = styled.div`
  width: 260px;
  height: 54px;
  box-shadow: 0 1px 0 0 rgb(255 255 255 / 10%);
`;

export const ScrollbarHider = styled.div`
  bottom: 0;
  height: 100%;
  left: 0;
  outline: none;
  overflow-x: hidden;
  overflow-y: scroll;
  position: absolute;
  right: -50px;
  top: 0;
  box-sizing: inherit;
`;

export const ScrollContainer = styled.div`
  position: relative;
  height: 352px;
`;

export const ScrollMenu = styled.div`
  top: 12px;
  height: 652px;
  contain: strict;
  position: absolute;
  width: 100%;
`;

export const BrowseContainer = styled.div`
  height: 28px;
  line-height: 32px;
  transition: color 80ms ease-out;
  cursor: pointer;
  display: flex;
  padding: 0 16px;
`;

export const PageDrawer = styled.div`
  margin-right: 8px;
`;

export const BrowseText = styled.div`
  color: #ffffff;
  left: 1px;
  position: relative;
  flex: 1 1 0;
  line-height: 32px;
`;

export const BrowseDivider = styled.div`
  top: 40px;
  height: 12px;
  contain: strict;
  position: absolute;
  width: 100%;
`;

export const ListSpacer = styled.div`
  border-color: rgb(82, 38, 83);
  border-bottom: 1px solid;
  height: inherit;
`;

export const ChannelList = styled.div`
  top: 62px;
  height: 32px;
  position: absolute;
  width: 100%;
`;

export const ChannelHeaderContainer = styled.div`
  height: 32px;
  line-height: 28px;
  padding: 0 16px;
`;

export const ChannelExpand = styled.div`
  align-items: center;
  border-radius: 4px;
  display: flex;
  height: 26px;
  margin: 0 5px 0 -7px;
`;

export const ChannelExpandIcon = styled.div`
  right: 1px;
  font-size: 18px;
  width: 26px;
  opacity: 1;
  cursor: pointer;
  display: inline-block;
  flex-shrink: 0;
  font-style: normal;
  font-weight: 400;
  height: 26px;
  position: relative;
  transform: rotate(90deg) translateY(0);
  transition: transform 0.1s, opacity 0.1s;
  vertical-align: middle;
  margin-right: 8px;
`;

export const ChannelHeaderTextContainer = styled.div`
  display: block;
  flex: 1 1 0;
  opacity: 1;
  /* overflow: hidden; */
  padding-right: 8px;
  text-align: left;
  transition: padding-right 0s ease-in-out 0.3s, color 0.1s ease-out 0s;
  white-space: nowrap;
  font-weight: 500;
  color: white;
`;

export const ChannelHeaderText = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
`;

export const ChannelListItemContainer = styled.div`
  top: 94px;
  height: 28px;
  width: 100%;
  margin-top: 20px;
`;

export const ChannelListItemDiv = styled.div`
  height: 28px;
  line-height: 28px;
  padding: 0 16px;
  align-items: center;
  border-radius: 0;
  cursor: pointer;
  display: flex;
  &:active {
    background-color: #1164a3;
  }
`;

export const ChannelListPrefix = styled.div`
  opacity: 1;
  border-radius: 4px;
  height: 20px;
  width: 20px;
  display: grid;
  margin: 0 8px 0 -4px;
  place-content: center;
  color: white;
`;

export const ChannelListItemName = styled.div`
  margin-right: 0;
  opacity: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
`;

export const CreateChannelContainer = styled.div`
  top: 20px;
  height: 28px px;
  position: relative;
  width: 100%;
`;

export const CreateChannelDiv = styled.div`
  display: flex;
  padding-left: 16px;
  height: 28px;
  line-height: 28px;
  padding: 0 16px;
  flex-direction: row;
  cursor: pointer;
`;

export const CreateChannelText = styled.div`
  font-size: 16px;
  margin-right: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 8px;
  color: white;
`;
