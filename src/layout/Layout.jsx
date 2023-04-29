import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="flex">
                <Navbar />
            </div>
            <div className="px-6 lg:px-20 xl:px-36 bg-dark-500">
                <Outlet />
            </div>
        </>
    )
}

export default Layout