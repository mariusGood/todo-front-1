import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fffffff1;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #808080c5;
  color: #9c4700;
  margin: 0 auto;
  width: 30vw;
  padding: 3rem;
  position: relative;
  top: 5rem;

  @media screen and (min-width: 1441px) {
    padding: 3vw;
    top: 5vw;
  }

  @media screen and (max-width: 1440px) {
    width: 30rem;
  }

  @media screen and (max-width: 768px) {
    width: 50vw;
  }
`;
