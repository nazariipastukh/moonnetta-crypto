import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "../layouts";
import {MainPage, NFTsPage, TrendingPage} from "../pages";

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