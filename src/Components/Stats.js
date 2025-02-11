import React from 'react';
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

export default function Stats() {
    const data = {
        labels: ['Completed Tasks', 'Non-Completed Tasks'],
        datasets: [
            {
                data: [parseInt(localStorage.getItem("completedTasks")), JSON.parse(localStorage.getItem("tasks")).length],
                backgroundColor: ['rgb(54, 162, 235)', 'rgb(255, 99, 132)'],
            }
        ]
    };

    return (
        <div style={{position: 'absolute', top: '20%', right: '30%', width: '600px', height: 'auto'}}>
            <Pie data={data} />
        </div>
    );
}
