import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';

export default function TaskForm() {
    const navigate = useNavigate();

    const  { taskId } = useParams();
    const pageTitle = taskId ? "Edit A Task" : "Add A Task";


    const handleSubmit = (e) => {
        e.preventDefault();

        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const newTaskIdx = parseInt(localStorage.getItem("currentTaskIdIndex")) + 1;

        const submittedTask = { // Create new task object from submitted values
            id: newTaskIdx,
            title: e.target.title.value,
            description: e.target.description.value,
            category: e.target.category.value,
            priority: e.target.priority.value,
        }

        tasks.push(submittedTask); // add submitted task to localStorage 'tasks'

        // Update localStorage values
        localStorage.setItem("tasks", JSON.stringify(tasks));
        localStorage.setItem("currentTaskIdIndex", newTaskIdx.toString());

        navigate('/'); 
    };

    return (
        <div>
            <h2>{pageTitle}</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" placeholder="Enter Task Title" required />

                <label>Description:</label>
                <textarea name="description" placeholder="Enter Task Description" required />

                <label>Category:</label>
                <input type="text" name="category" placeholder="Enter Task Category" required />

                <label>Priority:</label>
                <select name="priority">
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
