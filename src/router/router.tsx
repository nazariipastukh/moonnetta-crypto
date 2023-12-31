import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {MainPage, NFTsPage, TrendingPage} from "../pages";
import {CoinPage} from "../pages/CoinPage";

const router = createBrowserRouter([
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <Navigate to={'/main'}/>
            },
            {
                path: 'coin/:id',
                element: <CoinPage/>
            },
            {
                path: '/main',
                element: <MainPage/>
            },
            {
                path: '/trending',
                element: <TrendingPage/>
            },
            {
                path: '/nft',
                element: <NFTsPage/>
            }
        ]
    }
])

export {
    router
}