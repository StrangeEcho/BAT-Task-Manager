import React from 'react';

export default function TaskForm() {
    return (
    <div class="task-form">
        <h2>Add Task</h2>
        <form>
            <label for="taskTitle">Title:</label>
            <input type="text" id="taskTitle" name="taskTitle" required/>
            
            <label for="taskDescription">Description:</label>
            <textarea id="taskDescription" name="taskDescription" rows="4" required></textarea>
            
            <label for="taskDeadline">Deadline:</label>
            <input type="date" id="taskDeadline" name="taskDeadline"/>
            
            <label for="taskPriority">Priority:</label>
            <select id="taskPriority" name="taskPriority">
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            
            <button type="submit">Add Task</button>
        </form>
    </div>
    );
}