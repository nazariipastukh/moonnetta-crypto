import {useEffect, useState} from "react";
import {Select} from "antd";

import {currencyService} from "../../services";

export const CurrencySelect = () => {
    const [currency, setCurrency] = useState<string[]>([]);
    const [selected, setSelected] = useState('USD');

    useEffect(() => {
        currencyService.getAll().then(({data}) => setCurrency(data));
    }, []);

    const handleChange = (item: string) => {
        setSelected(item);
    };

    const {Option} = Select;

    return (
        <Select
            onChange={handleChange}
            value={selected}
            style={{width: 80}}
            dropdownStyle={{backgroundColor: '#1E1E1E'}}
        >
            {currency.map((item) => (
                <Option key={item} value={item} style={{color: "#A4A4A4", fontWeight: '500'}}>
                    {item.toUpperCase()}
                </Option>
            ))}
        </Select>
    );
};