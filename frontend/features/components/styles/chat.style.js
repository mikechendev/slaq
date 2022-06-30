import styled from 'styled-components';

export const ChatHeaderContainer = styled.div`
  background: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  z-index: 202;
  display: flex;
  flex-shrink: 0;
  height: 49px;
  padding: 0 16px 0 20px;
  --saf-0: rgba(var(--sk_foreground_low, 29, 28, 29), 0.13);
  align-items: center;
  box-shadow: 0 1px 0 0 var(--saf-0);
`;

export const ChatHeadWrapper = styled.div`
  align-items: baseline;
  display: flex;
  flex: 1 1 0;
  min-width: 0;
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
