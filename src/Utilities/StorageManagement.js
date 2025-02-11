export function InitializeStorage() {
    const exampleTasks = [
        { id: 1, title: "Example Task", description: "Description 1", category: "Work", priority: "High"},
        { id: 2, title: "Example Task", description: "Description 2", category: "Work", priority: "Low"},
    ];
    localStorage.setItem("tasks", JSON.stringify(exampleTasks));
    localStorage.setItem("completedTasks", "0");
}

