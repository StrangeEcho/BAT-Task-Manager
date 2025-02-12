import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import PageHeader from './Components/PageHeader';

import {InitializeStorage} from "./Utilities/StorageHelpers";

function App() {

    useEffect(() => {
        InitializeStorage();
    });

    return (
      <Router>
        <Routes>
            <Route path="/" element={<><PageHeader/><TaskList/></>} />
            <Route path="/edit/:taskId" element={<TaskForm />} />
            <Route path="/add" element={<TaskForm />} />
        </Routes>
      </Router>
    );
}

export default App;
