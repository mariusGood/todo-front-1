import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: medium;
  padding: 0.5rem 1rem;
`;
