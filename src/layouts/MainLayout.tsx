import {Outlet} from "react-router-dom";

import {Header, SideBar} from "../components";
import styles from './MainLayout.module.css'

export const MainLayout = () => {
    return (
        <section>
            <Header/>

            <section className={styles.mainLayout}>
                <SideBar/>
                <section className={styles.page}>
                    <Outlet/>
                </section>
            </section>
        </section>
    );
};