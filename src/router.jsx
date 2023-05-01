import { createBrowserRouter } from 'react-router-dom'

import Home from './pages/Home'
import Layout from './layout/Layout';
import About from './pages/About';
import Portofolio from './pages/Portofolio';
import Skill from './pages/Skill';
import Honor from './pages/Honor';
import Certification from './pages/Certification';

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
            {
                path: "/skill",
                element: <Skill />,
            },
            {
                path: "/honor",
                element: <Honor />,
            },
            {
                path: "/certification",
                element: <Certification />,
            },
        ]
    }
]);

export default router