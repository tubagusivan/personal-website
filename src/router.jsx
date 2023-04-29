import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './layout/Layout';
import About from './pages/About';
import Portofolio from './pages/Portofolio';

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/portofolio",
                element: <Portofolio />,
            },
        ]
    }
]);

export default router