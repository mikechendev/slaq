import styled from 'styled-components';

export const MessagesWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  padding-left: 1px;
  position: absolute;
  width: 100%;
`;

export const MessagesFooterContainer = styled.div`
  margin-top: -8px;
  position: relative;
  z-index: 200;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
`;

export const MessageDiv = styled.div`
  display: block;
  flex-grow: 1;
  flex-shrink: 1;
  margin: -12px -8px -16px -16px;
  min-width: 0;
  padding: 8px 8px 16px 16px;
`;

export const MessageBody = styled.div`
  /* display: inline; */
  display: flex;
  justify-content: space-between;
  margin: 0;
  line-height: 1.46668;
  text-align: left;
`;
