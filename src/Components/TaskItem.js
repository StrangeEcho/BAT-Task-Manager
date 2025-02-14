import React from 'react';
import './Styles/TaskItem.css';

export default function TaskItem({ task, onEdit, onDelete, onComplete }) {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Category:</strong> {task.category}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <div className="task-actions">
                <button className="edit-btn" onClick={() => onEdit(task.id)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
                <button className="complete-btn" onClick={() => onComplete(task.id)}>Complete</button>
            </div>
        </div>
    );
}
