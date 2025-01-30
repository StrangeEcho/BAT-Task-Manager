import React from 'react';
import TaskItem from './TaskItem';

export default function TaskList() {
    return (
        <div class="task-list-container">
        <button id="addTaskBtn">Add Task</button>
        <ul id="taskList">
            <li><TaskItem/></li>
            <li><TaskItem/></li>
            <li><TaskItem/></li>
        </ul>
        </div>
    )
}