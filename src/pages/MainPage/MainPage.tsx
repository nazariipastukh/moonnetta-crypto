import {CoinsListComponent} from "../../components";
import styles from './MainPage.module.css'

export const MainPage = () => {
    return (
        <section className={styles.page}>
            <CoinsListComponent/>
        </section>
    );
};