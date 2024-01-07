import React, {FC, useEffect, useState} from 'react';
import {chartService} from "../../services/chartService";
import {ChartComponent} from "./ChartComponent";
import {ICoin} from "../../interfaces";
import styles from './Coin.module.css'

interface IProps {
    coin: ICoin
}

export const CoinComponent: FC<IProps> = ({coin}) => {
    const [chartData, setChartData] = useState<number[]>([])
    const [time, setTime] = useState<number[]>([])
    const {id, name} = coin

    useEffect(() => {
        chartService(id).then(({data}) => {
            setChartData(data.prices.slice(0, 289));

            console.log(data.prices)

            const mapTime = data.prices.map((element: number[]) => {
                const date = new Date(element[0]);
                const hours = date.getUTCHours()+2 >= 10 ? date.getUTCHours()+2 : `0${date.getUTCHours()+2}`
                const minutes = date.getUTCMinutes() >= 10 ? date.getUTCMinutes() : `0${date.getUTCMinutes()}`

                return `${hours}:${minutes}`;
            });

            setTime(mapTime.slice(0, 289));
        });
    }, [id]);

    return (
        <section className={styles.wrapper}>
            <section className={styles.chartWrapper}>
                <ChartComponent chartData={chartData} labels={time}/>
            </section>
            <section className={styles.info}>
                {name}
            </section>
        </section>
    );
}
