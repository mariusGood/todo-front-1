import { useEffect, useState } from 'react';
import '../src/App.css';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import TaskList from './components/TaskList/TaskList';
import Title from './components/Title/Title';
import { getData } from './utils/services';

function App() {
  const [data, setData] = useState([]);
  async function renderData() {
    const resp = await getData();
    setData(resp);
  }

  useEffect(() => {
    renderData();
  }, []);

  return (
    <div className='App'>
      <Container>
        <Title>Todo list</Title>
        <Input />
        <TaskList data={data} />
      </Container>
    </div>
  );
}

export default App;
