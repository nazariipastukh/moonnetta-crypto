import styles from './Header.module.css'
import logo from '../../assets/logo.jpg'
import {MaterialUISwitch} from "../Switch/Switch";
import {useState} from "react";

export const Header = () => {
    const [checked, setChecked] = useState(false)

    const handleCheck = () => {
        setChecked(!checked)
    }

    return (
        <div className={styles.header}>
            <img className={styles.logo} src={logo} alt={'logo'}/>

            <section className={styles.switcher}>
                <MaterialUISwitch checked={checked} onClick={handleCheck} color="primary"/>
            </section>
        </div>
    );
};