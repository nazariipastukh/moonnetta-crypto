import {useEffect, useState} from "react";
import {coinsService} from "../../services/coinsService";
import {Coin} from "./ListElement/Coin";
import {ICoin} from "../../interfaces/coinInterface";
import styles from './List.module.css'

export const CoinsListComponent = () => {
    const [coins, setCoins] = useState<ICoin[]>([])

    useEffect(() => {
        coinsService.getAll().then(({data})=> setCoins(data))
    },[])

    return (
        <div className={styles.listWrapper}>
            {
                coins.map(coin => <Coin coin={coin} key={coin.id}/>)
            }
        </div>
    );
};