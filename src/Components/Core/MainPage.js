import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskItem from '../TaskItem';
import Stats from "../Stats";
import PageHeader from "../MetaUI/PageHeader";
import Filter from "../Filter";  // Import the new Filter component
import '../Styles/MainPage.css';

export default function MainPage() {
    const navigate = useNavigate();

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    const [Priority, setPriority] = useState(localStorage.getItem("filterPriority") || "All");

    const handleEdit = (taskId) => {
        navigate(`/edit/${taskId}`);
    };

    const handleDelete = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId); // filter tasks by what doesn't equal the deleted task's id
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
    };

    const handleComplete = (taskId) => {
        handleDelete(taskId);
        let compTasks = parseInt(localStorage.getItem("completedTasks")) || 0;
        localStorage.setItem("completedTasks", (compTasks + 1).toString()); // increment completed tasks
    };


    const filteredTasks = Priority === "All" // new task array dynamically set by filter option
        ? tasks
        : tasks.filter(task => task.priority === Priority);

    return (
        <div className="main-page">
            <PageHeader />
            <Stats />
            <button id="addTaskBtn" onClick={() => navigate('/add')}>Add Task</button>


            <h2>Task List:</h2>
            <Filter filterPriority={Priority} setFilterPriority={setPriority} />
            <div className="task-list-container">
                <ul id="taskList">
                    {filteredTasks.map(task => (
                        <li key={task.id}>
                            <TaskItem task={task} onEdit={handleEdit} onDelete={handleDelete} onComplete={handleComplete} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
