import React from 'react';
import Task from '../Task/Task';
// import PropTypes from "prop-types";
import * as S from './TaskList.style';

const TaskList = () => {
  return (
    <S.TaskList>
      <Task>asdasdasdasdasdasdasdasdasdasdasdasdasdasd</Task>
      <Task>asdasdasd</Task>
      <Task>
        asdasdasdasdasdasdasdasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasdasdasdasdas
      </Task>
    </S.TaskList>
  );
};

// TaskList.propTypes = {
//   children: PropTypes.any,
// };

export default TaskList;
