import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskItem from '../TaskItem';
import Stats from "../Stats";

export default function MainPage() {

    const navigate = useNavigate(); // function alias

    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []); // Initialize tasks w/ localStorage or empty array

    const handleEdit = (taskId) => {
        navigate(`/edit/${taskId}`); // Send to task edit page
    };

    const handleDelete = (taskId) => {
        const newTasks = tasks.filter(task => task.id !== taskId);
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));

    };

    const handleComplete = (taskId) => {
        handleDelete(taskId);

        let compTasks = parseInt(localStorage.getItem("completedTasks"));
        compTasks += 1;
        localStorage.setItem("completedTasks", compTasks.toString());


    }

    return (
        <div>
            <Stats />
            <button id="addTaskBtn" onClick={() => navigate('/add')}>Add Task</button>
            <h2>Task List:</h2>
            <ul id="taskList">
                {tasks.map(task => (
                    <li key={task.id}>
                        <TaskItem task={task} onEdit={handleEdit} onDelete={handleDelete} onComplete={handleComplete} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
