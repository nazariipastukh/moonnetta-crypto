import {CoinComponent} from "../../components/CoinComponent";
import {useLocation} from "react-router-dom";
import styles from './CoinPage.module.css'

export const CoinPage = () => {
    const {state: coin} = useLocation()

    return (
        <section className={styles.page}>
            <CoinComponent coin={coin}/>
        </section>
    );
};