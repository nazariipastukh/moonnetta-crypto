import * as React from 'react';
import {useEffect, useState} from "react";
import {currencyService} from "../../services/currencyService";
import {Select} from "antd";
import styles from './Select.module.css'
const {Option} = Select;

export const CurrencySelect = () => {
    const [currency, setCurrency] = useState<string[]>([]);
    const [selected, setSelected] = useState('USD');

    useEffect(() => {
        currencyService.getAll().then(({data}) => setCurrency(data));
    }, []);

    const handleChange = (item: string) => {
        setSelected(item);
    };

    return (
        <div className={styles.newWrapper}>
            <div className={styles.omgWrapper}>
                <div className={styles.wrapper}>
                    <div className={styles.innerWrapper}>
                        <Select
                            className={styles.select}
                            onChange={handleChange}
                            value={selected}
                            style={{width: 80}}
                            dropdownStyle={{backgroundColor: '#1E1E1E'}}
                        >
                            {currency.map((item) => (
                                <Option key={item} value={item} style={{color: "#A4A4A4", fontWeight: '500' }}>
                                    {item.toUpperCase()}
                                </Option>
                            ))}
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    );
};