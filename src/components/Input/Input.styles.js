import styled from 'styled-components';

export const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  margin-right: 0.5rem;
  width: 100%;

  @media screen and (min-width: 1441px) {
    margin-right: 1vw;
    font-size: 1.1vw;
    padding: 0.5vw;
  }
`;

export const InputWrapper = styled.form`
  display: flex;
  align-items: center;
`;
