import React, {FC} from "react";
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
} from 'chart.js';

interface IProps {
    labels: number[]
    chartData: number[]
}

export const ChartComponent: FC<IProps> = ({labels, chartData}) => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Tooltip,
    );

    const data = {
        labels,
        datasets: [
            {
                data: chartData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 3, // Set point radius to 2
                pointBackgroundColor: "rgba(0, 0, 0, 0)",
                pointBorderColor: "rgba(0, 0, 0, 0)"
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                displayColors: false,
                callbacks: {
                    label: function (context: any) {
                        const label = context.parsed.y.toFixed(2);
                        return "$" + label;
                    },
                },
            },
        },
        scales: {
            x: {
                display: false, // Hide x-axis labels
            },
            y: {
                display: true, // You can set this to false to hide y-axis labels if needed
            },
        },
    };

    return (
        <Line data={data} options={options}/>
    )
}