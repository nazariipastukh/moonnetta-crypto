import React, {FC, useEffect, useState} from 'react';
import {chartService} from "../../services/chartService";
import {ChartComponent} from "./ChartComponent";
import {ICoin} from "../../interfaces";

interface IProps {
    coin: ICoin
}

export const CoinComponent: FC<IProps> = ({coin}) => {
    const [chartData, setChartData] = useState<number[]>([])
    const [time, setTime] = useState<number[]>([])
    const {id} = coin

    useEffect(() => {
        chartService(id).then(({data}) => {
            setChartData(data.prices.slice(0, 30));

            const mapTime = data.prices.map((element: number[]) => {
                const date = new Date(element[0]);
                const hours = date.getUTCHours() >= 10 ? date.getUTCHours() : `0${date.getUTCHours()}`
                const minutes = date.getUTCMinutes() >= 10 ? date.getUTCMinutes() : `0${date.getUTCMinutes()}`

                return `${hours}:${minutes}`;
            });

            setTime(mapTime.slice(0, 30));
        });
    }, [id]);

    return (
        <ChartComponent chartData={chartData} labels={time}/>
    );
}
