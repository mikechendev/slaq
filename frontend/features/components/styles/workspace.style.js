import styled from 'styled-components';

export const FontContainer = styled.div`
  font-family: 'Noto Sans', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat&family=Noto+Sans&display=swap');
`;

export const Div = styled.div`
  display: ${(props) => (props.display ? props.display : 'block')};
`;

export const SetupWorkspaceContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const TopNav = styled.div`
  background-color: #350d36;
  grid-column: 1 / -1;
  display: flex;
  height: 2.8rem;
`;

export const SetupGrid = styled.div`
  flex-grow: 1;
  font-family: 'Noto Sans', sans-serif;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: white;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 260px auto;
  overflow: hidden;
`;

export const SetupSidebar = styled.div`
  background-color: #3f0e40;
`;

export const SetupSidebarHeader = styled.div`
  display: flex;
  color: #fff;
  justify-content: space-between;
  background-color: #522653;
  height: 49px;
  font-size: 18px;
  font-weight: 900;
  line-height: 1.3;
  padding: 0 0.5em 0 16px;
  border-color: rgb(82, 38, 83);
`;

export const SidebarButton = styled.div`
  margin-top: 12px;
  height: 15px;
  width: 51%;
  border-radius: 8px;
  background-color: #643c65;
  border-bottom: 1px solid #0000001a;
`;

export const Dragbar = styled.div`
  position: absolute;
  left: 256px;
  top: 0;
  z-index: 10;
  width: 4px;
  top: 0;
  height: 100%;
  padding: 0 2px;
  background-clip: content-box;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 650px;
  padding: 64px 80px 64px;
`;

export const TitleFont = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-size: 50px;
  font-weight: 700;
  line-height: 56px;
  margin-bottom: 16px;
`;

export const BodyText = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 15px;
  line-height: 1.46668;
  font-weight: 400;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  margin-bottom: 24px;
`;

export const RelativeDiv = styled.div`
  position: relative;
  z-index: 2;
`;

export const FormField = styled.input`
  font-family: 'Lato', sans-serif;
  --saf-0: rgba(var(--sk_primary_foreground, 29, 28, 29), 0.3);
  background-color: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  border: 1px solid var(--saf-0);
  border-radius: 4px;
  box-sizing: border-box;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
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
    --saf-0: rgba(var(--sk_highlight, 18, 100, 163), 1);
    -webkit-appearance: none;
    border-color: #0000;
    border-radius: 4px;
    box-shadow: 0 0 0 1px var(--saf-0), 0 0 0 5px #1d9bd14d;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  -webkit-appearance: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  white-space: nowrap;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  width: 30%;
  padding: 0 16px 3px;
  margin-top: 40px;
  background: rgba(var(--sk_foreground_low_solid, 221, 221, 221), 1);
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 0.75);
`;
