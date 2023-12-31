import React from 'react';
import { Line } from 'react-chartjs-2';
import { ChartOptions, ChartData, Scriptable, Color } from 'chart.js';

export const CoinComponent: React.FC = () => {
    // Placeholder data
    const data: ChartData<'line'> = {
        labels: [
            new Date(1703948439816),
            new Date(1703948704318),
            new Date(1703949017146),
            new Date(1703949319639),
        ],
        datasets: [
            {
                label: 'Crypto Price',
                data: [42238.09, 42224.82, 42315.63, 42275.10],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    };

    const options: ChartOptions = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'millisecond',
                },
                title: {
                    display: true,
                    text: 'Timestamp',
                },
            },
            y: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'Price',
                },
                beginAtZero: true,
                suggestedMin: 0,
                suggestedMax: 50000,
                grace: '5%',
                ticks: {
                    // Specify additional options for y-axis ticks if needed
                },
            },
            r: {
                type: 'radialLinear',
                animate: true,
                startAngle: 0,
                angleLines: {
                    display: true,
                    color: 'red' as Scriptable<Color, ScriptableScaleContext>,
                    lineWidth: 2,
                    borderDash: [5, 5],
                    borderDashOffset: 2,
                },
                // Specify additional options for radial axis if needed
            },
        },
    };

    return (
        <div>
            <Line data={data} options={options} />
        </div>
    );
};
