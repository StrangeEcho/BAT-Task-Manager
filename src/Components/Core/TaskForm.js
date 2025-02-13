import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function TaskForm() {
    const navigate = useNavigate();
    const { taskId } = useParams(); // if not null, forum is in edit mode
    const pageTitle = taskId ? "Edit A Task" : "Add A Task";

    const [task, setTask] = useState({ // empty for new tasks, will be populated if forum is in edit mode
        id: null,
        title: '',
        description: '',
        category: '',
        priority: 'Medium',
    });

    useEffect(() => { // called only when taskId is changed
        if (taskId) {
            const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            const existingTask = tasks.find(t => t.id === parseInt(taskId));
            if (existingTask) {
                setTask(existingTask);
            }
        }
    }, [taskId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

        if (taskId) {
            // Editing an existing task
            tasks = tasks.map(t => t.id === parseInt(taskId) ? { ...task } : t);
        } else {
            // Adding a new task
            const newTaskIdx = parseInt(localStorage.getItem("currentTaskIdIndex") || "0") + 1;
            const newTask = { ...task, id: newTaskIdx };
            tasks.push(newTask);
            localStorage.setItem("currentTaskIdIndex", newTaskIdx.toString());
        }

        localStorage.setItem("tasks", JSON.stringify(tasks));
        navigate('/');
    };

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <h2>{pageTitle}</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={task.title} onChange={handleChange} placeholder="Enter Task Title" required />

                <label>Description:</label>
                <textarea name="description" value={task.description} onChange={handleChange} placeholder="Enter Task Description" required />

                <label>Category:</label>
                <input type="text" name="category" value={task.category} onChange={handleChange} placeholder="Enter Task Category" required />

                <label>Priority:</label>
                <select name="priority" value={task.priority} onChange={handleChange}>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <button type="submit">Save</button>
                <button type="button" onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    );
}
