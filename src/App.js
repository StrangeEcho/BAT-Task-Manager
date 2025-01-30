import './App.css';
import PageHeader from './Components/PageHeader';
import TaskList from './Components/TaskList';
import Stats from './Components/Stats';

function App() {
  return (
    <div>
      <PageHeader />
      <TaskList />
      <Stats />
    </div>
  );
}

export default App;