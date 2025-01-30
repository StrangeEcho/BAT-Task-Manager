import React from 'react';

export default function TaskItem() {
    return (
    <div class="task-item">
        <h3>Task Title</h3>
        <p>Description of the task</p>
        <p>Category: Misc</p>
        <p>Priority: High</p>
        <button>Edit</button>
        <button>Delete</button>
    </div>
    );
}

