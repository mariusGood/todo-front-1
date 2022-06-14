import React from 'react';
import Task from '../Task/Task';
import * as S from './TaskList.style';

const TaskList = ({ data }) => {
  return (
    <S.TaskList>
      {data.map((todo) => (
        <Task key={todo.id}>{todo.title}</Task>
      ))}
    </S.TaskList>
  );
};

export default TaskList;
