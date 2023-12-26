import {useState} from "react";

import {MaterialUISwitch} from "../Switch";
import {CurrencySelect} from "../CurrencySelect";
import {SearchComponent} from "../SearchComponent";

import logo from '../../assets/logo.jpg'
import userLogo from '../../assets/icons/circle-user.png'
import styles from './Header.module.css'

export const Header = () => {
    const [checked, setChecked] = useState(true)

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <header>
            <img className={styles.logo} src={logo} alt={'logo'}/>

            <section>
                <SearchComponent/>
            </section>

            <section className={styles.rightPart}>
                <section>
                    <CurrencySelect/>
                </section>

                <section>
                    <MaterialUISwitch checked={checked} onClick={handleCheck} color="primary"/>
                </section>

                <img className={styles.user} src={userLogo} alt={'user'}/>
            </section>
        </header>
    );
};