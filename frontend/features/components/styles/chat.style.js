import styled from 'styled-components';

export const ChatHeaderContainer = styled.div`
  background: rgba(var(255, 255, 255), 1);
  z-index: 1;
  display: flex;
  flex-shrink: 0;
  height: 49px;
  padding: 0 16px 0 20px;
  align-items: center;
  box-shadow: 0 1px 0 0;
`;

export const ChatHeadWrapper = styled.div`
  align-items: baseline;
  display: flex;
  flex: 1 1 0;
  min-width: 0;
  justify-content: space-between;
`;

export const ChatHeadTextButton = styled.button`
  border-radius: 6px;
  font-weight: 900;
  margin-left: -8px;
  margin-right: 8px;
  padding: 3px 8px;
  width: 100%;
  border: 0;
  cursor: pointer;
`;

export const HeaderTextContainer = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.33334;
  flex: 1 1 0;
  min-width: 0;
`;

export const HeaderText = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const MessagesContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-height: 0;
  position: relative;
`;
