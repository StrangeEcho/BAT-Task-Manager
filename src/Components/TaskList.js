import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskItem from './TaskItem';

export default function TaskList() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Task 1", description: "Description 1", category: "Work", priority: "High" },
        { id: 2, title: "Task 2", description: "Description 2", category: "Personal", priority: "Medium" },
        { id: 3, title: "Task 3", description: "Description 3", category: "Misc", priority: "Low" }
    ]);

    const navigate = useNavigate();

    const handleEdit = (taskId) => {
        navigate(`/edit/${taskId}`);
    };

    const handleDelete = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };

    return (
        <div>
            <button id="addTaskBtn" onClick={() => navigate('/add')}>Add Task</button>
            <ul id="taskList">
                {tasks.map(task => (
                    <li key={task.id}>
                        <TaskItem task={task} onEdit={handleEdit} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
