import './Styles/Filter.css'; // Optional styling

export default function Filter({ Priority, setFilterPriority }) {

    const handleFilterChange = (e) => {
        setFilterPriority(e.target.value); // sets new filter state
        localStorage.setItem("filterPriority", e.target.value);
    };

    return (
        <div className="filter-container">
            <label>Filter by: </label>
            <select value={Priority} onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>
    );
}
