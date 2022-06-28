import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: 'Noto Sans', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat&family=Noto+Sans&display=swap');
`;

export const HeaderContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 48px 0 40px 0;
  width: 100%;
  background-color: #f4ede480;
`;

export const EmailPill = styled.div`
  background: rgba(var(--sk_foreground_min, 29, 28, 29), 0.04);
  border-radius: 50px;
  color: rgba(var(--sk_foreground_max_solid, 97, 96, 97), 1);
  display: flex;
  font-size: 13px;
  height: 32px;
  line-height: 32px;
  max-width: 330px;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: 16px;
  text-overflow: ellipsis;
  white-space: pre;
`;

export const CenterAlign = styled.div`
  text-align: center;
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const HeaderImg = styled.img`
  padding: 0;
  margin: 0;
  max-width: 60px;
  max-height: auto;
`;

export const BoldText = styled.div`
  font-weight: 600;
`;

export const PillLink = styled.a`
  color: rgba(var(--sk_foreground_max_solid, 97, 96, 97), 1);
  text-decoration: none;
  margin-left: 4px;

  &:hover {
    text-decoration: underline;
    color: #1264a3;
  }
`;

export const LandingViewTop = styled.div`
  background-color: #f4ede480;
  padding-bottom: 48px;
  padding-top: 12px;
  width: 100%;
`;

export const LandingViewTopWrapper = styled.div`
  margin: 0 auto;
  max-width: 700px;
`;

export const DisplayFlex = styled.div`
  display: flex;
`;

export const FlexDirectionCol = styled.div`
  flex-direction: column;
`;

export const TitleText = styled.div`
  font-weight: 700;
  letter-spacing: -0.25px;
  margin-bottom: 12px;
  padding-right: 24px;
  font-size: 44px;
  line-height: 48px;
`;

export const SubtitleText = styled.div`
  flex-grow: 1;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 20px;
  width: 80%;
`;

export const PurpleButton = styled.button`
  background-color: #611f69;
  border: none;
  color: #fff;
  height: 44px;
  margin-bottom: 16px;
  max-width: max-content;
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  border-radius: 4px;
  outline: none;
`;

export const PictureContainer = styled.div`
  flex-shrink: 0;
  width: 250px;
`;

export const GettingStartedTerms = styled.div`
  font-size: 13px;
  font-weight: 400;
  line-height: 1.38463;
  width: 75%;
`;

export const LandingViewBottom = styled.div`
  min-width: 0;
  padding-top: 48px;
  position: relative;
  width: 600px;
`;

export const LandingViewBottomWrapper = styled.div`
  max-width: 600px;
`;

export const GetStartedWorkspacesContainer = styled.div`
  ont-size: 15px;
  line-height: 1.46668;
  font-weight: initial;
  color: #1d1c1d;
  font-variant-ligatures: common-ligatures;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
`;

export const OrDividerContainer = styled.div`
  left: calc(50% - 35px);
  position: absolute;
  top: -35px;
`;

export const OrDivider = styled.div`
  align-items: center;
  background-color: #fff;
  border-radius: 100%;
  color: rgba(var(--sk_foreground_max, 29, 28, 29), 0.7);
  display: flex;
  font-weight: 700;
  height: 70px;
  justify-content: center;
  width: 70px;
`;

export const GSWorkspacesTitle = styled.div`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 16px;
  text-align: center;
  line-height: 1.33334;
  font-weight: 900;
`;

export const GSWorkspacesListContainer = styled.div`
  margin-bottom: 40px;
`;

export const WorkspacesListPanel = styled.div`
  --saf-0: rgba(var(--sk_foreground_low_solid, 221, 221, 221), 1);
  border: 1px solid var(--saf-0);
  border-radius: 4px;
  box-shadow: 0 4px 12px #0000001a;
`;

export const WorkspacesListPanelTitle = styled.div`
  align-items: center;
  border-bottom: 1px solid
    rgba(var(--sk_foreground_low_solid, 221, 221, 221), 1);
  display: flex;
  height: 55px;
  justify-content: space-between;
  padding: 0 24px;
`;

export const WorkspacesListPanelTitleText = styled.div`
  font-size: 15px;
  line-height: 1.46668;
  font-weight: initial;
`;

export const ExpandingWorkspacesList = styled.div`
  --saf-0: rgba(var(--sk_foreground_low_solid, 221, 221, 221), 1);
  border: 1px solid var(--saf-0);
  border-radius: 4px;
  box-shadow: 0 4px 12px #0000001a;
`;

export const ExpandingWorkspacesListItem = styled.div`
  color: inherit;
  display: block;
  padding: 15px 24px 20px;
`;

export const GSFooterContainer = styled.div`
  align-items: center;
  background: #f8f8f8;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  line-height: 22px;
  min-width: 0;
  padding: 24px;
  margin-top: 24px;
`;

export const GSFooterText = styled.div`
  height: 15px;
  margin-right: 4px;
`;

export const MediumButton = styled.button`
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
  margin-left: 16px;
  min-width: auto;
  color: rgba(var(--sk_primary_foreground, 29, 28, 29), 1);
  font-size: 15px;
  height: 36px;
  min-width: 80px;
  padding: 0 12px 1px;
  --saf-0: rgba(var(--sk_primary_foreground, 29, 28, 29), 0.3);
  background: rgba(var(--sk_primary_background, 255, 255, 255), 1);
  background-clip: padding-box;
  border: 1px solid var(--saf-0);
  font-weight: 700;
  transition: all 80ms linear;
`;
