import styled from 'styled-components';

export const Task = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #d3d3d3da;
  border-radius: 3px;
  box-sizing: border-box;
  margin-top: 0.5rem;
  padding: 0.65rem;
  word-break: break-all;

  i {
    padding: 0 0.5rem;
    cursor: pointer;
  }

  i:nth-child(2) {
    :hover {
      color: red;
      transition: ease-in 0.2s;
    }
  }
`;
