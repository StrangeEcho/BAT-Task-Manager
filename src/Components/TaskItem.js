import React from 'react';

export default function TaskItem({ task, onEdit, onDelete, onComplete }) {
    return (
        <div className="task-item">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Category: {task.category}</p>
            <p>Priority: {task.priority}</p>
            <button onClick={() => onEdit(task.id)}>Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onComplete(task.id)}>Complete</button>
        </div>
    );
}
