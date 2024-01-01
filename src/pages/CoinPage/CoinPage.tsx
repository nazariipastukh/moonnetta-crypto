import {CoinComponent} from "../../components/CoinComponent";
import {useLocation} from "react-router-dom";

export const CoinPage = () => {
    const {state: coin} = useLocation()

    return (
        <div>
            <CoinComponent coin={coin}/>
        </div>
    );
};