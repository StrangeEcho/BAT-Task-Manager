import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/TaskForm.css';

export default function TaskForm() {
    const navigate = useNavigate();
    const { taskId } = useParams();
    const pageTitle = taskId ? "Edit A Task" : "Add A Task";

    const [task, setTask] = useState({
        id: null,
        title: '',
        description: '',
        category: '',
        priority: 'Medium',
    });

    useEffect(() => {
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
            tasks = tasks.map(t => t.id === parseInt(taskId) ? { ...task } : t);
        } else {
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
        <div className="task-form-container">
            <h2>{pageTitle}</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={task.title} onChange={handleChange} required />

                <label>Description:</label>
                <textarea name="description" value={task.description} onChange={handleChange} required />

                <label>Category:</label>
                <input type="text" name="category" value={task.category} onChange={handleChange} required />

                <label>Priority:</label>
                <select name="priority" value={task.priority} onChange={handleChange}>
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                </select>

                <div className="form-actions">
                    <button className="submit-btn" type="submit">Save</button>
                    <button type="button" className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
                </div>
            </form>
        </div>
    );
}
