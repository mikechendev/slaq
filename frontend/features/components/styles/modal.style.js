import styled from 'styled-components';

export const ModalHeaderContainer = styled.div`
  border-radius: 8px 8px 0 0;
  flex-shrink: 0;
  min-height: 70px;
  overflow: hidden;
  width: 100%;
`;

export const ModalHeaderDiv = styled.div`
  padding-right: 76px;
  align-items: center;
  display: flex;
  min-height: 70px;
  padding: 20px 28px;
  width: auto;
`;

export const ModalHeaderText = styled.div`
  font-size: 28px;
  line-height: 1.2143;
  font-weight: 900;
`;

export const ModalContentContainer = styled.div`
  display: flex;
  flex-shrink: 1;
  min-height: 50px;
  overflow: hidden;
  position: relative;
`;

export const ModalContentSectionContainer = styled.div`
  padding: 0 28px;
`;

export const ModalContentSectionText = styled.div`
  color: rgba(var(97, 96, 97), 1);
  margin-bottom: 24px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.46668;
`;

export const NameLabel = styled.div`
  font-size: 15px;
  font-weight: 400;
  line-height: 1.46668;
  display: inline-block;
  margin-right: 8px;
`;

export const FormFieldContainer = styled.form`
  margin-bottom: 20px;
  margin-top: 8px;
`;

export const FormField = styled.input`
  --saf-0: rgba(var(29, 28, 29), 0.3);
  background-color: rgba(var(255, 255, 255), 1);
  border: 1px solid;
  border-radius: 4px;
  box-sizing: border-box;
  color: rgba(var(29, 28, 29), 1);
  font-size: 15px;
  line-height: normal;
  margin: 0 0 20px;
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  width: 100%;
  font-size: 18px;
  height: 44px;
  line-height: 1.33333333;
  padding: 11px 12px 13px;
  padding-right: 46px;
  &:focus {
    --saf-0: rgba(var(18, 100, 163), 1);
    -webkit-appearance: none;
    border-color: #0000;
    border-radius: 4px;
    box-shadow: 0 0 0 1px, 0 0 0 5px #1d9bd14d;
    outline: none;
  }
`;

export const ModalFooterContainer = styled.div`
  align-items: center;
  background-color: rgba(var(255, 255, 255), 1);
  border-radius: 0 0 8px 8px;
  display: flex;
  flex-shrink: 0;
  height: 84px;
  justify-content: flex-end;
  margin-top: auto;
  overflow: hidden;
  padding: 24px 28px;
  width: auto;
`;

export const CreateButton = styled.button`
  background: rgba(var(221, 221, 221), 1);
  background-clip: initial;
  border-color: rgba(var(221, 221, 221), 1);
  box-shadow: none;
  color: rgba(var(9, 28, 29), 0.75);
  cursor: pointer;
  text-shadow: none;
  transition: all 80ms linear;
  font-size: 15px;
  font-weight: 500;
  height: 36px;
  min-width: 80px;
  padding: 0 12px 1px;
  font-family: 'Lato', sans-serif;
  border-radius: 4px;
  margin: 3px;
`;

export const DeleteButton = styled.button`
  background: red;
  background-clip: initial;
  border-color: rgba(var(221, 221, 221), 1);
  box-shadow: none;
  color: white;
  cursor: pointer;
  text-shadow: none;
  transition: all 80ms linear;
  font-size: 15px;
  font-weight: 800;
  height: 36px;
  min-width: 80px;
  padding: 0 12px 1px;
  font-family: 'Lato', sans-serif;
  border-radius: 4px;
  margin: 3px;
`;

export const CloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 36px;
  z-index: 1;
  height: 36px;
  width: 36px;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  cursor: pointer;
`;
