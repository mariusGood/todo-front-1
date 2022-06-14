import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Task.style';

const Task = ({ children }) => {
  return (
    <S.Task>
      {children}
      <div>
        <i class='fa-solid fa-pencil'></i>
        <i class='fa-solid fa-trash-can'></i>
      </div>
    </S.Task>
  );
};

Task.propTypes = {
  children: PropTypes.string,
};

export default Task;
