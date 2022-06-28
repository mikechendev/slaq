import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 720px;
  flex-direction: column;
  font-family: 'Noto Sans', sans-serif;
  src: url('https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Montserrat&family=Noto+Sans&display=swap');
`;

export const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const FormField = styled.div`
  font-size: 18px;
  line-height: 1.33333333;
  height: 44px;
  padding: 11px 12px 13px;
  margin: 0 0 20px;
  border: 1px solid rgba(29, 28, 29, 0.3);
  transition: border 80ms ease-out, box-shadow 80ms ease-out;
  border-radius: 4px;
`;

export const FormButton = styled.div`
  font-size: 18px;
  font-weight: 900;
  height: 44px;
  min-width: 96px;
  padding: 0 16px 3px;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#4a154b'};
  border: none;
  color: #fff;
  margin-bottom: 20px;
  border-radius: 4px;
`;
