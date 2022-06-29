import styled from 'styled-components';

export const LeftDiv = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  min-width: 128px;
  padding-left: 16px;
  padding-right: 20px;
  @media (max-width: 1440px) {
    flex-grow: 0;
  }
  @media (min-width: 1080px) {
    min-width: 260px;
  }
  @media (min-width: 900px) {
    min-width: 220px;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  flex: 2;
  max-width: 732px;
  min-width: 0;
  position: relative;
`;

export const RightDiv = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  min-width: 128px;
  padding-left: 32px;
  padding-right: 16px;
  position: relative;
  @media (min-width: 900px) {
    min-width: 220px;
  }
  @media (max-width: 1440px) {
    margin-left: auto;
    flex-grow: 0;
  }
  @media (min-width: 1080px) {
    min-width: 260px;
  }
`;

export const ClockContainer = styled.button`
  color: rgba(255, 255, 255, 0.8);
  align-items: center;
  background: none;
  border-radius: 4px;
  display: flex;
  flex-shrink: 0;
  height: 26px;
  justify-content: center;
  margin: 0;
  opacity: 0.8;
  padding: 0;
  width: 26px;
  border: none;
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    opacity: 1;
    transform: none;
  }
`;

export const TopNavSearch = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 26px;
  box-shadow: 0 0 0 1px, 0 1px 3px 0 #00000014;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  flex: 5;
  max-width: 732px;
  min-width: 0;
  padding: 0 8px;
  border: none;
  &:hover {
    background: rgba(255, 255, 255, 0.23);
    box-shadow: 0 0 0 1px, 0 1px 3px 0 #00000014;
    transform: none;
  }
`;

export const TopNavSearchText = styled.div`
  margin-right: 0;
  padding-left: 8px;
  padding-right: 44px;
  display: block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.38463;
  margin-right: auto;
  overflow: hidden;
  padding-right: 12px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: white;
  font-family: 'Lato', sans-serif;
`;

export const TopNavSearchFilter = styled.button`
  border-radius: 0;
  height: 18px;
  margin-right: 2px;
  top: 4px;
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  right: 0;
  width: 24px;
  background: rgba(0, 0, 0, 0);
  border: none;
  &:hover {
    transform: none;
  }
`;

export const ToolTipContainer = styled.div`
  margin-right: 12px;
  position: relative;
`;

export const ToolTipButton = styled.button`
  align-items: center;
  background: none;
  border-radius: 4px;
  color: var(--p-channel_sidebar__top-nav-text);
  display: flex;
  flex-shrink: 0;
  height: 26px;
  justify-content: center;
  margin: 0;
  opacity: 0.8;
  padding: 0;
  width: 26px;
  border: none;
  &:hover {
    transform: none;
  }
`;

export const UserButton = styled.button`
  opacity: 1;
  height: 28px;
  width: 28px;
  position: relative;
  align-items: center;
  border-radius: 4px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  border: none;
  background-color: #350d36;
  &:hover {
    transform: none;
  }
`;
