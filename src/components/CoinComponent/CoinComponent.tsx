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
            setChartData(data.prices);

            const mapTime = data.prices.map((element: number[]) => element[0]);
            setTime(mapTime);
        });
    }, [id]);

    return (
        <ChartComponent chartData={chartData} labels={time}/>
    );
}
