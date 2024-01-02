import React, {FC} from "react";
import {Line} from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement
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
    );

    const data = {
        labels,
        datasets: [
            {
                data: chartData,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };

    return (
        <Line data={data}/>
    )
}