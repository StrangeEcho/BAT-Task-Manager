import React from 'react';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import './Styles/Stats.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Stats() {
    const data = {
        labels: ['Completed Tasks', 'Uncompleted Tasks'],
        datasets: [
            {
                data: [parseInt(localStorage.getItem("completedTasks")), JSON.parse(localStorage.getItem("tasks")).length], // completed task to uncompleted task
                backgroundColor: ['#4CAF50', '#ff4d4d'],
            }
        ]
    };

    return (
        <div className="stats-container">
            <Pie data={data} />
        </div>
    );
}
