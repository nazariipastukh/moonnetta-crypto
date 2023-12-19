import {Header} from "../components/Header/Header";
import {Outlet} from "react-router-dom";
import {SideBar} from "../components/SideBar/SideBar";
import styles from './MainLayout.module.css'

export const MainLayout = () => {
    return (
        <div>
            <Header/>
            <section className={styles.mainLayout}>
                <SideBar/>
                <Outlet/>
            </section>
        </div>
    );
};