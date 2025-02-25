import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import TaskItem from '../TaskItem';
import Stats from "../Stats";
import Filter from "../Filter";
import Search from "../Search"; // Import Search component
import '../Styles/MainPage.css';

export default function MainPage() {
    const navigate = useNavigate(); // function alias

    // Declare States
    const [tasks, setTasks] = useState(() => {
        return JSON.parse(localStorage.getItem("tasks")) || []; // get tasks from localStorage or an empty array
    });
    const [priority, setPriority] = useState(localStorage.getItem("filterPriority") || "All");
    const [filteredTasks, setFilteredTasks] = useState(tasks);

    useEffect(() => {
        document.title = "Home Page";
    })

    useEffect(() => {
        setFilteredTasks(tasks);
    }, [tasks]);

    // Apply filtering by priority
    useEffect(() => {
        const newFilteredTasks = priority === "All"
            ? tasks
            : tasks.filter(task => task.priority === priority); // dynamically set filtered tasks by priority filter
        setFilteredTasks(newFilteredTasks);
    }, [priority, tasks]);

    const handleEdit = (taskId) => {
        navigate(`/edit/${taskId}`); // send to edit route
    };

    const handleDelete = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId); // remove task by id from array
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks)); // resave to localStorage
    };

    const handleComplete = (taskId) => {
        handleDelete(taskId); // delete task
        let compTasks = parseInt(localStorage.getItem("completedTasks")) || 0;
        localStorage.setItem("completedTasks", (compTasks + 1).toString()); // increment completed tasks
    };

    return (
        <div className="main-page">
            <header className = "page-header">
                <h1>Welcome to BAT Task Management</h1>
            </header>
            <Stats />
            <button id="addTaskBtn" onClick={() => navigate('/add')}>Add Task</button>

            <h2>Task List:</h2>
            <Search tasks={tasks} setFilteredTasks={setFilteredTasks} /> {/* Search Component */}
            <Filter filterPriority={priority} setFilterPriority={setPriority} />

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