import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.ul`
  display: flex;
  justify-content: center;
  li {
    background-color: #f9bf90;
    border: 1px solid #9c4700;
    list-style: none;
    margin: 0 0.5rem;
    padding: 0.5rem 0.5rem;

    :hover {
      background-color: #ffffff;
      transition: ease-in 0.2s;
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #9c4700;
  padding: 0 0.5rem;
  text-decoration: none;
`;
