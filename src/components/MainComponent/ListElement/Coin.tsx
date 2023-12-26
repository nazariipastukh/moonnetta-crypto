import {FC} from "react";

import {ICoin} from "../../../interfaces";
import styles from './Coin.module.css'

interface IProps {
    coin: ICoin
}

export const Coin: FC<IProps> = ({coin}) => {
    const {
        id,
        symbol,
        name,
        image,
        current_price,
        market_cap,
        market_cap_rank,
        total_volume,
        price_change_percentage_24h,
        circulating_supply,
    } = coin

    return (
        <section className={styles.coinWrapper}>
            <section className={styles.naming}>
                <p className={styles.rank}>
                    {market_cap_rank}
                </p>
                <img src={image} alt={name}/>
                <p>
                    {name}&nbsp;
                </p>
                <p className={styles.symbol}>
                    {symbol.toUpperCase()}
                </p>
            </section>

            <section className={styles.info}>
                <p>
                    {current_price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })}
                </p>
                <p className={price_change_percentage_24h < 0 ? styles.redPrice : styles.greenPrice}>
                    {price_change_percentage_24h}
                </p>
                <p className={styles.market}>
                    {market_cap.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })}
                </p>
                <p className={styles.volume}>
                    {total_volume.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD'
                    })}
                </p>
                <p className={styles.supply}>
                    {circulating_supply.toLocaleString('en-US')} {symbol.toUpperCase()}
                </p>
            </section>
        </section>
    );
};