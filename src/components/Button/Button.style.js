import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 5px;
  background-color: ${(props) => props.bg};
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  cursor: pointer;
  font-size: 1rem;
  padding: 0.5rem 1rem;

  :hover {
    transition: ease-in 0.2s;
    background-color: #ffffff;
  }

  @media screen and (min-width: 1441px) {
    padding: 0.5vw 1vw;
    font-size: 1vw;
  }
`;
