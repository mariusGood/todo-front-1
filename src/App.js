import '../src/App.css';
import Container from './components/Container/Container';
import Input from './components/Input/Input';
import TaskList from './components/TaskList/TaskList';
import Title from './components/Title/Title';

function App() {
  return (
    <div className='App'>
      <Container>
        <Title>Todo list</Title>
        <Input />
        <TaskList />
      </Container>
    </div>
  );
}

export default App;
