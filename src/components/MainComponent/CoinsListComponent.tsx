import {useEffect, useState} from "react";

import {coinsService} from "../../services";
import {Coin} from "./ListElement";
import {ICoin} from "../../interfaces";
import styles from './List.module.css'

export const CoinsListComponent = () => {
    const [coins, setCoins] = useState<ICoin[]>([])

    useEffect(() => {
        coinsService.getAll().then(({data}) => setCoins(data))
    }, [])

    return (
        <section className={styles.listWrapper}>
            <section className={styles.listHeader}>
                <h5>#</h5>
                <h5>Name</h5>

                <section className={styles.marketValues}>
                    <h5>Price</h5>
                    <h5 className={styles.percentage}>24h %</h5>
                    <h5 className={styles.market}>Market Cap</h5>
                    <h5 className={styles.volume}>Volume(24h)</h5>
                    <h5 className={styles.supply}>Circulating Supply</h5>
                </section>
            </section>
            {
                coins.map(coin => <Coin coin={coin} key={coin.id}/>)
            }
        </section>
    );
};