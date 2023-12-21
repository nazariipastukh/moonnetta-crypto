import styles from './Header.module.css'
import logo from '../../assets/logo.jpg'
import {MaterialUISwitch} from "../Switch/Switch";
import {useState} from "react";
import {CurrencySelect} from "../CurrencySelect/CurrencySelect";
import {SearchComponent} from "../SearchComponent/SearchComponent";

export const Header = () => {
    const [checked, setChecked] = useState(true)

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt={'logo'}/>

            <section>
                <SearchComponent/>
            </section>

            <section className={styles.rightPart}>
                <section className={styles.select}>
                    <p>Currency</p>
                    <CurrencySelect/>
                </section>

                <section className={styles.switcher}>
                    <MaterialUISwitch checked={checked} onClick={handleCheck} color="primary"/>
                </section>
            </section>

        </div>
    );
};