import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.75rem 1rem;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#541554'};
  color: ${(props) => (props.color ? props.color : 'white')};
  font-weight: 600;
  border-radius: 5px;
  margin-left: 10px;
  margin-right: 10px;
  min-width: 135px;
`;
