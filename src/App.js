import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import Stats from './Components/Stats';
import PageHeader from './Components/PageHeader';

function App() {
    return (
      <Router>
        <Routes>
            <Route path="/" element={<><PageHeader/><Stats/><TaskList/></>} />
            <Route path="/edit/:taskId" element={<TaskForm />} />
            <Route path="/add" element={<TaskForm />} />
        </Routes>
      </Router>
    );
}

export default App;
