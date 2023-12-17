import {useEffect, useState} from "react";
import {coinsService} from "../../services/coinsService";
import {Coin} from "./Coin";
import {ICoin} from "../../interfaces/coinInterface";

export const MainComponent = () => {
    const [coins, setCoins] = useState<ICoin[]>([])

    useEffect(() => {
        coinsService.getAll().then(({data})=> setCoins(data))
    },[])

    return (
        <div>
            {
                coins.map(coin => <Coin coin={coin} key={coin.id}/>)
            }
        </div>
    );
};