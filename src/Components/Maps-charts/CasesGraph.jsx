import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement } from 'chart.js/auto';

Chart.register(CategoryScale, LinearScale, PointElement);

const CasesGraph = ({ labels, data }) => {
    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Cases',
                data: data,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'day',
                },
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Cases',
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default CasesGraph;
