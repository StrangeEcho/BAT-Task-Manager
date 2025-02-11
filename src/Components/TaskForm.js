import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';

export default function TaskForm() {
    const navigate = useNavigate();
    
    const [task, setTask] = useState({
        title: "",
        description: "",
        category: "",
        priority: ""
    });

    const handleChange = (e) => {
        // Code here for updating the TaskList
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updated Task:", task);
        navigate('/'); 
    };

    return (
        <div>
            <h2>Add/Edit Task</h2>
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

                <button type="submit">Save</button>
                <button type="button" onClick={() => navigate('/')}>Cancel</button>
            </form>
        </div>
    );
}
