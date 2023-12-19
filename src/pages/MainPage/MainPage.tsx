import styles from './MainPage.module.css'
import {CoinsListComponent} from "../../components/MainComponent/CoinsListComponent";

export const MainPage = () => {
    return (
        <div className={styles.page}>
            <CoinsListComponent/>
        </div>
    );
};