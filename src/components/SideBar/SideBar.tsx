import {NavLink} from "react-router-dom";

import holdingsIcon from '../../assets/icons/sack-dollar.png'
import nftIcon from '../../assets/icons/dice-d10.png'
import toIcon from '../../assets/icons/equality.png'
import derIcon from '../../assets/icons/humidity.png'
import exchangeIcon from '../../assets/icons/arrows-repeat.png'
import coinIcon from '../../assets/icons/coins.png'
import trendIcon from '../../assets/icons/chart-line-up.png'
import categoriesIcon from '../../assets/icons/brain-circuit.png'

import telegram from '../../assets/socials/telegram.png'
import linkedin from '../../assets/socials/linkedin.png'
import github from '../../assets/socials/github.png'
import whatsapp from '../../assets/socials/whatsapp.png'

import styles from './SideBar.module.css'

export const SideBar = () => {


    return (
        <div className={styles.sideBar}>
            <NavLink className={styles.sideLink} to={'/main'}>
                <img className={styles.icon} src={coinIcon} alt={'icon'}/>
                Cryptocurrencies
            </NavLink>
            <NavLink className={styles.sideLink} to={'/'}>
                <img className={styles.icon} src={categoriesIcon} alt={'icon'}/>
                Categories
            </NavLink>
            <NavLink className={styles.sideLink} to={'/trending'}>
                <img className={styles.icon} src={trendIcon} alt={'icon'}/>
                Trending Coins
            </NavLink>
            <NavLink className={styles.sideLink} to={'/'}>
                <img className={styles.icon} src={exchangeIcon} alt={'icon'}/>
                Exchanges
            </NavLink>
            <NavLink className={styles.sideLink} to={'/'}>
                <img className={styles.icon} src={toIcon} alt={'icon'}/>
                BTC to Currency
            </NavLink>
            <NavLink className={styles.sideLink} to={'/'}>
                <img className={styles.icon} src={derIcon} alt={'icon'}/>
                Derivatives
            </NavLink>
            <NavLink className={styles.sideLink} to={'/nft'}>
                <img className={styles.icon} src={nftIcon} alt={'icon'}/>
                NFT Collections
            </NavLink>
            <NavLink className={styles.sideLink} to={'/'}>
                <img className={styles.icon} src={holdingsIcon} alt={'icon'}/>
                Companies Holdings
            </NavLink>



            <section className={styles.credits}>
                <p>
                    Need Help? <a href={'mailto:nazariipastukh2@gmail.com'}> Contact Us</a>
                </p>
                <section className={styles.socialsWrap}>
                    <a href={'https://github.com/nazariipastukh'} target="_blank" rel="noreferrer">
                        <img className={styles.socials} src={telegram}
                             alt={'telegram'}/>
                    </a>
                    <a href={'https://github.com/nazariipastukh'} target="_blank" rel="noreferrer">
                        <img className={styles.socials} src={linkedin}
                             alt={'linkedin'}/>
                    </a>
                    <a href={'https://github.com/nazariipastukh'} target="_blank" rel="noreferrer">
                        <img className={styles.socials} src={github}
                             alt={'github'}/>
                    </a>
                    <a href={'https://github.com/nazariipastukh'} target="_blank" rel="noreferrer">
                        <img className={styles.socials} src={whatsapp}
                             alt={'whatsapp'}/>
                    </a>
                </section>
                <p className={styles.footer}>
                    © 2023 Data provided by CoinGecko
                </p>
            </section>
        </div>
    );
};