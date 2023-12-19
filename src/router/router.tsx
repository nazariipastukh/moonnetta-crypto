import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "../pages/MainPage/MainPage";
import {MainLayout} from "../layouts/MainLayout";
import {TrendingPage} from "../pages/Trending/TrendingPage";
import {NFTsPage} from "../pages/NFTsPage/NFTsPage";

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