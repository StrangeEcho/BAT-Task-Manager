import React, { useState } from "react";
import "./Styles/Search.css";

export default function Search({ tasks, setFilteredTasks }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value === "") {
      setFilteredTasks(tasks); // Reset to full task list if search is empty
    } else {
      setFilteredTasks(
        tasks.filter((task) => task.title.toLowerCase().includes(value))
      );
    }
  };

  return (
    <div className="search-container">
      <input
        className="search-input"
        type="text"
        placeholder="Search tasks..."
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
}
