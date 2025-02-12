export function InitializeStorage() {
    const exampleTasks = [
        { id: 1, title: "Example Task", description: "Description 1", category: "Work", priority: "High"},
        { id: 2, title: "Example Task", description: "Description 2", category: "Work", priority: "Low"},
    ];
    localStorage.setItem("tasks", JSON.stringify(exampleTasks)); // add default/example tasks
    localStorage.setItem("completedTasks", "0"); // Keep track of completed tasks for pie chart statistics
    localStorage.setItem("currentTaskIdIndex", exampleTasks.length.toString()); // Allows for almost auto-increment behavior
}
