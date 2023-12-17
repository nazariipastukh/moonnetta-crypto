import {ICoin} from "../../interfaces/coinInterface";
import {FC} from "react";

interface IProps {
    coin: ICoin
}

export const Coin: FC<IProps> = ({coin}) => {
    const {id, symbol, name} = coin

    return (
        <div>
            <p>{id}</p>
            <h3>{name}</h3>
            <h4>{symbol}</h4>
            <br/>
            <br/>
        </div>
    );
};