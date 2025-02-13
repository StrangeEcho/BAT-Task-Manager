import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Components/Core/MainPage';
import TaskForm from './Components/Core/TaskForm';


import {InitializeStorage} from "./Utilities/StorageHelpers";

function App() {

    useEffect(() => {
        InitializeStorage();
    });

    return (
      <Router>
        <Routes>
            <Route path="/" element={<><MainPage/></>} />
            <Route path="/edit/:taskId" element={<TaskForm />} />
            <Route path="/add" element={<TaskForm />} />
        </Routes>
      </Router>
    );
}

export default App;
