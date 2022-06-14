import React, { useEffect, useState } from 'react';
import { getData } from '../../utils/services';
import Task from '../Task/Task';
import * as S from './TaskList.style';

const TaskList = () => {
  const [data, setData] = useState([]);

  async function renderData() {
    const resp = await getData();
    setData(resp);
  }

  useEffect(() => {
    renderData();
  }, []);

  return (
    <S.TaskList>
      {data.map((todo) => (
        <Task key={todo.id}>{todo.title}</Task>
      ))}
    </S.TaskList>
  );
};

export default TaskList;
