import styled from 'styled-components';

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  font-family: 'Noto Sans', sans-serif;
  src: url(https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans&display=swap);
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
