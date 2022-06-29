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
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
  color: white;
  font-size: 16px;
  line-height: 1.33334;
  padding-right: 5px;
`;

export const SideBarCompose = styled.button`
  box-shadow: 0 1px 3px #00000014;
  transition-duration: 80ms;
  transition-property: box-shadow, transform, background-color;
  transition-timing-function: cubic-bezier(0.175, 0.875, 0.5, 1.5);
  background-color: white;
  height: 34px;
  top: 8px;
  width: 34px;
  border: none;
  border-radius: 50%;
  &:hover {
    transform: none;
  }
`;
